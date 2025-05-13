import React from "react";
import MainCoupon from "./MainCoupon";
import MainPoint from "./MainPoint";
import MainRecommend from "./MainRecommend";

const POINTS_DATA = [
  {
    src: "/kipa-point01.jpg",
    count: 1,
    title: "전 세계 4개국 이상 개최,\n누적 0000명 상담",
    description:
      "전 세계 4개국 이상에서 10회 이상 개최되었으며, 누적 2,000명 이상의 1:1 상담을 진행하고 실제 참가자의 3명 중 2명이 시술을 예약한, 고객 만족도 98%의 신뢰받는 글로벌 K-뷰티 상담회입니다.",
  },
  {
    src: "/kipa-point01.jpg",
    count: 2,
    title: "한국 상위 1% 전문의가 직접 상담",
    description:
      "한국 아이돌이 찾는 실력 있는 의료진, 수천 건의 시술을 집도한 한국 상위 1% 전문의들이 울란바토르에 직접 방문해 1:1 상담을 진행합니다.",
  },
  {
    src: "/kipa-point01.jpg",
    count: 3,
    title: "K-뷰티를 이끄는 병원들이 함께합니다",
    description:
      "마이셀의원, 에픽성형외과, 프라이드성형외과, 아크성형외과, 유봄성형외과, 등 서울 프리미엄 병원을 포함한 8개 주요 의료기관이 KIPA 글로벌 상담회에 함께 하고 있습니다.\n각 분과별 전문 의료진이 직접 상담회에 참여해 참가자 한 분 한 분을 위한 1:1 맞춤 상담은 물론, 시술 전후 전 과정에 대한 안내와 지원을 제공합니다.",
  },
];

const formatText = (text: string) => {
  return text.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {index > 0 && <br />}
      {line}
    </React.Fragment>
  ));
};

const MainPoints = () => {
  return (
    <>
      {POINTS_DATA.map((point) => (
        <MainPoint key={point.count} src={point.src} count={point.count}>
          <MainPoint.Title>{formatText(point.title)}</MainPoint.Title>
          <MainPoint.Desc>{formatText(point.description)}</MainPoint.Desc>
        </MainPoint>
      ))}
      <MainRecommend />
      <MainCoupon count={4} />
    </>
  );
};

export default MainPoints;
