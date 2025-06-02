import { FAQ_PART1 } from "@/data/faq";
import MainFaqAccordion from "./MainFaqAccordion";

const MainFaq = () => {
  const midPoint = Math.ceil(FAQ_PART1.length / 2);
  const leftColumn = FAQ_PART1.slice(0, midPoint);
  const rightColumn = FAQ_PART1.slice(midPoint);

  return (
    <div className="mb-24">
      <div className="mb-14 text-center">
        <h3 className="mb-4 text-xl font-bold md:text-2xl">FAQ</h3>
        <p className="text-sm text-[#f2f2f2f] md:text-[16px]">
          고객님들이 가장 자주 궁금해하는 내용을 모아 정리했어요
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        <div className="space-y-3">
          {leftColumn.map((item) => (
            <MainFaqAccordion
              key={item.id}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
        <div className="space-y-3">
          {rightColumn.map((item) => (
            <MainFaqAccordion
              key={item.id}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainFaq;
