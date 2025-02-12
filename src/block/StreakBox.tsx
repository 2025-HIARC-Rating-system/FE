import styled from "styled-components";
import Color from "../ui/Color";
import IndividualBlock from "../components/IndividualBlock";
import StreakBoxArrowButton from "../components/StreakBoxArrowButton";
const Wrapper = styled.div`
  width: 725px;
  border-radius: 28px;
  background-color: ${Color.skybox};
  height: 342px;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;

const Individuals = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap; /* ✅ 넘칠 경우 자동 줄바꿈 */
  gap: 12px; /* ✅ 요소 간 간격 추가 */
  align-items: flex-start; /* ✅ 줄 바꿈 후 위쪽 정렬 */
  flex-grow: 1;
  padding: 12px 18px;
`;

const StreakBox = () => {
  return (
    <Wrapper>
      <ButtonWrapper>
        <StreakBoxArrowButton />
      </ButtonWrapper>
      <Individuals>
        <IndividualBlock tier={27} id="ghwo336" div={1} days={30} />
        <IndividualBlock tier={24} id="hututi" div={1} days={30} />
        <IndividualBlock tier={12} id="brayden" div={1} days={30} />
        <IndividualBlock tier={30} id="hi-arc" div={1} days={30} />
        <IndividualBlock tier={1} id="pizza" div={1} days={30} />
        <IndividualBlock tier={0} id="how are you" div={1} days={30} />
      </Individuals>
    </Wrapper>
  );
};

export default StreakBox;
