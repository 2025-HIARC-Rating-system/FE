import {useEffect, useState} from "react";
import LayOut from "../ui/Layout";
import styled, {keyframes} from "styled-components";
import StreakEntity from "../components/StreakEntity";
import {fetchStreakData, StreakData} from "../api/StreakApi"; // ✅ API 모듈 import

// 애니메이션 효과
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedContainer = styled.div<{$delay?: string}>`
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: ${(props) => props.$delay || "0s"};
`;

const HeadWrapper = styled.div`
  font-size: 35px;
  font-weight: 900;
  padding-bottom: 24px;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px 80px;
  justify-content: flex-start;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  @media (max-width: 480px) {
    width: 100%;
    margin-left: 16px;
  }
`;

const StreakPage = () => {
  const [streakData, setStreakData] = useState<StreakData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [seasonTotal, setSeasonTotal] = useState<number>(0);
  useEffect(() => {
    const loadStreakData = async () => {
      setLoading(true);
      setError(null);
      const data = await fetchStreakData();
      if (data) {
        setStreakData(data.streakList);
        setSeasonTotal(data.seasonTotal);
      } else {
        setError("데이터를 불러오는 데 실패했습니다.");
      }
      setLoading(false);
    };

    loadStreakData();
  }, []);

  return (
    <LayOut>
      <Wrapper>
        <HeadWrapper>Streak</HeadWrapper>
        {loading ? (
          <p>로딩 중...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <AnimatedContainer $delay="0.2s">
            <MainWrapper>
              {streakData.map((streak, index) => (
                <StreakEntity
                  key={index}
                  handle={streak.handle}
                  tier={streak.tier}
                  div={streak.div}
                  seasonStreak={streak.seasonStreak}
                  seasonTotal={seasonTotal}
                  totalStreak={streak.totalStreak}
                  startDate={streak.startDate}
                />
              ))}
            </MainWrapper>
          </AnimatedContainer>
        )}
      </Wrapper>
    </LayOut>
  );
};

export default StreakPage;
