import { FAQ_PART1, FAQ_PART2, FAQ_PART3 } from "@/data/faq";
import MainFaqAccordion from "./MainFaqAccordion";

const MainFaq = () => {
  return (
    <div className="mb-24">
      <div className="text-center">
        <h3 className="mb-4 text-xl font-bold md:text-2xl">FAQ</h3>
        <p className="text-sm text-[#f2f2f2f] md:text-[16px]">
          고객님들이 가장 자주 궁금해하는 내용을 모아 정리했어요
        </p>
      </div>
      <h4 className="mt-14 mb-6 inline-block bg-[#333] px-5 py-3 text-xs font-bold md:text-sm">
        Part 1. 카테고리
      </h4>
      <div className="grid grid-cols-1 gap-3">
        {FAQ_PART1.map((item) => (
          <MainFaqAccordion key={item.id} title={item.title} desc={item.desc} />
        ))}
      </div>

      <h4 className="mt-14 mb-6 inline-block bg-[#333] px-5 py-3 text-xs font-bold md:text-sm">
        Part 2. 카테고리
      </h4>
      <div className="grid grid-cols-2 gap-3">
        {FAQ_PART2.map((item) => (
          <MainFaqAccordion key={item.id} title={item.title} desc={item.desc} />
        ))}
      </div>

      <h4 className="mt-14 mb-6 inline-block bg-[#333] px-5 py-3 text-xs font-bold md:text-sm">
        Part 3. 카테고리
      </h4>
      <div className="grid grid-cols-1 gap-3">
        {FAQ_PART3.map((item) => (
          <MainFaqAccordion key={item.id} title={item.title} desc={item.desc} />
        ))}
      </div>
    </div>
  );
};

export default MainFaq;
