import type { Metadata } from "next";
import { Noto_Sans_KR, Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

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
  description: "Generated by create next app",
  icons: {
    icon: "https://cdn.prod.website-files.com/67c9a4b839914d3ef7a9001d/67d280d493833e9ed3b0eb64_favicon-32x32.png",
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
        <Toaster position="bottom-center" />
        {children}
      </body>
    </html>
  );
}
