import styled from "styled-components";
import SearchForm from "./SearchForm";

function Header() {
  return (
    <div>
      <StHeader>Weather Forecast</StHeader>
      <SearchForm />
    </div>
  );
}

export default Header;

const StHeader = styled.h1`
  color: black;
  font-size: 3rem;
`;
