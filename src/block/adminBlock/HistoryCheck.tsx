import styled from "styled-components";
import {AdminCheck} from "../../components/adminComponents/AdminCheck";

const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  border-bottom: 1px solid black;
`;

const HistoryCheck = () => {
  return (
    <Wrapper>
      <AdminCheck name="recent-season" />
      <AdminCheck name="recent-event" />
      <AdminCheck name="date" />
    </Wrapper>
  );
};

export default HistoryCheck;
