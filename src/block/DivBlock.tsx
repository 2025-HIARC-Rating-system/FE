import HitingBox from "../components/HitingBox";
import styled from "styled-components";
import {useRef, useState, useEffect} from "react";
import Color from "../ui/Color";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* ✅ 기본적으로 왼쪽 정렬 유지 */

  /* ✅ 모바일(480px 이하)에서는 인디케이터 중앙 정렬 */
  @media (max-width: 480px) {
    align-items: center;
  }
`;

const ScrollContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  width: 100%; /* ✅ 스크롤 가능하도록 full-width 설정 */

  /* ✅ 480px 이하일 때 터치 스크롤 정상 동작 */
  @media (max-width: 480px) {
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none; /* ✅ 파이어폭스 스크롤바 제거 */
    -ms-overflow-style: none; /* ✅ IE/Edge 스크롤바 제거 */
  }

  /* ✅ 크롬, 사파리 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const HitingBoxWrapper = styled.div`
  flex: 0 0 auto;
  scroll-snap-align: center;
  width: 80%;
  max-width: 300px;
  margin-right: 20px;

  @media (max-width: 480px) {
    width: 100%;
  }

  &:last-child {
    margin-right: 0;
  }
`;

/* ✅ 인디케이터 스타일 (모바일에서만 보이도록 설정) */
const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;

  /* ✅ PC(480px 초과)에서는 숨김 */
  @media (min-width: 481px) {
    display: none;
  }
`;

const Indicator = styled.div<{$active: boolean}>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({$active}) =>
    $active ? Color.primary : "#d3d3d3"}; /* ✅ 활성화된 점은 파란색 */
  transition: background-color 0.3s ease;
`;

const DivBlock = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const {scrollLeft, clientWidth} = scrollRef.current;

    // ✅ 현재 중앙에 보이는 요소 찾기
    const newIndex = Math.round(scrollLeft / clientWidth);
    setActiveIndex(newIndex);
  };

  // ✅ 스크롤 이벤트 감지하여 현재 보이는 요소 업데이트
  useEffect(() => {
    if (!scrollRef.current) return;

    scrollRef.current.addEventListener("scroll", handleScroll);

    return () => {
      scrollRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper>
      <ScrollContainer ref={scrollRef}>
        <HitingBoxWrapper>
          <HitingBox divNum={1} />
        </HitingBoxWrapper>
        <HitingBoxWrapper>
          <HitingBox divNum={2} />
        </HitingBoxWrapper>
        <HitingBoxWrapper>
          <HitingBox divNum={3} />
        </HitingBoxWrapper>
      </ScrollContainer>

      {/* ✅ 모바일(480px 이하)에서만 인디케이터 보이게 설정 */}
      <IndicatorContainer>
        {[0, 1, 2].map((index) => (
          <Indicator key={index} $active={activeIndex === index} />
        ))}
      </IndicatorContainer>
    </Wrapper>
  );
};

export default DivBlock;
