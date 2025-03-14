import styled from "styled-components";
import Color from "../ui/Color";
import TierImg from "../ui/TierImg";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  max-width: 300px;
  min-width: 240px;
  height: 30px;
  border: 1px solid ${Color.primary};
  border-radius: 15px;
  font-size: 14px;
`;

const IdWrapper = styled.div`
  max-width: 120px;
  margin-left: 22px;
`;

const Divider = styled.div`
  margin-left: 22px;
  margin-right: 22px;
`;
const Tier = styled.div`
  margin-right: 22px;
  margin-top: 5px;
`;
const InfoEntity = ({
  handle,
  div,
  tier,
}: {
  handle: string;
  div: number;
  tier: number;
}) => {
  const displayId = handle.length > 7 ? handle.slice(0, 8) + "..." : handle;
  return (
    <Wrapper>
      <IdWrapper>{displayId}</IdWrapper>
      <Divider>|</Divider>
      div {div}
      <Divider>|</Divider>
      <Tier>
        <TierImg tier={tier} />
      </Tier>
    </Wrapper>
  );
};

export default InfoEntity;
