import { PageHero, SiteFrame } from "./components";
import type { CourseDetail } from "./content/course-details";
import { sitePath } from "./site-path";

function LinkList({ links }: { links: NonNullable<CourseDetail["offerings"][number]["links"]> }) {
  return <span className="course-links">{links.map((link) => {
    const external = link.href.startsWith("http");
    return <a href={sitePath(link.href)} key={link.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>{link.label}<span className="link-arrow" aria-hidden="true"> ↗︎</span></a>;
  })}</span>;
}

export function CoursePage({ course }: { course: CourseDetail }) {
  return <SiteFrame>
    <PageHero index="" eyebrow={`${course.code} · Teaching`} title={course.title} intro="Course information" />
    <section className="course-detail shell">
      <article className="course-overview">
        <h2>What is this course about?</h2>
        {course.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {course.availabilityNote && <p className="course-availability">{course.availabilityNote}</p>}
      </article>

      {(course.resources?.length || course.prerequisites?.length || course.grading?.length) && <div className="course-information-grid">
        {course.resources?.length ? <section><h2>Resources</h2><p>There is no required textbook for this class. Slides are mostly self-contained. These books may be used for further understanding.</p><ul>{course.resources.map((item) => <li key={item}>{item}</li>)}</ul></section> : null}
        {course.prerequisites?.length ? <section><h2>Prerequisites</h2><ul>{course.prerequisites.map((item) => <li key={item}>{item}</li>)}</ul></section> : null}
        {course.grading?.length ? <section><h2>Grading</h2><ul>{course.grading.map((item) => <li key={item}>{item}</li>)}</ul>{course.attendanceNote && <p className="course-note">{course.attendanceNote}</p>}</section> : null}
      </div>}

      {course.embeds?.map((embed) => <section className="course-embed" key={embed.src}>
        <div className="course-section-heading"><h2>{embed.title}</h2><a href={embed.source} target="_blank" rel="noreferrer">Open in Google <span className="link-arrow" aria-hidden="true">↗︎</span></a></div>
        <iframe src={embed.src} title={`${course.code} ${embed.title}`} loading="lazy" allowFullScreen />
      </section>)}

      <section className="course-offerings">
        <h2>Previous offerings</h2>
        <div>{course.offerings.map((offering) => <article key={offering.term}>
          <strong>{offering.term}</strong>
          <p>{offering.note}{offering.links?.length ? <LinkList links={offering.links} /> : null}</p>
        </article>)}</div>
      </section>
    </section>
  </SiteFrame>;
}
