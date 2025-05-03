import AdminEnd from "../block/adminBlock/AdminEnd";
import AdminInput from "../block/adminBlock/AdminInput";
import HistroyCheck from "../block/adminBlock/HistoryCheck";
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

const AdminPage = () => {
  return (
    <LayOut>
      <HeadWrapper>관리자 페이지</HeadWrapper>
      <HistroyCheck />
      <AdminInput BlockName="새로운 학기 시작하기(막누르지마셈 초 기 화 됨)" />
      <AdminInput BlockName="새로운 시즌 시작하기" />
      <AdminInput BlockName="현재 시즌 중도 마무리" />
      <AdminInput BlockName="새로운 이벤트 시작하기" />
      <AdminInput BlockName="현재 이벤트 종료일 수정" />
      <AdminEnd endName="시즌 끝내기 (점수 초기화)" />
      <AdminEnd endName="이벤트 끝내기 (점수 초기화)" />
    </LayOut>
  );
};

export default AdminPage;
