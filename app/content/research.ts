import type { MajorResearchProject, ResearchArea, ResearchCollaborator } from "./types";
import { assertUniqueIds } from "./guards";

export const researchAreas: ResearchArea[] = [
  {
    id: "recommender-systems",
    number: "01",
    title: "Recommender Systems",
    image: "/media/research/research-rec.jpg",
    description: "We develop recommender systems that learn from user interactions and evolving preferences to deliver accurate, efficient, and personalized recommendations across domains and modalities.",
    topics: ["Personalization", "User Simulation", "LLM-based Ranking", "Continual Recommendation", "Multimodal Learning"],
    publicationTopic: "recommendation",
  },
  {
    id: "information-retrieval",
    number: "02",
    title: "Information Retrieval",
    image: "/media/research/research-ir.png",
    description: "We develop search and retrieval methods that connect language models with multimodal and structured knowledge to find relevant information in scientific and specialized domains.",
    topics: ["Agentic Search", "Graph RAG", "Ontology Construction", "Scientific Retrieval", "RAG & Grounding", "Multimodal Learning"],
    publicationTopic: "search-retrieval",
  },
  {
    id: "data-web-mining",
    number: "03",
    title: "Data & Web Mining",
    image: "/media/research/research-data.png",
    description: "We analyze large-scale user logs and multimodal, temporal data to uncover patterns and knowledge structures that support retrieval, recommendation, forecasting, and decision-making.",
    topics: ["Web-scale Data Mining", "User Behavior Mining", "Multimodal Learning", "Temporal Data Mining", "Knowledge Structures"],
    publicationTopic: "knowledge-mining",
  },
];

const allMajorResearchProjects: MajorResearchProject[] = [
  { id: "iitp-ai-top-tier-emerging-researcher", title: "AI최고급 신진 연구자 지원 사업", partner: "IITP", isPublic: false },
  { id: "scientific-ai-hierarchical-knowledge-graph-rag", title: "Scientific AI를 위한 과학 도메인 특화 계층적 Knowledge Graph 기반 RAG 기술", partner: "Samsung Electronics", isPublic: false },
  { id: "private-resource-retrieval", title: "비공개 저자원 환경을 위한 개념 체계 구조화 기반 검색 및 지속 업데이트 기술", partner: "NRF" },
  { id: "multimodal-knowledge-retrieval", title: "멀티모달 지식 구조화 기반 검색 고도화 기술", partner: "KT" },
  { id: "real-world-recommendation-feature-selection", title: "실세계 추천 시스템을 위한 feature selection 기술", partner: "NAVER" },
  { id: "large-scale-recommendation-efficiency", title: "거대 추천 시스템 경량화 및 편향 (bias) 제거 기술", partner: "Microsoft Research Asia" },
];

export const majorResearchProjects = allMajorResearchProjects.filter(
  (project) => project.isPublic !== false,
);

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
