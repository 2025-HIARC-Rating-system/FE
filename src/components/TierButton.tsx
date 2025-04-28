import {NumberToTear} from "../ui/NumberToTear";
import {NumberToStreakColor} from "../ui/NumberToStreakColor";
import styled from "styled-components";

const Button = styled.div<{$tier: number}>`
  background-color: ${(props) => NumberToStreakColor(props.$tier)};
  width: 62px;
  padding: 6px 14px;
  font-size: 12px;
  white-space: nowrap;
  color: white;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TierButton = ({tier}: {tier: number}) => {
  return <Button $tier={tier}>{NumberToTear(tier)}</Button>;
};

export default TierButton;
