import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outputRoot = path.join(projectRoot, "out");
const port = Number(process.env.PORT ?? 3001);
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".map": "application/json",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
};

async function resolveRequest(requestPath) {
  const decoded = decodeURIComponent(requestPath).replace(/^\/+/, "");
  const candidate = path.resolve(outputRoot, decoded || "index.html");
  const relative = path.relative(outputRoot, candidate);
  if (relative.startsWith("..") || path.isAbsolute(relative)) return null;
  try {
    return (await stat(candidate)).isDirectory() ? path.join(candidate, "index.html") : candidate;
  } catch {
    return path.join(candidate, "index.html");
  }
}

createServer(async (request, response) => {
  const url = new URL(request.url ?? "/", `http://${request.headers.host ?? "localhost"}`);
  let target = await resolveRequest(url.pathname);
  try {
    if (!target) throw new Error("Not found");
    await stat(target);
  } catch {
    target = path.join(outputRoot, "404.html");
    response.statusCode = 404;
  }
  response.setHeader("Content-Type", contentTypes[path.extname(target).toLowerCase()] ?? "application/octet-stream");
  createReadStream(target).pipe(response);
}).listen(port, () => console.log(`Static preview: http://localhost:${port}`));
