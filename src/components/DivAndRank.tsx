import styled from "styled-components";
import Color from "../ui/Color";
const Button = styled.div`
  background-color: ${Color.primary};
  width: 62px;
  padding: 6px 14px;
  font-size: 12px;
  white-space: nowrap;
  color: white;
  border-radius: 18px;
  display: flex;
`;

const Divider = styled.div`
  padding-left: 7px;
  padding-right: 9px;
`;

const DivAndRank = ({divNum, rank}: {divNum: number; rank: number}) => {
  return (
    <Button>
      div{divNum}
      <Divider> | </Divider>
      {rank}th
    </Button>
  );
};

export default DivAndRank;
