import { PageHero, SiteFrame } from "../components";
import { PublicationBrowser } from "./publication-browser";
import { sitePath } from "../site-path";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({ title: "Publications", description: "Research publications from IDEA Lab in recommender systems, information retrieval, data mining, NLP, and large language models.", path: "/publications" });

export default function Publications() {
  return <SiteFrame>
    <PageHero index="03" eyebrow="Publications" title="Publications" intro="Our work in recommender systems, information retrieval, data mining, and machine learning." />
    <nav className="section-nav shell" aria-label="Publication sections"><a href={sitePath("/publication/preprint")}>Preprints</a><a href={sitePath("/publication/patents")}>Patents</a><a href={sitePath("/publication/domestic-conference")}>Domestic conference</a></nav>
    <PublicationBrowser />
  </SiteFrame>;
}
