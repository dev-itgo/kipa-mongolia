import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PaymentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pt-14 pb-40 md:pt-[68px] md:pb-24">
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
