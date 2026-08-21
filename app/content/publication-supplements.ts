export const preprints = [
  { title:"MultiCube-RAG for Multi-hop Question Answering", authors:"Jimeng Shi, Wei Hu, Runchu Tian, Bowen Jin, Wonbin Kweon, SeongKu Kang, Yunfan Kang, Dingqi Ye, Sizhe Zhou, Shaowen Wang, Jiawei Han", note:"A training-free method consisting of multiple cubes for multi-step reasoning and retrieval.", link:"https://arxiv.org/pdf/2602.15898" },
  { title:"Graph Signal Processing for Cross-Domain Recommendation", authors:"Jeongeun Lee, SeongKu Kang, Won-Yong Shin, Jeongwhan Choi, Noseong Park, Dongha Lee", note:"A unified cross-domain recommendation framework based on graph signal processing.", link:"https://arxiv.org/pdf/2407.12374" },
];

export const patents = [
  ["세션 데이터의 불확실성에 기반한 선택적 대규모 언어모델의 의도 추출을 이용한 아이템 추천 모델 생성 방법 및 장치", "KR10-2026-0106597 · 2026", "강성구, 윤수식, 권원빈, 이규석"],
  ["보조 행동 편향 제거를 위한 환경 인식 기반 이분 그래프를 활용한 목표 행동 예측 방법 및 장치", "KR10-2026-0064498 · 2026", "강성구, 이승한"],
  ["미관측 데이터의 관측 데이터에 대한 친화도 점수 기반 이중 증류 추천 모델 학습 방법 및 장치", "KR10-2026-0055131 · 2026", "강성구, 이동하, 권원빈, 유환조"],
  ["개념 커버리지 분석에 기반한 다중 관점 쿼리 생성 및 조건부 문서 확장을 이용한 검색 모델 학습 방법 및 장치", "KR10-2026-0006139 · 2026", "강성구, 유환조, 이동하, 권원빈, 이제윤, 이준형"],
  ["동적 문서 스트림에서의 연속 정보 검색을 위한 적응적 소프트 메모리", "KR10-2026-0024816 · 2026", "윤수식, 손희정, 강현구, 김선호, 호수빈, 강성구, 이동하"],
  ["분자의 토포로지 정보를 이용한 딥러닝 기술기반 분자 군집화 장치 및 방법", "KR10-2023-0076575 · 2023", "유환조, 김수연, 이동하, 강성구, 이성현"],
];

export interface DomesticPublication {
  year: number;
  title: string;
  venue: string;
  authors: string;
  link?: string;
  recognition?: string;
}

export const domesticPublications: DomesticPublication[] = [
  { year: 2026, title: "SLM-LLM 기반 스키마 매칭 및 설명가능 인공지능을 활용한 데이터 자산 가격 예측 및 가치평가 연구", venue: "KCC 2026 (한국정보과학회 컴퓨터종합학술대회)", authors: "권순률, 강성구" },
  { year: 2026, title: "유튜브 트레일러 댓글 임베딩과 Multi-View Feature Selection을 활용한 북미 개봉 첫 주말 박스오피스 예측", venue: "KCC 2026 (한국정보과학회 컴퓨터종합학술대회)", authors: "서정범, 강성구" },
  { year: 2026, title: "운전자의 충전 행태 및 상권 맥락 정보를 결합한 전기차 충전소 추천 모델 연구", venue: "KCC 2026 (한국정보과학회 컴퓨터종합학술대회)", authors: "이람, 강성구" },
  {
    year: 2017,
    title: "효과적인 협업 필터링을 위한 신뢰 네트워크 밀도 강화 방안",
    venue: "KDBC 2017 (한국정보과학회 데이터베이스 소사이어티)",
    authors: "강성구, 왕재민, 이연창, 김상욱",
    link: "https://scholarworks.bwise.kr/hanyang/handle/2021.sw.hanyang/151151",
    recognition: "Best Paper Award",
  },
];
