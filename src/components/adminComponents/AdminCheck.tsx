import styled from "styled-components";
import {checkAdminName} from "../../ui/CheckAdminName";
import {checkAdminApi} from "../../api/AdminApi";
import {useState} from "react";
import {Modal} from "../Modal";
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  margin-bottom: 29px;
`;

const Button = styled.button`
  background-color: #ffa5a5;
  border: none;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 700;
  padding: 12px;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: #0af;
  }
`;

export const AdminCheck = ({
  name,
}: {
  name: "recent-season" | "recent-event" | "date";
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const buttonClick = async () => {
    try {
      const response = await checkAdminApi(name);
      setModalContent(JSON.stringify(response.data.data, null, 2));
      setIsModalOpen(true);
    } catch (error) {
      console.error("오류...", error);
      setModalContent("오류 개발팀 문의" + String(error));
      setIsModalOpen(true);
    }
  };
  return (
    <>
      <Wrapper>
        {checkAdminName[name]}
        <Button onClick={buttonClick}>확인하기</Button>
      </Wrapper>
      {isModalOpen && (
        <Modal content={modalContent} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};
