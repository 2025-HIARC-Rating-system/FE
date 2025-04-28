import apiClient from "./ApiClient";

export interface StreakData {
  handle: string;
  tier: number;
  div: number;
  seasonStreak: number;
  seasonTotal: number;
  totalStreak: number;
  startDate: string;
}

interface ApiResponse {
  data: {
    seasonTotal: number;
    streakList: StreakData[];
  };
}

export const fetchStreakData = async (): Promise<{
  seasonTotal: number;
  streakList: StreakData[];
}> => {
  try {
    const response = await apiClient.get<ApiResponse>("/streak");

    console.log("API 응답 데이터:", response.data);
    return response.data.data;
  } catch (error) {
    console.error("Streak 데이터 가져오기 실패:", error);
    return {seasonTotal: 0, streakList: []};
  }
};
