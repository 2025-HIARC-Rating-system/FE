import {AdminCheckExplain} from "../../components/adminComponents/AdminCheckExplain";
import styled from "styled-components";
import {AdminInputBox} from "../../components/adminComponents/AdminInputBox";

const Wrapper = styled.div`
  margin-top: 33px;
  display: flex;
  gap: 150px;
`;

export const AdminCheckCurrent = ({blockName}: {blockName: string}) => {
  return (
    <Wrapper>
      <AdminCheckExplain blockName={blockName} />
      <AdminInputBox blockName={blockName} />
    </Wrapper>
  );
};
