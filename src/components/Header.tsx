import {useState, useEffect} from "react";
import styled from "styled-components";
import Color from "../ui/Color";
import HeaderInput from "../atoms/HeaderInput";
import {useNavigate} from "react-router-dom";
import Home from "../assets/Home.svg";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  height: 36px;
  padding: 30px 0;
  color: ${Color.primary};

  @media (max-width: 480px) {
    width: 375px;
    flex-direction: column;
    align-items: center;
    height: 90px;
    justify-content: flex-start;
    gap: 10px;
  }
`;

const HIARC = styled.a`
  color: ${Color.primary};
  font-size: 20px;
  text-decoration: none;
  white-space: nowrap;
  font-weight: 900;
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 40%;
  white-space: nowrap;
  gap: 10px;
  align-items: center;

  @media (max-width: 480px) {
    width: 342px;
  }
`;

const MediaInputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const InputWrapper = styled.div`
  @media (max-width: 480px) {
    display: none;
  }
`;

const HitingWrapper = styled.div`
  cursor: pointer;
  font-weight: 900;
`;

const MobileHeaderWrapper = styled.div`
  width: 330px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 481px) {
    display: none;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Wrapper>
      {!isMobile && <HIARC href="https://hiarchomepage.web.app/">HI-ARC</HIARC>}

      {isMobile && (
        <MobileHeaderWrapper>
          <HIARC href="https://hiarchomepage.web.app/">HI-ARC</HIARC>
          <HitingWrapper onClick={() => navigate("/")}>
            <img src={Home} alt="home" />
          </HitingWrapper>
        </MobileHeaderWrapper>
      )}

      <Right>
        <InputWrapper>
          <HeaderInput />
        </InputWrapper>

        {!isMobile && (
          <HitingWrapper onClick={() => navigate("/")}>
            <img src={Home} alt="home" />
          </HitingWrapper>
        )}
      </Right>

      {isMobile && (
        <MediaInputWrapper>
          <HeaderInput />
        </MediaInputWrapper>
      )}
    </Wrapper>
  );
};

export default Header;
