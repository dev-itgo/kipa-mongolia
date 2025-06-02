import KeyVisualSwiper from "./KeyVisualSwiper";

const KeyVisual = () => {
  return (
    <section className="relative aspect-[4/3] md:aspect-auto md:h-[480px]">
      <KeyVisualSwiper />
      <div className="pointer-events-none absolute top-16 right-0 -bottom-10 left-0 z-10 flex items-end bg-gradient-to-b from-transparent to-black md:bottom-0">
        <div className="container-2xl">
          <h2 className="text-2xl font-bold break-keep md:text-[34px]">
            한국 아이돌이 찾는 실력있는 한국 의료진들이 울란바토르에 옵니다!
          </h2>
          <p>2025.6.29(일), 블루스카이 호텔 제이드홀</p>
          <ul className="mt-4 flex gap-2 md:mt-8">
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
