import LayOut from "../ui/Layout";
import styled from "styled-components";
const HeadWrapper = styled.div`
  font-size: 35px;
  font-weight: 900;

  padding-bottom: 40px;
  @media (max-width: 480px) {
    width: 100%;
    margin-left: 16px;
  }
`;
const Button = styled.button`
  white-space: nowrap;
  width: fit-content;
  border-radius: 10px;
  border: none;
  padding: 12px;
  background-color: #ffa5a5;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  .Retter {
    display: flex;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
  }
`;

const AdminPage = () => {
  return (
    <LayOut>
      <HeadWrapper>관리자 페이지</HeadWrapper>
      <Wrapper>
        <Container>
          <div className="Retter">시즌 끝내기</div>
          <Button>점수 초기화 하기</Button>
        </Container>
        <Container>
          <div className="Retter">지난 시즌 기록 확인하기</div>
          <Button>지난 시즌 기록 확인하기</Button>
        </Container>
        <Container>
          <div className="Retter">시즌 시작하기</div>
          <Button>학회원 등록하기</Button>
        </Container>
        <Container>
          <div className="Retter">나노 동환 </div>
          <Button>시즌 기간 입력하기</Button>
        </Container>
        <Button>2배 이벤트</Button>
        <Button>태그 이벤트</Button>
      </Wrapper>
    </LayOut>
  );
};

export default AdminPage;
