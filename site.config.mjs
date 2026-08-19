export const publicRoutes = [
  "/",
  "/research",
  "/people",
  "/people/pi",
  "/people/schedule",
  "/publications",
  "/publication",
  "/publication/preprint",
  "/publication/patents",
  "/publication/domestic-conference",
  "/teaching",
  "/teaching/cose361-artificial-intelligence",
  "/teaching/data304-bigdata-analysis",
  "/teaching/aai114-text-mining",
  "/teaching/aai112-natural-language-processing",
  "/teaching/cose361_spring_2025",
  "/teaching/cose361_spring_2026",
  "/teaching/data304_fall_2025",
  "/events",
  "/events/joint-workshop",
  "/research/dasfaa26-tutorial-continual-recommender-systems",
  "/research/cikm25-tutorial-continual-recommender-systems",
  "/research/tutorial-continual-recommender-systems",
  "/events/dasfaa26-tutorial-continual-recommender-systems",
  "/events/cikm25-tutorial-continual-recommender-systems",
  "/lab-life",
  "/news",
  "/join",
];

export function githubPagesBasePath(environment = process.env) {
  if (environment.PAGES_BASE_PATH !== undefined) {
    const configuredPath = environment.PAGES_BASE_PATH.trim();
    if (!configuredPath || configuredPath === "/") return "";
    return `/${configuredPath.replace(/^\/+|\/+$/g, "")}`;
  }

  const repositoryName = environment.GITHUB_REPOSITORY?.split("/")[1];
  const hasCustomDomain = Boolean(environment.SITE_CUSTOM_DOMAIN);
  const isUserOrOrganizationSite = repositoryName?.endsWith(".github.io") ?? false;

  return environment.GITHUB_ACTIONS === "true" && repositoryName && !hasCustomDomain && !isUserOrOrganizationSite
    ? `/${repositoryName}`
    : "";
}
