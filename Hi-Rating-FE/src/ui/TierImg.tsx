import styled from "styled-components";
import tier0 from "./../assets/tierImg/0.svg";
import tier1 from "./../assets/tierImg/1.svg";
import tier2 from "./../assets/tierImg/2.svg";
import tier3 from "./../assets/tierImg/3.svg";
import tier4 from "./../assets/tierImg/4.svg";
import tier5 from "./../assets/tierImg/5.svg";
import tier6 from "./../assets/tierImg/6.svg";
import tier7 from "./../assets/tierImg/7.svg";
import tier8 from "./../assets/tierImg/8.svg";
import tier9 from "./../assets/tierImg/9.svg";
import tier10 from "./../assets/tierImg/10.svg";
import tier11 from "./../assets/tierImg/11.svg";
import tier12 from "./../assets/tierImg/12.svg";
import tier13 from "./../assets/tierImg/13.svg";
import tier14 from "./../assets/tierImg/14.svg";
import tier15 from "./../assets/tierImg/15.svg";
import tier16 from "./../assets/tierImg/16.svg";
import tier17 from "./../assets/tierImg/17.svg";
import tier18 from "./../assets/tierImg/18.svg";
import tier19 from "./../assets/tierImg/19.svg";
import tier20 from "./../assets/tierImg/20.svg";
import tier21 from "./../assets/tierImg/21.svg";
import tier22 from "./../assets/tierImg/22.svg";
import tier23 from "./../assets/tierImg/23.svg";
import tier24 from "./../assets/tierImg/24.svg";
import tier25 from "./../assets/tierImg/25.svg";
import tier26 from "./../assets/tierImg/26.svg";
import tier27 from "./../assets/tierImg/27.svg";
import tier28 from "./../assets/tierImg/28.svg";
import tier29 from "./../assets/tierImg/29.svg";
import tier30 from "./../assets/tierImg/30.svg";
import tier31 from "./../assets/tierImg/31.svg";

const Tier: Record<number, string> = {
  0: tier0,
  1: tier1,
  2: tier2,
  3: tier3,
  4: tier4,
  5: tier5,
  6: tier6,
  7: tier7,
  8: tier8,
  9: tier9,
  10: tier10,
  11: tier11,
  12: tier12,
  13: tier13,
  14: tier14,
  15: tier15,
  16: tier16,
  17: tier17,
  18: tier18,
  19: tier19,
  20: tier20,
  21: tier21,
  22: tier22,
  23: tier23,
  24: tier24,
  25: tier25,
  26: tier26,
  27: tier27,
  28: tier28,
  29: tier29,
  30: tier30,
  31: tier31,
};

const Wrapper = styled.img`
  width: 19px;
  height: 19px;
`;

const TierImg = ({tier = 0}: {tier?: number}) => {
  const imgSrc = Tier[tier] ?? tier0; // undefined일 경우 기본값 제공
  return <Wrapper src={imgSrc} alt={`Tier ${tier}`} />;
};

export default TierImg;
