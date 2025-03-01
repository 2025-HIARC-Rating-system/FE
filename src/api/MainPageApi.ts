// src/api.ts
import apiClient from "./ApiClient";

export const fetchHitingData = async () => {
  try {
    const response = await apiClient.get("/home"); // API 엔드포인트 수정
    return response.data;
  } catch (error) {
    console.error("Error fetching hiting data:", error);
    return null;
  }
};
