import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PaymentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pb-40 md:pb-24">
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
