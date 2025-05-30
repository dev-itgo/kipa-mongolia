import React from "react";

const Privacy = () => {
  return (
    <div className="space-y-6 text-sm text-neutral-700 dark:text-neutral-300">
      <p>
        주식회사 잇고(이하 &quot;회사&quot;라 함)는 개인정보보호법 등 관련
        법령을 준수하며, 이용자의 개인정보를 안전하게 보호하기 위하여 다음과
        같이 개인정보처리방침을 수립·공개합니다.
      </p>

      <section>
        <h3 className="mb-2 font-bold">1. 개인정보의 처리 목적</h3>
        <p className="mb-2">
          회사는 다음의 목적을 위해 개인정보를 처리합니다. 수집한 개인정보는
          명시된 목적 이외의 용도로는 이용되지 않습니다.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>회원 가입 및 관리</li>
          <li>서비스 제공 및 상담</li>
          <li>민원처리 및 고지사항 전달</li>
          <li>마케팅 및 광고 활용(동의 시)</li>
        </ul>
      </section>

      <section>
        <h3 className="mb-2 font-bold">2. 처리하는 개인정보 항목</h3>
        <p className="mb-2">회사는 다음과 같은 개인정보 항목을 처리합니다.</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>필수항목: 이름, 연락처, 이메일 등</li>
          <li>선택항목: 주소, 생년월일 등</li>
        </ul>
      </section>

      <section>
        <h3 className="mb-2 font-bold">3. 개인정보의 처리 및 보유 기간</h3>
        <p className="mb-2">
          회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 동의받은
          기간 내에서 개인정보를 처리·보유합니다.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>회원정보: 회원 탈퇴 시까지</li>
          <li>
            관련 법령에 따른 보존: 전자상거래 등에서의 소비자 보호에 관한 법률
            등
          </li>
        </ul>
      </section>

      <section>
        <h3 className="mb-2 font-bold">4. 개인정보의 제3자 제공</h3>
        <p>
          회사는 원칙적으로 정보주체의 개인정보를 외부에 제공하지 않습니다.
          다만, 법령에 근거하거나 정보주체의 동의를 받은 경우에 한해 제공할 수
          있습니다.
        </p>
      </section>

      <section>
        <h3 className="mb-2 font-bold">5. 개인정보처리의 위탁</h3>
        <p>
          회사는 원활한 서비스 제공을 위해 개인정보 처리업무를 외부에 위탁할 수
          있습니다. 위탁 시 수탁자와 위탁업무 내용을 공개합니다.
        </p>
      </section>

      <section>
        <h3 className="mb-2 font-bold">
          6. 정보주체와 법정대리인의 권리·의무 및 행사방법
        </h3>
        <p>
          정보주체는 언제든지 개인정보 열람, 정정, 삭제, 처리정지 요구 등의
          권리를 행사할 수 있습니다.
        </p>
      </section>

      <section>
        <h3 className="mb-2 font-bold">7. 개인정보의 파기 절차 및 방법</h3>
        <p className="mb-2">
          회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가
          불필요하게 되었을 때에는 지체 없이 해당 정보를 파기합니다.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>전자적 파일: 복구 및 재생이 불가능한 방법으로 삭제</li>
          <li>종이 문서: 분쇄 또는 소각</li>
        </ul>
      </section>

      <section>
        <h3 className="mb-2 font-bold">8. 개인정보의 안전성 확보조치</h3>
        <p>
          회사는 개인정보의 안전성 확보를 위해 내부관리계획 수립, 접근권한 관리,
          암호화, 접속기록 보관, 물리적 접근통제 등 필요한 조치를 취하고
          있습니다.
        </p>
      </section>

      <section>
        <h3 className="mb-2 font-bold">
          9. 개인정보 보호책임자 및 고충처리 부서
        </h3>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            개인정보 보호책임자: 김재민 / 개인정보보호책임자 / 070-8065-3034
          </li>
          <li>고충처리 부서: 고객지원팀 / 070-8065-3034 / info@it-go.kr</li>
        </ul>
      </section>

      <section>
        <h3 className="mb-2 font-bold">
          10. 개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항
        </h3>
        <p>
          회사는 쿠키 등 자동 수집 장치를 운영할 수 있으며, 이용자는 이를 거부할
          수 있습니다.
        </p>
      </section>

      <section>
        <h3 className="mb-2 font-bold">11. 개인정보처리방침의 변경</h3>
        <p>
          이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 정책 변경에 따라
          내용이 추가·삭제·수정될 수 있습니다. 변경 시 사전 공지합니다.
        </p>
      </section>
    </div>
  );
};

export default Privacy;
