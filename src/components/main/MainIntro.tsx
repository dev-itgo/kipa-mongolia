import Image from "next/image";
import React from "react";

const MainIntro = () => {
  return (
    <div className="my-20">
      <Image
        src="/kipa-intro.jpg"
        width={820}
        height={461}
        alt="KIPA 소개"
        className="mb-14 w-full"
      />
      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        <h3 className="text-xl font-bold md:text-2xl">KIPA 소개</h3>
        <p className="font-[#f2f2f2] md:w-[68%] md:text-[16px]">
          KIPA는 일본, 베트남, 몽골 등 K-뷰티에 관심이 많은 국가를 대상으로
          열리는 글로벌 성형·뷰티 상담회입니다. <br />
          <br />
          한국의 성형외과 전문의, 피부과 의사, 그리고 헤어 & 메이크업 아티스트가
          직접 해외 현지를 방문하여, 고객이 1:1 맞춤 상담을 받을 수 있는 특별한
          기회를 제공합니다. 단순한 설명을 넘어, 고객에게 어울리는 시술은
          무엇인지, 어떤 병원이 적합한지, 실제로 어떤 결과를 기대할 수 있는지 등
          실질적인 궁금증을 현장에서 직접 확인하실 수 있습니다. <br />
          <br />
          상담회가 종료된 이후에도 시술 예약, 비자 발급, 항공권 및 숙소 안내,
          회복 케어에 이르기까지 전 과정에 걸쳐 KIPA가 체계적으로
          지원해드립니다. 한국에서의 시술이 낯설고 걱정되시는 분들도 안심하고
          준비하실 수 있습니다. 한국에 가지 않아도, 한국 의료진을 먼저 만날 수
          있는 기회.
          <br />
          <span className="text-[#00B0FB]">
            KIPA 상담회에서 시작해보시기 바랍니다.
          </span>
        </p>
      </div>
      <div className="mt-14 flex flex-col items-center bg-[#1C1C1C] px-2 py-8 text-center">
        <h5 className="text-[16px] font-bold md:text-lg">
          Beauty Beyond Borders
        </h5>
        <span className="my-4 h-[12px] w-1 -skew-x-12 bg-[#CECECE]"></span>
        <blockquote className="max-w-[580px] font-[#f2f2f2] md:text-[16px]">
          우리의 슬로건 ‘Beauty Beyond Borders’는 지리적, 문화적 경계를 넘어
          진정한 아름다움의 가치를 전 세계와 나누고자 하는 우리의 열정을 담고
          있습니다.
        </blockquote>
      </div>
    </div>
  );
};

export default MainIntro;
