import apiClient from "./ApiClient";

interface RankingItem {
  handle: string;
  tier: number;
  event: boolean;
  dailyHiting: number;
  totalHiting: number;
}

export const fetchRankingData = async (selected: number) => {
  if (selected === 0) {
    return [];
  }

  try {
    const response = await apiClient.get<{
      data: {streakRatio: number; rankingList: RankingItem[]};
    }>(`/rating/${selected}`);

    console.log(" Success: 랭킹 데이터 받아옴", response.data);

    if (!response.data.data) {
      console.warn(" 데이터 구조가 예상과 다릅니다. 빈 배열을 반환합니다.");
      return [];
    }

    return response.data.data.rankingList.map((item, index) => ({
      num: index + 1,
      handle: item.handle,
      tier: item.tier,
      event: item.event,
      today: item.dailyHiting,
      total: item.totalHiting,
    }));
  } catch (err) {
    console.error(" API 요청 실패:", err);
    return [];
  }
};

export const fetchGraphData = async (selected: number) => {
  if (selected === 0) {
    return 0;
  }

  try {
    const response = await apiClient.get<{
      data: {streakRatio: number; rankingList: RankingItem[]};
    }>(`/rating/${selected}`);

    if (!response.data.data) {
      console.warn(" 데이터 구조가 예상과 다릅니다. 기본값 100을 반환합니다.");
      return 100;
    }

    return response.data.data.streakRatio;
  } catch (err) {
    console.error("API 요청 실패", err);
    return 100;
  }
};
