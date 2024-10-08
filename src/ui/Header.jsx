import styled from "styled-components";
import Logout from "../features/authentication/Logout";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.5rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-200);
`;

function Header() {
  return (
    <StyledHeader>
      <p>Header</p>
      <Logout />
    </StyledHeader>
  );
}

export default Header;
