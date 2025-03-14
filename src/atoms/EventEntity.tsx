import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import TierImg from "../ui/TierImg";
import Color from "../ui/Color";

const Wrapper = styled.div`
  padding-left: 5px;
  width: 226px;
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  border-bottom: 1px solid ${Color.primary};
  @media (max-width: 480px) {
    width: 284px;
  }
`;

const Information = styled.div`
  display: flex;
  justify-content: space-between;
  width: 147px;
`;

const NumAndId = styled.div`
  width: 226px;
  display: flex;
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

const EventEntity = ({
  rank,
  handle,
  tier = 31,
  eventHiting,
}: {
  rank: number;
  handle: string;
  tier: number;
  eventHiting: number;
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/search?handle=${handle}`);
  };

  // ID가 8글자보다 길면 8글자만 표시하고 "..." 추가
  const truncatedId = handle.length > 7 ? `${handle.slice(0, 8)}...` : handle;

  return (
    <Wrapper onClick={handleClick}>
      <Information>
        <NumAndId>
          <div className="Rank">{rank}</div>
          <div className="ID">{truncatedId}</div>
        </NumAndId>
        <TierImg tier={tier} />
      </Information>
      {eventHiting}
    </Wrapper>
  );
};

export default EventEntity;
