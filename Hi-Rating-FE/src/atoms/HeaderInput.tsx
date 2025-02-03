import styled from "styled-components";
import Img from "./../assets/InputImg.png";
import Color from "../ui/Color";
const Wrapper = styled.div`
  width: 42%;
  display: flex;
  border: 1px solid ${Color.primary};
  border-radius: 18px;
  padding: 5px 15px;
  .Input {
    border: none;
    outline: none;
    margin-left: 1px;
    width: 80%;
  }

  img {
    cursor: pointer;
  }
`;

const HeaderInput = () => {
  return (
    <Wrapper>
      <img src={Img} alt="인풋이미지" />
      <input type="text" placeholder="백준 핸들 검색 " className="Input" />
    </Wrapper>
  );
};

export default HeaderInput;
