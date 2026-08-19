export interface TutorialPart {
  title: string;
  duration: string;
  topics: string[];
  slides?: string;
}

export interface TutorialSpeaker {
  name: string;
  image?: string;
  website?: string;
  bio: string[];
}

export interface Tutorial {
  id: "dasfaa" | "cikm";
  venue: string;
  date: string;
  title: string;
  heroImage: string;
  abstract: string[];
  audience: string;
  duration: string;
  outline: TutorialPart[];
  speakers: TutorialSpeaker[];
  references: string[];
}

const sharedReferences = [
  "Ahrabian, K., Xu, Y., Zhang, Y., Wu, J., Wang, Y., & Coates, M. (2021). Structure aware experience replay for incremental learning in graph-based recommender systems. CIKM 2021, 2832–2836.",
  "Mi, F., Lin, X., & Faltings, B. (2020). Ader: Adaptively distilled exemplar replay towards continual learning for session-based recommendation. RecSys 2020, 408–413.",
  "Cai, G., Zhu, J., Dai, Q., Dong, Z., He, X., Tang, R., & Zhang, R. (2022). Reloop: A self-correction continual learning loop for recommender systems. SIGIR 2022, 2692–2697.",
  "Zhu, J., Cai, G., Huang, J., Dong, Z., Tang, R., & Zhang, W. (2023). ReLoop2: Building Self-Adaptive Recommendation Models via Responsive Error Compensation Loop. KDD 2023, 5728–5738.",
  "Zhang, X., Chen, Y., Ma, C., Fang, Y., & King, I. (2024). Influential exemplar replay for incremental learning in recommender systems. AAAI 2024, 9368–9376.",
  "Qin, J., Liu, W., Zhang, W., & Yu, Y. (2025). D2K: Turning historical data into retrievable knowledge for recommender systems. TheWebConf 2025, 472–482.",
  "Wang, Y., Zhang, Y., Valkanas, A., Tang, R., Ma, C., Hao, J., & Coates, M. (2023). Structure aware incremental learning with personalized imitation weights for recommender systems. AAAI 2023, 4711–4719.",
  "Xu, Y., et al. (2020). GraphSAIL: Graph structure aware incremental learning for recommender systems. CIKM 2020.",
  "Wang, Y., Zhang, Y., & Coates, M. (2021). Graph structure aware contrastive knowledge distillation for incremental learning in recommender systems. CIKM 2021, 3518–3522.",
  "Yoo, H., Kang, S., Qiu, R., Xu, C., Wang, F., & Tong, H. (2025). Embracing plasticity: Balancing stability and plasticity in continual recommender systems. SIGIR 2025.",
  "Lee, G., Kang, S., Kweon, W., & Yu, H. (2024). Continual Collaborative Distillation for Recommender System. KDD 2024, 1495–1505.",
  "Lee, G., Yoo, H., Hwang, J., Kang, S., & Yu, H. (2025). Leveraging Historical and Current Interests for Continual Sequential Recommendation. arXiv:2506.07466.",
  "Liu, L., Cai, L., Zhang, C., Zhao, X., Gao, J., Wang, W., et al. (2023). LinRec: Linear attention mechanism for long-term sequential recommender systems. SIGIR 2023, 289–299.",
];

const hyunsikBio = [
  "Hyunsik Yoo is a fourth-year Ph.D. student in the Siebel School of Computing and Data Science at the University of Illinois Urbana-Champaign. His research focuses on developing data mining and machine learning techniques for recommender systems and graph mining models that are adaptive, trustworthy, and user-inclusive.",
  "His work has been published in major conferences, including KDD, SIGIR, TheWebConf, WSDM, and ICML. He has also served as a program committee member or reviewer for venues such as KDD, CIKM, TheWebConf Companion, AAAI, NeurIPS, DSAA, and TIST.",
];

const seongkuBio = [
  "SeongKu Kang is an Assistant Professor in the Department of Computer Science and Engineering at Korea University. Prior to that, he was a postdoctoral researcher at the University of Illinois Urbana-Champaign. His research interests lie in data mining, recommender systems, and information retrieval.",
  "He has published more than 30 papers in major conferences such as KDD, TheWebConf, CIKM, SIGIR, and EMNLP. He received the Stars of Tomorrow Award from Microsoft Research Asia in 2023, and his paper was selected as a Best Paper at WSDM 2025. He was also recognized as an outstanding reviewer at KDD.",
];

