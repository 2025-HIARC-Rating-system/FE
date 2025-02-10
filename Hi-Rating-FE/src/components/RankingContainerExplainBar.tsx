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
`;
const Ranking = styled.div`
  margin-left: 32px;
  margin-right: 32px;
`;
const Handle = styled.div`
  margin-right: 132px;
`;

const Tier = styled.div`
  margin-right: 186px;
`;
const Event = styled.div`
  width: 37px;
  margin-right: 40px;
`;
const Today = styled.div`
  margin-right: 45px;
`;
const Total = styled.div`
  width: 30px;
`;

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
