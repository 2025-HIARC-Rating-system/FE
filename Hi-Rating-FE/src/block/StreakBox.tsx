import styled from "styled-components";
import Color from "../ui/Color";
import ArrowButton from "../atoms/ArrowButton";
import IndividualBlock from "../components/IndividualBlock";
const Wrapper = styled.div`
  width: 930px;
  border-radius: 28px;
  background-color: ${Color.skybox};
  min-height: 354px;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 3%;
  display: flex;

  justify-content: center;
`;

const Individuals = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap; /* ✅ 넘칠 경우 자동 줄바꿈 */
  gap: 10px; /* ✅ 요소 간 간격 추가 */
  align-items: flex-start; /* ✅ 줄 바꿈 후 위쪽 정렬 */
  flex-grow: 1;
  padding: 3%;
`;

const StreakBox = () => {
  return (
    <Wrapper>
      <ButtonWrapper>
        <ArrowButton ArrowString="streak" />
      </ButtonWrapper>
      <Individuals>
        <IndividualBlock />
        <IndividualBlock />
        <IndividualBlock />
        <IndividualBlock />
        <IndividualBlock />
        <IndividualBlock />
      </Individuals>
    </Wrapper>
  );
};

export default StreakBox;
