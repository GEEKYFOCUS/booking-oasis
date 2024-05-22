import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { useEffect } from "react";
import { useToggleBtn } from "../contexts/ToggleButton";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
  grid-template-rows: auto 1fr;
  height: 100dvh;
`;
const Main = styled.main`
  padding: 4rem 4.8rem 6.4rem;
  overflow-y: scroll;
  overflow-x: auto;
  scroll-behavior: smooth;
  @media screen and (max-width: 640px) {
    padding: 1rem 2rem;
    overflow-y: inherit;
    overflow-x: inherit;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
