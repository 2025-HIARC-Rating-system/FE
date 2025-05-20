import AdminEnd from "../block/adminBlock/AdminEnd";
import AdminInput from "../block/adminBlock/AdminInput";
import HistoryCheck from "../block/adminBlock/HistoryCheck";
import {AdminCheckCurrent} from "../block/adminBlock/AdminCheckCurrent";
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

const adminInputs = [
  "새로운 학기 시작하기(막누르지마셈 초 기 화 됨)",
  "새로운 시즌 시작하기",
  "현재 시즌 중도 마무리",
  "새로운 이벤트 시작하기",
  "현재 이벤트 중도 마무리",
  "HITING값 직접 수정하기",
];

const adminCheckCurrent = [
  "현재 푼 문제 수 확인하기",
  "현재 HITING값 확인하기",
];

const adminEnds = ["시즌 끝내기 (점수 초기화)", "이벤트 끝내기 (점수 초기화)"];

const AdminPage = () => {
  return (
    <LayOut>
      <HeadWrapper>관리자 페이지</HeadWrapper>
      <HistoryCheck />
      {adminInputs.map((name) => (
        <AdminInput key={name} BlockName={name} />
      ))}
      {adminEnds.map((name) => (
        <AdminEnd key={name} endName={name} />
      ))}
      {adminCheckCurrent.map((name) => (
        <AdminCheckCurrent key={name} blockName={name} />
      ))}
    </LayOut>
  );
};

export default AdminPage;
