import styled from "styled-components"

export const FlexMain = styled.main`
  line-height: 1.6; 
  clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%);
  background-color: #0a192f;
  color: #FFF;
  margin-top: -1px;
  height: 70vh;

  @media (min-width: 600px) {
    height: 60vh;
  }

  @media (min-width: 700px) {
    height: 80vh;
  }
`

export const ContentWrapper = styled.div`
  position relative;
  top: 10%;
  padding: 0 40px;

  @media (min-width: 400px) {
    padding: 40px;
  }

  @media (min-width: 700px) {
    width: 60%;
    margin: 0 auto;
    padding: 20px;
  }
`

export const StyledH1 = styled.h1`
  color: #F8F8F8;
  user-select: none;
`

export const NoStyleAnchor = styled.a.attrs({
  target: "_blank"
})`
  color: inherit;
`

export const StyledSpan = styled.span`
  animation: underline 10s cubic-bezier(1,0,0,1) infinite;
  animation-direction: alternate;

  @keyframes underline {
    0% { border-bottom: 6px solid orange; }
    20% { border-bottom: 6px solid #fff; }  
    40% { border-bottom: 6px solid #ff6363; }
    60% { border-bottom: 6px solid #a187e8; }
    80% { border-bottom: 6px solid #94e1ff; }
    100% { border-bottom: 6px solid #f5ea18; }
}
`

export const IconsWrapper = styled.div`
  margin-top: 20px;
`

export const LinkedInIcon = styled.i.attrs({
  className: "fab fa-linkedin"
})`

  margin-right: 50px;

  &:hover {
    color: #0073b1;
    cursor: pointer;
  }
`

export const GitHubIcon = styled.i.attrs({
  className: "fab fa-github"
})`

  color: #fff;
  margin-right: 50px;

  &:hover {
    color: #5c5c5c;
  }
`

export const CodePenIcon = styled.i.attrs({
  className: "fab fa-codepen"
})`

  margin-right: 50px;

  &:hover {
    color: #5c5c5c;
  }
`