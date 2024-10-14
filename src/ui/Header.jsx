import styled from "styled-components";
import HeaderMenu from "../ui/HeaderMenu";
import UserAvatar from "../features/authentication/UseAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.5rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-200);
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
