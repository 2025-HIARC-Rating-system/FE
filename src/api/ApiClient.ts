import axios from "axios";

// axios 인스턴스 생성 -> 매번 기본 설정 하기 어려우니
const apiClient = axios.create({
  baseURL: "https://hi-rating.co.kr",
  headers: {
    "Content-Type": "application/json",
  },
});

//axios 인스턴스의 요청 가로채기 기능 사용
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  console.log(`Request to ${config.url}`, config);
  return config;
});

export default apiClient;
