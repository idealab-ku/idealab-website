import { PageHero, SiteFrame } from "../../components";
import { domesticPublications } from "../../content/publication-supplements";

export default function DomesticConference(){return <SiteFrame><PageHero index="" eyebrow="Domestic Conference" title="Domestic Conference" intro="Publications presented at domestic conferences."/><section className="simple-records shell"><div className="publication-year"><h2>2026</h2><span>{domesticPublications.length} publications</span></div>{domesticPublications.map(([title,venue,authors])=><article key={title}><span>{venue}</span><h2>{title}</h2><p>{authors}</p></article>)}</section></SiteFrame>}
