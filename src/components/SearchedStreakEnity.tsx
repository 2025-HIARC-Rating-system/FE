import styled from "styled-components";
import CircularProgress from "../atoms/CircularProgress";
import Color from "../ui/Color";
import {NumberToStreakColor} from "../ui/NumberToStreakColor";
const Wrapper = styled.div`
  width: 460px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  @media (max-width: 480px) {
    width: 325px;
  }
`;
const DownWrapper = styled.div`
  display: flex;
  gap: 24.33px;
  border: 1px solid ${Color.primary};
  padding: 20px 20px 0px 20px;
  width: 100%;
  border-radius: 15px;
  min-height: 146px;
  @media (max-width: 480px) {
    padding: 8px;
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

const Left = styled.div`
  width: 63px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;
const RightDown = styled.div`
  display: flex;
  gap: 22px;
`;

const Border = styled.div<{$borderColor: string}>`
  font-size: 10px;
  border: 0.5px solid ${(props) => props.$borderColor};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  flex-wrap: nowrap;
  margin-bottom: 3px;
  height: 20px;
`;

const Borders = styled.div`
  display: flex;
  gap: 4px;
`;
const Days = styled.div`
  margin-top: 13px;
  width: 73px;
  height: 35px;
  display: flex;
  align-items: flex-end;
  font-size: 15px;
  font-weight: 900;
  .big {
    font-size: 35px;
  }
  .small {
    margin-bottom: 4px;
  }
`;

const StreakGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(20, 13px);
  gap: 1px;
  width: fit-content;
  max-width: 273px;
  height: fit-content;
  @media (max-width: 480px) {
    grid-template-columns: repeat(10, 13px);
    max-width: 139px;
  }
`;
const StreakBox = styled.div`
  width: 13px;
  height: 13px;

  border-radius: 2px;
`;

const SearchedStreakEntity = ({
  seasonStreak,
  seasonTotal,
  totalStreak,
  tier,
  startDate,
}: {
  seasonStreak: number;
  seasonTotal: number;
  totalStreak: number;
  tier: number;
  startDate: string;
}) => {
  return (
    <Wrapper>
      <UpWrapper>Streak</UpWrapper>
      <DownWrapper>
        <Left>
          <Border $borderColor={Color.graySub3}>이번 시즌</Border>
          <CircularProgress
            value={seasonStreak}
            maxValue={seasonTotal}
            width={60}
            height={60}
          />
        </Left>
        <Right>
          <Borders>
            <Border $borderColor={Color.graySub3}>누적</Border>
            <Border $borderColor={Color.primary}>{startDate}부터</Border>
          </Borders>
          <RightDown>
            <Days>
              <div className="big">{totalStreak}</div>
              <div className="small">일</div>
            </Days>
            <StreakGrid>
              {Array.from({length: totalStreak}, (_, i) => (
                <StreakBox
                  key={i}
                  style={{backgroundColor: NumberToStreakColor(tier)}}
                />
              ))}
            </StreakGrid>
          </RightDown>
        </Right>
      </DownWrapper>
    </Wrapper>
  );
};

export default SearchedStreakEntity;
