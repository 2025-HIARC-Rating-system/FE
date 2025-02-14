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
`;
const Down = styled.div`
  display: flex;
  gap: 20px;
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
