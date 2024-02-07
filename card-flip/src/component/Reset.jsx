/* eslint-disable react/prop-types */
import styled from "styled-components";

function Reset({ onClick }) {
  return (
    <>
      <StResetButtom onClick={onClick}>
        <StTitle>
          다시 <br />
          고를랭~
        </StTitle>
      </StResetButtom>
    </>
  );
}

export default Reset;

const StTitle = styled.p`
  font-weight: ${(props) => props.theme.WB};
  background-color: ${(props) => props.theme.coinYellow};
`;

const StResetButtom = styled.button`
  display: flex;
  position: fixed;
  top: 3rem;
  right: 10rem;
  padding: 1.5rem 1rem;
  border: 0.7rem double ${(props) => props.theme.coinYellowLine};
  border-radius: 10rem;
  background-color: ${(props) => props.theme.coinYellow};

  white-space: pre-wrap;
`;
