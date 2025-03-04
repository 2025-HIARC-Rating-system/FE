import styled from "styled-components";
import LayOut from "../ui/Layout";
import CircularProgress from "../atoms/CircularProgress";
import ChartComponent from "../components/ChartComponent";
import {useState, useEffect} from "react";

const CircleWrapper = styled.div`
  width: 300px;
  height: 300px;
`;

const TestPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/user/problem_stats?handle=ghwo336") // 로컬 서버로 변경
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <LayOut>
      <CircleWrapper>
        <CircularProgress value={32} maxValue={45} />
        <ChartComponent />
      </CircleWrapper>

      <div>
        <h1>백엔드 데이터</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </LayOut>
  );
};

export default TestPage;
