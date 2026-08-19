import { TeachingReviewPage } from "../../teaching-review-page";
import { studentReviewArchives } from "../../content/student-reviews";

export default function Page() {
  return <TeachingReviewPage {...studentReviewArchives.data304Fall2025} />;
}
