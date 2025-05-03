import {useState} from "react";
import LayOut from "../ui/Layout";
import styled from "styled-components";
import {sendAdminLogin} from "../api/AdminLogin";
import {useNavigate} from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    width: 200px;
    height: 30px;
  }
  .LoginBox {
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
  }

  .letters {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  .LoginButton {
    height: 35px;
    cursor: pointer;
    &:hover {
      color: white;
      background-color: black;
    }
  }
`;

export const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [capsLockOn, setCapsLockOn] = useState(false);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setCapsLockOn(e.getModifierState("CapsLock"));
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setCapsLockOn(e.getModifierState("CapsLock"));
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  const handleLogin = async () => {
    try {
      const token = await sendAdminLogin(password);
      localStorage.setItem("accessToken", token);
      alert("로그인 성공");
      navigate("/admin");
    } catch (error) {
      alert("로그인 실패");
      console.log("오류내용: ", error);
    }
  };

  return (
    <LayOut>
      <Wrapper>
        <div className="letters">관리자 페이지 로그인</div>
        <div className="LoginBox">
          <input
            type="text"
            placeholder="비밀번호 입력"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
          />
          <button className="LoginButton" onClick={handleLogin}>
            입력하기
          </button>
        </div>
        {capsLockOn && (
          <div style={{color: "red"}}>CapsLock이 켜져 있습니다!</div>
        )}
      </Wrapper>
    </LayOut>
  );
};
