import React, {FC} from "react"

import {StyledSection, Heading, ContentWrapper} from "./styled"

interface Props {
  id: string,
  color?: string,
  heading?: string,
  headingColor?: string
}

const Section: FC<Props> = ({id, color, heading, headingColor = "black", children}) => {
  return (
    <StyledSection color={color}>
      <ContentWrapper>
        {heading && <Heading id={id} color={headingColor}>{heading}</Heading>}
        {children}
      </ContentWrapper>
    </StyledSection>
  )
}

export default Section