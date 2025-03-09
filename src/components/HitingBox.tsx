import {useEffect, useState} from "react";
import styled from "styled-components";
import {fetchHitingData} from "../api/MainPageApi"; // ✅ API 직접 호출
import {DivData} from "../api/MainPageApi"; // ✅ DivData 타입 가져오기
import Color from "../ui/Color";
import ArrowButton from "../atoms/ArrowButton";
import DivNameTack from "./DivNameTack";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  border-radius: 28px;
  background-color: ${Color.skybox};
  min-height: 300px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 3%;
  display: flex;
  justify-content: center;
`;

const TackContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const ERRORWRAPPER = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const HitingBox = ({divNum}: {divNum: number}) => {
  const [hitingData, setHitingData] = useState<{
    div1List: DivData[];
    div2List: DivData[];
    div3List: DivData[];
  }>({
    div1List: [],
    div2List: [],
    div3List: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ✅ API 호출 및 데이터 저장
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchHitingData();
        setHitingData(data);
      } catch (err) {
        setError("데이터를 불러오는 데 실패했습니다.");
        console.log(err);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  // ✅ divNum에 따라 올바른 데이터 리스트 선택
  const divList: DivData[] =
    divNum === 1
      ? hitingData.div1List
      : divNum === 2
      ? hitingData.div2List
      : hitingData.div3List || [];

  if (loading) {
    return (
      <Wrapper>
        <ERRORWRAPPER>
          <ArrowButton divNum={divNum} />
          <p>Loading...</p> {/* ✅ 로딩 UI 개선 */}
        </ERRORWRAPPER>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <ERRORWRAPPER>
          <ArrowButton divNum={divNum} />
          <p>{error}</p> {/* ✅ 에러 메시지 표시 */}
        </ERRORWRAPPER>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <ButtonWrapper>
        <ArrowButton divNum={divNum} />
      </ButtonWrapper>
      <TackContainer>
        {divList.length > 0 ? (
          divList.map((item, index) => (
            <DivNameTack
              key={index}
              rank={item.rank}
              id={item.handle}
              tier={item.tier}
              totalHiting={item.totalHiting}
            />
          ))
        ) : (
          <p>데이터가 없습니다.</p>
        )}
      </TackContainer>
    </Wrapper>
  );
};

export default HitingBox;
