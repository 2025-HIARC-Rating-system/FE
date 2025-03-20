import InfoEntity from "../atoms/InfoEntity";
import styled from "styled-components";
import CircularProgress from "../atoms/CircularProgress";
import Color from "../ui/Color";
import {NumberToStreakColor} from "../ui/NumberToStreakColor";
import {useNavigate} from "react-router-dom";

const Wrapper = styled.div`
  width: 460px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
const DownWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 24.33px;
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

// ✅ 🔹 추가: 스트릭 네모 박스 스타일
const StreakGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(20, 13px); /* ✅ 한 줄에 최대 20개 */
  gap: 1px;
  width: fit-content; /* ✅ 박스 개수에 맞춰 너비 자동 조정 */
  max-width: 273px; /* ✅ 최대 너비 설정 */
  height: fit-content;
  @media (max-width: 480px) {
    grid-template-columns: repeat(10, 13px); /* ✅ 한 줄에 최대 20개 */
    max-width: 139px;
  }
`;
const StreakBox = styled.div`
  width: 13px;
  height: 13px;

  border-radius: 2px;
`;
const Up = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const Devider = styled.div`
  width: 98%;
  border-bottom: 1px solid ${Color.primary};
  margin-top: -1px;
  margin-left: 12px;
  @media (max-width: 480px) {
    width: 92%;
  }
`;

const StreakEntity = ({
  seasonStreak,
  seasonTotal,
  totalStreak,
  tier,
  div,
  handle,
  startDate,
}: {
  seasonStreak: number;
  seasonTotal: number;
  totalStreak: number;
  tier: number;
  div: number;
  handle: string;
  startDate: string;
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/search?handle=${handle}`);
  };
  return (
    <Wrapper onClick={handleClick}>
      <Up>
        <InfoEntity handle={handle} div={div} tier={tier} />
        <Devider></Devider>
      </Up>
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
            {startDate && (
              <Border $borderColor={Color.primary}>{startDate} 부터</Border>
            )}
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
          {/* ✅ ✅ 스트릭 칸 추가 */}
        </Right>
      </DownWrapper>
    </Wrapper>
  );
};

export default StreakEntity;