export const tutorials: Record<"dasfaa" | "cikm", Tutorial> = {
  dasfaa: {
    id: "dasfaa",
    venue: "DASFAA 2026",
    date: "April 27, 2026",
    title: "Continual Recommender Systems: A Focus on LLMs and Evolving Trends",
    heroImage: "/media/publications/2026/2026-dasfaa-tutorial.png",
    abstract: [
      "Modern recommender systems operate in uniquely dynamic settings: user interests, item pools, and popularity trends shift continuously, and models must adapt in real time without forgetting past preferences.",
      "While existing tutorials on continual or lifelong learning cover broad machine learning domains such as vision and graphs, they do not address recommendation-specific demands—such as balancing stability and plasticity per user, handling cold-start items, and optimizing recommendation metrics under streaming feedback.",
      "This tutorial aims to make a timely contribution by filling that gap. We begin by reviewing the background and problem settings, followed by a comprehensive overview of existing approaches. We then highlight recent efforts to apply continual learning to practical deployment environments, such as resource-constrained systems and sequential interaction settings.",
      "Finally, we discuss open challenges and future research directions. We expect this tutorial to benefit researchers and practitioners in recommender systems, data mining, AI, and information retrieval across academia and industry.",
    ],
    audience: "The audience is expected to have basic knowledge of probability, linear algebra, and machine learning, but no prior familiarity with specific continual learning algorithms is required.",
    duration: "Half day · Approximately 3 hours including short breaks",
    outline: [
      { title: "Part I: Introduction and Background", duration: "30 minutes", topics: ["Problem definitions and settings", "Key challenges", "Applications and use cases"] },
      { title: "Part II: Experience-Replay-based Methods", duration: "35 minutes", topics: ["Sample selection for experience replay", "Replay-based model enhancement"] },
      { title: "Part III: Regularization-based Methods", duration: "35 minutes", topics: ["What knowledge to regularize", "Which temporal knowledge to regularize", "Personalization of regularization"] },
      { title: "Part IV: Beyond Traditional Settings", duration: "35 minutes", topics: ["Resource-constrained environments", "Sequential interaction environments"] },
      { title: "Part V: Open Challenges and Future Directions", duration: "35 minutes", topics: ["Trustworthiness (e.g., fairness, explainability, robustness)", "Adaptation to foundational models", "Unified models for recommendation and search"] },
    ],
    speakers: [
      { name: "Seunghan Lee", image: "/media/people/seunghan.jpg", bio: ["Seunghan Lee is a first-year Master’s student in the Department of Computer Science and Engineering at Korea University. His research focuses on learning from heterogeneous information in recommender systems, encompassing multi-modal content and complex user behaviors, as well as continual recommender systems. His work has been published in major conferences, including CIKM."] },
      { name: "Seunghyun Baek", image: "/media/people/seunghyun.png", bio: ["Seunghyun Baek is a first-year Master’s student in the Department of Computer Science and Engineering at Korea University. He has worked on designing a continually updated multi-stage pipeline for recommender systems. His research interests lie in LLM-based recommendation systems and continual learning for recommendation."] },
      { name: "Dojun Hwang", image: "/media/people/dojun.jpg", website: "https://repo2x.com", bio: ["Dojun Hwang is currently a final-year B.S. student in the Department of Computer Science and Engineering at Korea University. He has worked on designing recommender systems, especially large language models as a re-ranker. His research interests are large language models for recommendation and information retrieval."] },
      { name: "Hyunsik Yoo", website: "https://sites.google.com/view/hsyoo", bio: hyunsikBio },
      { name: "SeongKu Kang", image: "/media/people/seongku.jpg", website: "https://seongku-kang.github.io/", bio: seongkuBio },
    ],
    references: [
      ...sharedReferences,
      "Yoo, H., Li, T.-W., Kang, S., Liu, Z., Xu, C., Qi, Q., & Tong, H. (2025). Continual low-rank adapters for LLM-based generative recommender systems. arXiv:2510.25093.",
      "Chen, H., Razin, N., Narasimhan, K., & Chen, D. (2025). Retaining by doing: The role of on-policy data in mitigating forgetting. arXiv:2510.18874.",
      "Lai, S., Zhao, H., Feng, R., Ma, C., Liu, W., Zhao, H., et al. (2025). Reinforcement fine-tuning naturally mitigates forgetting in continual post-training. arXiv:2507.05386.",
    ],
  },
  cikm: {
    id: "cikm",
    venue: "CIKM 2025",
    date: "November 10, 2025",
    title: "Continual Recommender Systems",
    heroImage: "/media/publications/2025/2025-cikm-tutorial.png",
    abstract: [
      "Modern recommender systems operate in uniquely dynamic settings: user interests, item pools, and popularity trends shift continuously, and models must adapt in real time without forgetting past preferences.",
      "While existing tutorials on continual or lifelong learning cover broad machine learning domains such as vision and graphs, they do not address recommendation-specific demands—such as balancing stability and plasticity per user, handling cold-start items, and optimizing recommendation metrics under streaming feedback. This tutorial aims to make a timely contribution by filling that gap.",
      "We begin by reviewing the background and problem settings, followed by a comprehensive overview of existing approaches, including replay-based and regularization-based methods. We then highlight recent efforts to apply continual learning to practical deployment environments, such as resource-constrained systems and sequential interaction settings. Finally, we discuss open challenges and future research directions.",
      "We believe this tutorial will be valuable to researchers and practitioners in recommender systems, data mining, and artificial intelligence, and will benefit a wide range of real-world application domains related to information retrieval.",
    ],
    audience: "The audience is expected to have basic knowledge of probability, linear algebra, and machine learning, but no prior familiarity with specific continual learning algorithms is required.",
    duration: "Half day · Approximately 3 hours including short breaks",
    outline: [
      { title: "Part I: Introduction and Background", duration: "30 minutes", topics: ["Problem definitions and settings", "Key challenges", "Applications and use cases"], slides: "https://drive.google.com/file/d/1bzkX5wuiQe5hh5RmBdHKKEbRFbD0bjvV/view?usp=sharing" },
      { title: "Part II: Experience-Replay-based Methods", duration: "35 minutes", topics: ["Sample selection for experience replay", "Replay-based model enhancement"], slides: "https://drive.google.com/file/d/1ZanQoNJDeQIfN3tttirfg0908puaKNH1/view?usp=sharing" },
      { title: "Part III: Regularization-based Methods", duration: "35 minutes", topics: ["What knowledge to regularize", "Which temporal knowledge to regularize", "Personalization of regularization"], slides: "https://drive.google.com/file/d/1uNM8mMdtG4rM3ZK0TeAAzWHNr3VT21z5/view?usp=sharing" },
      { title: "Part IV: Beyond Traditional Settings", duration: "35 minutes", topics: ["Resource-constrained environments", "Lifelong sequential environments", "Federated learning environments"], slides: "https://drive.google.com/file/d/1D8CMzNuIylsK_-13PE3tsNWw-DryCIAv/view?usp=sharing" },
      { title: "Part V: Open Challenges and Future Directions", duration: "35 minutes", topics: ["Generative recommendation with LLMs", "Trustworthiness", "Adaptation to foundational models"], slides: "https://drive.google.com/file/d/1Ki2arohAZ9JZUBLa1Hf5_W5vROW0_bER/view?usp=sharing" },
    ],
    speakers: [
      { name: "Hyunsik Yoo", website: "https://sites.google.com/view/hsyoo", bio: hyunsikBio },
      { name: "SeongKu Kang", image: "/media/people/seongku.jpg", website: "https://seongku-kang.github.io/", bio: seongkuBio },
      { name: "Hanghang Tong", website: "http://tonghanghang.org/", bio: [
        "Hanghang Tong is a professor in the Siebel School of Computing and Data Science at the University of Illinois Urbana-Champaign. Before that he was an associate professor at Arizona State University. He received his M.Sc. and Ph.D. degrees from Carnegie Mellon University in 2008 and 2009, both in Machine Learning. His research interest is in large-scale data mining for graphs and multimedia.",
        "He has received several awards, including the IEEE ICDM Tao Li Award, SDM/IBM Early Career Data Mining Research Award, NSF CAREER Award, ICDM 10-Year Highest Impact Paper Awards, and several best paper awards. He has published over 300 refereed articles and is a distinguished member of ACM and a Fellow of IEEE.",
      ] },
    ],
    references: sharedReferences,
  },
};
