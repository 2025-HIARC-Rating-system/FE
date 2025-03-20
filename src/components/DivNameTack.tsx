import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import TierImg from "../ui/TierImg";
import Color from "../ui/Color";

const Wrapper = styled.div<{$isUnderlined: boolean}>`
  padding-left: 5px;
  width: 280px;
  border-bottom: ${(props) =>
    props.$isUnderlined ? `1px solid ${Color.primary}` : "none"};
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`;

const Information = styled.div`
  display: flex;
  justify-content: space-between;
  width: 147px;
`;

const NumAndId = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  margin-right: 60px;
  .ID {
    width: 80px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .Rank {
    width: 20px;
  }
`;

const DivNameTack = ({
  rank,
  id,
  tier = 31,
  totalHiting,
}: {
  rank: number;
  id: string;
  tier: number;
  totalHiting: number;
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/search?handle=${id}`);
  };

  // ID가 8글자보다 길면 8글자만 표시하고 "..." 추가
  const truncatedId = id.length > 7 ? `${id.slice(0, 8)}...` : id;

  return (
    <Wrapper $isUnderlined={rank !== 5} onClick={handleClick}>
      <Information>
        <NumAndId>
          <div className="Rank">{rank}</div>
          <div className="ID">{truncatedId}</div>
        </NumAndId>
        <TierImg tier={tier} />
      </Information>
      {totalHiting < 0 ? 0 : totalHiting}
    </Wrapper>
  );
};

export default DivNameTack;
