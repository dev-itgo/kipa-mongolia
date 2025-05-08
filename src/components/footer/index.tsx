import Image from "next/image";
import { SiYoutube } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiNaver } from "react-icons/si";

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
                <a href="">Terms of Use</a>
              </li>
              <li>
                <a href="">Privacy Statement</a>
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
        <ul className="flex flex-wrap gap-2">
          <li>대표 : 이영식 &nbsp;&nbsp;|</li>
          <li>개인정보보호책임자 : 김재민&nbsp;&nbsp;|</li>
          <li>사업자등록번호 : 533-86-03215</li>
        </ul>
        <ul className="flex flex-wrap gap-2">
          <li>통신판매업 신고번호 : 제2023-인천연수구-2044호&nbsp;&nbsp;|</li>
          <li>
            주소 : #317, Bldg D, 158, Harmony-ro, Yeonsu-gu, Incheon, Korea
          </li>
        </ul>
        <ul className="flex flex-wrap gap-2">
          <li>TEL : 070-8065-3034&nbsp;&nbsp;|</li>
          <li>E-MAIL : info@it-go.kr</li>
        </ul>
      </div>
      <div className="text-xs text-[#F2F2F2]">
        © 2025 KIPA All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
