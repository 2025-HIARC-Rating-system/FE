import apiClient from "./ApiClient"; // ✅ Axios 인스턴스 가져오기
import {HitingDataState} from "../store/Atom";

// ✅ API 응답 데이터 타입 정의
export interface ApiResponse {
  data: HitingDataState;
}

// ✅ 백엔드에서 데이터를 가져오는 API 함수
export const fetchHitingData = async (): Promise<HitingDataState> => {
  try {
    const response = await apiClient.get<ApiResponse>("/");
    console.log("✅ API 응답 데이터:", response.data);

    // 데이터 반환 (만약 데이터가 없으면 기본값 제공)
    return (
      response.data.data || {
        div1List: [],
        div2List: [],
        div3List: [],
        streakList: [],
        eventList: [],
      }
    );
  } catch (error) {
    console.error("❌ API 요청 실패:", error);
    throw new Error("데이터를 불러오는 데 실패했습니다.");
  }
};
