import { Fragment } from "react";
import { PageHero, SiteFrame } from "../../components";
import { domesticPublications } from "../../content/publication-supplements";
import { pageMetadata } from "../../seo";

export const metadata = pageMetadata({ title: "Domestic Conference Publications", description: "IDEA Lab publications presented at Korean domestic research conferences.", path: "/publication/domestic-conference" });

const domesticYears = [...new Set(domesticPublications.map((publication) => publication.year))]
  .sort((a, b) => b - a);

export default function DomesticConference() {
  return <SiteFrame>
    <PageHero
      index=""
      eyebrow="Domestic Conference"
      title="Domestic Conference"
      intro="Publications presented at domestic conferences."
    />
    <section className="simple-records shell">
      {domesticYears.map((year) => {
        const publicationsForYear = domesticPublications.filter((publication) => publication.year === year);
        return <Fragment key={year}>
          <div className="publication-year">
            <h2>{year}</h2>
            <span>{publicationsForYear.length} {publicationsForYear.length === 1 ? "publication" : "publications"}</span>
          </div>
          {publicationsForYear.map((publication) => <article key={publication.title}>
            <span>{publication.venue}</span>
            <h2>{publication.link
              ? <a href={publication.link} target="_blank" rel="noreferrer">{publication.title} <span className="link-arrow" aria-hidden="true">↗︎</span></a>
              : publication.title}
            </h2>
            <p>{publication.authors}</p>
            {publication.recognition && <small className="record-recognition">{publication.recognition}</small>}
          </article>)}
        </Fragment>;
      })}
    </section>
  </SiteFrame>;
}
