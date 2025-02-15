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

  /* ✅ 480px 이하일 때 세로 정렬 */
  @media (max-width: 480px) {
    width: 375px;
    flex-direction: column;
    align-items: center; /* ✅ 중앙 정렬 */
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
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 40%;
  white-space: nowrap;
  gap: 10px;
  align-items: center;

  @media (max-width: 480px) {
    width: 342px; /* ✅ 너비 자동 조정 */
  }
`;

const MediaInputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const InputWrapper = styled.div`
  @media (max-width: 480px) {
    display: none; /* ✅ 480px 이하에서 기본 검색창 숨김 */
  }
`;

const HitingWrapper = styled.div`
  cursor: pointer;
  font-weight: 900;
`;

/* ✅ 모바일에서만 HIARC와 Home 이미지를 묶어서 하나의 요소처럼 보이도록 함 */
const MobileHeaderWrapper = styled.div`
  width: 330px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 481px) {
    display: none; /* ✅ 481px 이상에서는 숨김 */
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  // ✅ 화면 크기 변경 감지하여 isMobile 업데이트
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Wrapper>
      {/* ✅ 480px 이상일 때 개별 렌더링 */}
      {!isMobile && <HIARC href="https://hiarchomepage.web.app/">HI-ARC</HIARC>}

      {/* ✅ 480px 이하에서만 HIARC + Home 이미지를 묶어서 렌더링 */}
      {isMobile && (
        <MobileHeaderWrapper>
          <HIARC href="https://hiarchomepage.web.app/">HI-ARC</HIARC>
          <HitingWrapper onClick={() => navigate("/")}>
            <img src={Home} alt="home" />
          </HitingWrapper>
        </MobileHeaderWrapper>
      )}

      <Right>
        {/* ✅ 기본 검색창 (480px 이상에서만 보임) */}
        <InputWrapper>
          <HeaderInput />
        </InputWrapper>

        {/* ✅ 480px 이상일 때만 Home 아이콘 개별 렌더링 */}
        {!isMobile && (
          <HitingWrapper onClick={() => navigate("/")}>
            <img src={Home} alt="home" />
          </HitingWrapper>
        )}
      </Right>

      {/* ✅ 480px 이하에서만 렌더링되는 검색창 */}
      {isMobile && (
        <MediaInputWrapper>
          <HeaderInput />
        </MediaInputWrapper>
      )}
    </Wrapper>
  );
};

export default Header;
