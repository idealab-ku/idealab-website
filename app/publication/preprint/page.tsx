import { PageHero, SiteFrame } from "../../components";
import { preprints } from "../../content/publication-supplements";

export default function Preprints(){return <SiteFrame><PageHero index="" eyebrow="Preprints" title="Preprints" intro="Work currently available as preprints."/><section className="simple-records shell">{preprints.map((item)=><article key={item.title}><span>Preprint</span><h2><a href={item.link} target="_blank" rel="noreferrer">{item.title} ↗</a></h2><p>{item.authors}</p><small>{item.note}</small></article>)}</section></SiteFrame>}
