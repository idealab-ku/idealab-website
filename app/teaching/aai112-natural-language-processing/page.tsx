import { CoursePage } from "../../course-page";
import { courseDetails } from "../../content/course-details";

export default function Page() {
  return <CoursePage course={courseDetails.aai112} />;
}
