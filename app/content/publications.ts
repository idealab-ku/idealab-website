import type { Publication, PublicationTopic } from "./types";
import { assertUniqueIds } from "./guards";

export const publicationTopics: { id: PublicationTopic; label: string }[] = [
  { id: "ai-for-science", label: "AI for Science" },
  { id: "llms", label: "LLMs" },
  { id: "recommendation", label: "Recommendation" },
  { id: "search-retrieval", label: "Search & Retrieval" },
  { id: "knowledge-mining", label: "Data & Knowledge Mining" },
  { id: "rag", label: "RAG & Grounding" },
  { id: "continual-learning", label: "Continual Learning" },
  { id: "knowledge-distillation", label: "Knowledge Distillation" },
  { id: "efficiency-scalability", label: "Efficiency & Scalability" },
  { id: "bias-robustness", label: "Bias & Robustness" },
];

const V = {
  CIKM: "ACM International Conference on Information and Knowledge Management (CIKM)",
  COLM: "Conference on Language Modeling (COLM)",
  TIST: "ACM Transactions on Intelligent Systems and Technology (TIST) (SCIE, Q1: IF Top 3.2%)",
  KDD: "ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD)",
  SIGIR: "ACM SIGIR Conference on Research and Development in Information Retrieval (SIGIR)",
  ACL: "Annual Meeting of the Association for Computational Linguistics (ACL)",
  ICLR: "International Conference on Learning Representations (ICLR)",
  DASFAA: "International Conference on Database Systems for Advanced Applications (DASFAA)",
  WSDM: "ACM International Conference on Web Search and Data Mining (WSDM)",
  WWW: "ACM The Web Conference (WWW)",
  TKDE: "IEEE Transactions on Knowledge and Data Engineering (TKDE) (SCIE, Q1: IF Top 1.8%)",
  EMNLP: "Conference on Empirical Methods in Natural Language Processing (EMNLP)",
  CVPR: "Conference on Computer Vision and Pattern Recognition (CVPR)",
  TORS: "ACM Transactions on Recommender Systems (TORS)",
  AAAI: "AAAI Conference on Artificial Intelligence (AAAI)",
} as const;

const image = (year: string, id: string, extension = "png") =>
  `/media/publications/${year}/${id}.${extension}`;

