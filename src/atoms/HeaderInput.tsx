import styled from "styled-components";
import {useState} from "react";
import {useAtom} from "jotai";
import {useNavigate} from "react-router-dom";
import {handleAtom} from "../store/Atom";
import Img from "./../assets/InputImg.png";
import Color from "../ui/Color";

const Wrapper = styled.div`
  width: 339px;
  display: flex;
  border: 1px solid ${Color.primary};
  border-radius: 18px;
  height: 34px;
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
    margin-left: 21px;
  }
`;

const HeaderInput = () => {
  const [, setHandle] = useAtom(handleAtom);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      setHandle(inputValue);
      console.log("🔍 검색 실행:", inputValue);
      navigate(`/search?handle=${inputValue}`);
    }
  };

  return (
    <Wrapper>
      <img src={Img} alt="검색 아이콘" onClick={handleSearch} />
      <input
        type="text"
        placeholder="백준 핸들 검색"
        className="Input"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
    </Wrapper>
  );
};

export default HeaderInput;
