export interface CourseLink {
  label: string;
  href: string;
}

export interface CourseOffering {
  term: string;
  note?: string;
  links?: CourseLink[];
}

export interface CourseEmbed {
  title: string;
  src: string;
  source: string;
}

export interface CourseDetail {
  code: string;
  title: string;
  description: string[];
  resources?: string[];
  prerequisites?: string[];
  grading?: string[];
  attendanceNote?: string;
  embeds?: CourseEmbed[];
  offerings: CourseOffering[];
  availabilityNote?: string;
}

export const courseDetails: Record<string, CourseDetail> = {
  cose361: {
    code: "COSE361",
    title: "Artificial Intelligence",
    description: [
      "This course aims to develop a solid understanding of core concepts in artificial intelligence, including machine learning, search algorithms, Markov decision processes, and probabilistic reasoning, and to cultivate the ability to apply these concepts to real-world problem solving.",
      "Students will also learn to analyze the underlying mechanisms of various AI models, select and implement algorithms appropriate to given problem settings, and interpret results with a practical, problem-oriented mindset.",
    ],
    resources: [
      "Russell and Norvig, Artificial Intelligence: A Modern Approach",
      "Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning",
      "Sutton and Barto, Reinforcement Learning: An Introduction",
    ],
    prerequisites: ["Familiarity with basic programming (Python 3)", "Familiarity with basic probability theory", "Familiarity with basic linear algebra"],
    grading: ["Attendance: 10%", "Programming assignments: 10%", "Midterm exams: 40%", "Final exams: 40%"],
    attendanceNote: "Up to five absences will have no penalties. Each absence beyond five will result in a 1% deduction.",
    embeds: [{
      title: "Schedule (subject to changes)",
      src: "https://docs.google.com/spreadsheets/d/1bm0oxt1Nl86ZwyuzjfpQzLhugG6ZOT6vbVt28KQZwTI/htmlembed",
      source: "https://docs.google.com/spreadsheets/d/1bm0oxt1Nl86ZwyuzjfpQzLhugG6ZOT6vbVt28KQZwTI/edit",
    }],
    offerings: [
      { term: "2026 Spring", links: [{ label: "Student review", href: "/teaching/cose361_spring_2026" }] },
      { term: "2025 Spring", links: [
        { label: "Student review", href: "/teaching/cose361_spring_2025" },
        { label: "Midterm", href: "https://drive.google.com/file/d/15xjHH5Z6uTp7tyi5zwjG0GKvxEEK06e3/view?usp=sharing" },
        { label: "Final exam", href: "https://drive.google.com/file/d/1FkRDEIE315fuZNeqRb-ACZhq1cXXQtis/view?usp=sharing" },
      ] },
    ],
  },
  data304: {
    code: "DATA304",
    title: "Big Data Analysis",
    description: [
      "This course focuses on big data analytics with an emphasis on text data, which constitutes a large portion of the data generated daily in modern systems. The course aims to answer a central question: how to represent large-scale data, how to learn from it, and how to apply it to real-world problems such as search and recommendation.",
      "Students will study core methods for text representation, including sparse and dense models, and learn how these representations are used in text classification, graph-based learning, and modern search and retrieval pipelines.",
    ],
    resources: ["Jurafsky and Martin, Speech and Language Processing", "Hamilton, Graph Representation Learning"],
    prerequisites: ["Familiarity with basic programming (Python 3)", "Basic knowledge of linear algebra and probability", "Introductory understanding of machine learning concepts"],
    grading: ["Attendance: 10%", "Programming assignments: 20%", "Project: 30%", "Final exam: 40%"],
    attendanceNote: "Up to five absences will have no penalties. Each absence beyond five will result in a 1% deduction.",
    embeds: [
      {
        title: "Schedule (subject to changes)",
        src: "https://docs.google.com/spreadsheets/d/1CXKAnsssss9O5C0SDDXdy7tiMbZHFB6fO8uhWiy7OH8/htmlembed",
        source: "https://docs.google.com/spreadsheets/d/1CXKAnsssss9O5C0SDDXdy7tiMbZHFB6fO8uhWiy7OH8/edit",
      },
      {
        title: "Embedded course material",
        src: "https://docs.google.com/presentation/d/e/2PACX-1vSlXLl2tBjqCMPqy2uSqaNclrII9dSEJfOv_jsMYN3NB-t6IPL1zq67gue6YUkusg/pubembed?start=false&loop=false&delayms=3000",
        source: "https://docs.google.com/presentation/d/e/2PACX-1vSlXLl2tBjqCMPqy2uSqaNclrII9dSEJfOv_jsMYN3NB-t6IPL1zq67gue6YUkusg/pub",
      },
    ],
    offerings: [{ term: "2025 Fall", note: "Special talk (Keunchan Park, NAVER)", links: [
      { label: "Final exam", href: "https://drive.google.com/file/d/1B-zQeTbjYU3OwjJ-KYkm8rEEpW5z9ADv/view?usp=drive_link" },
      { label: "Student review", href: "/teaching/data304_fall_2025" },
    ] }],
  },
  aai114: {
    code: "AAI114",
    title: "Text Mining",
    description: [
      "This course introduces core concepts and methods in text mining, focusing on how large-scale textual data can be represented, modeled, and analyzed using machine learning techniques. The course begins with a review of fundamental machine learning concepts and progresses to text representation methods, ranging from sparse models to dense and contextual representations including word embeddings and transformer-based language models.",
      "Building on these representations, students will study text classification methods, semi-supervised and multi-task learning, and domain adaptation techniques. The course also covers modern search systems, including lexical and neural retrieval, and LLM-enhanced retrieval, with an emphasis on applying text mining techniques to real-world problems.",
    ],
    resources: ["Jurafsky and Martin, Speech and Language Processing"],
    prerequisites: ["Familiarity with basic programming (Python 3)", "Basic knowledge of linear algebra and probability"],
    grading: ["Programming assignments: 20%", "Midterm exam: 40%", "Final exam: 40%"],
    embeds: [{
      title: "Schedule (subject to changes)",
      src: "https://docs.google.com/spreadsheets/d/1GkP2mwVJvbws56CyoB1GSVN1LHLZxKwdcQg8P4leFi0/htmlembed",
      source: "https://docs.google.com/spreadsheets/d/1GkP2mwVJvbws56CyoB1GSVN1LHLZxKwdcQg8P4leFi0/edit",
    }],
    offerings: [{ term: "2025 Fall" }],
  },
  aai112: {
    code: "AAI112",
    title: "Natural Language Processing",
    description: ["Natural Language Processing (AAI112) is offered in Spring 2026."],
    availabilityNote: "No additional course description or public course material is available on the existing site.",
    offerings: [{ term: "2026 Spring" }],
  },
};
