import MainFaqAccordion from "./MainFaqAccordion";

const MainFaq = () => {
  return (
    <div className="mb-24">
      <div className="mb-10 text-center">
        <h3 className="mb-4 text-xl font-bold md:text-2xl">FAQ</h3>
        <p className="text-sm text-[#f2f2f2f] md:text-[16px]">
          고객님들이 가장 자주 궁금해하는 내용을 모아 정리했어요
        </p>
      </div>
      <MainFaqAccordion />
    </div>
  );
};

export default MainFaq;
