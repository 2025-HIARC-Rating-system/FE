import styled from "styled-components";
import {useAtom} from "jotai";
import EventButton from "../components/EventButton";
import EventEntity from "../atoms/EventEntity";
import {hitingDataAtom} from "../store/Atom";

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
  const [hitingData] = useAtom(hitingDataAtom);

  const eventList = hitingData.eventList?.slice(0, 6) || [];

  return (
    <Wrapper>
      <ButtonContainer>
        <EventButton />
      </ButtonContainer>
      <MainContainer>
        {eventList.map((event, index) => (
          <EventEntity
            key={index}
            handle={event.handle}
            tier={event.tier}
            eventHiting={event.eventHiting}
            rank={index + 1}
          />
        ))}
      </MainContainer>
    </Wrapper>
  );
};

export default EventBlock;
