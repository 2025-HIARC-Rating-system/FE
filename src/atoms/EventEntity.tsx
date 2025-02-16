import styled from "styled-components";
import Color from "../ui/Color";
const Wrapper = styled.div`
  width: 226px;
  height: 36.43px;
  border-bottom: 1px solid ${Color.primary};
  @media (max-width: 480px) {
    width: 284px;
  }
`;

const EventEntity = () => {
  return <Wrapper></Wrapper>;
};

export default EventEntity;
