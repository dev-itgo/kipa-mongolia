/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Noto_Sans_KR, Montserrat } from "next/font/google";
import PixelProvider from "@/components/providers/PixelProvider";
import ToastProvider from "@/components/providers/ToastProvider";
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
  title: "KIPA Ulaanbaatar",
  description:
    "Солонгосын алдартнуудын сонгодог шилдэг эмч нар Улаанбаатарт ирнэ!",
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
    <html lang="mn">
      <head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '730401369458359');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=730401369458359&ev=PageView&noscript=1"
            alt="Meta Pixel Tracker"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body
        className={`${notoSansKR.variable} ${montserrat.variable} antialiased`}
      >
        <PixelProvider />
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
