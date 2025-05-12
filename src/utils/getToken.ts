const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET } = process.env;

// 실제 런칭 환경
// const env = process.env.NODE_ENV;
// const isDev = env === "development";

// export const base = isDev
//   ? "https://api-m.sandbox.paypal.com"
//   : "https://api-m.paypal.com";

// 테스트 환경
export const base = "https://api-m.sandbox.paypal.com";

export const generateAccessToken = async () => {
  if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
    throw new Error("MISSING_API_CREDENTIALS");
  }
  const auth = Buffer.from(
    PAYPAL_CLIENT_ID + ":" + PAYPAL_CLIENT_SECRET,
  ).toString("base64");
  const response = await fetch(`${base}/v1/oauth2/token`, {
    method: "POST",
    body: "grant_type=client_credentials",
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });

  const data = await response.json();
  return data.access_token;
};
