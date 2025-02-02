import styled from "styled-components";
import Color from "../ui/Color";
import HeaderInput from "../atoms/HeaderInput";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 36px;
  padding: 30px 0;
  color: ${Color.primary};
`;

const HIARC = styled.a`
  color: ${Color.primary};
  font-size: 20px;
  text-decoration: none;
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 40%;
  white-space: nowrap;
  gap: 10px;
  align-items: center;
`;

const Header = () => {
  return (
    <Wrapper>
      <HIARC href="https://hiarchomepage.web.app/">HI-ARC</HIARC>
      <Right>
        <HeaderInput />
        하이팅 ☰
      </Right>
    </Wrapper>
  );
};

export default Header;
