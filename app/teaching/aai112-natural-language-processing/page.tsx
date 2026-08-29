import { CoursePage } from "../../course-page";
import { courseDetails } from "../../content/course-details";
import { pageMetadata } from "../../seo";

export const metadata = pageMetadata({ title: "AAI112 Natural Language Processing", description: "Natural Language Processing course offered at Korea University by IDEA Lab.", path: "/teaching/aai112-natural-language-processing" });

export default function Page() {
  return <CoursePage course={courseDetails.aai112} />;
}
