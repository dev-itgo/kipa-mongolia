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
          KIPA는 일본, 베트남, 몽골은 물론, K-뷰티에 대한 관심이 높은 전 세계
          여러 국가를 대상으로 개최되는 글로벌 의료·뷰티 상담회입니다. <br />
          <br />
          한국의 성형외과, 피부과를 비롯한 다양한 진료과목의 의료진이 직접 해외
          현지를 방문하여 고객 한 분 한 분에게 맞춤형 1:1 상담 기회를
          제공합니다. 단순한 시술 설명에서 나아가, 고객의 고민 부위에 적합한
          시술 및 수술을 제안해드리며, 실제 시술 과정, 자주 묻는 질문들에 대한
          답변, 그리고 시술 후 기대되는 결과까지 모든 궁금증을 현장에서 직접
          해결하실 수 있습니다. <br />
          <br />
          상담회 종료 이후에도 KIPA는 시술 예약은 물론, 비자 발급, 항공권 및
          숙소 안내, 병원 안내 및 통역 서비스, 시술 후 회복 관리에 이르기까지 전
          과정에 걸쳐 체계적인 서비스를 제공합니다.
          <br />
          한국 의료가 처음이거나 어려웠던 분들도, KIPA와 함께라면 안심하고
          준비하실 수 있습니다. <br />
          <span className="text-[#00B0FB]">
            한국에 가지 않고도 한국 의료진을 먼저 만날 수 있는 기회. <br />
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
