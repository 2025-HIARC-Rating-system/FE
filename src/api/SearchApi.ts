import {AxiosError} from "axios";
import apiClient from "./ApiClient";

export interface SearchData {
  handle: string;
  tier: number;
  divNum: number;
  rank: number;
  startDate: string;
  totalStreak: number;
  seasonStreak: number;
  seasonTotal: number;
  totalHiting: number;
  seasonHiting: number;
  dailyHiting: number;
}

export const fetchSearchData = async (
  handle: string
): Promise<SearchData | null> => {
  try {
    const response = await apiClient.get<{data: SearchData}>(
      `/search?handle=${handle}`
    );
    console.log(" 성공: 검색 데이터 받아옴", response.data);
    return response.data.data;
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      if (err.response?.status === 404) {
        console.warn(" 해당 핸들의 정보를 찾을 수 없습니다.");
        return null;
      }
      console.error(" API 요청 실패:", err.response?.data || err.message);
    } else {
      console.error(" 알 수 없는 오류 발생:", err);
    }
    throw new Error("데이터를 불러오는 중 오류가 발생했습니다.");
  }
};
