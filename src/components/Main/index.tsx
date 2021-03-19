import React from "react"

import {
  FlexMain,
  AnimationSpan,
  ContentWrapper,
  MainH1,
  IconsWrapper,
  CodePenIcon,
  LinkedInIcon,
  GitHubIcon,
  NoStyleAnchor
} from "./styled"

const Main: React.FC = () => {
  return (
    <FlexMain>
      <ContentWrapper>
        <MainH1>
          <AnimationSpan>
            Kevin Eze
          </AnimationSpan>
        </MainH1>
        <MainH1>
          Front-End Engineer
        </MainH1>
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
