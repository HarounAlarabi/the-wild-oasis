import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyleSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3rem 2rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

function Sidebar() {
  return (
    <StyleSidebar>
      <Logo />
      <MainNav />
    </StyleSidebar>
  );
}

export default Sidebar;
