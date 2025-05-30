import React from "react";

const Marketing = () => {
  return (
    <div className="space-y-6 text-sm text-neutral-700 dark:text-neutral-300">
      <section>
        <h3 className="mb-2 font-bold">목적</h3>
        <p>
          본인은 귀사가 제공하는 각종 상품, 서비스, 이벤트, 혜택, 신제품 안내 등
          마케팅 및 광고성 정보 수신에 동의합니다. 해당 정보는 SMS, 이메일, 앱
          푸시 등 다양한 방법으로 제공될 수 있습니다.
        </p>
      </section>

      <section>
        <h3 className="mb-2 font-bold">수집·이용 항목</h3>
        <ul className="list-disc space-y-1 pl-5">
          <li>이름</li>
          <li>휴대전화번호</li>
          <li>이메일</li>
          <li>(필요시) 소속, 직함 등 기타 정보</li>
        </ul>
      </section>

      <section>
        <h3 className="mb-2 font-bold">이용목적</h3>
        <ul className="list-disc space-y-1 pl-5">
          <li>신상품 및 서비스 안내</li>
          <li>이벤트, 경품, 사은 행사 등 각종 마케팅 정보 제공</li>
          <li>할인, 쿠폰 등 혜택 안내</li>
          <li>맞춤형 서비스 및 프로모션 안내</li>
        </ul>
      </section>

      <section>
        <h3 className="mb-2 font-bold">보유 및 이용기간</h3>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            동의일로부터 회원 탈퇴 또는 동의 철회 시까지 보유 및 이용합니다.
          </li>
          <li>비회원의 경우, 3년 보관 후 파기 또는 동의 철회 시까지 보유.</li>
        </ul>
      </section>

      <section>
        <h3 className="mb-2 font-bold">동의 거부 권리 및 불이익</h3>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            본 동의는 선택사항으로, 동의하지 않으셔도 서비스 이용에 제한이
            없습니다.
          </li>
          <li>
            단, 동의하지 않을 경우 각종 이벤트, 혜택, 신상품 안내 등 마케팅
            정보를 제공받지 못할 수 있습니다.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="mb-2 font-bold">동의 철회 방법</h3>
        <p>
          언제든지 앱/웹 내 설정, 개인정보관리 페이지, 고객센터 등을 통해 수신
          동의를 변경(동의/철회)하실 수 있습니다.
        </p>
      </section>
    </div>
  );
};

export default Marketing;
