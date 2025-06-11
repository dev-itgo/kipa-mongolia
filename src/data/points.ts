export type MainPointImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type PointData = {
  images: MainPointImage[];
  count: number;
  title: string;
  description: string;
};

const POINTS_DATA: PointData[] = [
  {
    images: [
      {
        src: "/points/kipa-point01-02.webp",
        alt: "상담중",
        width: 1920,
        height: 1080,
      },
      {
        src: "/points/kipa-point01-03.webp",
        alt: "상담중",
        width: 1920,
        height: 1080,
      },
      {
        src: "/points/kipa-point01-01.webp",
        alt: "상담중",
        width: 1920,
        height: 1080,
      },
      {
        src: "/points/kipa-point01-04.webp",
        alt: "상담중",
        width: 1920,
        height: 1080,
      },
    ],
    count: 1,
    title: "전 세계 4개국 이상 개최,\n누적 0000명 상담",
    description:
      "전 세계 4개국 이상에서 10회 이상 개최되었으며, 누적 2,000명 이상의 1:1 상담을 진행하고 실제 참가자의 3명 중 2명이 시술을 예약한, 고객 만족도 98%의 신뢰받는 글로벌 K-뷰티 상담회입니다.",
  },
  {
    images: [
      {
        src: "/points/kipa-point02-01.webp",
        alt: "진료중",
        width: 1920,
        height: 1080,
      },
      {
        src: "/points/kipa-point02-02.webp",
        alt: "진료중",
        width: 1920,
        height: 1080,
      },
      {
        src: "/points/kipa-point02-03.webp",
        alt: "진료중",
        width: 1920,
        height: 1080,
      },
      {
        src: "/points/kipa-point02-04.webp",
        alt: "진료중",
        width: 1920,
        height: 1081,
      },
    ],
    count: 2,
    title: "한국 상위 1% 전문의가 직접 상담",
    description:
      "한국 아이돌이 찾는 실력 있는 의료진, 수천 건의 시술을 집도한 한국 상위 1% 전문의들이 울란바토르에 직접 방문해 1:1 상담을 진행합니다.",
  },
  {
    images: [
      {
        src: "/points/kipa-point03-01.webp",
        alt: "에픽성형외과",
        width: 1288,
        height: 691,
      },
      {
        src: "/points/kipa-point03-02.webp",
        alt: "에픽성형외과",
        width: 1920,
        height: 860,
      },
      {
        src: "/points/kipa-point03-03.webp",
        alt: "마이셀의원",
        width: 1288,
        height: 756,
      },
      {
        src: "/points/kipa-point03-04.webp",
        alt: "프라이드성형외과",
        width: 1920,
        height: 1121,
      },
      {
        src: "/points/kipa-point03-05.webp",
        alt: "아크성형외과",
        width: 1360,
        height: 765,
      },
    ],
    count: 3,
    title: "K-뷰티를 이끄는 병원들이 함께합니다",
    description:
      "마이셀의원, 에픽성형외과, 프라이드성형외과, 아크성형외과, 유봄성형외과, 등 서울 프리미엄 병원을 포함한 8개 주요 의료기관이 KIPA 글로벌 상담회에 함께 하고 있습니다.\n각 분과별 전문 의료진이 직접 상담회에 참여해 참가자 한 분 한 분을 위한 1:1 맞춤 상담은 물론, 시술 전후 전 과정에 대한 안내와 지원을 제공합니다.",
  },
];

export const LOCATIONS_IMAGES_DATA = [
  {
    src: "/location/blue-sky-hotel.jpg",
    alt: "블루스카이 호텔",
    width: 1024,
    height: 634,
  },
  {
    src: "/location/blue-sky-jadehall.jpg",
    alt: "블루스카이 호텔 제이드홀",
    width: 2000,
    height: 1333,
  },
];

export default POINTS_DATA;
