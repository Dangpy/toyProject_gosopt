import styled from "styled-components";

function Header() {
  return (
    <div>
      <StTitle>💸이거 맞추면 나 사주는 거다 ?💸</StTitle>
    </div>
  );
}

export default Header;

const StTitle = styled.h1`
  display: inline-block;
  padding: 0.5rem 3rem;
  font-family: ${(props) => props.theme.fontLogo};
  font-weight: ${(props) => props.theme.WSB};
  font-size: ${(props) => props.theme.L};
  border-radius: ${(props) => props.theme.L};
  background-color: ${(props) => props.theme.whiteYellow};
  color: ${(props) => props.theme.textRed};
`;
