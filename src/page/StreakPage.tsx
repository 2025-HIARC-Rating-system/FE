import LayOut from "../ui/Layout";
import styled, {keyframes} from "styled-components";
import StreakEntity from "../components/StreakEntity";

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
const AnimatedContainer = styled.div<{delay?: string}>`
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: ${(props) => props.delay || "0s"};
`;

const HeadWrapper = styled.div`
  font-size: 35px;
  font-weight: 900;

  padding-bottom: 20px;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; /* ✅ 너비 초과 시 줄바꿈 */
  gap: 60px 80px; /* ✅ 요소 간 간격 조정 */
  justify-content: flex-start; /* ✅ 중앙 정렬 */
  width: 100%; /* ✅ 전체 너비 사용 */
`;

const Wrapper = styled.div`
  width: 100%;
`;

const StreakPage = () => {
  return (
    <LayOut>
      <Wrapper>
        <HeadWrapper>Streak</HeadWrapper>
        <AnimatedContainer delay="0.2s">
          <MainWrapper>
            <StreakEntity
              value={15}
              maxValue={30}
              days={83}
              tier={7}
              divNum={3}
              id="brayden"
            />
            <StreakEntity
              value={9}
              maxValue={30}
              days={53}
              tier={23}
              divNum={1}
              id="htuti"
            />
            <StreakEntity
              value={10}
              maxValue={30}
              days={122}
              tier={18}
              divNum={3}
              id="ghwo336"
            />
            <StreakEntity
              value={19}
              maxValue={30}
              days={122}
              tier={26}
              divNum={3}
              id="optiprime"
            />
            <StreakEntity
              value={1}
              maxValue={30}
              days={122}
              tier={1}
              divNum={3}
              id="bronze"
            />
            <StreakEntity
              value={10}
              maxValue={30}
              days={12}
              tier={13}
              divNum={3}
              id="gold33"
            />
            <StreakEntity
              value={10}
              maxValue={30}
              days={322}
              tier={31}
              divNum={3}
              id="ghwsdafjndskfnasdjlvnjkldvnajskdvn"
            />
            <StreakEntity
              value={10}
              maxValue={30}
              days={22}
              tier={18}
              divNum={3}
              id="fkfk"
            />
          </MainWrapper>
        </AnimatedContainer>
      </Wrapper>
    </LayOut>
  );
};

export default StreakPage;
