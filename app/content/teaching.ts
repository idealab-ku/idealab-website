import type { Course } from "./types";
import { assertUniqueIds } from "./guards";

export const courses: Course[] = [
  { id: "2026-spring-cose361", year: 2026, semester: "Spring", code: "COSE361", title: "Artificial Intelligence", href: "/teaching/cose361-artificial-intelligence" },
  { id: "2026-spring-aai112", year: 2026, semester: "Spring", code: "AAI112", title: "Natural Language Processing", href: "/teaching/aai112-natural-language-processing" },
  { id: "2025-fall-data304", year: 2025, semester: "Fall", code: "DATA304", title: "Big Data Analysis", href: "/teaching/data304-bigdata-analysis" },
  { id: "2025-fall-aai114", year: 2025, semester: "Fall", code: "AAI114", title: "Text Mining", href: "/teaching/aai114-text-mining" },
  { id: "2025-spring-cose361", year: 2025, semester: "Spring", code: "COSE361", title: "Artificial Intelligence", href: "/teaching/cose361-artificial-intelligence" },
];

assertUniqueIds("courses", courses);

export const courseYears = [...new Set(courses.map((course) => course.year))].sort((a, b) => b - a);
