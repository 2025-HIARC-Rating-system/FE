import {useEffect, useState} from "react";
import styled from "styled-components";
import EventButton from "../components/EventButton";
import EventEntity from "../atoms/EventEntity";
import {fetchHitingData} from "../api/MainPageApi"; // API에서 데이터를 가져오기
import {EventData} from "../api/MainPageApi"; // EventData 타입 import

const Wrapper = styled.div`
  width: 255px;
  height: 342px;
  background-color: #fffced;
  border-radius: 28px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 22.6px;
  @media (max-width: 480px) {
    width: 320px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 15.18px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const EventBlock = () => {
  const [eventList, setEventList] = useState<EventData[]>([]); // 초기값을 빈 배열로 설정

  // 데이터 불러오기
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchHitingData();
      // eventList가 없으면 빈 배열로 설정
      setEventList(data.eventList || []);
    };

    loadData();
  }, []);

  return (
    <Wrapper>
      <ButtonContainer>
        <EventButton></EventButton>
      </ButtonContainer>
      <MainContainer>
        {/* eventList가 배열일 때만 slice와 map 사용 */}
        {Array.isArray(eventList) &&
          eventList.slice(0, 6).map((event, index) => (
            <EventEntity
              key={index} // 각 EventEntity에 고유 키를 부여
              handle={event.handle}
              tier={event.tier}
              eventHiting={event.eventHiting}
              rank={index + 1} // 순위를 인덱스로 설정
            />
          ))}
      </MainContainer>
    </Wrapper>
  );
};

export default EventBlock;
