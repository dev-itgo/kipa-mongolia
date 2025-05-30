export const KOREAN_NAMES = [
  "이영식",
  "김형석",
  "김재민",
  "박현수",
  "김하현",
  "유단희",
  "최성재",
  "김미리",
  "이영재",
  "김수진",
  "황찬영",
  "박해성",
  "전주연",
  "지수아",
  "이여지",
  "오아인",
  "김윤아",
  "엘레나",
  "대희",
  "아야코",
  "박규리",
  "주다은",
  "레미",
];

export const TIME_FORMATS = [
  { unit: "초", max: 30 },
  // { unit: "분", max: 10 }, // 최대 10분으로 제한
];

export const generateRandomTime = () => {
  const format = TIME_FORMATS[Math.floor(Math.random() * TIME_FORMATS.length)];
  const value = Math.floor(Math.random() * format.max) + 1;
  return `${value}${format.unit}`;
};

export const generateRandomToastMessage = () => {
  const randomName =
    KOREAN_NAMES[Math.floor(Math.random() * KOREAN_NAMES.length)];
  const randomTime = generateRandomTime();
  return `${randomName}님이 ${randomTime} 전에 신청하셨습니다.`;
};
