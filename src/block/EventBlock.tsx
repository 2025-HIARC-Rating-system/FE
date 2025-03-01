import styled from "styled-components";
import EventButton from "../components/EventButton";
import EventEntity from "../atoms/EventEntity";

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
  return (
    <Wrapper>
      <ButtonContainer>
        <EventButton></EventButton>
      </ButtonContainer>
      <MainContainer>
        <EventEntity />
        <EventEntity />
        <EventEntity />
        <EventEntity />
      </MainContainer>
    </Wrapper>
  );
};

export default EventBlock;
