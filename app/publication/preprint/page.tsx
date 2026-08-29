import { PageHero, SiteFrame } from "../../components";
import { preprints } from "../../content/publication-supplements";
import { pageMetadata } from "../../seo";

export const metadata = pageMetadata({ title: "Preprints", description: "Recent IDEA Lab research papers currently available as preprints.", path: "/publication/preprint" });

export default function Preprints(){return <SiteFrame><PageHero index="" eyebrow="Preprints" title="Preprints" intro="Work currently available as preprints."/><section className="simple-records shell">{preprints.map((item)=><article key={item.title}><span>Preprint</span><h2><a href={item.link} target="_blank" rel="noreferrer">{item.title} <span className="link-arrow" aria-hidden="true">↗︎</span></a></h2><p>{item.authors}</p><small>{item.note}</small></article>)}</section></SiteFrame>}
