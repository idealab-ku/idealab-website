import { PageHero, SiteFrame } from "./components";
import type { StudentReviewArchive } from "./content/student-reviews";

export function TeachingReviewPage({ code, term, reviews }: StudentReviewArchive) {
  return <SiteFrame>
    <PageHero index="" eyebrow={`${code} · ${term}`} title="Student review" intro="An archive of the course feedback published on the original IDEA Lab site." />
    <section className="teaching-review shell">
      <div className="course-section-heading teaching-review-heading">
        <h2>{code} · {term}</h2>
        <span>{reviews.length} responses</span>
      </div>
      <ol className="student-review-list">
        {reviews.map((review, index) => <li className="student-review" key={`${code}-${term}-${index}`}><p>{review}</p></li>)}
      </ol>
    </section>
  </SiteFrame>;
}
