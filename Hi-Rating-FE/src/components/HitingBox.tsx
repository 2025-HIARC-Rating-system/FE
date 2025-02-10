import styled from "styled-components";
import Color from "../ui/Color";
import ArrowButton from "../atoms/ArrowButton";
import DivNameTack from "./DivNameTack";
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

const TackContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const HitingBox = ({divNum}: {divNum: number}) => {
  return (
    <Wrapper>
      <ButtonWrapper>
        <ArrowButton divNum={divNum} />
      </ButtonWrapper>
      <TackContainer>
        <DivNameTack num={1} id={"ghwo336"} tier={31} increasedRating={434} />
        <DivNameTack num={2} id={"ghwo336"} tier={31} increasedRating={434} />
        <DivNameTack num={3} id={"ghwo336"} tier={31} increasedRating={434} />
        <DivNameTack num={4} id={"brayden"} tier={12} increasedRating={200} />
        <DivNameTack num={5} id={"hututi"} tier={0} increasedRating={2} />
      </TackContainer>
    </Wrapper>
  );
};

export default HitingBox;
