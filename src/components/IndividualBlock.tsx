import styled from "styled-components";
import Color from "../ui/Color";
import TierImg from "../ui/TierImg";
import {useNavigate} from "react-router-dom";

const Wrapper = styled.div`
  width: 224px;
  height: 124px;
  background-color: white;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  border-radius: 16px;
  min-width: 224px;
  /* ✅ 480px 이하일 때 width를 284px로 변경 */
  @media (max-width: 480px) {
    width: 284px;
    min-width: 284px;
  }
`;

const Up = styled.div`
  display: flex;
  gap: 10px;
  padding: 11px 0 4px 17px;
  border-bottom: 1px solid black;
  img {
    width: 19px;
    height: 19px;
  }
`;
const Down = styled.div`
  margin-top: 5px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  align-items: center;
`;

const Border = styled.div<{$borderColor: string}>`
  font-size: 12px;
  border: 0.5px solid ${(props) => props.$borderColor};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  flex-wrap: nowrap;
  margin-bottom: 3px;
  height: 20px;
  white-space: nowrap; /* ✅ 텍스트 줄바꿈 방지 */
  overflow: hidden; /* ✅ 넘치는 텍스트 숨김 */
  text-overflow: ellipsis; /* ✅ 너무 길면 "..." 표시 */
  max-width: 90px; /* ✅ 최대 너비 제한 (조정 가능) */
`;

const Borders = styled.div`
  display: flex;
  gap: 4px;
`;

const Days = styled.div`
  display: flex;
  flex: 1;
  font-size: 15px;
  font-weight: 900;
  align-items: flex-end;
  justify-content: center;
  gap: 2px;
  .big {
    font-size: 35px;
  }
  .small {
    margin-bottom: 5px;
  }
`;

const IndividualBlock = ({
  tier,
  handle,
  divNum,
  totalStreak,
  startDate,
}: {
  tier: number;
  handle: string;
  divNum: number;
  totalStreak: number;
  startDate: string;
}) => {
  const navigate = useNavigate(); // ✅ `useNavigate()` 사용

  const handleClick = () => {
    navigate(`/search?handle=${handle}`); // ✅ 클릭하면 `/search?handle=아이디`로 이동
  };

  return (
    <Wrapper onClick={handleClick}>
      <Up>
        <TierImg tier={tier} />
        {handle}
        <div>|</div>
        <div>div {divNum}</div>
      </Up>
      <Down>
        <Borders>
          <Border $borderColor={Color.graySub3}>누적</Border>
          <Border $borderColor={Color.primary}>{startDate} 부터</Border>
        </Borders>
        <Days>
          <div className="big">{totalStreak}</div>
          <div className="small">일</div>
        </Days>
      </Down>
    </Wrapper>
  );
};

export default IndividualBlock;
