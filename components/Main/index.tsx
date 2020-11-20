import React, {FC} from "react"

import {FlexMain, StyledSpan, ContentWrapper, StyledH1, IconsWrapper, CodePenIcon, LinkedInIcon, GitHubIcon, NoStyleAnchor} from "./styled"

const Main: FC<{}> = () => {
  return (
    <FlexMain>
      <ContentWrapper>
        <StyledH1>I'm <StyledSpan>Kevin Eze.</StyledSpan></StyledH1>
        <StyledH1>Front-End Engineer.</StyledH1>
        <IconsWrapper>
          <NoStyleAnchor href="https://www.linkedin.com/in/kevineze/"><LinkedInIcon /></NoStyleAnchor>
          <NoStyleAnchor href="https://codepen.io/KVNEZE"><CodePenIcon /></NoStyleAnchor>
          <NoStyleAnchor href="https://github.com/KVNEZE"><GitHubIcon /></NoStyleAnchor>
        </IconsWrapper>
      </ContentWrapper>
    </FlexMain>
  )
}

export default Main
