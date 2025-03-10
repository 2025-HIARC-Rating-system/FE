import {useState, useEffect} from "react";
import styled from "styled-components";
import Img from "../assets/eventImg.png";

const Button = styled.div`
  width: 194px;
  height: 19px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 16px;

  @media (max-width: 480px) {
    width: 254px;
  }
`;

const Left = styled.div`
  font-size: 17.5px;
  font-weight: 700;
`;

const Right = styled.div`
  font-size: 20px; /* ✅ 모바일에서 '>' 크기 조정 */
  font-weight: bold;
`;

const EventButton = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  // ✅ 화면 크기 변경 감지하여 isMobile 업데이트
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Button>
      <Left>Event</Left>
      <Right>{isMobile ? ">" : <img src={Img} alt="이벤트이미지" />}</Right>
    </Button>
  );
};

export default EventButton;
