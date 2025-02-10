import styled from "styled-components";
import CircularProgress from "../atoms/CircularProgress";
import Color from "../ui/Color";
import TierImg from "../ui/TierImg";

const Wrapper = styled.div`
  width: 25%;
  height: 124px;
  background-color: white;
  min-width: 290px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
`;

const Up = styled.div`
  display: flex;
  gap: 4%;
  padding: 5% 5% 2% 5%;
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
  gap: 24px;
`;

const DownLeft = styled.div`
  width: 30%;
  font-size: 12px;
`;

const Border = styled.div<{borderColor: string}>`
  font-size: 12px;
  border: 0.5px solid ${(props) => props.borderColor};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.5px 8px; /* 글자 크기에 비례하여 padding 설정 */
  flex-wrap: nowrap;
  margin-bottom: 3px;
  height: 20px;
`;

const DownRight = styled.div`
  font-size: 13px;
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
`;

const IndividualBlock = ({
  tier = 0,
  id = "ghwo36",
  div = 1,
  value = 23,
  maxValue = 30,
  days = 7,
}: {
  tier: number;
  id: string;
  div: number;
  value: number;
  maxValue: number;
  days: number;
}) => {
  return (
    <Wrapper>
      <Up>
        <TierImg tier={tier} />
        {id}
        <div>|</div>
        <div>div {div}</div>
      </Up>
      <Down>
        <DownLeft>
          <Border borderColor={Color.graySub3}>이번 시즌</Border>
          <CircularProgress value={value} maxValue={maxValue} />
        </DownLeft>
        <DownRight>
          <Borders>
            <Border borderColor={Color.graySub3}>누적</Border>
            <Border borderColor={Color.primary}>2025.02.03 부터</Border>
          </Borders>
          <Days>
            <div className="big">{days}</div>
            <div>일</div>
          </Days>
        </DownRight>
      </Down>
    </Wrapper>
  );
};

export default IndividualBlock;
