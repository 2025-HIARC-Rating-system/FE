import styled from "styled-components";
import DivButton from "../block/DivButton";
import Color from "../ui/Color";
import {Dispatch, SetStateAction} from "react"; // ✅ 추가

const Wrapper = styled.div`
  display: flex;
  width: 181px;
  height: 30px;
  background-color: ${Color.primary};
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

const DivToggleBar = ({
  setSelected,
  selected,
}: {
  setSelected: Dispatch<SetStateAction<number>>; // ✅ 최적화된 타입
  selected: number;
}) => {
  return (
    <Wrapper>
      <DivButton
        div={1}
        onClick={() => setSelected(1)}
        isSelected={selected === 1}
      />
      <DivButton
        div={2}
        onClick={() => setSelected(2)}
        isSelected={selected === 2}
      />
      <DivButton
        div={3}
        onClick={() => setSelected(3)}
        isSelected={selected === 3}
      />
    </Wrapper>
  );
};

export default DivToggleBar;
