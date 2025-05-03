import axios from "axios";

export const sendAdminLogin = async (password: string): Promise<string> => {
  const res = await axios.post("https://hi-rating.co.kr/auth/login", {
    handle: "brayden",
    password: password,
  });
  return res.data.accessToken;
};
