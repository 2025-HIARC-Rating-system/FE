import styled from "styled-components";
import {ReactNode, FC} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  max-width: 1248px;
  margin: 0 auto;
  /* margin-left: 20%;
  margin-right: 20%; */
`;

const LayOut: FC<{children: ReactNode}> = ({children}) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
      <Footer />
    </LayoutWrapper>
  );
};

export default LayOut;
