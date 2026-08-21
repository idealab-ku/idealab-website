import type { FaqItem } from "./types";
import { siteInfo } from "./site";

export const application = {
  email: siteInfo.contactEmail,
  recruiting: "We are currently recruiting graduate students and undergraduate research interns.",
  instructions: "Please send (1) a self-introduction, (2) CV, and (3) your academic transcript to",
  statusNotices: [
    "2027학년도 전기 대학원생 모집은 마감되었습니다.",
    "최대 지도 가능 인원에 도달하여, SW·AI융합대학원 논문 지도 요청은 더 이상 받고 있지 않습니다.",
  ],
};

export const faqItems: FaqItem[] = [
  {
    id: "research-focus",
    question: "What is your research group focused on?",
    content: [{ type: "paragraph", text: "Our research group is currently exploring various topics in recommender systems, search systems, and data/web mining, with a particular emphasis on large language models (LLMs) as reasoning agents. For detailed descriptions of each research area and our latest studies, please refer to the research page." }],
    link: { label: "View research areas", href: "/research" },
  },
  {
    id: "background",
    question: "Do I need to have any qualifications to join your research group?",
    content: [
      { type: "paragraph", text: "To begin full-scale research upon admission, a basic understanding of machine learning is essential. In particular, applicants are expected to have:" },
      { type: "list", items: [
        "Sufficient English proficiency to read and understand research papers",
        "Strong mathematical foundations to analyze and compare existing methods",
        "Solid programming skills to interpret and modify publicly available code.",
      ] },
      { type: "paragraph", text: "While relevant research experience is beneficial, most importantly, we value a strong passion for growth as a researcher. Although no one is expected to be perfect in all areas from the start, these fundamentals require time and steady effort to build. Therefore, gaining prior experience through relevant courses or online classes will help you develop research skills more effectively." },
      { type: "paragraph", text: "If you are simply seeking to obtain a graduate degree, no matter how strong your academic background or GPA may be, we are respectfully not interested in working with you." },
      { type: "paragraph", text: "We strongly recommend individuals who are interested in joining our research group to complete an internship with us before applying for a graduate research position. This will give you the opportunity to learn more about our research and determine if it is the right fit for you." },
    ],
    link: { label: "Course and online class references", href: "https://docs.google.com/document/d/1J1jIGxF-mzG6hZIttRx_J6h3oFI66G1M2wuGuLD1zEk/edit?usp=sharing" },
  },
  {
    id: "mentorship",
    question: "What kind of mentorship and guidance can I expect as a research group member?",
    content: [{ type: "paragraph", text: "As an advisor, I am committed to supporting the growth and success of our lab members. I provide comprehensive mentorship in selecting research topics, conducting studies, and writing papers, along with regular lab seminars and one-on-one meetings. Once students demonstrate strong research capabilities, I facilitate opportunities for collaborative research and internships with leading companies and top international universities." }],
  },
  {
    id: "undergraduate-applications",
    question: "Can undergraduate students apply to join your research group?",
    content: [
      { type: "paragraph", text: "Yes, undergraduate students are welcome to apply to join our research group as interns. We offer opportunities for undergraduate students to gain research experience and contribute to ongoing research projects. Applicants should have a background in machine learning and deep learning." },
      { type: "paragraph", text: "Undergraduate internships are offered twice a year, starting during the summer and winter academic breaks. The default duration of the internship corresponds to the break period, and any extension beyond that will be determined by mutual agreement. Applications should be submitted via email and may close early depending on the number of applicants." },
    ],
  },
];
