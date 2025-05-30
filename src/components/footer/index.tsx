import Image from "next/image";
import { SiYoutube } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiNaver } from "react-icons/si";
import PrivacyLink from "./PrivacyLink";
import TermsLink from "./TermsLink";

const Footer = () => {
  return (
    <footer className="container-2xl pt-6">
      <div className="mb-10 flex flex-col justify-between gap-y-3 md:flex-row">
        <div className="max-w-[700px]">
          <h1 className="mb-4">
            <Image src="/kipa-logo-w.png" alt="KIPA" width={96} height={13} />
          </h1>
          <div className="text-sm text-[#F2F2F2]">
            <ul className="flex flex-wrap gap-x-2 gap-y-1">
              <li>
                <TermsLink />
              </li>
              <li>
                <PrivacyLink />
              </li>
              <li>
                <a href="">Company Info</a>
              </li>
              <li>
                <a href="">Refund Policy</a>
              </li>
              <li>
                <a href="">Notice</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Career</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="mb-4">Recent News</h3>
          <ul className="flex gap-6">
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <SiYoutube size={20} />
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <SiInstagram size={20} />
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <SiFacebook size={20} />
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <SiNaver size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-xs text-[#F2F2F2]">
        <ul className="mb-1 flex flex-wrap gap-2">
          <li>대표 : 이영식 &nbsp;&nbsp;|</li>
          <li>개인정보보호책임자 : 김재민&nbsp;&nbsp;|</li>
          <li>사업자등록번호 : 533-86-03215</li>
        </ul>
        <ul className="mb-1 flex flex-wrap gap-2">
          <li>통신판매업 신고번호 : 제2025-경기안산-2005호&nbsp;&nbsp;|</li>
          <li>
            주소 : 203-80, 2F, 54 Gwangdeokseo-ro, Danwon-gu, Ansan-si,
            Gyeonggi-do
          </li>
        </ul>
        <ul className="mb-1 flex flex-wrap gap-2">
          <li>TEL : +82-70-8065-3034&nbsp;&nbsp;|</li>
          <li>
            E-MAIL : <a href="mailto:info@it-go.kr">info@it-go.kr</a>
          </li>
        </ul>
      </div>
      <div className="text-xs text-[#F2F2F2]">
        © 2025 KIPA All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
