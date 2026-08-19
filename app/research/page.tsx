import { PageHero, SiteFrame } from "../components";
import { majorResearchProjects, researchAreas, researchCollaborators } from "../content/research";
import { sitePath } from "../site-path";

export default function Research() {
  return <SiteFrame>
    <PageHero index="01" eyebrow="Research" title="Research" intro="We work across recommendation, retrieval, and data mining." />

    <section className="research-areas-simple shell" aria-labelledby="research-areas-heading">
      <div className="research-section-intro">
        <h2 id="research-areas-heading">Research areas</h2>
        <p>We research personalized intelligent systems that integrate multimodal knowledge sources and update effectively over time.</p>
      </div>
      <div className="research-area-columns">
        {researchAreas.map((area) => <article className="research-area-summary" id={area.id} key={area.id}>
          <span className="research-area-number">{area.number}</span>
          <h3>{area.title}</h3>
          <p>{area.description}</p>
          <ul>{area.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
          <a className="research-area-link" href={sitePath(`/publications?topics=${area.publicationTopic}#publication-filter`)} aria-label={`View publications related to ${area.title}`}>Related publications <span aria-hidden="true">→</span></a>
        </article>)}
      </div>
    </section>

    <section className="research-projects" aria-labelledby="major-projects-heading">
      <div className="shell">
        <div className="research-projects-heading">
          <h2 id="major-projects-heading">Major R&amp;D Projects</h2>
          <p>We are always open to a wide range of collaborations.</p>
        </div>
        <ul className="research-project-list">
          {majorResearchProjects.map((project) => <li className="research-project-item" key={project.id}>
            <h3>{project.title}</h3>
            <strong>{project.partner}</strong>
          </li>)}
        </ul>
      </div>
    </section>

    <section className="research-collaborators shell" aria-labelledby="collaborators-heading">
      <div className="research-section-intro">
        <h2 id="collaborators-heading">Academic and Industry Collaborators</h2>
      </div>
      <div className="collaborator-logo-grid">
        {researchCollaborators.map((collaborator) => <div className="collaborator-logo" key={collaborator.id}>
          <img src={sitePath(collaborator.image)} alt={collaborator.name} />
        </div>)}
      </div>
    </section>
  </SiteFrame>;
}
