import styled from "styled-components";
import LayOut from "../ui/Layout";
import CircularProgress from "../atoms/CircularProgress";
import ChartComponent from "../components/ChartComponent";
const CircleWrapper = styled.div`
  width: 300px;
  height: 300px;
`;

const TestPage = () => {
  return (
    <LayOut>
      <CircleWrapper>
        <CircularProgress value={32} maxValue={45} />
        <ChartComponent />
      </CircleWrapper>
    </LayOut>
  );
};

export default TestPage;
