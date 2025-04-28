import styled from "styled-components";
import Color from "../ui/Color";
const Wrapper = styled.div`
  height: 40px;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${Color.graySub3};
  color: ${Color.graySub3};
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
  @media (max-width: 480px) {
    display: none;
  }
`;
const Total = styled.div``;

const RankingContainerExplainBar = () => {
  return (
    <Wrapper>
      <Ranking>#</Ranking>
      <Handle>handle</Handle>
      <Tier>tier</Tier>
      <Event>event</Event>
      <Today>today</Today>
      <Total>total</Total>
    </Wrapper>
  );
};

export default RankingContainerExplainBar;
