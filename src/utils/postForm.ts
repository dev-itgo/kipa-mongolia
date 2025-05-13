import { FormData } from "@/components/main/AppForm";
import { PaypalResponseData } from "@/types/paypal";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default async function postForm(
  data: FormData,
  paypalData?: PaypalResponseData,
) {
  const response = await fetch(`${apiUrl}/api/submit-form`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...data, paypalData }),
  });

  return response;
}
