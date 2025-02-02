import HitingBox from "../components/HitingBox";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const DivBlock = () => {
  return (
    <Wrapper>
      <HitingBox boxName="div1"></HitingBox>
      <HitingBox boxName="div2"></HitingBox>
      <HitingBox boxName="div3"></HitingBox>
    </Wrapper>
  );
};

export default DivBlock;
