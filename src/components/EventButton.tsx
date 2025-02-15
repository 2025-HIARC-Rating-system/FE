import styled from "styled-components";
import Img from "../assets/evenImg2.svg";
const Button = styled.div`
  width: 194px;
  height: 19px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 16px;
`;
const Left = styled.div`
  font-size: 17.5px;
  font-weight: 700;
`;

const Right = styled.div``;

const EventButton = () => {
  return (
    <Button>
      <Left>Event</Left>
      <Right>
        <img src={Img} alt="이벤트이미지" />
      </Right>
    </Button>
  );
};

export default EventButton;
