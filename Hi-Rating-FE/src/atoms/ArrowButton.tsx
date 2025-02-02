import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  flex-direction: space-between;
  width: 95%;
  background-color: #ffffff;
  border: none;
  border-radius: 20px;
  min-height: 30px;
  cursor: pointer;
  padding: 3px 15px;
`;

const DivContainer = styled.div`
  font-size: 20px;
`;

const ArrowContainer = styled.div`
  font-size: 20px;
`;

const ArrowButton = ({
  ArrowString,
  onClick,
}: {
  ArrowString: string;
  onClick: () => void;
}) => {
  return (
    <Button onClick={onClick}>
      <DivContainer>{ArrowString}</DivContainer>
      <ArrowContainer>{">"}</ArrowContainer>
    </Button>
  );
};

export default ArrowButton;
