import React, {FC} from "react"

import {StyledFooter, ContentWrapper} from "./styled"

interface Props {
  content?: string,
  contentColor?: string
}

const Footer: FC<Props> = ({children}) => {
  return (
    <StyledFooter>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </StyledFooter>
  )
}

export default Footer
