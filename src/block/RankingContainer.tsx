import styled from "styled-components";
import RankingContainerExplainBar from "../components/RankingContainerExplainBar";
import RankingEntity from "../components/RankingEntity";
import mockData from "../ui/MockData";

const Wrapper = styled.div`
  width: 673px;
  display: flex;
  flex-direction: column;
  @media (max-width: 480px) {
    width: 342px; /* ✅ 너비 자동 조정 */
  }
`;

const RankingContiner = ({selected}: {selected: number}) => {
  const rankingData = mockData[selected] || [];
  return (
    <Wrapper>
      <RankingContainerExplainBar />
      {rankingData.map(({num, handle, tier, today, total}) => (
        <RankingEntity
          key={num}
          ranking={num}
          handle={handle}
          tier={tier}
          today={today}
          total={total}
          event={true}
        />
      ))}
    </Wrapper>
  );
};

export default RankingContiner;
