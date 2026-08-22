import type { NewsItem } from "./types";
import { assertUniqueIds } from "./guards";
import { publications } from "./publications";

const publicationsById = new Map(publications.map((publication) => [publication.id, publication]));

const paper = (id: string, year: number, order: number, venue: string, title: string): NewsItem => {
  const publication = publicationsById.get(id);

  if (!publication) {
    throw new Error(`News item references an unknown publication: ${id}`);
  }

  return {
    id,
    year,
    order,
    category: "Accepted Paper",
    venue,
    title,
    image: publication.thumbnail,
    href: `/publications#${id}`,
  };
};

export const newsItems: NewsItem[] = [
  paper("2026-cikm-environment-conditioned", 2026, 1, "CIKM", "Beyond Observed Auxiliary Relations: Environment-Conditioned Modeling for Multi-Behavior Recommendation"),
  paper("2026-cikm-scord", 2026, 2, "CIKM", "SCoRD: Semantic-Assisted Continual Retriever-Reranker Distillation for LLM-Based Recommendation"),
  paper("2026-cikm-item-profiles", 2026, 3, "CIKM", "Profiling What Matters: Context-Aware Item Profiles from Large-Scale Metadata for LLM Recommenders"),
  paper("2026-cikm-spectral-decoupling", 2026, 4, "CIKM", "Dynamic Spectral Decoupling for Time-Series Forecasting"),
  paper("2026-cikm-tracer", 2026, 5, "CIKM", "TRACER: Balancing Stability-Plasticity-Cognitivity Trilemma for LLM Enhanced Continual Recommendation"),
  paper("2026-colm-reward-factorization", 2026, 6, "COLM", "Uncertainty-Aware Variational Reward Factorization via Probabilistic Preference Bases for LLM Personalization"),
  paper("2026-tist-academic-concept-index", 2026, 7, "TIST", "Improving Scientific Document Retrieval with Academic Concept Index"),
  { id:"2026-seoktop-big-data", year:2026, order:8, category:"Award", title:"Prof. Kang received the Seoktop Lecture Award (Big Data Analytics) from Korea University.", href:"/people/pi" },
  paper("2026-kdd-corank", 2026, 9, "KDD", "CoRank: LLM-Based Compact Reranking with Document Features for Scientific Retrieval"),
  { id:"2026-data-intelligence-talk", year:2026, order:10, category:"Talk", title:"Invited talk: “Knowledge-Structured Retrieval for Scientific Literature”, Data Intelligence Workshop, 2026." },
  paper("2026-sigir-sprint", 2026, 11, "SIGIR", "SPRINT: Scalable and Predictive Intent Refinement for LLM-Enhanced Session-based Recommendation"),
  paper("2026-sigir-filling-gaps", 2026, 12, "SIGIR", "Filling the Gaps: Selective Knowledge Augmentation for LLM Recommenders"),
  paper("2026-sigir-flame", 2026, 13, "SIGIR", "FLAME: Condensing Ensemble Diversity into a Single Network for Efficient Sequential Recommendation"),
  paper("2026-sigir-mviger", 2026, 14, "SIGIR", "MVIGER: Multi-View Variational Integration of Complementary Knowledge for Generative Recommender"),
  paper("2026-acl-explainable-retrieval", 2026, 15, "ACL Findings", "Why These Documents? Explainable Generative Retrieval with Hierarchical Category Paths"),
  { id:"2026-postech-talk", year:2026, order:16, category:"Talk", title:"Invited talk: “Knowledge-Structured Retrieval for Scientific Literature”, CSE/GSAI Seminar, POSTECH, 2026." },
  paper("2026-iclr-continual-lora", 2026, 17, "ICLR", "Continual Low-Rank Adapters for LLM-based Generative Recommender Systems"),
  { id:"2026-dasfaa-tutorial", year:2026, order:18, category:"Tutorial", venue:"DASFAA", title:"Continual Recommender Systems: A Focus on LLMs and Evolving Trends", image:"/media/publications/2026/2026-dasfaa-tutorial.png", href:"/research/dasfaa26-tutorial-continual-recommender-systems" },
  paper("2026-wsdm-data-streams", 2026, 19, "WSDM", "Capturing User Interests from Data Streams for Continual Sequential Recommendation"),
  paper("2026-www-pairsem", 2026, 20, "WWW", "PairSem: LLM-Guided Pairwise Semantic Matching for Scientific Retrieval"),
  paper("2026-kdd-cream", 2026, 21, "KDD", "CREAM: Continual Retrieval on Dynamic Streaming Corpora with Adaptive Soft Memory"),
  paper("2026-tkde-bpl", 2026, 22, "TKDE", "BPL: Bias-adaptive Preference Distillation Learning for Recommender System"),
  { id:"2026-professional-service", year:2026, order:23, category:"Service", title:"Prof. Kang was invited as an Area Chair of KDD and the EMNLP System Demonstration Track, and to program committees including AAAI, SIGIR, NeurIPS, CIKM, ICDM, SIGIR-AP, and ACM AI Summit.", href:"/people/pi" },

  { id:"2025-ai-seoultech-scholarship", year:2025, order:1, category:"Scholarship", title:"Seunghan was selected as a recipient of the AI SeoulTech Scholarship!" },
  { id:"2025-seoktop-ai", year:2025, order:2, category:"Award", title:"Prof. Kang received the Seoktop Lecture Award (Artificial Intelligence) from Korea University.", href:"/people/pi" },
  { id:"2025-cikm-phd-mentor", year:2025, order:3, category:"Service", title:"Prof. Kang was invited as a PhD Mentor for the CIKM 2025 PhD Symposium.", href:"/people/pi" },
  { id:"2025-wsdm-best-paper", year:2025, order:4, category:"Award", title:"Our scientific document retrieval paper was selected as one of the Best Papers of WSDM 2025 and invited to ACM TIST.", href:"/publications#2025-wsdm-concept-coverage" },
  paper("2025-emnlp-topic-coverage", 2025, 5, "EMNLP", "Topic Coverage-based Demonstration Retrieval for In-Context Learning"),
  paper("2025-emnlp-scientific-ranking", 2025, 6, "EMNLP Findings", "Scientific Paper Retrieval with LLM-Guided Semantic-Based Ranking"),
  { id:"2025-cikm-tutorial-news", year:2025, order:7, category:"Tutorial", venue:"CIKM", title:"Continual Recommender Systems", image:"/media/publications/2025/2025-cikm-tutorial.png", href:"/research/cikm25-tutorial-continual-recommender-systems" },
  paper("2025-colm-deepretrieval", 2025, 8, "COLM", "DeepRetrieval: Hacking Real Search Engines and Retrievers with Large Language Models via Reinforcement Learning"),
  paper("2025-colm-imagine-relevance", 2025, 9, "COLM", "Imagine All The Relevance: Scenario-Profiled Indexing with Knowledge Expansion for Dense Retrieval"),
  paper("2025-kdd-label-noise", 2025, 10, "KDD", "Delving into Instance-Dependent Label Noise in Graph Data: A Comprehensive Study and Benchmark"),
  paper("2025-sigir-plasticity", 2025, 11, "SIGIR", "Embracing Plasticity: Balancing Stability and Plasticity in Continual Recommender Systems"),
  paper("2025-sigir-preference-reasoning", 2025, 12, "SIGIR", "Personalized Preference Reasoning with Large Language Models for Accurate and Explainable Recommendation"),
  paper("2025-www-uncertainty", 2025, 13, "WWW", "Uncertainty Quantification and Decomposition for LLM-based Recommendation"),
  paper("2025-www-chain-of-factors", 2025, 14, "WWW", "Chain-of-Factors Paper-Reviewer Matching"),
  paper("2025-wsdm-concept-coverage", 2025, 15, "WSDM", "Improving Scientific Document Retrieval with Concept Coverage-based Query Set Generation"),
  paper("2025-wsdm-entity-alignment", 2025, 16, "WSDM", "Unsupervised Robust Cross-Lingual Entity Alignment via Neighbor Triple Matching with Entity and Relation Texts"),
  { id:"2025-professional-service", year:2025, order:17, category:"Service", title:"Prof. Kang was invited to program committees including KDD, WWW, AAAI, SIGIR, SIGIR-AP, ACL, AACL-SRW, CVPR, and DASFAA.", href:"/people/pi" },
];

assertUniqueIds("news", newsItems);

export const recentNews = [...newsItems].sort((a, b) => b.year - a.year || a.order - b.order);
export const newsYears = [...new Set(newsItems.map((item) => item.year))].sort((a, b) => b - a);
