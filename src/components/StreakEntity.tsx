import InfoEntity from "../atoms/InfoEntity";
import styled from "styled-components";
import CircularProgress from "../atoms/CircularProgress";
import Color from "../ui/Color";

const Wrapper = styled.div`
  width: 460px;
  display: flex;
  flex-direction: column;
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
  margin-top: -1px; /* ✅ 위 border와 겹쳐서 하나처럼 보이게 조정 */
  margin-left: 12px;
`;

const StreakEntity = ({
  value,
  maxValue,
  days,
  tier,
  divNum,
  id,
}: {
  value: number;
  maxValue: number;
  days: number;
  tier: number;
  divNum: number;
  id: string;
}) => {
  // ✅ 🔹 스트릭 색상 결정 로직
  const getStreakColor = (tier: number) => {
    if (tier === 0) return Color.graySub3;
    if (tier >= 1 && tier <= 5) return Color.bronze;
    if (tier >= 6 && tier <= 10) return Color.silver;
    if (tier >= 11 && tier <= 15) return Color.gold;
    if (tier >= 16 && tier <= 20) return Color.platinum;
    if (tier >= 21 && tier <= 25) return Color.diamond;
    if (tier >= 26 && tier <= 30) return Color.ruby;
    return Color.primary; // ✅ 31일 이상이면 Color.primary
  };
  return (
    <Wrapper>
      <Up>
        <InfoEntity id={id} divNum={divNum} tier={tier} />
        <Devider></Devider>
      </Up>
      <DownWrapper>
        <Left>
          <Border $borderColor={Color.graySub3}>이번 시즌</Border>
          <CircularProgress
            value={value}
            maxValue={maxValue}
            width={60}
            height={60}
          />
        </Left>
        <Right>
          <Borders>
            <Border $borderColor={Color.graySub3}>누적</Border>
            <Border $borderColor={Color.primary}>2025.02.03 부터</Border>
          </Borders>
          <RightDown>
            <Days>
              <div className="big">{days}</div>
              <div className="small">일</div>
            </Days>
            <StreakGrid>
              {Array.from({length: days}, (_, i) => (
                <StreakBox
                  key={i}
                  style={{backgroundColor: getStreakColor(tier)}}
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
