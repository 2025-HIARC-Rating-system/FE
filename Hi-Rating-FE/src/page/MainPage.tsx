import LayOut from "../ui/Layout";
import HitingBox from "../components/HitingBox";
import styled from "styled-components";
import DivBlock from "../block/DivBlock";
import StreakBox from "../components/StreakBox";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const MainPage = () => {
  return (
    <LayOut>
      <Wrapper>
        <DivBlock />
        <StreakBox />
      </Wrapper>
    </LayOut>
  );
};

export default MainPage;
