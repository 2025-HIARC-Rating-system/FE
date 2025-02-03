import styled from "styled-components";
import LayOut from "../ui/Layout";
import CircularProgress from "../atoms/CircularProgress";

const CircleWrapper = styled.div`
  width: 300px;
  height: 300px;
`;

const TestPage = () => {
  return (
    <LayOut>
      <CircleWrapper>
        <CircularProgress value={32} maxValue={45} />
      </CircleWrapper>
    </LayOut>
  );
};

export default TestPage;
