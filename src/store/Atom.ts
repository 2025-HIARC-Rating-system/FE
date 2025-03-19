import {atom} from "jotai";

// ✅ Division 및 Streak 데이터 타입 정의
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

// ✅ API에서 가져온 데이터를 저장할 타입
export interface HitingDataState {
  div1List: DivData[];
  div2List: DivData[];
  div3List: DivData[];
  streakList: StreakData[];
  eventList: EventData[];
}

// ✅ Jotai Atom 상태 관리
export const loadingAtom = atom<boolean>(true);
export const errorAtom = atom<string | null>(null);
export const hitingDataAtom = atom<HitingDataState>({
  div1List: [],
  div2List: [],
  div3List: [],
  streakList: [],
  eventList: [],
});

// ✅ 선택된 Div 및 핸들 상태

export const handleAtom = atom<string>("");
