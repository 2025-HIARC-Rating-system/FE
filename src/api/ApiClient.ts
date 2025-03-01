import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://3.36.9.192:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  console.log(`Request to ${config.url}`, config);
  return config;
});

export default apiClient;
