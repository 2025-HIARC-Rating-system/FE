import styled from "styled-components";
import {useState, useEffect} from "react";
import Color from "../ui/Color";
import IndividualBlock from "../components/IndividualBlock";
import StreakBoxArrowButton from "../components/StreakBoxArrowButton";

const Wrapper = styled.div`
  width: 725px;
  border-radius: 28px;
  background-color: ${Color.skybox};
  min-height: 342px;
  min-width: 320px;
  display: flex;
  flex-direction: column;

  /* ✅ 480px 이하일 때 width를 320px로 변경 */
  @media (max-width: 480px) {
    width: 320px;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;

const Individuals = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: flex-start;
  flex-grow: 1;
  padding: 12px 18px;
`;

const StreakBox = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const allBlocks = [
    {
      tier: 27,
      handle: "ghwo336",
      divNum: 1,
      totalStreak: 30,
      startDate: "2025-01-02",
    },
    {
      tier: 24,
      handle: "hututi",
      divNum: 1,
      totalStreak: 30,
      startDate: "2025-01-02",
    },
    {
      tier: 12,
      handle: "brayden",
      divNum: 1,
      totalStreak: 30,
      startDate: "2025-01-02",
    },
    {
      tier: 30,
      handle: "hi-arc",
      divNum: 1,
      totalStreak: 30,
      startDate: "2025-01-02",
    },
    {
      tier: 1,
      handle: "pizza",
      divNum: 1,
      totalStreak: 30,
      startDate: "2025-01-02",
    },
    {
      tier: 0,
      handle: "how are you",
      divNum: 1,
      totalStreak: 30,
      startDate: "2025-01-02",
    },
  ];

  // ✅ 화면 크기 변경 감지
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedBlocks = isMobile ? allBlocks.slice(0, 4) : allBlocks;

  return (
    <Wrapper>
      <ButtonWrapper>
        <StreakBoxArrowButton />
      </ButtonWrapper>
      <Individuals>
        {displayedBlocks.map(
          ({tier, handle, divNum, totalStreak, startDate}) => (
            <IndividualBlock
              key={handle}
              tier={tier}
              handle={handle}
              divNum={divNum}
              totalStreak={totalStreak}
              startDate={startDate}
            />
          )
        )}
      </Individuals>
    </Wrapper>
  );
};

export default StreakBox;
