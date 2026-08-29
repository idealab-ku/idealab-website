import { CoursePage } from "../../course-page"; import { courseDetails } from "../../content/course-details";
import { pageMetadata } from "../../seo";
export const metadata = pageMetadata({ title: "DATA304 Big Data Analysis", description: "Big Data Analysis course at Korea University covering text representation, machine learning, search, and recommendation.", path: "/teaching/data304-bigdata-analysis" });
export default function Page(){return <CoursePage course={courseDetails.data304}/>}
