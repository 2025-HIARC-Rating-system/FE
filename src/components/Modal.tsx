import styled from "styled-components";
type ModalProps = {
  content: string;
  onClose: () => void;
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
  left: 0;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 24px;
  border-radius: 10px;
  z-index: 1000;
  width: 800px;
  max-height: 80%;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: #ddd;
  border: none;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  width: 80px;
  height: 40px;
`;

export const Modal = ({content, onClose}: ModalProps) => {
  const lines = content.split(",");
  return (
    <Overlay onClick={onClose}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        {lines.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
        <CloseButton onClick={onClose}>뒤로가기</CloseButton>
      </ModalWrapper>
    </Overlay>
  );
};
