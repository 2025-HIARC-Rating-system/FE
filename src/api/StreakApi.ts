import apiClient from "./ApiClient"; // ✅ ApiClient.ts에서 axios 인스턴스 가져오기

export interface StreakData {
  handle: string;
  tier: number;
  div: number;
  seasonStreak: number;
  seasonTotal: number;
  totalStreak: number;
  startDate: string;
}

// ✅ 백엔드에서 Streak 데이터를 가져오는 API 함수
export const fetchStreakData = async (): Promise<StreakData[] | null> => {
  try {
    const response = await apiClient.get<StreakData[]>("/streak"); // ✅ axios 인스턴스 사용
    return response.data;
  } catch (error) {
    console.error("Streak 데이터 가져오기 실패:", error);
    return null;
  }
};
