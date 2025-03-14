import LayOut from "../ui/Layout";
import DivBlock from "../block/DivBlock";
import StreakBox from "../block/StreakBox";
import EventBlock from "../block/EventBlock";
import styled, {keyframes} from "styled-components";

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
  text-align: left;

  @media (max-width: 480px) {
    width: 100%;
    margin-left: 16px;
  }
`;

const Down = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    gap: 52px;
    align-items: center;
    margin-bottom: 40px;
  }
`;

const MainPage = () => {
  return (
    <LayOut>
      <Wrapper>
        <MainHeader>Hiting</MainHeader>
        <AnimatedContainer $delay="0.4s">
          <DivBlock />
        </AnimatedContainer>
        <Down>
          <AnimatedContainer $delay="0.8s">
            <StreakBox />
          </AnimatedContainer>
          <AnimatedContainer $delay="0.8s">
            <EventBlock />
          </AnimatedContainer>
        </Down>
      </Wrapper>
    </LayOut>
  );
};

export default MainPage;
