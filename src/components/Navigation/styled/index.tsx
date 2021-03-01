import styled from "styled-components"

export const Nav = styled.nav`
  background-color: #0a192f;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
  top: 0;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`

export const FlexUl = styled.ul`
  display: flex;
  padding: 0 20px;
  width: 100%;
  justify-content: space-around;

  @media (min-width: 700px) {
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
  a {
    text-decoration: none;
    color: #FFF;
    font-weight: 400;
    font-size: .9em;
  }

  a:hover {
    border-bottom: 3px solid #FFF;
  }

  list-style: none;
  font-size: 1.5em;
  padding: 10px;

  @media (min-width: 400px) {
    a {
      font-size: 1em;
      padding: 10px;
    }
  }
`