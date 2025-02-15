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
