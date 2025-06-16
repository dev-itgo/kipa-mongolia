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
    title:
      "Дэлхийн 4+ оронд зохион байгуулсан, нийт 2,000 хүнтэй зөвлөгөө хийсэн",
    description:
      "Дэлхийн 4+ оронд 10 гаруй удаа зохион байгуулагдсан бөгөөд 2000 гаруй хүнтэй 1:1 зөвлөгөө хийсэн, оролцогчдын 3 хүн тутмын 2 нь эмчилгээг захиалсан, 98%-ийн сэтгэл ханамжтай үнэлгээтэй итгэлтэй K-Beauty зөвлөгөөний арга хэмжээ юм.",
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
    title: "Солонгосын шилдэг 1% эмч нар таньтай биечлэн уулзана",
    description:
      "Солонгосын алдартнуудын сонгодог эмч , мянга мянган мэс засал хийсэн туршлагатай Солонгосын шилдэг 1%-ийн эмч нар Улаанбаатарт ирж, 1:1 зөвлөгөөг биечлэн хийнэ.",
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
    title: "K-Beauty чиглэлийг тэргүүлэгч эмнэлгүүд оролцож байна",
    description:
      "Mycell, EPIC гоо сайхны эмнэлэг, Pride гоо сайхны эмнэлэг, ARC, UBOM зэрэг Сөүл хотын шилдэг эмнэлгүүдийг оролцуулсан 8 эмнэлэг KIPA олон улсын зөвлөгөөн хамтарч байна. Тус бүрийн мэргэжлийн эмч нар өөрсдөө зөвлөгөөнд оролцож, хүн бүрт тохирсон 1:1 зөвлөгөө өгөхөөс гадна эмчилгээний өмнө ба дараах үе шат бүрт бүрэн мэдээлэл, дэмжлэг үзүүлнэ.",
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
