import styled from "styled-components";
import {AdminExplain} from "../../ui/AdminExplain";
import {Ex} from "../../ui/AdminExplain";
import Color from "../../ui/Color";
import {useState} from "react";

const Wrapper = styled.div`
  overflow: visible;
`;
const Header = styled.div`
  margin-top: 36px;
  margin-bottom: 36px;
  font-size: 17.5px;
  font-weight: 700;
`;
const Explain = styled.div`
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 24px;
`;
const EX = styled.div`
  font-size: 12px;
`;

const InputBox = styled.div`
  background-color: ${Color.yellowBackground};
  width: 500px;
  height: 166px;
  margin-top: 24px;
`;
const Input = styled.textarea`
  height: 110px;
  width: 98%;
  background-color: inherit;
  border: none;
  text-align: start;
  padding-top: 10px;
  vertical-align: top;
  box-sizing: border-box;
  resize: none;
`;
const Button = styled.button`
  background-color: #ffa5a5;
  border: none;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 700;
  padding: 12px;
  cursor: pointer;
  :hover {
    background-color: #0af;
  }
`;

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
const AdminInput = ({BlockName}: {BlockName: string}) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };
  return (
    <Wrapper>
      <Header>{BlockName}</Header>
      <Explain>{AdminExplain[BlockName] || "잠시오류"}</Explain>
      <EX>{Ex[BlockName]}</EX>
      <InputBox>
        <Input value={inputValue} onChange={handleInputChange} />
        <BottomWrapper>
          <Button>입력하기</Button>
        </BottomWrapper>
      </InputBox>
    </Wrapper>
  );
};

export default AdminInput;
