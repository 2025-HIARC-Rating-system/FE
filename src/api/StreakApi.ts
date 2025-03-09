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

// ✅ API 응답이 `{ data: { seasonTotal: number, streakList: StreakData[] } }` 형태라면
interface ApiResponse {
  data: {
    seasonTotal: number;
    streakList: StreakData[];
  };
}

// ✅ 백엔드에서 Streak 데이터를 가져오는 API 함수
export const fetchStreakData = async (): Promise<{
  seasonTotal: number;
  streakList: StreakData[];
}> => {
  try {
    const response = await apiClient.get<ApiResponse>("/streak");

    console.log("API 응답 데이터:", response.data); // ✅ 응답 데이터 확인
    return response.data.data;
  } catch (error) {
    console.error("Streak 데이터 가져오기 실패:", error);
    return {seasonTotal: 0, streakList: []};
  }
};
