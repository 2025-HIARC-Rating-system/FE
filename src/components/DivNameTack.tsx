import styled from "styled-components";
import {useNavigate} from "react-router-dom"; // ✅ `useNavigate` 추가
import TierImg from "../ui/TierImg";
import Color from "../ui/Color";

const Wrapper = styled.div<{$isUnderlined: boolean}>`
  padding-left: 5px;
  width: 85%;
  border-bottom: ${(props) =>
    props.$isUnderlined ? `1px solid ${Color.primary}` : "none"};
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer; // ✅ 클릭 가능하도록 커서 변경
`;

const Information = styled.div`
  display: flex;
  justify-content: space-between;
  width: 147px;
`;

const NumAndId = styled.div`
  width: 70%;
  display: flex;
  gap: 32px;
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
  const navigate = useNavigate(); // ✅ `useNavigate()` 사용

  const handleClick = () => {
    navigate(`/search?handle=${id}`); // ✅ 클릭하면 `/search?handle=아이디`로 이동
  };

  return (
    <Wrapper $isUnderlined={rank !== 5} onClick={handleClick}>
      {" "}
      {/* ✅ 클릭 이벤트 추가 */}
      <Information>
        <NumAndId>
          <div>{rank}</div>
          <div>{id}</div>
        </NumAndId>
        <TierImg tier={tier} />
      </Information>
      {totalHiting}
    </Wrapper>
  );
};

export default DivNameTack;
