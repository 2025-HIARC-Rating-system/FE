import LayOut from "../ui/Layout";
import styled, {keyframes} from "styled-components";
import DivBlock from "../block/DivBlock";
import StreakBox from "../block/StreakBox";
import EventBlock from "../block/EventBolock";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedContainer = styled.div<{$delay?: string}>`
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: ${(props) => props.$delay || "0s"};
`;

/* ✅ DivBlock에만 margin-left 적용 */
const DivBlockContainer = styled(AnimatedContainer)`
  @media (max-width: 480px) {
    margin-left: 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const MainHeader = styled.div`
  font-size: 35px;
  font-weight: 800;
  text-align: left;

  /* ✅ 모바일에서 왼쪽 정렬 및 여백 추가 */
  @media (max-width: 480px) {
    width: 100%;
    margin-left: 26px;
  }
`;

const Down = styled.div`
  display: flex;
  gap: 20px;

  /* ✅ 480px 이하에서는 세로 정렬 + 순서 변경 */
  @media (max-width: 480px) {
    flex-direction: column-reverse;
    gap: 52px;
    align-items: center;
  }
`;

const MainPage = () => {
  return (
    <LayOut>
      <Wrapper>
        <MainHeader>Hiting</MainHeader>
        {/* ✅ DivBlock에만 margin-left 적용 */}
        <DivBlockContainer $delay="0.1s">
          <DivBlock />
        </DivBlockContainer>
        <AnimatedContainer $delay="0.2s">
          <Down>
            <StreakBox />
            <EventBlock />
          </Down>
        </AnimatedContainer>
      </Wrapper>
    </LayOut>
  );
};

export default MainPage;
