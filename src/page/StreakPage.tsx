import LayOut from "../ui/Layout";
import styled from "styled-components";
const HeadWrapper = styled.div`
  font-size: 35px;
  font-weight: 900;
  padding-top: 45px;
  padding-bottom: 20px;
`;
const StreakPage = () => {
  return (
    <LayOut>
      <HeadWrapper>Streak</HeadWrapper>
    </LayOut>
  );
};

export default StreakPage;
