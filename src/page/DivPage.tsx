import {useState, useEffect} from "react";
import styled, {keyframes} from "styled-components";
import LayOut from "../ui/Layout";
import DivToggleBar from "../components/DivToggleBar";
import RankingContainer from "../block/RankingContainer";
import {useSearchParams} from "react-router-dom";
import DonutChart from "../atoms/DounutChart";
import {fetchGraphData} from "../api/RanikingApi";
import Color from "../ui/Color";

// ✅ 페이드인 애니메이션 정의
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// ✅ 애니메이션이 적용된 컨테이너
const AnimatedContainer = styled.div<{$animate: boolean; $duration?: string}>`
  opacity: 0;
  animation: ${({$animate}) => ($animate ? fadeIn : "none")}
    ${({$duration}) => $duration || "0s"} ease-in-out forwards;
`;
const HeadWrapper = styled.div`
  font-size: 35px;
  font-weight: 900;
  padding-bottom: 20px;
  @media (max-width: 480px) {
    width: 100%;
    margin-left: 16px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 45px;
`;

const MainWrapper = styled.div`
  display: flex;
  gap: 26px;
  margin-bottom: 40px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20.65px;
  @media (max-width: 480px) {
    display: none;
  }
`;

const Explain = styled.div`
  font-size: 12px;
  color: ${Color.graySub3};
`;

const DivPage = () => {
  const [selected, setSelected] = useState<number>(0); // 기본값을 1로 설정
  const [animate, setAnimate] = useState(false);
  const [searchParams] = useSearchParams(); // useSearchParams 사용
  const [streakRatio, setStreakRatio] = useState<number | null>(null);

  // ✅ selected 값을 URL에서 가져와 설정
  useEffect(() => {
    const numParam = searchParams.get("num");
    if (numParam) {
      setSelected(Number(numParam)); // URL에서 받은 num 파라미터를 selected에 설정
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchData = async () => {
      const graphData = await fetchGraphData(selected);
      if (isNaN(graphData)) {
        console.log("⚠️ 경고: NaN 값이 반환되었습니다.", graphData);
        setStreakRatio(0);
      } else {
        setStreakRatio(graphData);
      }
    };
    fetchData();
  }, [selected]);

  useEffect(() => {
    setAnimate(false);
    setTimeout(() => setAnimate(true), 50); // 애니메이션 초기화 후 딜레이
  }, [selected]);

  return (
    <LayOut>
      <HeadWrapper>Ranking</HeadWrapper>
      <Explain>* 점수는 15분 안으로 반영됩니다.</Explain>
      <ButtonWrapper>
        <DivToggleBar selected={selected} setSelected={setSelected} />
      </ButtonWrapper>
      <MainWrapper>
        <AnimatedContainer $animate={animate} $duration="1s">
          <RankingContainer selected={selected} />
        </AnimatedContainer>
        <Right>
          <AnimatedContainer $animate={animate} key={selected} $duration="2s">
            {streakRatio !== null ? (
              <DonutChart
                key={selected}
                value={isNaN(streakRatio) ? 0 : streakRatio}
                div={selected}
                duration={isNaN(streakRatio) ? 0 : streakRatio * 2}
              />
            ) : (
              <div>Loading...</div>
            )}
          </AnimatedContainer>
        </Right>
      </MainWrapper>
    </LayOut>
  );
};

export default DivPage;
