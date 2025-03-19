import styled from "styled-components";

import {ReactNode, FC} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* ✅ Footer가 하단에 붙도록 설정 */
  align-items: center;
  width: 1000px;
  min-height: 100vh; /* ✅ 최소 높이를 화면 전체 높이로 설정 */
  margin: 0 auto;

  @media (max-width: 480px) {
    width: 375px;
  }
`;

const ContentWrapper = styled.div`
  flex: 1; /* ✅ 남은 공간을 차지하게 해서 Footer를 밀어냄 */
  width: 100%; /* ✅ 전체 너비 사용 */
`;

const LayOut: FC<{children: ReactNode}> = ({children}) => {
  return (
    <LayoutWrapper>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </LayoutWrapper>
  );
};

export default LayOut;
