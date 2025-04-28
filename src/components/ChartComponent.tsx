import React from "react";
import {LineChart, Line, YAxis, Tooltip, LabelList} from "recharts";
import styled from "styled-components";
import Color from "../ui/Color";

const ChartWrapper = styled.div`
  width: 302px;
  height: 261px;
  background: linear-gradient(135deg, #ffffff, ${Color.primary});
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

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
        margin={{top: 30, right: 20, left: 20, bottom: 20}}
      >
        <YAxis hide />
        <Tooltip />
        <Line
          type="linear"
          dataKey="value"
          stroke="#008CFF"
          strokeWidth={2}
          dot={{fill: "#008CFF", r: 4}}
        >
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
