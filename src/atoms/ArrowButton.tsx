import styled from "styled-components";
import {useNavigate} from "react-router-dom";
const Button = styled.button`
  display: flex;
  justify-content: space-between;
  flex-direction: space-between;
  width: 92%;
  background-color: #ffffff;
  border: none;
  border-radius: 20px;
  height: 40px;
  cursor: pointer;
  padding: 3px 15px;
  align-items: center;
`;

const DivContainer = styled.div`
  font-size: 20px;
`;

const ArrowContainer = styled.div`
  font-size: 20px;
`;

const ArrowButton = ({divNum}: {divNum: number}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/div?num=${divNum}`);
  };
  return (
    <Button onClick={handleClick}>
      <DivContainer>Div{divNum}</DivContainer>

      <ArrowContainer>{">"}</ArrowContainer>
    </Button>
  );
};

export default ArrowButton;
