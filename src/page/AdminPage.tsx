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
    </LayOut>
  );
};

export default AdminPage;
