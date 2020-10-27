import React, {FC} from "react"

import {Nav, NavItem, Logo, FlexUl} from "./styled"


const Navigation: FC<{}> = () => {
  return (
    <Nav>
      <Logo src="https://res.cloudinary.com/kvneze/image/upload/v1483479481/kevinlogo_white.png" alt="kevin-logo" />
      <FlexUl>
        <NavItem><a href="#about">ABOUT</a></NavItem>
        <NavItem><a href="#experience">EXPERIENCE</a></NavItem>
        <NavItem><a href="#contact">CONTACT</a></NavItem>
      </FlexUl>
    </Nav>
  )
}

export default Navigation