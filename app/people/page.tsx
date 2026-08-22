import { PageHero, SiteFrame } from "../components";
import { alumni, convergenceStudents, currentInterns, currentStudents, principalInvestigator } from "../content/people";
import { sitePath } from "../site-path";

export default function People() {
  return <SiteFrame>
    <PageHero index="02" eyebrow="People" title="People" intro="Meet the researchers and students of IDEA Lab at Korea University." />
    <section className="people-block shell">
      <h2>Principal Investigator</h2>
      <article className="pi-card">
        <img src={sitePath(principalInvestigator.image)} alt={principalInvestigator.name} />
        <div className="pi-card-copy">
          <h3>{principalInvestigator.name} {principalInvestigator.koreanName && <span>{principalInvestigator.koreanName}</span>}</h3>
          <p className="role">{principalInvestigator.role}</p>
          <p>{principalInvestigator.affiliation?.map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</p>
          <div className="pi-links">
            <a href={sitePath("/people/pi")}>Full profile →</a>
            <a href={sitePath("/people/schedule")}>Schedule →</a>
            {principalInvestigator.email && <a href={`mailto:${principalInvestigator.email}`}>Email <span className="link-arrow" aria-hidden="true">↗︎</span></a>}
            <a href="https://scholar.google.com/citations?user=fB0K-fMAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar <span className="link-arrow" aria-hidden="true">↗︎</span></a>
          </div>
        </div>
      </article>
    </section>
    <section className="people-block shell">
      <div className="block-heading"><h2>Students</h2><span>{currentStudents.length} members</span></div>
      <div className="member-grid">{currentStudents.map((person) => <article className="member-card" key={person.id}>
        <img src={sitePath(person.image)} alt={person.name} />
        <div className="member-card-copy">
          <h3 className="member-name">{person.name}{person.website && <a className="member-website-arrow" href={person.website} target="_blank" rel="noreferrer" aria-label={`${person.name} website`}>↗︎</a>}</h3>
          <p className="role">{person.degree}</p>
          <div className="member-links">
            {person.email && <a href={`mailto:${person.email}`}>{person.email}</a>}
          </div>
        </div>
      </article>)}</div>
    </section>
    <section className="people-block shell interns-block">
      <div className="block-heading"><h2>Undergraduate Research Interns</h2><span>{currentInterns.length} members</span></div>
      <div className="member-grid intern-grid">{currentInterns.map((person) => <article className="member-card" key={person.id}>
        <img src={sitePath(person.image)} alt={person.name} />
        <div className="member-card-copy">
          <h3>{person.name}</h3>
        </div>
      </article>)}</div>
    </section>
    <section className="people-block shell convergence-block">
      <div className="block-heading"><h2>SW·AI융합대학원 지도 학생</h2><span>{convergenceStudents.length} students</span></div>
      <div className="convergence-grid">{convergenceStudents.map((person) => <article className="convergence-card" key={person.id}>
        <div className="convergence-card-heading">
          <h3>{person.name}</h3>
          <span>{person.organization}</span>
        </div>
        <p>{person.topic}</p>
      </article>)}</div>
    </section>
    <section className="people-block shell alumni-block">
      <div className="block-heading"><h2>Alumni</h2><span>{alumni.length} member</span></div>
      <div className="member-grid alumni-grid">{alumni.map((person) => <article className="member-card" key={person.id}>
        <img src={sitePath(person.image)} alt={person.name} />
        <div className="member-card-copy">
          <h3 className="member-name">{person.name}{person.website && <a className="member-website-arrow" href={person.website} target="_blank" rel="noreferrer" aria-label={`${person.name} website`}>↗︎</a>}</h3>
          <p className="role">{person.role}</p>
          {person.degree && <p>{person.degree}</p>}
        </div>
      </article>)}</div>
    </section>
  </SiteFrame>;
}
