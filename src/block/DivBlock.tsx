import HitingBox from "../components/HitingBox";
import styled from "styled-components";
import {useRef, useState} from "react";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  /* ✅ 480px 이하일 때 가로 스크롤 적용 */
  @media (max-width: 480px) {
    overflow-x: auto; /* 가로 스크롤 활성화 */
    scroll-snap-type: x mandatory; /* 스냅 스크롤 */
    display: flex;
    flex-wrap: nowrap;
    gap: 20px; /* ✅ 간격 20px 적용 */
    padding: 10px;
  }
`;

const ScrollContainer = styled.div`
  display: flex;
  gap: 20px; /* ✅ 각 요소 사이 간격 20px 적용 */

  /* ✅ 480px 이하일 때 터치 스크롤 */
  @media (max-width: 480px) {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    scroll-behavior: smooth;
    scrollbar-width: none; /* 파이어폭스 스크롤바 제거 */
    -ms-overflow-style: none; /* IE/Edge 스크롤바 제거 */
  }

  /* 크롬, 사파리 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const HitingBoxWrapper = styled.div`
  flex: 0 0 auto;
  scroll-snap-align: start; /* 스냅 위치 설정 */
  width: 80%;
  max-width: 300px; /* ✅ 각 박스 크기 제한 */
  margin-right: 20px; /* ✅ 요소 사이 간격 20px 적용 */

  @media (max-width: 480px) {
    width: 100%; /* 전체 너비 차지 */
  }

  /* 마지막 요소에는 margin-right 제거 */
  &:last-child {
    margin-right: 0;
  }
`;

const DivBlock = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // 드래그 속도 조절
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <Wrapper>
      <ScrollContainer
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
      >
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
    </Wrapper>
  );
};

export default DivBlock;
