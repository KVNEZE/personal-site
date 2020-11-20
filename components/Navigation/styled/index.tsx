import styled from "styled-components"

export const Nav = styled.nav`
  background-color: #0a192f;
  display: flex;
  align-items: center;
  padding: 0 50px;
  top: 0;

  @media (max-width: 700px) {
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
`

export const FlexUl = styled.ul`
  display: flex;
  padding: 0 20px;
  margin-left: auto;
  width: 100%;

  @media (max-width: 700px) {
    margin: 0;
    padding: 0;
    justify-content: space-around;
  }

  @media (min-width: 701px) {
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
`

export const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #FFF;
    font-weight: 400;
    font-size: .8em;
  }

  a:hover {
    border-bottom: 3px solid #FFF;
  }

  list-style: none;
  font-size: 1.5em;
  padding: 10px;

  @media (max-width: 400px) {
    a {
      font-size: .75em;
    }
  }

  @media (min-width: 700px) {
    a {
      padding: 10px;
    }
  }
`