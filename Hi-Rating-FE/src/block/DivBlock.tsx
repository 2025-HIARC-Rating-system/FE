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
      <HitingBox divNum={1}></HitingBox>
      <HitingBox divNum={2}></HitingBox>
      <HitingBox divNum={3}></HitingBox>
    </Wrapper>
  );
};

export default DivBlock;
