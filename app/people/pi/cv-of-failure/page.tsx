import { PageHero, SiteFrame } from "../../../components";
import { failureGrants, failurePapers } from "../../../content/cv-of-failure";
import { pageMetadata } from "../../../seo";

export const metadata = pageMetadata({
  title: "SeongKu Kang — CV of Failure",
  description: "SeongKu Kang's record of paper, grant, fellowship, and research project rejections.",
  path: "/people/pi/cv-of-failure",
});

export default function CvOfFailure() {
  return <SiteFrame>
    <PageHero index="" eyebrow="SeongKu Kang" title="CV of Failure" intro="" />
    <div className="failure-page shell">
      <div className="failure-intro">
        <p>This is a record of the failures I have experienced along the way.</p>
        <p>I am deeply grateful to all my colleagues who have gone through these failures with me and shared the experience.</p>
      </div>
      <section className="failure-section" aria-labelledby="paper-rejections">
        <h2 id="paper-rejections">PAPER REJECTIONS</h2>
        <ol className="failure-papers">
          {failurePapers.map((paper) => <li key={paper.title}>
            <h3>{paper.title}</h3>
            <ul className="failure-history">
              {paper.history.map((event, index) => <li key={`${index}-${event}`}>{event}</li>)}
            </ul>
          </li>)}
        </ol>
      </section>
      <section className="failure-section" aria-labelledby="grant-rejections">
        <h2 id="grant-rejections">GRANT, FELLOWSHIP, AND RESEARCH PROJECT REJECTIONS</h2>
        <ul className="failure-grants">
          {failureGrants.map((grant) => <li key={grant}>{grant}</li>)}
        </ul>
      </section>
    </div>
  </SiteFrame>;
}
