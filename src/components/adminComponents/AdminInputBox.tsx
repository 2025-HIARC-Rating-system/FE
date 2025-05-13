import styled from "styled-components";
import Color from "../../ui/Color";
const Wrapper = styled.div`
  overflow: visible;
`;
const InputBox = styled.div`
  background-color: ${Color.yellowBackground};
  width: 454px;
  height: 60px;
  display: flex;
  gap: 40px;
  align-items: center;
`;
const Input = styled.textarea`
  height: 30px;
  width: 70%;
  background-color: inherit;
  border: none;
  margin-top: 10px;
  box-sizing: border-box;
  resize: none;
  font-size: 20px;
  margin-left: 10px;
`;
const Button = styled.button`
  background-color: #ffa5a5;
  border: none;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 700;
  padding: 12px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: #0af;
  }
`;

export const AdminInputBox = ({blockName}: {blockName: string}) => {
  return (
    <Wrapper>
      <InputBox>
        <Input />
        <Button>입력하기</Button>
      </InputBox>
    </Wrapper>
  );
};
