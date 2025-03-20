import styled from "styled-components";
import Color from "../ui/Color";

const Wrapper = styled.div`
  width: 479px;
  height: 166px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  @media (max-width: 480px) {
    width: 343px;
  }
`;
const UpWrapper = styled.div`
  font-size: 12px;
  border: 1px solid ${Color.primary};
  padding: 6px 14px;
  width: 38px;
  border-radius: 18px;
  color: ${Color.primary};
  font-weight: 700;
`;
const DownWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  border: 1px solid ${Color.primary};
  width: 100%;
  border-radius: 15px;
  min-height: 166px;
  @media (max-width: 480px) {
    gap: 15px;
  }
`;
const Left = styled.div`
  width: 102px;
  height: 91px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  margin-left: 55px;
  @media (max-width: 480px) {
    margin-left: 12px;
  }
`;
const Middle = styled.div`
  height: 91px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;
const Right = styled.div`
  width: 85px;
  height: 91px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin-left: 20px;
`;

const Border = styled.div`
  border: 1px solid ${Color.graySub3};
  border-radius: 10px;
  padding: 3.5px 8px;
  display: inline-block;
  white-space: nowrap;
  width: fit-content;
`;
const Score = styled.div`
  font-size: 35px;
  font-weight: 800;
  display: flex;
  justify-content: center;
`;

const SearchedHitingEntity = ({
  totalHiting,
  seasonHiting,
  dailyHiting,
}: {
  totalHiting: number;
  seasonHiting: number;
  dailyHiting: number;
}) => {
  return (
    <Wrapper>
      <UpWrapper>Hiting</UpWrapper>
      <DownWrapper>
        <Left>
          <Border>누적</Border>
          <Score>{totalHiting < 0 ? 0 : totalHiting}</Score>
        </Left>
        <Middle>
          <Border>이번 시즌</Border>
          <Score>{seasonHiting < 0 ? 0 : seasonHiting}</Score>
        </Middle>
        <Right>
          <Border>오늘</Border>
          <Score>{dailyHiting < 0 ? 0 : dailyHiting}</Score>
        </Right>
      </DownWrapper>
    </Wrapper>
  );
};

export default SearchedHitingEntity;
