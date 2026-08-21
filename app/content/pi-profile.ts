import { majorResearchProjects } from "./research";

export interface ProfileEntry {
  period?: string;
  text: string;
  href?: string;
}

export interface ProfileSection {
  title: string;
  groups: {
    heading?: string;
    entries: ProfileEntry[];
  }[];
}

export const piProfileSections: ProfileSection[] = [
  {
    title: "Experiences",
    groups: [{ entries: [
      { period: "2026.03 – Current", text: "겸임 교수, 인공지능학과, 고려대학교" },
      { period: "2026.03 – Current", text: "겸임 교수, 데이터과학과, 고려대학교" },
      { period: "2025.03 – Current", text: "조교수, 컴퓨터학과, 고려대학교" },
      { period: "2023.08 – 2025.02", text: "박사후연구원, 컴퓨터학과, UIUC · Advisor: Prof. Jiawei Han" },
      { period: "2022.05 – 2023.04", text: "인턴, Social Computing Group, Microsoft Research Asia · Mentors: Dr. Xing Xie and Dr. Jianxun Lian" },
      { period: "2018.03 – 2023.08", text: "Ph.D., 컴퓨터학과, POSTECH · Advisor: Prof. Hwanjo Yu" },
    ] }],
  },
  {
    title: "Major R&D Projects",
    groups: [{ entries: majorResearchProjects.map((project) => ({ period: project.period, text: `${project.title} · ${project.partner}` })) }],
  },
  {
    title: "Awards and Distinctions",
    groups: [{ entries: [
      { period: "2026", text: "석탑 강의상 (빅데이터분석), 고려대학교" },
      { period: "2025", text: "석탑 강의상 (인공지능), 고려대학교" },
      { period: "2025", text: "Best Papers of WSDM 2025 선정" },
      { period: "2025", text: "국제 최우수 학술대회 튜토리얼 개최 ‘추천 시스템의 지속 학습 기술’, ACM CIKM" },
      { period: "2024", text: "Outstanding Reviewer, ACM KDD" },
      { period: "2023", text: "Stars of Tomorrow Award, Microsoft Research Asia" },
      { period: "2023", text: "포스테키안 Fellowship, POSTECH" },
      { period: "2022", text: "POSTECH 대표 우수 연구 성과 선정, POSTECH & 한국연구재단" },
      { period: "2021", text: "네이버 Ph.D. Fellowship, NAVER" },
      { period: "2020", text: "Ranked 3rd at Music Playlist Recommendation Competition, 카카오" },
      { period: "2019 – 2020", text: "SIGIR Student Travel Award, ACM SIGIR" },
    ] }],
  },
  {
    title: "Talks",
    groups: [{ entries: [
      { period: "2026", text: "‘지식 구조화 기반 학술 논문 검색’, 데이터 인텔리전스 워크샵" },
      { period: "2026", text: "‘지식 구조화 기반 학술 논문 검색’, 컴퓨터공학과/인공지능학과 세미나, POSTECH" },
      { period: "2025", text: "‘추천 시스템의 지속 학습 기술’, 튜토리얼, ACM CIKM" },
      { period: "2025", text: "‘언젠가는 슬기로울 대학원 생활’, 데이터 인텔리전스 워크샵" },
      { period: "2023", text: "‘랭킹 모델을 위한 지식 증류 기술’, 컴퓨터공학과/인공지능학과 세미나, UNIST" },
      { period: "2023", text: "‘정확하고 효율적인 추론을 위한 이종 모델 앙상블 지식 증류 기술’, Electronic & Information Research Information Center" },
      { period: "2023", text: "‘랭킹 증류 및 편향 완화 기술’, Microsoft Research Asia" },
      { period: "2022", text: "‘실세계 적용을 위한 거대 추천 시스템 경량화 기술’, Korea AI Summit" },
    ] }],
  },
  {
    title: "Teaching",
    groups: [{ heading: "고려대학교", entries: [
      { text: "인공지능 (2025S, 2026S)", href: "/teaching/cose361-artificial-intelligence" },
      { text: "빅데이터분석 (2025F)", href: "/teaching/data304-bigdata-analysis" },
      { text: "텍스트마이닝 (2025F)", href: "/teaching/aai114-text-mining" },
      { text: "자연어처리 (2026S)", href: "/teaching/aai112-natural-language-processing" },
    ] }],
  },
  {
    title: "Professional Services",
    groups: [
      { heading: "Area Chair / Senior Program Committee", entries: [
        { period: "2026 – 2027", text: "ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD)" },
        { period: "2026", text: "System Demonstration Track, Conference on Empirical Methods in Natural Language Processing (EMNLP)" },
        { period: "2027", text: "AAAI Conference on Artificial Intelligence (AAAI)" },
      ] },
      { heading: "Program Committee / Reviewer", entries: [
        { period: "2023 – 2026", text: "ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD)" },
        { period: "2024 – 2025", text: "ACM International World-Wide Web Conference (WWW)" },
        { period: "2024 – 2026", text: "AAAI Conference on Artificial Intelligence (AAAI)" },
        { period: "2025 – 2026", text: "ACM SIGIR Conference on Research and Development in Information Retrieval (SIGIR)" },
        { period: "2024", text: "SIAM Conference on Data Mining (SDM)" },
        { period: "2026", text: "Computer Vision and Pattern Recognition (CVPR)" },
        { period: "2026", text: "Advances in Neural Information Processing Systems (NeurIPS)" },
        { period: "2026", text: "ACM International Conference on Information and Knowledge Management (CIKM)" },
        { period: "2026", text: "IEEE International Conference on Data Mining (ICDM)" },
        { period: "2026", text: "ACM AI Summit" },
      ] },
      { heading: "Journal Reviewer", entries: [
        { text: "Transactions on Information Systems (TOIS)" },
        { text: "Transactions on Knowledge and Data Engineering (TKDE)" },
        { text: "Knowledge-Based Systems (KnoSys)" },
        { text: "Neural Computing and Applications" },
      ] },
      { heading: "Others", entries: [
        { period: "2026", text: "Tutorial Organizer, DASFAA" },
        { period: "2025", text: "Tutorial Organizer, CIKM" },
        { period: "2025", text: "Ph.D. Mentor, CIKM Ph.D. Symposium" },
      ] },
    ],
  },
];
