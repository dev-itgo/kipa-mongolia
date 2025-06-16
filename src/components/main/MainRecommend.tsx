type MainRecommendItemType = {
  title: string;
  desc: string;
};

type MainRecommendItemProps = MainRecommendItemType & {
  index: number;
};

const MainRecommendItemList = [
  {
    title:
      "Солонгос руу явахгүйгээр төрөлжсөн эмчтэй зөвлөгөө авах хүсэлтэй хүн",
    desc: "Танд өөрийн орондоо, Солонгос эмчтэй 1:1 биечлэн уулзах боломж",
  },
  {
    title:
      "Солонгост эмчилгээ хийлгэх эсэхээ шийдээгүй, мэдээлэл дутмаг байгаа хүн",
    desc: "Туршлагатай мэргэжилтнүүдээс бодит, үнэн зөв мэдээллийг шууд сонсох боломж",
  },
  {
    title: "Хэлний бэрхшээлгүйгээр зөв ойлголттой зөвлөгөө авах хүсэлтэй хүн",
    desc: "Орчуулга болон тусгай хариуцсан ажилтантай аюулгүй, ойлгомжтой орчинд зөвлөгөө",
  },
];

const MainRecommendItem = ({ index, title, desc }: MainRecommendItemProps) => {
  return (
    <li className="flex flex-col gap-2 rounded-lg bg-[#333] px-5 pt-7 pb-12">
      <p className="font-bold">{index + 1}</p>
      <h4 className="text-sm font-bold md:text-[16px]">{title}</h4>
      <p className="text-xs md:text-sm">{desc}</p>
    </li>
  );
};

const MainRecommend = () => {
  return (
    <div className="mb-24">
      <h3 className="mb-6 text-center text-[16px] font-bold md:text-lg">
        Дараах хүмүүст тохиромжтой
      </h3>
      <ul className="grid grid-cols-1 gap-2 lg:grid-cols-3">
        {MainRecommendItemList.map((item, index) => (
          <MainRecommendItem
            key={`main-recommend-item-${index}`}
            index={index}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </ul>
    </div>
  );
};

export default MainRecommend;
