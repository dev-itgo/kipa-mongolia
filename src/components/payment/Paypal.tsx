"use client";
import React from "react";
import { fetchPost } from "@/utils/paypal";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import postForm from "@/utils/postForm";

interface PaypalProps {
  onProcessingChange: (isProcessing: boolean) => void;
}

function Paypal({ onProcessingChange }: PaypalProps) {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!;
  const price = 1;
  const router = useRouter();
  const formData = sessionStorage.getItem("formData");

  if (!formData) {
    return null;
  }

  const parsedFormData = JSON.parse(formData);

  return (
    <PayPalScriptProvider options={{ clientId, locale: "en_US" }}>
      <PayPalButtons
        style={{
          color: "gold",
          shape: "pill",
          label: "paypal",
          layout: "vertical",
          height: 50,
          tagline: false,
        }}
        createOrder={async () => {
          const apiURL = "/api/paypal/order/create";
          const res = await fetchPost(apiURL, { price });
          return res.ok ? res.data.id : null;
        }}
        onApprove={async (data) => {
          onProcessingChange(true);
          try {
            const { orderID } = data;
            const apiURL = "/api/paypal/order/capture";
            const res = await fetchPost(apiURL, { orderID });
            console.log(res);
            if (res.ok) {
              sessionStorage.setItem("paypalData", JSON.stringify(res));
              toast.success("결제가 완료되었습니다.");
              await postForm(parsedFormData, res.data);
              router.push("/payment/complete");
            } else {
              toast.error("결제에 실패했습니다.");
            }
          } catch (error) {
            console.error("Payment error:", error);
            toast.error("결제 처리 중 오류가 발생했습니다.");
          } finally {
            onProcessingChange(false);
          }
        }}
        onError={() => {
          onProcessingChange(false);
          toast.error("결제 처리 중 오류가 발생했습니다.");
        }}
        onCancel={() => {
          onProcessingChange(false);
          toast.error("결제가 취소되었습니다.");
        }}
      />
    </PayPalScriptProvider>
  );
}

export default Paypal;
