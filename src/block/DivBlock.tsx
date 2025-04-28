import HitingBox from "../components/HitingBox";
import styled from "styled-components";
import {useRef, useState, useEffect} from "react";
import Color from "../ui/Color";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 480px) {
    align-items: center;
  }
`;

const ScrollContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  width: 100%;

  @media (max-width: 480px) {
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

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

const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;

  @media (min-width: 481px) {
    display: none;
  }
`;

const Indicator = styled.div<{$active: boolean}>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({$active}) => ($active ? Color.primary : "#d3d3d3")};
  transition: background-color 0.3s ease;
`;

const DivBlock = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const {scrollLeft, clientWidth} = scrollRef.current;

    const newIndex = Math.round(scrollLeft / clientWidth);
    setActiveIndex(newIndex);
  };

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
      {/*모바일 에서만 보임여*/}
      <IndicatorContainer>
        {[0, 1, 2].map((index) => (
          <Indicator key={index} $active={activeIndex === index} />
        ))}
      </IndicatorContainer>
    </Wrapper>
  );
};

export default DivBlock;
