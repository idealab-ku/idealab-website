import { PageHero, SiteFrame } from "./components";
import type { Tutorial } from "./content/tutorials";
import { sitePath } from "./site-path";

export function TutorialPage({ tutorial }: { tutorial: Tutorial }) {
  return <SiteFrame>
    <PageHero index="" eyebrow={`Tutorial · ${tutorial.venue}`} title={tutorial.title} intro={`${tutorial.venue} · ${tutorial.date}`} />
    <div className="tutorial-detail shell">
      <section className="tutorial-summary">
        <div><span className="eyebrow">{tutorial.venue}</span><h2>{tutorial.title}</h2><strong>{tutorial.date}</strong><p>{tutorial.duration}</p></div>
        <img src={sitePath(tutorial.heroImage)} alt={`${tutorial.venue} tutorial`} />
      </section>

      <section className="tutorial-section tutorial-abstract">
        <h2>Abstract</h2>
        <div>{tutorial.abstract.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <aside><strong>Expected audience</strong><p>{tutorial.audience}</p></aside>
      </section>

      <section className="tutorial-section">
        <div className="tutorial-section-title"><h2>Outline and Timeline</h2><span>{tutorial.duration}</span></div>
        <div className="tutorial-outline">{tutorial.outline.map((part, index) => <article key={part.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div><h3>{part.title}</h3><strong>{part.duration}</strong><ul>{part.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul></div>
          {part.slides && <a href={part.slides} target="_blank" rel="noreferrer">Slides <span aria-hidden="true">↗</span></a>}
        </article>)}</div>
      </section>

      <section className="tutorial-section">
        <h2>Speakers</h2>
        <div className="tutorial-speakers">{tutorial.speakers.map((speaker) => <article key={speaker.name}>
          {speaker.image ? <img src={sitePath(speaker.image)} alt={speaker.name} /> : <div className="speaker-placeholder" aria-hidden="true">{speaker.name.split(" ").map((part) => part[0]).join("")}</div>}
          <div><h3>{speaker.website ? <a href={speaker.website} target="_blank" rel="noreferrer">{speaker.name} <span aria-hidden="true">↗</span></a> : speaker.name}</h3>{speaker.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </article>)}</div>
      </section>

      <section className="tutorial-section tutorial-references">
        <div className="tutorial-section-title"><h2>References</h2><span>{tutorial.references.length} works</span></div>
        <p>This list includes the prior works covered in this tutorial.</p>
        <ol>{tutorial.references.map((reference) => <li key={reference}>{reference}</li>)}</ol>
      </section>
    </div>
  </SiteFrame>;
}
