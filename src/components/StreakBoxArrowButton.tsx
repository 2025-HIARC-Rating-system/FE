import styled from "styled-components";
import {useNavigate} from "react-router-dom";
const Wrapper = styled.div`
  width: 696px;
  height: 40px;
  border: none;
  border-radius: 20px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  .left {
    margin-left: 16px;
  }
  .right {
    margin-right: 13px;
  }
  @media (max-width: 480px) {
    width: 284px;
  }
`;

const StreakBoxArrowButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/streak`);
  };
  return (
    <Wrapper onClick={handleClick}>
      <div className="left">Streak</div>

      <div className="right">{`>`}</div>
    </Wrapper>
  );
};

export default StreakBoxArrowButton;
