import {AdminExplain} from "../../ui/AdminExplain";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 29px;
  width: 500px;
  margin-bottom: 30px;
`;
const Header = styled.div`
  font-size: 17.5px;
  font-weight: 700;
`;
const Explain = styled.div`
  font-size: 12px;
  font-weight: 700;
`;

export const AdminCheckExplain = ({blockName}: {blockName: string}) => {
  return (
    <Wrapper>
      <Header>{blockName}</Header>
      <Explain>{AdminExplain[blockName]}</Explain>
    </Wrapper>
  );
};
