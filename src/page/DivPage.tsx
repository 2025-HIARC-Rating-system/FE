import {useState, useEffect} from "react";
import styled, {keyframes} from "styled-components";
import LayOut from "../ui/Layout";
import DivToggleBar from "../components/DivToggleBar";
import RankingContainer from "../block/RankingContainer";
import {selectedDiv} from "../store/Atom";
import {useAtom} from "jotai";
import DonutChart from "../atoms/DounutChart";
import mockPercent from "../ui/MockPercent";
import {useSearchParams} from "react-router-dom";

// ✅ 페이드인 애니메이션 정의
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// ✅ 애니메이션이 적용된 컨테이너
const AnimatedContainer = styled.div<{$animate: boolean}>`
  opacity: 0;
  animation: ${({$animate}) => ($animate ? fadeIn : "none")} 0.2s ease-in-out
    forwards;
`;

const HeadWrapper = styled.div`
  font-size: 35px;
  font-weight: 900;

  padding-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 45px;
`;
const MainWrapper = styled.div`
  display: flex;
  gap: 26px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20.65px;
`;

const DivPage = () => {
  const [selected, setSelected] = useAtom(selectedDiv);
  const [animate, setAnimate] = useState(false);
  const [searchParams] = useSearchParams();

  // ✅ URL에서 `num` 값을 가져와 `selected` 상태 업데이트
  useEffect(() => {
    const numParam = searchParams.get("num");
    if (numParam) {
      setSelected(Number(numParam)); // ✅ URL에서 가져온 값을 상태에 반영
    }
  }, [searchParams, setSelected]);
  // ✅ selected 값이 바뀔 때 애니메이션 트리거
  useEffect(() => {
    setAnimate(false); // 애니메이션 초기화
    setTimeout(() => setAnimate(true), 50); // 약간의 딜레이 후 애니메이션 실행
  }, [selected]);

  return (
    <LayOut>
      <HeadWrapper>Ranking</HeadWrapper>
      <ButtonWrapper>
        <DivToggleBar selected={selected} setSelected={setSelected} />
      </ButtonWrapper>

      {/* ✅ 애니메이션 컨테이너 추가 */}
      <MainWrapper>
        <AnimatedContainer $animate={animate} key={selected}>
          <RankingContainer selected={selected} />
        </AnimatedContainer>
        <Right>
          <DonutChart
            value={mockPercent[selected]}
            div={selected}
            duration={mockPercent[selected] * 20}
          />
        </Right>
      </MainWrapper>
    </LayOut>
  );
};

export default DivPage;
