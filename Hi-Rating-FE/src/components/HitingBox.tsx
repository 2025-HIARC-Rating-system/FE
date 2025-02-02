import styled from "styled-components";
import Color from "../ui/Color";
import ArrowButton from "../atoms/ArrowButton";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 32%;
  border-radius: 28px;
  background-color: ${Color.skybox};
  min-height: 300px;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 3%;
  display: flex;
  justify-content: center;
`;

const HitingBox = ({boxName}: {boxName: string}) => {
  return (
    <Wrapper>
      <ButtonWrapper>
        <ArrowButton ArrowString={boxName} />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default HitingBox;
