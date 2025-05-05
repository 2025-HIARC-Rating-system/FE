import styled from "styled-components";
import {AdminExplain} from "../../ui/AdminExplain";

import Color from "../../ui/Color";
import {resetAdminData} from "../../api/AdminApi";
const Wrapper = styled.div`
  border-bottom: 1px solid black;
`;
const Header = styled.div`
  font-size: 17.5px;
  font-weight: 700;
  margin-top: 45px;
  margin-bottom: 29px;
`;

const Main = styled.div`
  font-size: 13px;
  font-weight: 600;
`;

const Button = styled.button`
  background-color: #ffa5a5;
  border: none;
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 41px;
  cursor: pointer;
  &:hover {
    background-color: ${Color.primary};
  }
`;

const AdminEnd = ({endName}: {endName: string}) => {
  const handleButtonClick = async () => {
    try {
      const type = endName === "시즌 끝내기 (점수 초기화)" ? "season" : "event";
      resetAdminData(type);
      alert("초기화에 성공하였습니다.");
    } catch (error) {
      alert("실패!!!!!!");
    }
  };
  return (
    <Wrapper>
      <Header>{endName}</Header>
      <Main>
        <pre>{AdminExplain[endName]}</pre>
      </Main>
      <Button onClick={handleButtonClick}>초기화 하기</Button>
    </Wrapper>
  );
};

export default AdminEnd;
