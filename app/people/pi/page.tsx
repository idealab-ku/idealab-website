import { PageHero, SiteFrame } from "../../components";
import { principalInvestigator } from "../../content/people";
import { piProfileSections } from "../../content/pi-profile";
import { sitePath } from "../../site-path";

export default function Pi() {
  return <SiteFrame>
    <PageHero index="" eyebrow="People" title="Principal Investigator" intro="SeongKu Kang · Korea University" />
    <section className="profile-detail shell">
      <aside>
        <img src={sitePath(principalInvestigator.image)} alt={principalInvestigator.name} />
        <h2>{principalInvestigator.name} <span>{principalInvestigator.koreanName}</span></h2>
        <p>Assistant Professor<br />Computer Science &amp; Engineering<br />College of Informatics, Korea University</p>
        <div className="profile-links">
          {principalInvestigator.email && <a href={`mailto:${principalInvestigator.email}`}>Email</a>}
          <a href={sitePath("/people/schedule")}>Schedule</a>
          <a href="https://korea-ac-kr.zoom.us/j/6612575958?pwd=EB5n5pKMihQ7OT8oYeJLrrf1H1N2hf.1" target="_blank" rel="noreferrer">Zoom</a>
          <a href="https://seongku-kang.github.io/data/CV_SeongKuKang.pdf" target="_blank" rel="noreferrer">CV</a>
          <a href="https://scholar.google.com/citations?user=fB0K-fMAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar</a>
        </div>
      </aside>
      <div className="profile-sections">
        {piProfileSections.map((section) => <article className="profile-section" key={section.title}>
          <h2>{section.title}</h2>
          {section.groups.map((group, groupIndex) => <section className="profile-subsection" key={group.heading ?? groupIndex}>
            {group.heading && <h3>{group.heading}</h3>}
            <ul>{group.entries.map((entry) => <li className={entry.period ? undefined : "profile-entry-full"} key={`${entry.period ?? ""}-${entry.text}`}>
              {entry.period && <span>{entry.period}</span>}
              {entry.href ? <a href={sitePath(entry.href)}>{entry.text} <span aria-hidden="true">→</span></a> : <p>{entry.text}</p>}
            </li>)}</ul>
          </section>)}
        </article>)}
      </div>
    </section>
  </SiteFrame>;
}
