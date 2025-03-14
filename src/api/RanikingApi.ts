import apiClient from "./ApiClient"; // ✅ apiClient import

// ✅ 데이터 타입 정의
interface RankingItem {
  handle: string;
  tier: number;
  isEvent: boolean;
  dailyHiting: number;
  totalHiting: number;
}

// ✅ 랭킹 데이터를 가져오는 함수 (selected 값을 받아서 동적 요청)
export const fetchRankingData = async (selected: number) => {
  try {
    const response = await apiClient.get<{
      data: {streakRatio: number; rankingList: RankingItem[]};
    }>(`/rating/${selected}`);

    console.log("✅ Success: 랭킹 데이터 받아옴", response.data);

    // ✅ 응답 구조 확인 후 처리
    if (!response.data.data) {
      console.warn("⚠️ 데이터 구조가 예상과 다릅니다. 빈 배열을 반환합니다.");
      return []; // ✅ 빈 배열 반환하여 undefined 방지
    }

    return response.data.data.rankingList.map((item, index) => ({
      num: index + 1,
      handle: item.handle,
      tier: item.tier,
      event: item.isEvent,
      today: item.dailyHiting,
      total: item.totalHiting,
    }));
  } catch (err) {
    console.error("❌ API 요청 실패:", err);
    return []; // ✅ 빈 배열 반환하여 undefined 방지
  }
};

export const fetchGraphData = async (selected: number) => {
  try {
    const response = await apiClient.get<{
      data: {streakRatio: number; rankingList: RankingItem[]};
    }>(`/rating/${selected}`);
    if (!response.data.data) {
      console.warn("⚠️ 데이터 구조가 예상과 다릅니다. 빈 배열을 반환합니다.");
      return 100;
    }

    return response.data.data.streakRatio;
  } catch (err) {
    console.error("API 요청 실패", err);
    return 100;
  }
};
