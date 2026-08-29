import { CoursePage } from "../../course-page"; import { courseDetails } from "../../content/course-details";
import { pageMetadata } from "../../seo";
export const metadata = pageMetadata({ title: "AAI114 Text Mining", description: "Text Mining course at Korea University covering text representation, transformers, classification, domain adaptation, and neural retrieval.", path: "/teaching/aai114-text-mining" });
export default function Page(){return <CoursePage course={courseDetails.aai114}/>}
