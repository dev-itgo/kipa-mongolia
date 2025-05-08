import MainCoupon from "./MainCoupon";
import MainPoint from "./MainPoint";
import MainRecommend from "./MainRecommend";

const MainPoints = () => {
  return (
    <>
      <MainPoint src="/kipa-point01.jpg" count={1}>
        <MainPoint.Title>
          전 세계 4개국 이상 개최, <br />
          누적 0000명 상담
        </MainPoint.Title>
        <MainPoint.Desc>
          전 세계 4개국 이상에서 10회 이상 개최되었으며, 누적 2,000명 이상의 1:1
          상담을 진행하고 실제 참가자의 3명 중 2명이 시술을 예약한, 고객 만족도
          98%의 신뢰받는 글로벌 K-뷰티 상담회입니다.
        </MainPoint.Desc>
      </MainPoint>
      <MainPoint src="/kipa-point01.jpg" count={2}>
        <MainPoint.Title>한국 상위 1% 전문의가 직접 상담</MainPoint.Title>
        <MainPoint.Desc>
          한국 아이돌이 찾는 실력 있는 의료진, 수천 건의 시술을 집도한 한국 상위
          1% 전문의들이 울란바토르에 직접 방문해 1:1 상담을 진행합니다.
        </MainPoint.Desc>
      </MainPoint>
      <MainPoint src="/kipa-point01.jpg" count={3}>
        <MainPoint.Title>K-뷰티를 이끄는 병원들이 함께합니다</MainPoint.Title>
        <MainPoint.Desc>
          에픽성형외과, 프라이드성형외과, 아크성형외과, 신상성형외과 등 서울
          프리미엄 병원을 포함한 8개 주요 의료기관이 KIPA 글로벌 상담회를 공식
          후원하며, 직접 의료진이 참여해 상담과 시술을 지원합니다.
        </MainPoint.Desc>
      </MainPoint>
      <MainRecommend />
      <MainCoupon count={4} />
    </>
  );
};

export default MainPoints;
