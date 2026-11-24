import type { MajorResearchProject, ResearchArea, ResearchCollaborator } from "./types";
import { assertUniqueIds } from "./guards";

export const researchAreas: ResearchArea[] = [
  {
    id: "data-web-mining",
    number: "01",
    title: "Knowledge Structuring & Evolution",
    image: "/media/research/research-data.png",
    description: "We transform heterogeneous data into structured knowledge and develop methods to continually update and optimize it for downstream tasks.",
    topics: ["Knowledge Graphs", "Ontology Construction", "Multimodal Knowledge", "Continual Knowledge Updates", "Task-aware Knowledge Optimization"],
    publicationTopic: "knowledge-mining",
  },
  {
    id: "information-retrieval",
    number: "02",
    title: "Information Retrieval",
    image: "/media/research/research-ir.png",
    description: "We develop search and retrieval methods that connect language models with structured and multimodal knowledge to find relevant evidence and support grounded reasoning.",
    topics: ["Agentic Search", "Graph RAG", "Scientific Retrieval", "Multimodal Retrieval", "RAG & Grounding"],
    publicationTopic: "search-retrieval",
  },
  {
    id: "recommender-systems",
    number: "03",
    title: "Recommender Systems",
    image: "/media/research/research-rec.jpg",
    description: "We develop recommender systems that learn from user interactions and evolving preferences to deliver accurate, efficient, and personalized recommendations.",
    topics: ["Personalization", "User Simulation", "LLM-based Ranking", "Continual Recommendation", "Multimodal Recommendation"],
    publicationTopic: "recommendation",
  },
];

const allMajorResearchProjects: MajorResearchProject[] = [
  { id: "iitp-ai-top-tier-emerging-researcher", title: "AI Star Fellowship (AI최고급신진연구자지원)", partner: "IITP", period: "2026–2031", role: "participant", status: "ongoing" },
  { id: "scientific-ai-hierarchical-knowledge-graph-rag", title: "Scientific AI를 위한 과학 도메인 특화 계층적 Knowledge Graph 기반 RAG 기술", partner: "Samsung Electronics", period: "2026–2027", role: "lead", status: "ongoing" },
  { id: "private-resource-retrieval", title: "비공개 저자원 환경을 위한 개념 체계 구조화 기반 검색 및 지속 업데이트 기술", partner: "NRF", period: "2026–2029", role: "lead", status: "ongoing" },
  { id: "multimodal-knowledge-retrieval", title: "멀티모달 지식 구조화 기반 검색 고도화 기술", partner: "KT", period: "2025–2026", role: "lead", status: "completed" },
  { id: "real-world-recommendation-feature-selection", title: "실세계 추천 시스템을 위한 feature selection 기술", partner: "NAVER", period: "2023–2024", role: "lead", status: "completed" },
  { id: "large-scale-recommendation-efficiency", title: "거대 추천 시스템 경량화 및 편향 (bias) 제거 기술", partner: "Microsoft Research Asia", period: "2023–2024", role: "participant", status: "completed" },
];

export const majorResearchProjects = allMajorResearchProjects.filter(
  (project) => project.isPublic !== false,
);
export const ongoingMajorResearchProjects = majorResearchProjects.filter((project) => project.status === "ongoing");
export const completedMajorResearchProjects = majorResearchProjects.filter((project) => project.status === "completed");

export const researchCollaborators: ResearchCollaborator[] = [
  { id: "postech", name: "POSTECH", image: "/media/collaborators/postech.jpg" },
  { id: "uiuc", name: "University of Illinois Urbana-Champaign", image: "/media/collaborators/uiuc.jpg" },
  { id: "kaist", name: "KAIST", image: "/media/collaborators/kaist.jpg" },
  { id: "yonsei", name: "Yonsei University", image: "/media/collaborators/yonsei.png" },
  { id: "microsoft-research", name: "Microsoft Research", image: "/media/collaborators/microsoft-research.jpg" },
  { id: "naver", name: "NAVER", image: "/media/collaborators/naver.jpg" },
  { id: "texas-am", name: "Texas A&M University", image: "/media/collaborators/texas-am.png" },
  { id: "kt", name: "KT", image: "/media/collaborators/kt.png" },
  { id: "samsung-electronics", name: "Samsung Electronics", image: "/media/collaborators/samsung-electronics.svg" },
  { id: "mbzuai", name: "Mohamed bin Zayed University of Artificial Intelligence", image: "/media/collaborators/mbzuai.png" },
];

assertUniqueIds("research areas", researchAreas);
assertUniqueIds("major research projects", allMajorResearchProjects);
assertUniqueIds("research collaborators", researchCollaborators);
