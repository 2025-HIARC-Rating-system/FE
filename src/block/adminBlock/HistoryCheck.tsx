import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 80px;
  border-bottom: 1px solid black;
`;

const Button = styled.button`
  background-color: #ffa5a5;
  border: none;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 700;
  padding: 12px;
  cursor: pointer;
  position: relative;
  :hover {
    background-color: #0af;
  }
`;
const Entity = styled.div`
  display: flex;
  flex-direction: row;
  gap: 29px;
  align-items: center;
  margin-bottom: 29px;
`;

const HistroyCheck = () => {
  return (
    <Wrapper>
      <Entity>
        지난 시즌 기록 확인하기
        <Button>확인하기</Button>
      </Entity>
      <Entity>
        지난 이벤트 기록 확인하기
        <Button>확인하기</Button>
      </Entity>
    </Wrapper>
  );
};

export default HistroyCheck;
