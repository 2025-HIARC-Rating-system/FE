import styled from "styled-components";

const Button = styled.button`
  background-color: #81c147;
  border-radius: 24px;
  border: none;
  padding: 0px 15px;
  color: white;
  cursor: pointer;
`;

const SolvedButton = ({handle}: {handle: string}) => {
  const onClick = () => {
    window.open(`https://solved.ac/profile/${handle}`, "_blank");
  };
  return <Button onClick={onClick}>solved.ac</Button>;
};

export default SolvedButton;
