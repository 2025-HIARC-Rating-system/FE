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
  width: 41.29px;
  margin-left: 32px;
`;
const Handle = styled.div`
  width: 180px;
`;

const Tier = styled.div`
  width: 200px;
`;
const Event = styled.div`
  width: 77px;
`;
const Today = styled.div`
  width: 77px;
  .letter {
    width: 53px;
    display: flex;
    justify-content: center;
  }
`;
const Total = styled.div`
  width: 29px;
  display: flex;
  justify-content: center;
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
      <Today>
        <div className="letter">{today}</div>
      </Today>
      <Total>{total}</Total>
    </Wrapper>
  );
};

export default RankingEntity;
