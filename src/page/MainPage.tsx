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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const MainHeader = styled.div`
  font-size: 35px;
  font-weight: 800;
  text-align: left; /* ✅ 기본적으로 왼쪽 정렬 */

  /* ✅ 모바일에서 너비 100% 사용하여 확실히 왼쪽으로 정렬 */
  @media (max-width: 480px) {
    width: 100%;
    padding-left: 16px; /* ✅ 왼쪽 여백 추가 */
  }
`;

const Down = styled.div`
  display: flex;
  gap: 20px;

  /* ✅ 480px 이하에서는 세로 정렬 + 순서 변경 */
  @media (max-width: 480px) {
    flex-direction: column-reverse;
    gap: 12px;
    align-items: center; /* 중앙 정렬 */
  }
`;

/* ✅ 모바일에서 순서 변경을 위한 컨테이너 */
const MobileOrderContainer = styled.div`
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column-reverse; /* ✅ 순서 반전 (EventBlock → StreakBox) */
    gap: 12px;
  }
`;

const MainPage = () => {
  return (
    <LayOut>
      <Wrapper>
        <MainHeader>Hiting</MainHeader>
        <AnimatedContainer $delay="0.1s">
          <DivBlock />
        </AnimatedContainer>
        <AnimatedContainer $delay="0.2s">
          {/* ✅ 데스크톱에서는 기존 순서, 모바일에서는 순서 변경 */}
          <MobileOrderContainer>
            <Down>
              <StreakBox /> {/* ✅ 데스크톱: 먼저, 모바일: 나중에 */}
              <EventBlock /> {/* ✅ 데스크톱: 나중에, 모바일: 먼저 */}
            </Down>
          </MobileOrderContainer>
        </AnimatedContainer>
      </Wrapper>
    </LayOut>
  );
};

export default MainPage;
