export interface StockPoint {
  date: string;
  price: number;
}

export interface IndustryData {
  id: string;
  name: string;
  category: string;
  changeRate: number;
  currentPrice: number;
  description: string;
  trend: StockPoint[];
  impact: 'positive' | 'negative' | 'neutral';
}

export const INDUSTRIES: IndustryData[] = [
  {
    id: 'defense',
    name: '방위산업 (Defense)',
    category: '전략 산업',
    changeRate: 42.5,
    currentPrice: 158000,
    description: '중동 긴장 고조 및 글로벌 군비 증강 추세로 인한 수출 계약 급증.',
    impact: 'positive',
    trend: [
      { date: '2026-01', price: 100000 },
      { date: '2026-02', price: 115000 },
      { date: '2026-03', price: 158000 },
    ],
  },
  {
    id: 'energy',
    name: '에너지/정유 (Energy)',
    category: '원자재',
    changeRate: 28.2,
    currentPrice: 85000,
    description: '호르무즈 해협 봉쇄 우려로 인한 유가 급등 및 정제 마진 확대.',
    impact: 'positive',
    trend: [
      { date: '2026-01', price: 65000 },
      { date: '2026-02', price: 72000 },
      { date: '2026-03', price: 85000 },
    ],
  },
  {
    id: 'shipping',
    name: '해운/물류 (Shipping)',
    category: '인프라',
    changeRate: -15.4,
    currentPrice: 22000,
    description: '항로 폐쇄 및 보험료 인상으로 인한 운송 차질 및 비용 부담 가중.',
    impact: 'negative',
    trend: [
      { date: '2026-01', price: 28000 },
      { date: '2026-02', price: 25000 },
      { date: '2026-03', price: 22000 },
    ],
  },
  {
    id: 'semiconductor',
    name: '반도체 (Semiconductor)',
    category: 'IT/제조',
    changeRate: -8.2,
    currentPrice: 145000,
    description: '글로벌 공급망 불안정 및 소비 심리 위축으로 인한 단기적 하락세.',
    impact: 'negative',
    trend: [
      { date: '2026-01', price: 162000 },
      { date: '2026-02', price: 155000 },
      { date: '2026-03', price: 145000 },
    ],
  },
  {
    id: 'renewables',
    name: '신재생에너지 (Renewables)',
    category: '미래 산업',
    changeRate: 12.8,
    currentPrice: 45000,
    description: '화석 연료 의존도 탈피를 위한 에너지 안보 차원의 투자 가속화.',
    impact: 'positive',
    trend: [
      { date: '2026-01', price: 38000 },
      { date: '2026-02', price: 41000 },
      { date: '2026-03', price: 45000 },
    ],
  },
];

export const TIMELINE_EVENTS = [
  {
    date: '2026-02-15',
    title: '이란-이스라엘 전면전 발발',
    description: '중동 지역 긴장 최고조, 유가 배럴당 $120 돌파.',
  },
  {
    date: '2026-02-20',
    title: '호르무즈 해협 봉쇄 선언',
    description: '글로벌 해운 운임 급등 및 공급망 마비 시작.',
  },
  {
    date: '2026-03-05',
    title: '대한민국 방산 수출 긴급 회의',
    description: '폴란드 및 중동 국가들로부터의 K-방산 수요 폭증.',
  },
  {
    date: '2026-03-15',
    title: '에너지 안보 특별법 통과',
    description: '원전 및 신재생 에너지 비중 확대를 위한 국가 전략 수립.',
  },
];
