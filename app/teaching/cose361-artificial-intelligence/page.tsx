import { CoursePage } from "../../course-page"; import { courseDetails } from "../../content/course-details";
import { pageMetadata } from "../../seo";
export const metadata = pageMetadata({ title: "COSE361 Artificial Intelligence", description: "Artificial Intelligence course at Korea University covering machine learning, search, Markov decision processes, and probabilistic reasoning.", path: "/teaching/cose361-artificial-intelligence" });
export default function Page(){return <CoursePage course={courseDetails.cose361}/>}
