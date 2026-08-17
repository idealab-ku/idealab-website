import { PageHero, SiteFrame } from "../components";
import { publications2026 } from "../data";

const imageFor = (index: number) => `/media/pub-${String(index + 1).padStart(2, "0")}.${index === 0 ? "jpg" : "png"}`;

export default function Publications() {
  return <SiteFrame>
    <PageHero index="03" eyebrow="Publications" title="Publications" intro="Our work in recommender systems, information retrieval, data mining, and machine learning." />
    <section className="publication-list shell">
      <div className="publication-year"><h2>2026</h2><span>{publications2026.length} publications</span></div>
      {publications2026.map((paper, index) => <article className="paper-row" key={paper.title}>
        <div className="paper-image"><img src={imageFor(index)} alt="" /></div>
        <div className="paper-copy"><p className="paper-venue">{paper.venue} 2026</p><h3>{paper.title}</h3><p className="paper-authors">{paper.authors}</p>{paper.note && <p className="paper-note">{paper.note}</p>}</div>
      </article>)}
    </section>
  </SiteFrame>;
}
