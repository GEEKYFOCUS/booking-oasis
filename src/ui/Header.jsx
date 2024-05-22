import styled, { css } from "styled-components";
import { MdShortText } from "react-icons/md";
// import Logout from "../features/authentication/Logout";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import { useToggleBtn } from "../contexts/ToggleButton";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";

const StyleHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 640px) {
    font-size: 1rem;
    gap: 4rem;
  }
`;

const StyledHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  background-color: var(--color-grey-0);
  @media screen and (min-width: 1024px) {
    justify-content: flex-end;
  }
`;
const StyledSpan = styled.span`
  @media screen and (min-width: 1024px) {
    display: none;
  }
  & svg {
    font-size: 3.2rem;
  }
`;

const StyledSideToggle = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  overflow-y: scroll;
  z-index: 1000;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  overflow-y: scroll;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;

  @media screen and (max-width: 1024px) {
    ${(props) =>
      props.isOpen === true
        ? css`
            display: block;
            transform: translateX(100%);
            opacity: 1;
          `
        : css`
            display: none;
            transform: translateX(-100%);
          `}/* display: none;
    transform: translateX(-100%); */
  }
`;

function Header() {
  const { isOpen, toggle } = useToggleBtn();
  return (
    <>
      {/* {isOpen ? (
        <StyledSidebar isOpen={isOpen}>
          <Logo />
          <MainNav />
          <Uploader />
        </StyledSidebar>
      ) : null} */}
      <StyledHead>
        <StyledSpan>
          <MdShortText onClick={toggle} />
        </StyledSpan>
        <StyleHeader>
          <UserAvatar />
          <HeaderMenu />
        </StyleHeader>
      </StyledHead>
    </>
  );
}

export default Header;
