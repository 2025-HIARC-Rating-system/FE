import styled from "styled-components";
import Color from "../ui/Color";
import TierImg from "../ui/TierImg";
import EventImg from "../assets/eventImg.png";
const Wrapper = styled.div`
  height: 40px;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${Color.graySub3};
`;
const Ranking = styled.div`
  margin-left: 32px;
  margin-right: 32px;
  width: 11.17px;
`;
const Handle = styled.div`
  width: 180px;
`;

const Tier = styled.div`
  margin-right: 190px;
`;
const Event = styled.div`
  width: 27px;
  margin-right: 48px;
`;
const Today = styled.div`
  width: 53px;
  margin-right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Total = styled.div`
  display: flex;
  justify-content: center;
  width: 27px;
`;

const RankingEntity = ({
  ranking,
  handle,
  tier,
  event = true,
  today,
  total,
}: {
  ranking: number;
  handle: string;
  tier: number;
  event: boolean;
  today: number;
  total: number;
}) => {
  return (
    <Wrapper>
      <Ranking>{ranking}</Ranking>
      <Handle>{handle}</Handle>
      <Tier>
        <TierImg tier={tier} />
      </Tier>
      <Event>{event && <img src={EventImg} />}</Event>
      <Today>{today}</Today>
      <Total>{total}</Total>
    </Wrapper>
  );
};

export default RankingEntity;
