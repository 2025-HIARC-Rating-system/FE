import styled from "styled-components";
import Img from "./../assets/tier.png";
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
`;

const Information = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
`;

const NumAndId = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
`;

const DivNameTack = ({
  num,
  id,
  tier,
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
        <img src={Img} alt="" />
      </Information>
      {increasedRating}
    </Wrapper>
  );
};

export default DivNameTack;
