/* eslint-disable @typescript-eslint/no-explicit-any */
type ServerFetchResult = {
  ok: boolean;
  code: number;
  msg?: string;
  data?: any;
};

export const fetchPost = async (url: string, body: object = {}) => {
  const res: ServerFetchResult = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());

  return res;
};
