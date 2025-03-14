import {atom} from "jotai";

export interface HitingItem {
  handle: string;
  totalHiting: number;
  rank: number;
  tier: number;
}

export const selectedDiv = atom<number>(1);
export const handleAtom = atom<string>("");