const publicationRecords: Omit<Publication, "topics">[] = [
  { id:"2026-emnlp-hobit", year:2026, order:1, venue:`${V.EMNLP}, Demonstration`, title:"hoBIT: A Profile-Aware Retrieval-Augmented Chatbot for University Academic Advising", authors:"Kim Yoonseo, Seongmin Lee, Joongheon Kim, SeongKu Kang", summary:"We transform hoBIT into a profile-aware RAG system that progressively acquires query-relevant profile attributes.", thumbnail:image("2026", "2026-emnlp-hobit"), page:"https://idealab-ku.github.io/hobit-emnlp/" },
  { id:"2026-emnlp-pearl", year:2026, order:2, venue:`${V.EMNLP}, Main`, title:"PEARL: Front-Loading Relational Chains for Multi-Hop Table Retrieval", authors:"Subeen Ho, Hyeongu Kang, SeongKu Kang, Susik Yoon", summary:"We augment table retrieval with multi-hop join-path queries and vertically partitioned corpus units.", thumbnail:image("2026", "2026-emnlp-pearl") },
  { id:"2026-cikm-environment-conditioned", year:2026, order:3, venue:V.CIKM, title:"Beyond Observed Auxiliary Relations: Environment-Conditioned Modeling for Multi-Behavior Recommendation", authors:"Seunghan Lee, Hyunsik Yoo, Jian Kang, Susik Yoon, SeongKu Kang", summary:"We refine unreliable auxiliary signals via environment-conditioned modeling.", thumbnail:image("2026", "2026-cikm-environment-conditioned", "jpg"), link:"https://arxiv.org/pdf/2608.22920" },
  { id:"2026-cikm-scord", year:2026, order:4, venue:V.CIKM, title:"SCoRD: Semantic-Assisted Continual Retriever-Reranker Distillation for LLM-Based Recommendation", authors:"Seunghyun Baek*, Gyuseok Lee*, Seunghan Lee, Wonbin Kweon, Dong Wang, SeongKu Kang", summary:"We propose a continual update framework for retriever-reranker pipelines.", thumbnail:image("2026", "2026-cikm-scord"), link:"https://arxiv.org/pdf/2608.19998" },
  { id:"2026-cikm-item-profiles", year:2026, order:5, venue:V.CIKM, title:"Profiling What Matters: Context-Aware Item Profiles from Large-Scale Metadata for LLM Recommenders", authors:"Dojun Hwang, Seunghan Lee, Cheonyoung Park, Sara Yu, SeongKu Kang", summary:"We structure vast item knowledge and selectively feed item information into LLM rerankers.", thumbnail:image("2026", "2026-cikm-item-profiles"), link:"https://arxiv.org/pdf/2608.20801" },
  { id:"2026-cikm-spectral-decoupling", year:2026, order:6, venue:V.CIKM, title:"Dynamic Spectral Decoupling for Time-Series Forecasting", authors:"Jaehyung Lee, Seungha Hong, Seongje Lee, Suyeon Kim, SeongKu Kang†, Hwanjo Yu†", summary:"We separate frequency components based on instance-wise energy concentration.", thumbnail:image("2026", "2026-cikm-spectral-decoupling") },
  { id:"2026-cikm-tracer", year:2026, order:7, venue:V.CIKM, title:"TRACER: Balancing Stability-Plasticity-Cognitivity Trilemma for LLM Enhanced Continual Recommendation", authors:"Woojoo Kim, Hyunsik Yoo, Junyoung Kim, Jaehyung Lim, SeongKu Kang†, Hwanjo Yu†", summary:"We identify the stability-plasticity-cognitivity trilemma of LLM rankers.", thumbnail:image("2026", "2026-cikm-tracer") },
  { id:"2026-colm-reward-factorization", year:2026, order:8, venue:V.COLM, title:"Uncertainty-Aware Variational Reward Factorization via Probabilistic Preference Bases for LLM Personalization", authors:"Gyuseok Lee, Wonbin Kweon, Zhenrui Yue, SeongKu Kang, Jiawei Han, Dong Wang", summary:"We represent user preference as a variational distribution.", thumbnail:image("2026", "2026-colm-reward-factorization"), link:"https://arxiv.org/pdf/2604.00997" },
  { id:"2026-tist-academic-concept-index", year:2026, order:9, venue:V.TIST, title:"Improving Scientific Document Retrieval with Academic Concept Index", authors:"Jeyun Lee*, Junhyoung Lee*, Wonbin Kweon, Bowen Jin, Yu Zhang, Susik Yoon, Dongha Lee, Hwanjo Yu, Jiawei Han, SeongKu Kang", summary:"We introduce a concept index: structured knowledge of scientific concepts for retrieval.", thumbnail:image("2026", "2026-tist-academic-concept-index"), link:"https://arxiv.org/pdf/2601.00567" },
  { id:"2026-kdd-corank", year:2026, order:10, venue:V.KDD, title:"CoRank: LLM-Based Compact Reranking with Document Features for Scientific Retrieval", authors:"Runchu Tian, Xueqiang Xu, Bowen Jin, SeongKu Kang, Jiawei Han", summary:"We propose a training-free, model-agnostic reranking framework for scientific retrieval.", thumbnail:image("2026", "2026-kdd-corank"), link:"https://arxiv.org/pdf/2505.13757" },
  { id:"2026-sigir-sprint", year:2026, order:11, venue:V.SIGIR, title:"SPRINT: Scalable and Predictive Intent Refinement for LLM-Enhanced Session-based Recommendation", authors:"Gyuseok Lee, Wonbin Kweon, Zhenrui Yue, Yaokun Liu, Yifan Liu, Susik Yoon, Dong Wang, SeongKu Kang", summary:"We propose a scalable framework that infers and incorporates reliable user intents.", thumbnail:image("2026", "2026-sigir-sprint"), link:"https://arxiv.org/pdf/2508.00570" },
  { id:"2026-sigir-filling-gaps", year:2026, order:12, venue:V.SIGIR, title:"Filling the Gaps: Selective Knowledge Augmentation for LLM Recommenders", authors:"Jaehyun Lee, Sanghwan Jang, SeongKu Kang†, Hwanjo Yu†", summary:"We estimate an LLM's internal knowledge and selectively inject additional information.", thumbnail:image("2026", "2026-sigir-filling-gaps"), link:"https://arxiv.org/pdf/2604.07825" },
  { id:"2026-sigir-flame", year:2026, order:13, venue:V.SIGIR, title:"FLAME: Condensing Ensemble Diversity into a Single Network for Efficient Sequential Recommendation", authors:"WooJoo Kim, Junyoung Kim, Jaehyung Lim, Seong Jin Choi, SeongKu Kang†, Hwanjo Yu†", summary:"We condense ensemble-level diversity into a single recommendation model.", thumbnail:image("2026", "2026-sigir-flame"), link:"https://arxiv.org/pdf/2604.04038" },
  { id:"2026-sigir-mviger", year:2026, order:14, venue:V.SIGIR, title:"MVIGER: Multi-View Variational Integration of Complementary Knowledge for Generative Recommender", authors:"Tongyoung Kim, Soojin Yoon, SeongKu Kang, Jinyoung Yeo, Dongha Lee", summary:"We integrate prompt-template and index combinations with a unified variational framework.", thumbnail:image("2026", "2026-sigir-mviger"), link:"https://arxiv.org/pdf/2408.08686" },
  { id:"2026-acl-explainable-retrieval", year:2026, order:15, venue:`${V.ACL}, Findings`, title:"Why These Documents? Explainable Generative Retrieval with Hierarchical Category Paths", authors:"Sangam Lee, Ryang Heo, SeongKu Kang, Susik Yoon, Jinyoung Yeo, Dongha Lee", summary:"We use hierarchical category paths as explanations for generative retrieval.", thumbnail:image("2026", "2026-acl-explainable-retrieval"), link:"https://arxiv.org/pdf/2411.05572" },
  { id:"2026-iclr-continual-lora", year:2026, order:16, venue:V.ICLR, title:"Continual Low-Rank Adapters for LLM-based Generative Recommender Systems", authors:"Hyunsik Yoo, Ting-Wei Li, SeongKu Kang, Zhining Liu, Charlie Xu, Qilin Qi, Hanghang Tong", summary:"We continuously adapt LoRA for recommendation.", thumbnail:image("2026", "2026-iclr-continual-lora"), link:"https://arxiv.org/pdf/2510.25093" },
  { id:"2026-dasfaa-tutorial", year:2026, order:17, venue:`${V.DASFAA}, Tutorial`, title:"Continual Recommender Systems: A Focus on LLMs and Evolving Trends", authors:"Seunghan Lee, Seunghyun Baek, Dojun Hwang, Hyunsik Yoo, SeongKu Kang", summary:"We present a tutorial on continual learning with a focus on LLMs.", thumbnail:image("2026", "2026-dasfaa-tutorial"), page:"/research/dasfaa26-tutorial-continual-recommender-systems" },
  { id:"2026-wsdm-data-streams", year:2026, order:18, venue:V.WSDM, title:"Capturing User Interests from Data Streams for Continual Sequential Recommendation", authors:"Gyuseok Lee, Hyunsik Yoo, Junyoung Hwang, SeongKu Kang†, Hwanjo Yu", summary:"We propose CSTRec, which continuously updates a transformer-based sequential recommender.", thumbnail:image("2026", "2026-wsdm-data-streams"), link:"https://arxiv.org/pdf/2506.07466" },
  { id:"2026-www-pairsem", year:2026, order:19, venue:V.WWW, title:"PairSem: LLM-Guided Pairwise Semantic Matching for Scientific Document Retrieval", authors:"Wonbin Kweon, Runchu Tian, SeongKu Kang, Pengcheng Jiang, Zhiyong Lu, Jiawei Han, Hwanjo Yu", summary:"We match scientific document semantics using entity-aspect pairs.", thumbnail:image("2026", "2026-www-pairsem"), link:"https://arxiv.org/pdf/2510.09897" },
  { id:"2026-kdd-cream", year:2026, order:20, venue:V.KDD, title:"CREAM: Continual Retrieval on Dynamic Streaming Corpora with Adaptive Soft Memory", authors:"HuiJeong Son, Hyeongu Kang, Sunho Kim, Subeen Ho, SeongKu Kang, Dongha Lee, Susik Yoon", summary:"We retrieve from streaming corpora with adaptive memory.", thumbnail:image("2026", "2026-kdd-cream"), link:"https://arxiv.org/pdf/2601.02708" },
  { id:"2026-tkde-bpl", year:2026, order:21, venue:V.TKDE, title:"BPL: Bias-adaptive Preference Distillation Learning for Recommender System", authors:"SeongKu Kang, Jianxun Lian, Dongha Lee, Wonbin Kweon, Sanghwan Jang, Jaehyun Lee, Jindong Wang, Xing Xie, Hwanjo Yu", summary:"We learn user preferences with bias-adaptive distillation.", thumbnail:image("2026", "2026-tkde-bpl"), link:"https://arxiv.org/pdf/2510.16076" },

  { id:"2025-emnlp-topic-coverage", year:2025, order:1, venue:`${V.EMNLP}, Main`, title:"Topic Coverage-based Demonstration Retrieval for In-Context Learning", authors:"Wonbin Kweon, SeongKu Kang, Runchu Tian, Pengcheng Jiang, Jiawei Han, Hwanjo Yu", summary:"We select in-context demonstrations based on topic coverage.", thumbnail:image("2025", "2025-emnlp-topic-coverage"), link:"https://arxiv.org/pdf/2509.12451v1" },
  { id:"2025-emnlp-scientific-ranking", year:2025, order:2, venue:`${V.EMNLP}, Findings`, title:"Scientific Paper Retrieval with LLM-Guided Semantic-Based Ranking", authors:"Yunyi Zhang, Ruozhen Yang, Siqi Jiao, SeongKu Kang, Jiawei Han", summary:"We rank scientific papers using LLM-guided semantics.", thumbnail:image("2025", "2025-emnlp-scientific-ranking"), link:"https://arxiv.org/pdf/2505.21815" },
  { id:"2025-cikm-tutorial", year:2025, order:3, venue:`${V.CIKM}, Tutorial`, title:"Continual Recommender Systems", authors:"Hyunsik Yoo, SeongKu Kang, Hanghang Tong", summary:"We present a tutorial on continual learning for recommender systems.", thumbnail:image("2025", "2025-cikm-tutorial"), link:"https://arxiv.org/pdf/2507.03861", page:"/research/tutorial-continual-recommender-systems" },
  { id:"2025-colm-deepretrieval", year:2025, order:4, venue:V.COLM, title:"DeepRetrieval: Hacking Real Search Engines and Retrievers with Large Language Models via Reinforcement Learning", authors:"Pengcheng Jiang, Jiacheng Lin, Lang Cao, Runchu Tian, SeongKu Kang, Zifeng Wang, Jimeng Sun, Jiawei Han", summary:"We propose an RL-based framework for training LLMs to enhance retrieval.", thumbnail:image("2025", "2025-colm-deepretrieval"), link:"https://arxiv.org/pdf/2503.00223" },
  { id:"2025-colm-imagine-relevance", year:2025, order:5, venue:V.COLM, title:"Imagine All The Relevance: Scenario-Profiled Indexing with Knowledge Expansion for Dense Retrieval", authors:"Sangam Lee, Ryang Heo, SeongKu Kang, Dongha Lee", summary:"We index documents as scenario-based retrieval units.", thumbnail:image("2025", "2025-colm-imagine-relevance"), link:"https://arxiv.org/pdf/2503.23033" },
  { id:"2025-kdd-label-noise", year:2025, order:6, venue:V.KDD, title:"Delving into Instance-Dependent Label Noise in Graph Data: A Comprehensive Study and Benchmark", authors:"Suyeon Kim, SeongKu Kang†, Dongwoo Kim, Jungseul Ok, Hwanjo Yu†", summary:"We propose a benchmark with realistic graph datasets and varied label noise.", thumbnail:image("2025", "2025-kdd-label-noise"), link:"https://arxiv.org/abs/2506.12468" },
  { id:"2025-sigir-plasticity", year:2025, order:7, venue:V.SIGIR, title:"Embracing Plasticity: Balancing Stability and Plasticity in Continual Recommender Systems", authors:"Hyunsik Yoo, SeongKu Kang, Ruizhong Qiu, Charlie Xu, Fei Wang, Hanghang Tong", summary:"We adaptively balance stability and plasticity based on user preference shifts.", thumbnail:image("2025", "2025-sigir-plasticity"), link:"https://openreview.net/pdf?id=VAQ61u5I9q" },
  { id:"2025-sigir-preference-reasoning", year:2025, order:8, venue:V.SIGIR, title:"Personalized Preference Reasoning with Large Language Models for Accurate and Explainable Recommendation", authors:"Jieyong Kim, Hyunseo Kim, Hyunjin Cho, SeongKu Kang, Buru Chang, Jinyoung Yeo, Dongha Lee", summary:"We reason over user preferences with LLMs for recommendation.", thumbnail:image("2025", "2025-sigir-preference-reasoning"), link:"https://arxiv.org/pdf/2408.06276" },
  { id:"2025-www-uncertainty", year:2025, order:9, venue:V.WWW, title:"Uncertainty Quantification and Decomposition for LLM-based Recommendation", authors:"Wonbin Kweon, Sanghwan Jang, SeongKu Kang†, Hwanjo Yu†", summary:"We quantify and decompose uncertainty in LLM-based recommendation.", thumbnail:image("2025", "2025-www-uncertainty"), link:"https://arxiv.org/pdf/2501.17630" },
  { id:"2025-www-chain-of-factors", year:2025, order:10, venue:V.WWW, title:"Chain-of-Factors Paper-Reviewer Matching", authors:"Yu Zhang, Yanzhen Shen, SeongKu Kang, Xiusi Chen, Bowen Jin, Jiawei Han", summary:"We match papers and reviewers using semantic, topic, and citation signals.", thumbnail:image("2025", "2025-www-chain-of-factors"), link:"https://arxiv.org/pdf/2310.14483" },
  { id:"2025-wsdm-concept-coverage", year:2025, order:11, venue:V.WSDM, title:"Improving Scientific Document Retrieval with Concept Coverage-based Query Set Generation", authors:"SeongKu Kang, Bowen Jin, Wonbin Kweon, Yu Zhang, Dongha Lee, Jiawei Han, Hwanjo Yu", summary:"We generate queries with comprehensive coverage of a document's concepts.", thumbnail:image("2025", "2025-wsdm-concept-coverage"), link:"https://arxiv.org/pdf/2502.11181", recognition:{label:"Best Papers of WSDM 2025 · Invited to ACM TIST"} },
  { id:"2025-wsdm-entity-alignment", year:2025, order:12, venue:V.WSDM, title:"Unsupervised Robust Cross-Lingual Entity Alignment via Neighbor Triple Matching with Entity and Relation Texts", authors:"Soojin Yoon, Sungho Ko, Tongyoung Kim, SeongKu Kang, Jinyoung Yeo, Dongha Lee", summary:"We propose an unsupervised cross-lingual entity alignment pipeline.", thumbnail:image("2025", "2025-wsdm-entity-alignment"), link:"https://arxiv.org/pdf/2407.15588" },

  { id:"2024-emnlp-taxonomy-indexing", year:2024, order:1, venue:`${V.EMNLP}, Main (Oral)`, title:"Taxonomy-guided Semantic Indexing for Academic Paper Search", authors:"SeongKu Kang, Yunyi Zhang, Pengcheng Jiang, Dongha Lee, Jiawei Han, Hwanjo Yu", summary:"We index scientific concepts using taxonomy-guided semantics.", thumbnail:image("2024", "2024-emnlp-taxonomy-indexing"), link:"https://arxiv.org/pdf/2410.19218" },
  { id:"2024-kdd-continual-distillation", year:2024, order:2, venue:V.KDD, title:"Continual Collaborative Distillation for Recommender System", authors:"Gyuseok Lee*, SeongKu Kang*, Wonbin Kweon, Hwanjo Yu", summary:"We combine distillation and continual learning for recommendation.", thumbnail:image("2024", "2024-kdd-continual-distillation"), link:"https://arxiv.org/pdf/2405.19046" },
  { id:"2024-acl-pearl", year:2024, order:3, venue:`${V.ACL}, Findings`, title:"Pearl: A Review-driven Persona-Knowledge Grounded Conversational Recommendation Dataset", authors:"Minjin Kim*, Minju Kim*, Hana Kim, Beong-woo Kwak, Soyeon Chun, Hyunseo Kim, SeongKu Kang, Youngjae Yu, Jinyoung Yeo, Dongha Lee", summary:"We build a persona- and knowledge-grounded conversational recommendation dataset.", thumbnail:image("2024", "2024-acl-pearl"), link:"https://arxiv.org/pdf/2403.04460" },
  { id:"2024-acl-aspect-sentiment", year:2024, order:4, venue:`${V.ACL}, Short Paper, Findings`, title:"Self-Consistent Reasoning-based Aspect-Sentiment Quad Prediction with Extract-Then-Assign Strategy", authors:"Jieyong Kim*, Ryang Heo*, Yongsik Seo, SeongKu Kang, Jinyoung Yeo, Dongha Lee", summary:"We predict aspect sentiment with reasoning and extraction.", thumbnail:image("2024", "2024-acl-aspect-sentiment"), link:"https://arxiv.org/pdf/2403.00354" },
  { id:"2024-sigir-domain-space", year:2024, order:5, venue:V.SIGIR, title:"Multi-Domain Sequential Recommendation via Domain Space Learning", authors:"Junyoung Hwang, Hyunjun Ju, SeongKu Kang, Sanghwan Jang, Hwanjo Yu", summary:"We model multi-domain sequential recommendation under sparse interactions.", thumbnail:image("2024", "2024-sigir-domain-space"), link:"https://dl.acm.org/doi/pdf/10.1145/3626772.3657685" },
  { id:"2024-cvpr-label-corruption", year:2024, order:6, venue:V.CVPR, title:"Learning Discriminative Dynamics with Label Corruption for Noisy Label Detection", authors:"Suyeon Kim, Dongha Lee, SeongKu Kang, Sukang Chae, Sanghwan Jang, Hwanjo Yu", summary:"We distinguish mislabeled instances using the dynamics of training signals.", thumbnail:image("2024", "2024-cvpr-label-corruption"), link:"https://arxiv.org/pdf/2405.19902" },
  { id:"2024-tors-distillation", year:2024, order:7, venue:V.TORS, title:"Unbiased, Effective, and Efficient Distillation from Heterogeneous Models for Recommender Systems", authors:"SeongKu Kang, Wonbin Kweon, Dongha Lee, Jianxun Lian, Xing Xie, Hwanjo Yu", summary:"We leverage model dissensus to mitigate popularity amplification.", thumbnail:image("2024", "2024-tors-distillation"), link:"https://dl.acm.org/doi/pdf/10.1145/3649443" },
  { id:"2024-www-topical-taxonomy", year:2024, order:8, venue:V.WWW, title:"Improving Retrieval in Theme-specific Applications using a Corpus Topical Taxonomy", authors:"SeongKu Kang, Shivam Agarwal, Bowen Jin, Dongha Lee, Hwanjo Yu, Jiawei Han", summary:"We improve retrieval using a corpus-level topical taxonomy.", thumbnail:image("2024", "2024-www-topical-taxonomy"), link:"https://arxiv.org/pdf/2403.04160" },
  { id:"2024-www-personalized-k", year:2024, order:9, venue:V.WWW, title:"Top-Personalized-K Recommendation", authors:"Wonbin Kweon, SeongKu Kang, Sanghwan Jang, Hwanjo Yu", summary:"We generate a personalized-size ranking list to maximize user satisfaction.", thumbnail:image("2024", "2024-www-personalized-k"), link:"https://arxiv.org/pdf/2402.16304" },
  { id:"2024-aaai-domain-preference", year:2024, order:10, venue:V.AAAI, title:"Multi-Domain Recommendation to Attract Users via Domain Preference Modeling", authors:"Hyunjun Ju, SeongKu Kang, Dongha Lee, Junyoung Hwang, Sanghwan Jang, Hwanjo Yu", summary:"We learn seen-unseen domain mappings with masked domain modeling.", thumbnail:image("2024", "2024-aaai-domain-preference"), link:"https://arxiv.org/pdf/2403.17374" },

  { id:"2023-cikm-mvfs", year:2023, order:1, venue:`${V.CIKM}, Short Paper`, title:"MvFS: Multi-view Feature Selection for Recommender System", authors:"Youngjune Lee, Yeongjong Jeong, Keunchan Park, SeongKu Kang†", summary:"We promote balanced feature selection while mitigating bias toward dominant patterns.", thumbnail:image("2023", "2023-cikm-mvfs"), link:"https://arxiv.org/pdf/2309.02064.pdf" },
  { id:"2023-www-heterogeneous-distillation", year:2023, order:2, venue:V.WWW, title:"Distillation from Heterogeneous Models for Top-K Recommendation", authors:"SeongKu Kang, Wonbin Kweon, Dongha Lee, Jianxun Lian, Xing Xie, Hwanjo Yu", summary:"We compress an ensemble of heterogeneous models while retaining accuracy.", thumbnail:image("2023", "2023-www-heterogeneous-distillation"), link:"https://arxiv.org/pdf/2303.01130" },
  { id:"2023-aaai-topology-experts", year:2023, order:3, venue:V.AAAI, title:"Learning Topology-Specific Experts for Molecular Property Prediction", authors:"Suyeon Kim, Dongha Lee, SeongKu Kang, Seonghyeon Lee, Hwanjo Yu", summary:"We introduce a topology-based gating module for molecular property prediction.", thumbnail:image("2023", "2023-aaai-topology-experts"), link:"https://arxiv.org/pdf/2302.13693v1.pdf" },

  { id:"2022-www-consensus-learning", year:2022, order:1, venue:V.WWW, title:"Consensus Learning from Heterogeneous Objectives for One-Class Collaborative Filtering", authors:"SeongKu Kang, Dongha Lee, Wonbin Kweon, Junyoung Hwang, Hwanjo Yu", summary:"We exploit complementary heterogeneous objectives for collaborative filtering.", thumbnail:image("2022", "2022-www-consensus-learning"), link:"https://arxiv.org/pdf/2202.13140" },
  { id:"2022-www-taxocom", year:2022, order:2, venue:V.WWW, title:"TaxoCom: Topic Taxonomy Completion with Hierarchical Discovery of Novel Topic Clusters", authors:"Dongha Lee, Jiaming Shen, SeongKu Kang, Susik Yoon, Jiawei Han, Hwanjo Yu", summary:"We recursively expand taxonomies by discovering novel clusters of terms and documents.", thumbnail:image("2022", "2022-www-taxocom"), link:"https://arxiv.org/pdf/2201.06771" },
  { id:"2022-aaai-calibrated-ranking", year:2022, order:3, venue:`${V.AAAI}, Oral`, title:"Obtaining Calibrated Probabilities with Personalized Ranking Models", authors:"Wonbin Kweon, SeongKu Kang, Hwanjo Yu", summary:"We propose calibration methods and an unbiased empirical-risk framework for ranking models.", thumbnail:image("2022", "2022-aaai-calibrated-ranking"), link:"https://ojs.aaai.org/index.php/AAAI/article/download/20326/version/18623/20085" },
  { id:"2022-information-sciences-groc", year:2022, order:4, venue:"Information Sciences (SCI)", title:"Mitigating viewpoint sensitivity of self-supervised one-class classifiers", authors:"Hyunjun Ju, Dongha Lee, SeongKu Kang, Hwanjo Yu", summary:"We propose GROC, a one-class classifier robust to geometrically transformed inputs.", thumbnail:image("2022", "2022-information-sciences-groc"), link:"https://www.sciencedirect.com/science/article/abs/pii/S0020025522009306" },
  { id:"2022-kbs-personalized-kd", year:2022, order:5, venue:"Knowledge-Based Systems (SCI)", title:"Personalized Knowledge Distillation for Recommender System", authors:"SeongKu Kang, Dongha Lee, Wonbin Kweon, Hwanjo Yu", summary:"We distill latent knowledge in a balanced way without relying on extra hyperparameters.", thumbnail:image("2022", "2022-kbs-personalized-kd"), link:"https://www.sciencedirect.com/science/article/abs/pii/S0950705121010893" },

  { id:"2021-kdd-topology-distillation", year:2021, order:1, venue:V.KDD, title:"Topology Distillation for Recommender System", authors:"SeongKu Kang, Junyoung Hwang, Wonbin Kweon, Hwanjo Yu", summary:"We transfer the topological structure built from relations in the teacher space.", thumbnail:image("2021", "2021-kdd-topology-distillation"), link:"https://arxiv.org/pdf/2106.08700" },
  { id:"2021-sigir-buir", year:2021, order:2, venue:V.SIGIR, title:"Bootstrapping User and Item Representations for One-Class Collaborative Filtering", authors:"Dongha Lee, SeongKu Kang, Hyunjun Ju, Chanyoung Park, Hwanjo Yu", summary:"We propose BUIR, a training framework that does not require negative sampling.", thumbnail:image("2021", "2021-sigir-buir"), link:"https://arxiv.org/pdf/2105.06323" },
  { id:"2021-sigir-proxy-selection", year:2021, order:3, venue:V.SIGIR, title:"Unsupervised Proxy Selection for Session-based Recommender Systems", authors:"Junsu Cho, SeongKu Kang, Dongmin Hyun, Hwanjo Yu", summary:"We recover missing user-interest information by modeling session proxies.", thumbnail:image("2021", "2021-sigir-proxy-selection"), link:"https://arxiv.org/pdf/2107.03564" },
  { id:"2021-www-temporal-patterns", year:2021, order:4, venue:"ACM International World-Wide Web Conference (WWW)", title:"Learning Heterogeneous Temporal Patterns of User Preference for Timely Recommendation", authors:"Junsu Cho, Dongmin Hyun, SeongKu Kang, Hwanjo Yu", summary:"We exploit heterogeneous temporal patterns of user preference.", thumbnail:image("2021", "2021-www-temporal-patterns"), link:"https://www.atailab.cn/seminar2021Spring/pdf/WWW_2021_Learning%20Heterogeneous%20Temporal%20Patterns%20of%20User%20Preference%20for%20Timely%20Recommendation.pdf" },
  { id:"2021-www-bidirectional-distillation", year:2021, order:5, venue:"ACM International World-Wide Web Conference (WWW)", title:"Bidirectional Distillation for Top-K Recommender System", authors:"Wonbin Kweon, SeongKu Kang, Hwanjo Yu", summary:"We improve teacher and student collaboratively via bidirectional distillation.", thumbnail:image("2021", "2021-www-bidirectional-distillation"), link:"https://arxiv.org/pdf/2106.02870.pdf" },
  { id:"2021-information-sciences-ranking-kd", year:2021, order:6, venue:"Information Sciences (SCI)", title:"Item-side Ranking Regularized Distillation for Recommender System", authors:"SeongKu Kang, Junyoung Hwang, Wonbin Kweon, Hwanjo Yu", summary:"We propose a regularization method designed to enhance ranking distillation.", thumbnail:image("2021", "2021-information-sciences-ranking-kd"), link:"https://www.sciencedirect.com/science/article/abs/pii/S0020025521008689" },

  { id:"2020-cikm-de-rrd", year:2020, order:1, venue:V.CIKM, title:"DE-RRD: A Knowledge Distillation Framework for Recommender System", authors:"SeongKu Kang, Junyoung Hwang, Wonbin Kweon, Hwanjo Yu", summary:"We propose DE for latent-knowledge distillation and RRD for ranking-knowledge distillation.", thumbnail:image("2020-and-before", "2020-cikm-de-rrd"), link:"https://arxiv.org/pdf/2012.04357" },
  { id:"2020-www-deep-rating", year:2020, order:2, venue:"ACM International World-Wide Web Conference (WWW), Short Paper", title:"Deep Rating Elicitation for New Users in Collaborative Filtering", authors:"Wonbin Kweon, SeongKu Kang, Junyoung Hwang, Hwanjo Yu", summary:"We introduce DRE, a framework for choosing initial seed items for new users.", thumbnail:image("2020-and-before", "2020-www-deep-rating"), link:"https://dl.acm.org/doi/abs/10.1145/3366423.3380042" },
  { id:"2020-imcom-fake-news", year:2020, order:3, venue:"IEEE International Conference on Ubiquitous Information Management and Communication (IMCOM)", title:"Multi-Modal Component Embedding for Fake News Detection", authors:"SeongKu Kang, Junyoung Hwang, Hwanjo Yu", summary:"We explore multi-modal feature combinations for fake-news detection.", thumbnail:image("2020-and-before", "2020-imcom-fake-news"), link:"https://ieeexplore.ieee.org/document/9001800" },
  { id:"2019-cikm-cross-domain", year:2019, order:4, venue:V.CIKM, title:"Semi-Supervised Learning for Cross-Domain Recommendation to Cold-start Users", authors:"SeongKu Kang, Junyoung Hwang, Dongha Lee, Hwanjo Yu", summary:"We introduce semi-supervised mapping for settings with extremely limited overlapping users.", thumbnail:image("2020-and-before", "2019-cikm-cross-domain"), link:"https://dl.acm.org/doi/10.1145/3357384.3357914", recognition:{label:"Ranked 12th among the most influential papers at CIKM 2019", href:"https://resources.paperdigest.org/2025/09/most-influential-cikm-papers-2025-09-version/"} },
];

