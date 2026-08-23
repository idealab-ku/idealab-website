export type PersonGroup = "principal-investigator" | "student" | "undergraduate-intern";
export type PersonStatus = "current" | "alumni";

export interface Person {
  id: string;
  name: string;
  koreanName?: string;
  group: PersonGroup;
  status: PersonStatus;
  order: number;
  role: string;
  degree?: string;
  email?: string;
  website?: string;
  image: string;
  affiliation?: string[];
  interests?: string[];
}

export interface ConvergenceStudent {
  id: string;
  name: string;
  organization: string;
  topic: string;
  order: number;
}

export interface NewsItem {
  id: string;
  category: string;
  venue?: string;
  venueLabel?: string;
  year: number;
  title: string;
  image?: string;
  href?: string;
  order: number;
}

export type PublicationTopic =
  | "ai-for-science"
  | "llms"
  | "recommendation"
  | "search-retrieval"
  | "knowledge-mining"
  | "rag"
  | "continual-learning"
  | "knowledge-distillation"
  | "efficiency-scalability"
  | "bias-robustness";

export interface Publication {
  id: string;
  year: number;
  order: number;
  venue: string;
  title: string;
  authors: string;
  summary: string;
  thumbnail: string;
  topics: PublicationTopic[];
  link?: string;
  page?: string;
  recognition?: {
    label: string;
    href?: string;
  };
}

export interface ResearchArea {
  id: string;
  number: string;
  title: string;
  image: string;
  description: string;
  topics: string[];
  publicationTopic: PublicationTopic;
}

export interface MajorResearchProject {
  id: string;
  title: string;
  partner: string;
  period?: string;
  isPublic?: boolean;
}

export interface ResearchCollaborator {
  id: string;
  name: string;
  image: string;
}

export interface Course {
  id: string;
  year: number;
  semester: "Spring" | "Fall";
  code: string;
  title: string;
  href: string;
}

export interface LabLifeEvent {
  id: string;
  title: string;
  image: string;
}

export interface FeaturedEvent {
  id: string;
  category: "tutorial" | "workshop";
  date: string;
  dateTime: string;
  title: string;
  subtitle: string;
  href: string;
  image: string;
}

export interface FaqItem {
  id: string;
  question: string;
  content: Array<
    | { type: "paragraph"; text: string }
    | { type: "list"; items: string[] }
  >;
  link?: {
    label: string;
    href: string;
  };
}
