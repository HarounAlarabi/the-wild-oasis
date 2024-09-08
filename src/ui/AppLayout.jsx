import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

const StyleAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;

  height: 100vh;
`;

const Main = styled.main`
  background-color: #ce6060;
  padding: 2rem;
  background-color: var(--color-grey-50);
`;

function AppLayout() {
  return (
    <StyleAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyleAppLayout>
  );
}

export default AppLayout;
