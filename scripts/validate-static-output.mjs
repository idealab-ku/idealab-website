import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { githubPagesBasePath, publicRoutes } from "../site.config.mjs";

const projectRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outputRoot = path.join(projectRoot, "out");
const basePath = githubPagesBasePath();

function outputFileForRoute(route) {
  return route === "/"
    ? path.join(outputRoot, "index.html")
    : path.join(outputRoot, route.slice(1), "index.html");
}

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? filesUnder(target) : target;
  }));
  return files.flat();
}

function stripDeploymentPrefix(urlPath) {
  if (!basePath) return urlPath;
  if (urlPath === basePath) return "/";
  return urlPath.startsWith(`${basePath}/`) ? urlPath.slice(basePath.length) : null;
}

function localTarget(urlValue) {
  if (!urlValue || /^(?:https?:|mailto:|tel:|data:|javascript:|#)/i.test(urlValue)) return null;
  const parsed = new URL(urlValue, "https://static.example");
  const strippedPath = stripDeploymentPrefix(parsed.pathname);
  if (strippedPath === null) return { error: `path does not include deployment prefix ${basePath}` };
  const decodedPath = decodeURIComponent(strippedPath);
  const relativePath = decodedPath.replace(/^\/+/, "");
  const hasExtension = path.posix.basename(decodedPath).includes(".");
  const target = decodedPath === "/"
    ? path.join(outputRoot, "index.html")
    : hasExtension
      ? path.join(outputRoot, relativePath)
      : path.join(outputRoot, relativePath, "index.html");
  return { target, hash: parsed.hash ? decodeURIComponent(parsed.hash.slice(1)) : "" };
}

await access(outputRoot);
await access(path.join(outputRoot, "robots.txt"));
await access(path.join(outputRoot, "sitemap.xml"));

for (const route of publicRoutes) await access(outputFileForRoute(route));
await access(path.join(outputRoot, "404.html"));

const htmlFiles = (await filesUnder(outputRoot)).filter((file) => file.endsWith(".html"));
const errors = [];

for (const htmlFile of htmlFiles) {
  const html = await readFile(htmlFile, "utf8");
  const references = [...html.matchAll(/\b(?:href|src)="([^"]+)"/g)].map((match) => match[1]);

  for (const reference of references) {
    const local = localTarget(reference);
    if (!local) continue;
    if (local.error) {
      errors.push(`${path.relative(outputRoot, htmlFile)}: ${reference} — ${local.error}`);
      continue;
    }

    try {
      await access(local.target);
    } catch {
      errors.push(`${path.relative(outputRoot, htmlFile)}: missing ${reference}`);
      continue;
    }

    if (local.hash && local.target.endsWith(".html")) {
      const targetHtml = await readFile(local.target, "utf8");
      const escapedHash = local.hash.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      if (!new RegExp(`\\bid=["']${escapedHash}["']`).test(targetHtml)) {
        errors.push(`${path.relative(outputRoot, htmlFile)}: missing anchor ${reference}`);
      }
    }
  }
}

if (errors.length) {
  console.error(`Static output validation failed with ${errors.length} error(s):\n${errors.join("\n")}`);
  process.exitCode = 1;
} else {
  console.log(`Validated ${publicRoutes.length} routes and ${htmlFiles.length} HTML files${basePath ? ` under ${basePath}` : ""}.`);
}
