import styled from "styled-components";
import {useState, useEffect} from "react";
import Color from "../ui/Color";
import IndividualBlock from "../components/IndividualBlock";
import StreakBoxArrowButton from "../components/StreakBoxArrowButton";
import {fetchHitingData, StreakData} from "../api/MainPageApi";

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
  const [streakData, setStreakData] = useState<{
    streakList: StreakData[];
  }>({
    streakList: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchHitingData();
        setStreakData(data);
      } catch (err) {
        setError("데이터를 못불러오고있어요");
        console.log(err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const streakList: StreakData[] = streakData.streakList.slice(0, 6) || [];

  // ✅ 화면 크기 변경 감지
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedBlocks = isMobile ? streakList.slice(0, 4) : streakList;

  return (
    <Wrapper>
      <ButtonWrapper>
        <StreakBoxArrowButton />
      </ButtonWrapper>
      {loading ? (
        <p style={{textAlign: "center", padding: "20px"}}>로딩 중...</p>
      ) : error ? (
        <p style={{textAlign: "center", color: "red", padding: "20px"}}>
          {error}
        </p>
      ) : (
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
      )}
    </Wrapper>
  );
};

export default StreakBox;
