import styled from "styled-components";
import reallogo from "./../assets/hiarc-reallogo.png";
import FontStyle from "../ui/FontStyle";
import ContactInfo from "../atoms/MediaListCell";
import IHHHLOGO from "../assets/IHHHLOGO.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; /* 부모와 동일한 너비로 설정 */

  @media (max-width: 800px) {
    align-items: flex-start;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

const FooterWrapper = styled.div`
  width: 100%; /* 부모와 동일한 너비로 설정 */
  box-sizing: border-box; /* 패딩과 보더를 포함하여 크기를 계산 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  /* color: #00aaff; */
  color: red;
  text-align: left;
  margin-top: 50px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const IntroduceWrapper = styled.div`
  display: flex;
  flex: 1; /* IntroduceWrapper가 더 많은 공간을 차지하도록 설정 */
`;

const LogoImage = styled.img`
  /* width: 40px;
  height: 48px; */
  width: 60px;
  height: 60px;
  margin-top: 20px;
  margin-right: 20px;
`;

const IntroText = styled.div`
  ${FontStyle.body1Regular}
  white-space: nowrap;
  @media (max-width: 800px) {
    /* width <= 800px에서만 적용 */
    font-size: 14px;
    margin-bottom: 14px;
  }
`;

const IntroTitle = styled.h4`
  margin-bottom: 5px;
  ${FontStyle.body1Regular}
  white-space: nowrap;
  @media (max-width: 800px) {
    /* width <= 800px에서만 적용 */
    font-size: 20px;
  }
`;

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <FooterWrapper>
        <IntroduceWrapper>
          <LogoImage src={IHHHLOGO} alt="HI-ARC 로고" />
          <IntroWrapper>
            <IntroTitle>IHHH</IntroTitle>
            <IntroText>홍익대학교 컴퓨터공학과 해킹 보안 학회</IntroText>
          </IntroWrapper>
        </IntroduceWrapper>

        <ContactInfo />
      </FooterWrapper>
    </Wrapper>
  );
};

export default Footer;
