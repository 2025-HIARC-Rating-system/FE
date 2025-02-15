interface RankingData {
  num: number;
  handle: string;
  tier: number;
  today: number;
  total: number;
}

const mockData: Record<number, RankingData[]> = {
  1: [
    {num: 1, handle: "ghwo336", tier: 22, today: 200, total: 336},
    {num: 2, handle: "brayden", tier: 3, today: 20, total: 36},
    {num: 3, handle: "hututi", tier: 25, today: 2, total: 3},
    {num: 4, handle: "chill", tier: 7, today: 77, total: 777},
    {num: 5, handle: "chill", tier: 7, today: 77, total: 777},
    {num: 6, handle: "chill", tier: 7, today: 77, total: 777},
    {num: 7, handle: "chill", tier: 7, today: 77, total: 777},
    {num: 8, handle: "chill", tier: 7, today: 77, total: 777},
    {num: 9, handle: "ghwo336", tier: 22, today: 200, total: 336},
    {num: 10, handle: "brayden", tier: 3, today: 20, total: 36},
    {num: 11, handle: "hututi", tier: 25, today: 2, total: 3},
    {num: 12, handle: "chill", tier: 7, today: 77, total: 777},
    {num: 13, handle: "chill", tier: 7, today: 77, total: 777},
    {num: 14, handle: "chill", tier: 7, today: 77, total: 777},
  ],
  2: [
    {num: 1, handle: "ewa33", tier: 15, today: 20, total: 6},
    {num: 2, handle: "ayden", tier: 9, today: 17, total: 36},
    {num: 3, handle: "hututi", tier: 12, today: 8, total: 34},
    {num: 4, handle: "chill", tier: 7, today: 7, total: 7},
  ],
  3: [
    {num: 1, handle: "e33", tier: 15, today: 205, total: 62},
    {num: 2, handle: "ayden", tier: 19, today: 173, total: 36},
    {num: 3, handle: "hut", tier: 21, today: 84, total: 34},
    {num: 4, handle: "cl", tier: 7, today: 7, total: 7},
  ],
};

export default mockData;
