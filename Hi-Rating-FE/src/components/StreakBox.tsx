import styled from "styled-components";
import Color from "../ui/Color";
import ArrowButton from "../atoms/ArrowButton";
const Wrapper = styled.div`
  width: 70%;
  border-radius: 28px;
  background-color: ${Color.skybox};
  min-height: 354px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 3%;
  display: flex;
  justify-content: center;
`;

const StreakBox = () => {
  return (
    <Wrapper>
      <ButtonWrapper>
        <ArrowButton ArrowString="streak" />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default StreakBox;