const t = (...topics: PublicationTopic[]) => topics;

const publicationTopicsById: Record<string, PublicationTopic[]> = {
  "2026-emnlp-hobit": t("llms", "search-retrieval", "rag", "efficiency-scalability"),
  "2026-emnlp-pearl": t("llms", "search-retrieval", "knowledge-mining", "efficiency-scalability"),
  "2026-cikm-environment-conditioned": t("recommendation", "bias-robustness"),
  "2026-cikm-scord": t("llms", "recommendation", "continual-learning", "knowledge-distillation", "efficiency-scalability"),
  "2026-cikm-item-profiles": t("llms", "recommendation", "knowledge-mining", "rag", "efficiency-scalability"),
  "2026-cikm-spectral-decoupling": t("knowledge-mining"),
  "2026-cikm-tracer": t("llms", "recommendation", "continual-learning"),
  "2026-colm-reward-factorization": t("llms", "recommendation", "bias-robustness"),
  "2026-tist-academic-concept-index": t("ai-for-science", "llms", "search-retrieval", "knowledge-mining", "rag"),
  "2026-kdd-corank": t("ai-for-science", "llms", "search-retrieval", "knowledge-mining", "efficiency-scalability"),
  "2026-sigir-sprint": t("llms", "recommendation", "efficiency-scalability"),
  "2026-sigir-filling-gaps": t("llms", "recommendation", "rag", "efficiency-scalability"),
  "2026-sigir-flame": t("recommendation", "efficiency-scalability"),
  "2026-sigir-mviger": t("llms", "recommendation", "knowledge-mining", "rag"),
  "2026-acl-explainable-retrieval": t("search-retrieval", "knowledge-mining", "rag"),
  "2026-iclr-continual-lora": t("llms", "recommendation", "continual-learning"),
  "2026-dasfaa-tutorial": t("llms", "recommendation", "continual-learning"),
  "2026-wsdm-data-streams": t("recommendation", "continual-learning", "efficiency-scalability"),
  "2026-www-pairsem": t("ai-for-science", "llms", "search-retrieval", "knowledge-mining"),
  "2026-kdd-cream": t("search-retrieval", "continual-learning"),
  "2026-tkde-bpl": t("recommendation", "knowledge-distillation", "bias-robustness"),
  "2025-emnlp-topic-coverage": t("llms", "search-retrieval", "knowledge-mining", "rag"),
  "2025-emnlp-scientific-ranking": t("ai-for-science", "llms", "search-retrieval", "knowledge-mining", "rag"),
  "2025-cikm-tutorial": t("recommendation", "continual-learning"),
  "2025-colm-deepretrieval": t("llms", "search-retrieval", "efficiency-scalability"),
  "2025-colm-imagine-relevance": t("llms", "search-retrieval", "knowledge-mining", "rag", "knowledge-distillation", "efficiency-scalability"),
  "2025-kdd-label-noise": t("knowledge-mining", "bias-robustness"),
  "2025-sigir-plasticity": t("recommendation", "continual-learning"),
  "2025-sigir-preference-reasoning": t("llms", "recommendation", "rag", "knowledge-distillation"),
  "2025-www-uncertainty": t("llms", "recommendation", "bias-robustness"),
  "2025-www-chain-of-factors": t("ai-for-science", "search-retrieval", "knowledge-mining"),
  "2025-wsdm-concept-coverage": t("ai-for-science", "llms", "search-retrieval", "knowledge-mining"),
  "2025-wsdm-entity-alignment": t("knowledge-mining", "bias-robustness"),
  "2024-emnlp-taxonomy-indexing": t("ai-for-science", "search-retrieval", "knowledge-mining", "rag"),
  "2024-kdd-continual-distillation": t("recommendation", "continual-learning", "knowledge-distillation", "efficiency-scalability"),
  "2024-acl-pearl": t("llms", "recommendation", "knowledge-mining", "rag"),
  "2024-acl-aspect-sentiment": t("knowledge-mining"),
  "2024-sigir-domain-space": t("recommendation"),
  "2024-cvpr-label-corruption": t("knowledge-mining", "bias-robustness"),
  "2024-tors-distillation": t("recommendation", "knowledge-distillation", "efficiency-scalability", "bias-robustness"),
  "2024-www-topical-taxonomy": t("search-retrieval", "knowledge-mining", "rag"),
  "2024-www-personalized-k": t("recommendation"),
  "2024-aaai-domain-preference": t("recommendation"),
  "2023-cikm-mvfs": t("recommendation", "bias-robustness"),
  "2023-www-heterogeneous-distillation": t("recommendation", "knowledge-distillation", "efficiency-scalability"),
  "2023-aaai-topology-experts": t("ai-for-science", "knowledge-mining"),
  "2022-www-consensus-learning": t("recommendation"),
  "2022-www-taxocom": t("knowledge-mining"),
  "2022-aaai-calibrated-ranking": t("recommendation", "bias-robustness"),
  "2022-information-sciences-groc": t("knowledge-mining", "bias-robustness"),
  "2022-kbs-personalized-kd": t("recommendation", "knowledge-distillation", "efficiency-scalability"),
  "2021-kdd-topology-distillation": t("recommendation", "knowledge-distillation", "efficiency-scalability"),
  "2021-sigir-buir": t("recommendation"),
  "2021-sigir-proxy-selection": t("recommendation"),
  "2021-www-temporal-patterns": t("recommendation"),
  "2021-www-bidirectional-distillation": t("recommendation", "knowledge-distillation", "efficiency-scalability"),
  "2021-information-sciences-ranking-kd": t("recommendation", "knowledge-distillation", "efficiency-scalability"),
  "2020-cikm-de-rrd": t("recommendation", "knowledge-distillation", "efficiency-scalability"),
  "2020-www-deep-rating": t("recommendation"),
  "2020-imcom-fake-news": t("knowledge-mining"),
  "2019-cikm-cross-domain": t("recommendation"),
};

export const publications: Publication[] = publicationRecords.map((publication) => {
  const topics = publicationTopicsById[publication.id];
  if (!topics?.length) throw new Error(`Missing publication topics for ${publication.id}`);
  return { ...publication, topics };
});

assertUniqueIds("publications", publications);

export const publicationGroups = [
  { label: "2026", years: [2026] },
  { label: "2025", years: [2025] },
  { label: "2024", years: [2024] },
  { label: "2023", years: [2023] },
  { label: "2022", years: [2022] },
  { label: "2021", years: [2021] },
  { label: "2020 and before", years: [2020, 2019, 2017] },
] as const;

export const publicationsForGroup = (years: readonly number[]) =>
  publications
    .filter((publication) => years.includes(publication.year))
    .sort((a, b) => b.year - a.year || a.order - b.order);
