import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUser,
} from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <main>
      <NavList>
        <StyledNavLink to="/dashboard">
          <HiOutlineHome />
          <span>Home</span>
        </StyledNavLink>
        <StyledNavLink to="/bookings">
          <HiOutlineCalendarDays />
          <span>Booking</span>
        </StyledNavLink>
        <StyledNavLink to="/cabins">
          <HiOutlineHomeModern />
          <span>Cabins</span>
        </StyledNavLink>
        <StyledNavLink to="/users">
          <HiOutlineUser />
          <span>Users</span>
        </StyledNavLink>
        <StyledNavLink to="/settings">
          <HiOutlineCog6Tooth />
          <span>Settings</span>
        </StyledNavLink>
      </NavList>
    </main>
  );
}

export default MainNav;

// curl 'https://snhxfqmutnbgzsfpzejf.supabase.co/rest/v1/cabins?select=*' \
// -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNuaHhmcW11dG5iZ3pzZnB6ZWpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5Njg1OTMsImV4cCI6MjAyOTU0NDU5M30.7epoYYBLGWngf8rhjeGD3n6EecCU-SpvWbKcyC35hlI" \
// -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNuaHhmcW11dG5iZ3pzZnB6ZWpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5Njg1OTMsImV4cCI6MjAyOTU0NDU5M30.7epoYYBLGWngf8rhjeGD3n6EecCU-SpvWbKcyC35hlI"
