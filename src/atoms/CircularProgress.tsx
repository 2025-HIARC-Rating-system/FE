import styled from "styled-components";
import Color from "../ui/Color";

const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CircleBackground = styled.circle`
  fill: none;
  stroke: #e0e0e0;
  stroke-width: 6;
`;

const CircleProgress = styled.circle`
  fill: none;
  stroke: ${Color.primary};
  stroke-width: 6;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.5s ease-in-out;
  transform: rotate(-90deg);
  transform-origin: center;
`;

const ProgressText = styled.text`
  font-weight: bold;
  fill: #000;
  text-anchor: middle;
`;

const CircularProgress = ({
  value,
  maxValue,
}: {
  value: number;
  maxValue: number;
}) => {
  const radius = 15;
  const circumference = 2 * Math.PI * radius;
  const percent = (value / maxValue) * 100;
  const dashOffset = circumference - (percent / 100) * circumference;

  return (
    <ProgressWrapper>
      <svg width="48" height="48" viewBox="0 0 40 40">
        <CircleBackground cx="20" cy="20" r={radius} />
        <CircleProgress
          cx="20"
          cy="20"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />

        {/* ✅ Value 부분만 크고 굵게 */}
        <ProgressText x="20" y="22">
          <tspan fontSize="9px" fontWeight="bold" dy="1px">
            {value}
          </tspan>
          <tspan fontSize="6px">/{maxValue}</tspan>
        </ProgressText>
      </svg>
    </ProgressWrapper>
  );
};

export default CircularProgress;
