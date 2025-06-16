import { JAPAN_REVIEW_DATA, THAILAND_REVIEW_DATA } from "@/data/review";
import MainVideo from "./MainVideo";
import MainReviewsSwiper from "./MainReviewsSwiper";

const MainReviews = () => {
  return (
    <div className="mb-24">
      <div className="text-center">
        <h3 className="mb-4 text-xl font-bold md:text-2xl">
          Өмнөх зөвлөгөөний үйл явдлууд
        </h3>
        <p className="text-sm text-[#f2f2f2] md:text-[16px]">
          Үйлчлүүлэгч ба эмч нарын уулзсан мөч, бодит үйл явдлыг сонирхоорой
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
            2024 оны 12-р сарын 7-8-ны өдрүүдэд Токиод зохион байгуулагдсан KIPA
            зөвлөгөөнд нийт 300 орчим хүн оролцож, амжилттай болж өндөрлөсөн.
          </p>
        </div>
      </div>
      <div className="my-8">
        <MainReviewsSwiper data={JAPAN_REVIEW_DATA} />
      </div>
      <hr className="my-10 border-t border-[#3e3e3e]" />
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3 aspect-[258/160] bg-slate-500 md:col-span-1">
          <MainVideo title="KIPA 2023 BANGKOK" videoId="JPwVJNJ2Guc" />
        </div>
        <div className="col-span-3 md:col-span-2">
          <h4 className="mb-4 text-sm font-bold md:text-[16px]">
            KIPA 2023 BANGKOK
          </h4>
          <p className="text-xs text-[#f2f2f2] md:text-sm">
            2023 оны 9-р сарын 21-24-ний хооронд Бангкокт болсон KIPA зөвлөгөөнд
            200 гаруй хүн оролцсон ба амжилттай болсон.
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
