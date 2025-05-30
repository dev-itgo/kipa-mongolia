import type { Metadata } from "next";
import { Noto_Sans_KR, Montserrat } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/components/providers/ToastProvider";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  preload: false,
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KIPA 울란바토르",
  description:
    "한국 아이돌이 찾는 실력있는 한국 의료진들이 울란바토르에 옵니다!",
  icons: {
    icon: "https://cdn.prod.website-files.com/67c9a4b839914d3ef7a9001d/67d280d493833e9ed3b0eb64_favicon-32x32.png",
    apple:
      "https://cdn.prod.website-files.com/67c9a4b839914d3ef7a9001d/67d280e255d5686102f4c1a1_Frame%201000007232.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSansKR.variable} ${montserrat.variable} antialiased`}
      >
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
