import apiClient from "./ApiClient"; //  ApiClient.ts에서 axios 인스턴스 가져오기

//  Streak 데이터 타입 정의
export interface StreakData {
  handle: string;
  tier: number;
  divNum: number;
  startDate: string;
  totalStreak: number;
}

//  Division 데이터 타입 정의
export interface DivData {
  handle: string;
  totalHiting: number;
  rank: number;
  tier: number;
}

//  Event 데이터 타입 정의
export interface EventData {
  handle: string;
  tier: number;
  eventHiting: number;
}

//  API 응답 데이터 타입 정의
export interface ApiResponse {
  data: {
    div1List: DivData[];
    div2List: DivData[];
    div3List: DivData[];
    streakList: StreakData[];
    eventList: EventData[];
  };
}

//  백엔드에서 데이터를 가져오는 API 함수
export const fetchHitingData = async (): Promise<ApiResponse["data"]> => {
  try {
    const response = await apiClient.get<ApiResponse>("/"); //  API 엔드포인트 설정

    console.log("API 응답 데이터:", response.data); //  응답 데이터 확인

    //  `response.data.data`를 반환하여 타입 오류 방지
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
    console.error("Error fetching hiting data:", error);

    //  오류 발생 시 안전한 기본값 반환
    return {
      div1List: [],
      div2List: [],
      div3List: [],
      streakList: [],
      eventList: [],
    };
  }
};
