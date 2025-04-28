import {atom} from "jotai";

export interface DivData {
  handle: string;
  totalHiting: number;
  rank: number;
  tier: number;
}

export interface StreakData {
  handle: string;
  tier: number;
  div: number;
  startDate: string;
  totalStreak: number;
}

export interface EventData {
  handle: string;
  tier: number;
  eventHiting: number;
}

export interface HitingDataState {
  div1List: DivData[];
  div2List: DivData[];
  div3List: DivData[];
  streakList: StreakData[];
  eventList: EventData[];
}

export const loadingAtom = atom<boolean>(true);
export const errorAtom = atom<string | null>(null);
export const hitingDataAtom = atom<HitingDataState>({
  div1List: [],
  div2List: [],
  div3List: [],
  streakList: [],
  eventList: [],
});

export const handleAtom = atom<string>("");
