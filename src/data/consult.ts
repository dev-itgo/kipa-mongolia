type ConsultItem = {
  label: string;
  id: string;
  name: string;
  isEtc?: boolean;
};

const CONSULT_ITEM: ConsultItem[] = [
  {
    label: "눈성형",
    id: "eye",
    name: "eye",
  },
  {
    label: "코성형",
    id: "nose",
    name: "nose",
  },
  {
    label: "산부인과 (여성성형)",
    id: "woman",
    name: "woman",
  },
  {
    label: "비뇨기과 (남성성형)",
    id: "man",
    name: "man",
  },
  {
    label: "안면거상",
    id: "lifting",
    name: "lifting",
  },
  {
    label: "윤곽수술",
    id: "faceline",
    name: "faceline",
  },
  {
    label: "피부과 (비절개 리프팅)",
    id: "skin",
    name: "skin",
  },
  {
    label: "기타: ",
    id: "etc",
    name: "etc",
    isEtc: true,
  },
];

export default CONSULT_ITEM;
