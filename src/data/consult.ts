type ConsultItem = {
  label: string;
  id: string;
  name: string;
  isEtc?: boolean;
};

const CONSULT_ITEM: ConsultItem[] = [
  // {
  //   label: "Зовхи гоо сайхны мэс засал",
  //   id: "eye",
  //   name: "eye",
  // },
  // {
  //   label: "Хамар гоо сайхны мэс засал",
  //   id: "nose",
  //   name: "nose",
  // },
  {
    label: "Эмэгтэйчүүд (эмэгтэйчүүдийн пластик мэс засал)",
    id: "woman",
    name: "woman",
  },
  // {
  //   label: "Эрэгтэйчүүд (Эрэгтэйчүүдийн пластик мэс засал)",
  //   id: "man",
  //   name: "man",
  // },
  // {
  //   label: "Арьс өргөх мэс засал",
  //   id: "lifting",
  //   name: "lifting",
  // },
  {
    label: "Нүүрний хэлбэр засах ясны мэс засал (15:00 хүртэлх цаг дууссан.)",
    id: "faceline",
    name: "faceline",
  },
  // {
  //   label: "Арьсны тасаг ( мэсийн бус аргаар арьс өргөх )",
  //   id: "skin",
  //   name: "skin",
  // },
  {
    label: "Бусад: ",
    id: "etc",
    name: "etc",
    isEtc: true,
  },
];

export default CONSULT_ITEM;
