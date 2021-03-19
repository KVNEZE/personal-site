import styled from "styled-components"

export const Nav = styled.nav`
  background-color: var(--darkBlue);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
  top: 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const FlexUl = styled.ul`
  display: flex;
  padding: 0 20px;
  width: 100%;
  justify-content: space-around;

  @media (min-width: 768px) {
    margin: 0;
    padding: 0;
    justify-content: flex-end;
  }
`

export const NavItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Logo = styled.img`
  width: 200px;
  pointer-events: none;
`

export const NavItem = styled.li`
  list-style: none;
  font-size: 1.5em;
  padding: 0 20px;

  a {
    text-decoration: none;
    color: #FFF;
    font-weight: 400;
    font-size: 20px;
  }

  a:hover {
    border-bottom: 3px solid #FFF;
  }
`