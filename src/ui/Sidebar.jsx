import styled, { css } from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";
import { MdShortText } from "react-icons/md";
import { useToggleBtn } from "../contexts/ToggleButton";

const StyledSideToggle = styled.aside`
  /* background-color: var(--color-grey-0);
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
  } */

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
  height: 100dvh;
  @media screen and (max-width: 1024px) {
    ${(props) =>
      props.isOpen === true
        ? css`
            /* display: block; */
            transform: translateX(0%);
            opacity: 1;
            visibility: none;
          `
        : css`
            /* display: none; */
            transform: translateX(-30%);
            opacity: 0;
            visibility: hidden;
          `} /* display: none;
    transform: translateX(-100%); */
    transition: all .2s ease-in-out;
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

  @media screen and (max-width: 1024px) {
    display: none;

    /* transform: translateX(-100%); */
  }

  /* @media screen and (min-width: 1024px) {
    ${(props) =>
    props.isOpen === true
      ? css`
          transform: translateX(-100%);
          visibility: hidden;
          opacity: 0;
        `
      : css`
          transform: translateX(100%);
          visibility: none;
          opacity: 1;
          z-index: 1000;
        `} */
  /* } */
`;
const StyledSpan = styled.span`
  /* @media screen and (min-width: 1024px) {
    display: none;
  } */

  @media screen and (min-width: 1024px) {
    display: none;
  }
  & svg {
    transform: translateY(-1.5rem);
    font-size: 3.2rem;
  }
`;
function Sidebar() {
  // const { isLoading, cabins } = useCabins();
  // console.log(isLoading, cabins);
  const { isOpen, toggle } = useToggleBtn();
  console.log(isOpen, toggle);
  return (
    <>
      <StyledSidebar>
        <Logo />
        <MainNav />
        <Uploader />
      </StyledSidebar>
      <StyledSideToggle isOpen={isOpen}>
        <StyledSpan>
          <MdShortText onClick={toggle} />
        </StyledSpan>
        <Logo />
        <MainNav />
        <Uploader />
      </StyledSideToggle>
    </>
  );
}

export default Sidebar;
