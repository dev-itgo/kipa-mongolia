import React from "react";

const KeyVisual = () => {
  return (
    <section className="relative h-[480px] bg-slate-400">
      <div className="absolute top-0 right-0 bottom-0 left-0 flex items-end bg-gradient-to-b from-transparent to-black">
        <div className="container-2xl">
          <h2 className="text-2xl font-bold break-keep md:text-[34px]">
            한국 아이돌이 찾는 실력있는 한국 의료진들이 울란바토르에 옵니다!
          </h2>
          <p>2025.06.14(토) ~ 06.15(일), 장소명(미정)</p>
          <ul className="mt-8 flex gap-2">
            <li className="rounded bg-[#141414] px-2 py-1.5">통역 지원</li>
            <li className="rounded bg-[#141414] px-2 py-1.5">1:1 무료 상담</li>
            <li className="rounded bg-[#141414] px-2 py-1.5">특별 혜택</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default KeyVisual;
