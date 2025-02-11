import LayOut from "../ui/Layout";
import styled from "styled-components";
import StreakEntity from "../components/StreakEntity";
const HeadWrapper = styled.div`
  font-size: 35px;
  font-weight: 900;
  padding-top: 45px;
  padding-bottom: 20px;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; /* ✅ 너비 초과 시 줄바꿈 */
  gap: 60px 30px; /* ✅ 요소 간 간격 조정 */
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
      </Wrapper>
    </LayOut>
  );
};

export default StreakPage;
