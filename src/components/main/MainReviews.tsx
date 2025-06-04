import { JAPAN_REVIEW_DATA, THAILAND_REVIEW_DATA } from "@/data/review";
import MainVideo from "./MainVideo";
import MainReviewsSwiper from "./MainReviewsSwiper";

const MainReviews = () => {
  return (
    <div className="mb-24">
      <div className="text-center">
        <h3 className="mb-4 text-xl font-bold md:text-2xl">지난 상담회 현장</h3>
        <p className="text-sm text-[#f2f2f2] md:text-[16px]">
          실제 고객과 의료진이 만났던 현장, 생생한 순간을 확인해보세요
        </p>
      </div>
      <hr className="my-10 border-t border-[#3e3e3e]" />
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3 aspect-[258/160] bg-slate-500 md:col-span-1">
          <MainVideo title="KIPA 2024 TOKYO" videoId="1XxH-j_srhk" />
        </div>
        <div className="col-span-3 md:col-span-2">
          <h4 className="mb-4 text-sm font-bold md:text-[16px]">
            KIPA 2024 TOKYO
          </h4>
          <p className="text-xs text-[#f2f2f2] md:text-sm">
            2024년 12월 7일부터 8일까지 2일간 도쿄에서 열린 KIPA 상담회에는 약
            300명의 고객이 방문하며 성공적으로 마무리되었습니다.
          </p>
        </div>
      </div>
      <div className="my-8">
        <MainReviewsSwiper data={JAPAN_REVIEW_DATA} />
      </div>
      <hr className="my-10 border-t border-[#3e3e3e]" />
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3 aspect-[258/160] bg-slate-500 md:col-span-1">
          {/* <MainVideo title="KIPA 2023 BANGKOK" /> */}
        </div>
        <div className="col-span-3 md:col-span-2">
          <h4 className="mb-4 text-sm font-bold md:text-[16px]">
            KIPA 2023 BANGKOK
          </h4>
          <p className="text-xs text-[#f2f2f2] md:text-sm">
            2023년 9월 21일부터 24일까지 4일간 방콕에서 열린 KIPA 상담회 역시 약
            200명의 고객이 참석하며 성황리에 진행되었습니다.
          </p>
        </div>
      </div>
      <div className="my-8">
        <MainReviewsSwiper data={THAILAND_REVIEW_DATA} />
      </div>
    </div>
  );
};

export default MainReviews;
