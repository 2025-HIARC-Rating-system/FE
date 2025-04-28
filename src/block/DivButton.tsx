import styled from "styled-components";
import Color from "../ui/Color";

const Wrapper = styled.button<{$isSelected: boolean}>`
  font-size: 11px;
  font-weight: 700;
  width: 58px;
  height: 25px;
  border-radius: 18px;
  border: none;
  padding: 6px 14px;
  white-space: nowrap;
  color: ${({$isSelected}) => ($isSelected ? Color.primary : "white")};
  background-color: ${({$isSelected}) =>
    $isSelected ? "white" : Color.primary};
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
`;

const DivButton = ({
  div,
  onClick,
  isSelected,
}: {
  div: number;
  onClick?: () => void;
  isSelected: boolean;
}) => {
  return (
    <Wrapper onClick={onClick} $isSelected={isSelected}>
      Div {div}
    </Wrapper>
  );
};

export default DivButton;
