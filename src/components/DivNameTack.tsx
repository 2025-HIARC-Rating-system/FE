import styled from "styled-components";
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
  num,
  id,
  tier = 31,
  increasedRating,
}: {
  num: number;
  id: string;
  tier: number;
  increasedRating: number;
}) => {
  return (
    <Wrapper $isUnderlined={num !== 5}>
      <Information>
        <NumAndId>
          <div>{num}</div>
          <div>{id}</div>
        </NumAndId>
        <TierImg tier={tier} />
      </Information>
      {increasedRating}
    </Wrapper>
  );
};

export default DivNameTack;
