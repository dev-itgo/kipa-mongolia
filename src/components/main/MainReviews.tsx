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
          <MainVideo
            title="KIPA 2024 TOKYO"
            videoUrl="https://www.youtube.com/embed/1XxH-j_srhk"
          />
        </div>
        <div className="col-span-3 md:col-span-2">
          <h4 className="mb-4 text-sm font-bold md:text-[16px]">
            KIPA 2024 TOKYO
          </h4>
          <p className="text-xs text-[#f2f2f2] md:text-sm">
            2024年12月7日から8日までの2日間、東京でKIPA相談会が成功的に行われました。会場：東京都港区赤坂五丁目2-33
          </p>
        </div>
      </div>
      <div className="my-8">
        <MainReviewsSwiper data={JAPAN_REVIEW_DATA} />
        {/* {JAPAN_REVIEW_DATA.map((review) => (
          <MainReviewItem
            key={review.id}
            desc={review.desc}
            reviewer={review.reviewer}
            type={review.type}
            image={review.image}
          />
        ))} */}
      </div>
      <hr className="my-10 border-t border-[#3e3e3e]" />
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3 aspect-[258/160] bg-slate-500 md:col-span-1">
          <MainVideo
            title="KIPA 2023 BANGKOK"
            videoUrl="https://www.youtube.com/embed/"
          />
        </div>
        <div className="col-span-3 md:col-span-2">
          <h4 className="mb-4 text-sm font-bold md:text-[16px]">
            KIPA 2023 BANGKOK
          </h4>
          <p className="text-xs text-[#f2f2f2] md:text-sm">
            2023年9月21日から24日までの4日間、バンコクでKIPA相談会が成功的に行われました。会場：1695
            Phaholyothin Road
          </p>
        </div>
      </div>
      <div className="my-8">
        <MainReviewsSwiper data={THAILAND_REVIEW_DATA} />
        {/* {THAILAND_REVIEW_DATA.map((review) => (
          <MainReviewItem
            key={review.id}
            desc={review.desc}
            reviewer={review.reviewer}
            type={review.type}
            image={review.image}
          />
        ))} */}
      </div>
    </div>
  );
};

export default MainReviews;
