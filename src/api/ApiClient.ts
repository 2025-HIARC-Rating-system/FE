import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://hi-rating.co.kr",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  console.log(`Request to ${config.url}`, config);
  return config;
});

export default apiClient;
