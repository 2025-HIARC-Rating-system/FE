import LayOut from "../ui/Layout";
import DivBlock from "../block/DivBlock";
import StreakBox from "../block/StreakBox";
import EventBlock from "../block/EventBlock";
import styled from "styled-components";

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
  }
`;

const MainPage = () => {
  return (
    <LayOut>
      <Wrapper>
        <MainHeader>Hiting</MainHeader>
        <DivBlock />
        <Down>
          <StreakBox />
          <EventBlock />
        </Down>
      </Wrapper>
    </LayOut>
  );
};

export default MainPage;
