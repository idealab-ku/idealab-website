import { TeachingReviewPage } from "../../teaching-review-page";
import { studentReviewArchives } from "../../content/student-reviews";
import { pageMetadata } from "../../seo";

export const metadata = pageMetadata({ title: "COSE361 Student Reviews — Spring 2026", description: "Student feedback and reviews for the Spring 2026 Artificial Intelligence course at Korea University.", path: "/teaching/cose361_spring_2026" });

export default function Page() {
  return <TeachingReviewPage {...studentReviewArchives.cose361Spring2026} />;
}
