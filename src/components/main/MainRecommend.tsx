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
      "한국까지 가지 않고 한국의 각 분과별 전문 의료진과 상담받고 싶은 사람",
    desc: "현지에서 직접, 한국 의료진과 1:1로 상담 받을 수 있는 기회",
  },
  {
    title: "한국 시술을 고민 중이나 정보가 부족한 사람",
    desc: "신뢰할 수 있는 전문 의료진이 직접 전하는 정확하고 생생한 시술 정보",
  },
  {
    title: "언어 문제 없이 정확한 상담을 받고 싶은 사람",
    desc: "현지 통역과 전담 매니저가 함께하는 안심 상담 환경",
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
        이런 분에게 추천합니다
      </h3>
      <ul className="flex flex-col gap-2 md:flex-row">
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
