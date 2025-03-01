import {atom} from "jotai";
import {fetchHitingData} from "../api/MainPageApi";

export interface HitingItem {
  handle: string;
  totalHiting: number;
  rank: number;
  tier: number;
}

export interface HitingDataType {
  Div1List: HitingItem[];
  Div2List: HitingItem[];
  Div3List: HitingItem[];
  StreakList: {
    handle: string;
    tier: number;
    divNum: number;
    startDate: string;
    totalStreak: number;
  }[];
  EventList: {handle: string; tier: number; eventHiting: number}[];
}

export const selectedDiv = atom<number>(1);
export const handleAtom = atom<string>("");
export const hitingDataAtom = atom<HitingDataType | null>(null);

// ✅ 데이터를 불러와 Jotai 상태를 직접 업데이트
export const fetchAndSetHitingData = async (
  setState: (data: HitingDataType | null) => void
) => {
  try {
    const data = await fetchHitingData();
    setState(data); // ✅ 상태 업데이트
  } catch (error) {
    console.error("Error fetching hitting data:", error);
  }
};
