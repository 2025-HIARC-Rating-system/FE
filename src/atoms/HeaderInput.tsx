import styled from "styled-components";
import {useState} from "react";
import Img from "./../assets/InputImg.png";
import Color from "../ui/Color";

const Wrapper = styled.div`
  width: 42%;
  display: flex;
  border: 1px solid ${Color.primary};
  border-radius: 18px;
  padding: 5px 15px;
  align-items: center;

  .Input {
    border: none;
    outline: none;
    margin-left: 1px;
    width: 80%;
    font-size: 14px;
  }

  img {
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
`;

const HeaderInput = () => {
  const [handle, setHandle] = useState(""); // ✅ 입력값 상태 관리

  const handleSearch = () => {
    if (handle.trim() !== "") {
      window.location.href = `https://solved.ac/profile/${handle.trim()}`;
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Wrapper>
      <img src={Img} alt="인풋이미지" onClick={handleSearch} />
      <input
        type="text"
        placeholder="백준 핸들 검색"
        className="Input"
        value={handle}
        onChange={(e) => setHandle(e.target.value)}
        onKeyPress={handleKeyPress} // ✅ Enter 키로 검색 가능
      />
    </Wrapper>
  );
};

export default HeaderInput;
