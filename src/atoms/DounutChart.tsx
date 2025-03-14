import {useState, useEffect} from "react";
import styled from "styled-components";
import Color from "../ui/Color"; // 기본 색상 관리 파일

// 스타일 지정
const ChartWrapper = styled.div`
  width: 282px; /* 전체 컨테이너 크기 변경 */
  height: 241px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f0f9ff; /* 배경 색 */
  border-radius: 20px; /* 둥근 모서리 */
  padding: 10px;
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Description = styled.div`
  margin-top: 20px;
  font-size: 14px;
  font-weight: 500;
  color: black;
  text-align: center;
`;

interface DonutChartProps {
  value: number; // 최종 목표 진행률 (예: 30)
  maxValue?: number; // 최대값 (기본: 100)
  strokeColor?: string; // 진행 색상 (기본: 파란색)
  backgroundColor?: string; // 배경 원 색상 (기본: 연한 회색)
  div?: number;
  duration?: number; // 애니메이션 지속 시간 (기본: 1.5초)
}

const DonutChart: React.FC<DonutChartProps> = ({
  value,
  maxValue = 100,
  strokeColor = Color.primary,
  backgroundColor = "#eee",
  div,
}) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    // value 값이 바뀔 때마다 바로 반영되도록 처리
    const newValue = value; // value 값으로 바로 설정
    setAnimatedValue(newValue); // 애니메이션 없이 바로 업데이트
  }, [value]); // value가 변경될 때마다 실행

  const size = 180;
  const strokeWidth = 30;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (animatedValue / maxValue) * circumference;

  return (
    <ChartWrapper>
      <SvgContainer>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {/* 배경 원 */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={backgroundColor}
            strokeWidth={strokeWidth}
          />
          {/* 진행 원 */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={isNaN(progress) ? 0 : circumference - progress} // NaN일 경우 0으로 처리
            strokeLinecap="round"
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
          {/* 중앙 텍스트 */}
          <text
            x="53%"
            y="50%"
            style={{
              fontWeight: 700,
              fill: "black",
              textAnchor: "middle",
              dominantBaseline: "middle",
            }}
          >
            <tspan fontSize="45px">{animatedValue}</tspan>{" "}
            {/* 애니메이션 적용된 숫자 */}
            <tspan fontSize="12px" dx="0px" dy="7px">
              %
            </tspan>
          </text>
        </svg>
      </SvgContainer>
      {/* 하단 설명 텍스트 */}
      <Description>div {div} 학회원들의 스트릭 유지율</Description>
    </ChartWrapper>
  );
};

export default DonutChart;
