import styled from "styled-components";
import Color from "../ui/Color";
import TierImg from "../ui/TierImg";
import EventImg from "../assets/eventImg.png";
import {useNavigate} from "react-router-dom";
const Wrapper = styled.div`
  height: 40px;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${Color.graySub3};
  cursor: pointer;
`;
const Ranking = styled.div`
  width: 41.29px;
  margin-left: 32px;
  @media (max-width: 480px) {
    margin-left: 18px;
    width: 24px;
  }
`;
const Handle = styled.div`
  width: 180px;
  @media (max-width: 480px) {
    width: 142px;
  }
`;

const Tier = styled.div`
  width: 200px;
  @media (max-width: 480px) {
    width: 118px;
  }
`;
const Event = styled.div`
  width: 77px;
  @media (max-width: 480px) {
    display: none;
  }
`;
const Today = styled.div`
  width: 77px;
  .letter {
    width: 53px;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 480px) {
    display: none;
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
  event,
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
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/search?handle=${handle}`);
  };
  return (
    <Wrapper onClick={handleClick}>
      <Ranking>{ranking}</Ranking>
      <Handle>{handle}</Handle>
      <Tier>
        <TierImg tier={tier} />
      </Tier>
      <Event>{event && <img src={EventImg} />}</Event>
      <Today>
        <div className="letter">{today < 0 ? 0 : today}</div>
      </Today>
      <Total>{total < 0 ? 0 : total}</Total>
    </Wrapper>
  );
};

export default RankingEntity;
