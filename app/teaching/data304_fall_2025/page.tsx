import { TeachingReviewPage } from "../../teaching-review-page";
import { studentReviewArchives } from "../../content/student-reviews";
import { pageMetadata } from "../../seo";

export const metadata = pageMetadata({ title: "DATA304 Student Reviews — Fall 2025", description: "Student feedback and reviews for the Fall 2025 Big Data Analysis course at Korea University.", path: "/teaching/data304_fall_2025" });

export default function Page() {
  return <TeachingReviewPage {...studentReviewArchives.data304Fall2025} />;
}
