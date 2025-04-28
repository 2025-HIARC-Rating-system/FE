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
  stroke: #edf8fd;
`;

const CircleProgress = styled.circle<{strokeColor?: string}>`
  fill: none;
  stroke: ${({strokeColor}) => strokeColor || Color.primary};
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

interface CircularProgressProps {
  value: number;
  maxValue: number;
  width?: number;
  height?: number;
  strokeColor?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  maxValue,
  width = 48,
  height = 48,
  strokeColor,
}) => {
  const size = Math.min(width, height);
  const strokeWidth = size * 0.15;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const percent = (value / maxValue) * 100;
  const dashOffset = circumference - (percent / 100) * circumference;

  return (
    <ProgressWrapper style={{width: size, height: size}}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* 배경 원 */}
        <CircleBackground
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        {/*  진행 원 */}
        <CircleProgress
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeWidth={strokeWidth}
          strokeColor={strokeColor}
        />

        {/*  중앙 텍스트 */}
        <ProgressText x="50%" y="52%" dy="3%">
          <tspan fontSize={`${size * 0.23}px`} fontWeight="bold">
            {value}
          </tspan>
          <tspan fontSize={`${size * 0.12}px`} dx="2px">
            /{maxValue}
          </tspan>
        </ProgressText>
      </svg>
    </ProgressWrapper>
  );
};

export default CircularProgress;
