import Color from "./Color";
export const NumberToStreakColor = (tier: number) => {
  if (tier === 0) return Color.graySub3;
  if (tier >= 1 && tier <= 5) return Color.bronze;
  if (tier >= 6 && tier <= 10) return Color.silver;
  if (tier >= 11 && tier <= 15) return Color.gold;
  if (tier >= 16 && tier <= 20) return Color.platinum;
  if (tier >= 21 && tier <= 25) return Color.diamond;
  if (tier >= 26 && tier <= 30) return Color.ruby;
  return Color.primary; // ✅ 31일 이상이면 Color.primary
};
