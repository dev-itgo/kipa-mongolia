import { IoMdCheckmark } from "react-icons/io";
import MainCouponApplyButton from "./MainCouponApplyButton";

type MainCouponProps = {
  count: number;
};

const MainCoupon = ({ count }: MainCouponProps) => {
  return (
    <div className="mb-24">
      <div className="mx-auto mb-6 w-fit rounded-full border-2 border-[#00B0FB] px-4 py-2 text-center font-bold text-[#00B0FB]">
        Point {count < 10 ? `0${count}` : count}.
      </div>
      <h3 className="mb-6 text-center text-[16px] font-bold md:text-lg">
        지금까지의 상담회와는 차원이 다릅니다
      </h3>
      <div className="relative flex flex-col rounded-lg bg-[#222] before:absolute before:top-0 before:left-1/2 before:hidden before:h-4 before:w-2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-black after:absolute after:bottom-0 after:left-1/2 after:hidden after:h-4 after:w-2 after:-translate-x-1/2 after:translate-y-1/2 after:rounded-full after:bg-black md:flex-row before:md:block after:md:block">
        <div className="p-8 md:w-1/2">
          <h4 className="text-2xl font-bold">KIPA Ulaanbaatar</h4>
        </div>
        <div className="p-6 md:w-1/2 md:border-l-2 md:border-dashed md:border-l-black">
          <ul className="flex flex-col gap-2 *:flex *:items-center *:font-bold *:md:text-[16px]">
            <li className="">
              <span className="mr-3 flex h-5 w-5 items-center justify-center rounded-sm bg-[#00B0FB]">
                <IoMdCheckmark />
              </span>
              전 과정 1:1 프라이빗 상담
            </li>
            <li className="">
              <span className="mr-3 flex h-5 w-5 items-center justify-center rounded-sm bg-[#00B0FB]">
                <IoMdCheckmark />
              </span>
              한국 최고의 의료진과 직접 상담
            </li>
            <li className="">
              <span className="mr-3 flex h-5 w-5 items-center justify-center rounded-sm bg-[#00B0FB]">
                <IoMdCheckmark />
              </span>
              몽골어 전문 통역사 동반
            </li>
            <li className="">
              <span className="mr-3 flex h-5 w-5 items-center justify-center rounded-sm bg-[#00B0FB]">
                <IoMdCheckmark />
              </span>
              현장 한정 혜택 제공 (시술할인/사은품 등)
            </li>
            <li className="justify-between">
              <div className="flex items-center">
                <span className="mr-3 flex h-5 w-5 items-center justify-center rounded-sm bg-[#00B0FB]">
                  <IoMdCheckmark />
                </span>
                상담비 무료
              </div>
              <p className="font-bold text-[#00b0fb]">
                (100%){" "}
                <span className="text-[#a6a6a6] line-through">50,000원</span>
              </p>
            </li>
          </ul>
          <hr className="my-4 border-black" />
          <div className="mb-8 flex justify-between">
            <p className="text-[16px] font-bold">판매가</p>
            <div className="flex-1 text-right">
              <p className="text-[16px] font-bold line-through">255,000원</p>
              <p className="text-2xl font-bold">0원</p>
              <p className="text-xs text-[#a6a6a6]">* 선착순 100명 한정 혜택</p>
            </div>
          </div>
          <MainCouponApplyButton />
        </div>
      </div>
    </div>
  );
};

export default MainCoupon;
