import { PageHero, SiteFrame } from "../components";
import { courses, courseYears } from "../content/teaching";
import { sitePath } from "../site-path";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({ title: "Teaching", description: "Artificial intelligence, big data analysis, text mining, and natural language processing courses taught by IDEA Lab at Korea University.", path: "/teaching" });

export default function Teaching() {
  return <SiteFrame>
    <PageHero index="04" eyebrow="Teaching" title="Teaching" intro="Courses at the intersection of artificial intelligence, natural language, and data-intensive systems." />
    <section className="course-list shell">
      {courseYears.map((year) => {
        const yearCourses = courses.filter((course) => course.year === year);
        return <section className="teaching-year" key={year}>
          <div className="publication-year"><h2>{year}</h2><span>{yearCourses.length} {yearCourses.length === 1 ? "course" : "courses"}</span></div>
          <div className="teaching-courses">
            {yearCourses.map((course) => <article key={course.id}>
              <span className="course-semester">{course.semester}</span>
              <div><span className="course-code">{course.code}</span><h3><a href={sitePath(course.href)}>{course.title}<span aria-hidden="true"> →</span></a></h3></div>
            </article>)}
          </div>
        </section>;
      })}
    </section>
  </SiteFrame>;
}
