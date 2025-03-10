import {atom} from "jotai";

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
