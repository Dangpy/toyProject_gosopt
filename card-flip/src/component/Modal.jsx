/* eslint-disable react/prop-types */
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalOverlay>,
    document.getElementById("modal")
  );
};

const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50rem;
  height: 30rem;
  padding: 2rem;
  border-radius: 0.4rem;
  background-color: ${(props) => props.theme.whiteYellow};
  font-size: ${(props) => props.theme.M};
  font-weight: ${(props) => props.theme.WSB};
`;

export default Modal;
