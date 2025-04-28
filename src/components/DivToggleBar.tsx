import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import DivButton from "../block/DivButton";
import Color from "../ui/Color";
import {Dispatch, SetStateAction} from "react";

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
  setSelected: Dispatch<SetStateAction<number>>;
  selected: number;
}) => {
  const navigate = useNavigate();

  const handleClick = (div: number) => {
    setSelected(div);
    navigate(`/div?num=${div}`);
  };

  return (
    <Wrapper>
      <DivButton
        div={1}
        onClick={() => handleClick(1)}
        isSelected={selected === 1}
      />
      <DivButton
        div={2}
        onClick={() => handleClick(2)}
        isSelected={selected === 2}
      />
      <DivButton
        div={3}
        onClick={() => handleClick(3)}
        isSelected={selected === 3}
      />
    </Wrapper>
  );
};

export default DivToggleBar;
