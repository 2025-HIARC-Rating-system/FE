import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Color from "../ui/Color"; // ✅ 기본 색상 관리 파일

// ✅ 스타일 지정
const ChartWrapper = styled.div`
  width: 302px; /* ✅ 전체 컨테이너 크기 변경 */
  height: 261px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f0f9ff; /* ✅ 배경 색 */
  border-radius: 20px; /* ✅ 둥근 모서리 */
  padding: 10px;
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const PercentageText = styled.text`
  font-weight: bold;
  fill: black;
  text-anchor: middle;
  dominant-baseline: middle;
`;

const Description = styled.div`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500;
  color: black;
  text-align: center;
  margin-top: 20px;
`;

interface DonutChartProps {
  value: number; // ✅ 최종 목표 진행률 (예: 30)
  maxValue?: number; // ✅ 최대값 (기본: 100)
  strokeColor?: string; // ✅ 진행 색상 (기본: 파란색)
  backgroundColor?: string; // ✅ 배경 원 색상 (기본: 연한 회색)
  div?: number;
  duration?: number; // ✅ 애니메이션 지속 시간 (기본: 1.5초)
}

const DonutChart: React.FC<DonutChartProps> = ({
  value,
  maxValue = 100,
  strokeColor = Color.primary,
  backgroundColor = "#eee",
  div,
  duration = 500, // ✅ 애니메이션 지속 시간 (ms)
}) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const newValue = Math.floor(progress * value);
      setAnimatedValue(newValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  const size = 180; // ✅ 도넛 차트 크기 (고정)
  const strokeWidth = 30; // ✅ 선 두께 증가
  const radius = (size - strokeWidth) / 2; // ✅ 반지름 계산 조정
  const circumference = 2 * Math.PI * radius; // ✅ 원 둘레 길이
  const progress = (animatedValue / maxValue) * circumference; // ✅ 진행된 부분 길이

  return (
    <ChartWrapper>
      <SvgContainer>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {/* ✅ 배경 원 */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={backgroundColor}
            strokeWidth={strokeWidth}
          />
          {/* ✅ 진행 원 */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round" // ✅ 양 끝 둥글게
            transform={`rotate(-90 ${size / 2} ${size / 2})`} // ✅ 시작 위치 조정
          />
          {/* ✅ 중앙 텍스트 (숫자는 크고, % 기호는 더 아래로 이동) */}
          <PercentageText x="50%" y="50%">
            <tspan fontSize="45px">{animatedValue}</tspan>{" "}
            {/* ✅ 애니메이션 적용된 숫자 */}
            <tspan fontSize="12px" dx="-5px" dy="10px" text-anchor="start">
              %
            </tspan>{" "}
            {/* ✅ % 기호를 더 왼쪽 & 아래로 이동 */}
          </PercentageText>
        </svg>
      </SvgContainer>
      {/* ✅ 하단 설명 텍스트 */}
      <Description>div {div} 학회원들의 스트릭 유지율</Description>
    </ChartWrapper>
  );
};

export default DonutChart;
