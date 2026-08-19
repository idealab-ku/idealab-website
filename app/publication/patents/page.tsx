import { PageHero, SiteFrame } from "../../components";
import { patents } from "../../content/publication-supplements";

export default function Patents(){return <SiteFrame><PageHero index="" eyebrow="Patents" title="Patents" intro="Registered and filed intellectual property."/><section className="simple-records shell">{patents.map(([title,meta,authors])=><article key={title}><span>{meta}</span><h2>{title}</h2><p>{authors}</p></article>)}</section></SiteFrame>}
