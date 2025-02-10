import React from "react";
import {LineChart, Line, YAxis, Tooltip, LabelList} from "recharts";
import styled from "styled-components";
import Color from "../ui/Color";

// ✅ 스타일 지정 (302px x 261px 크기 설정)
const ChartWrapper = styled.div`
  width: 302px;
  height: 261px;
  background: linear-gradient(
    135deg,
    #ffffff,
    ${Color.primary}
  ); /* 배경 그라디언트 */
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px; /* 아래쪽 여백 조정 */
`;

// ✅ 샘플 데이터 (그래프 포인트)
const data = [
  {name: "1", value: 20},
  {name: "2", value: 50},
  {name: "3", value: 100},
  {name: "4", value: 110},
  {name: "5", value: 200},
  {name: "6", value: 220},
];

const ChartComponent: React.FC = () => {
  return (
    <ChartWrapper>
      <LineChart
        width={302}
        height={261}
        data={data}
        margin={{top: 30, right: 20, left: 20, bottom: 20}} // ✅ 위쪽 여백 추가
      >
        <YAxis hide /> {/* ✅ Y축 점수 숨김 */}
        <Tooltip />
        <Line
          type="linear" // ✅ 곡선이 아니라 직선으로 변경
          dataKey="value"
          stroke="#008CFF"
          strokeWidth={2}
          dot={{fill: "#008CFF", r: 4}}
        >
          {/* ✅ 점 위 숫자가 너무 위로 가서 짤리는 문제 해결 (dy 값 조정) */}
          <LabelList
            dataKey="value"
            position="top"
            dy={-10}
            fontSize={12}
            fill="#008CFF"
          />
        </Line>
      </LineChart>
    </ChartWrapper>
  );
};

export default ChartComponent;
