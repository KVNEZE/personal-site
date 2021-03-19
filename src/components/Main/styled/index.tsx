import styled, {css} from "styled-components"

export const FlexMain = styled.main`
  line-height: 1.6; 
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
  background-color: var(--darkBlue);
  color: var(--white);
  margin-top: -1px;
  height: 50vh;
  
  @media (min-width: 768px) {
    height: 85vh;
  }
  
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 40px;

  @media (min-width: 768px) {
    padding-top: 150px;
  }

`

export const MainH1 = styled.h1`
  color: var(--white);
  user-select: none;
  margin-bottom: 10px;
`

export const NoStyleAnchor = styled.a.attrs({
  target: "_blank"
})`
  color: inherit;
`

export const AnimationSpan = styled.span`
  animation: underline 10s cubic-bezier(1,0,0,1) infinite;
  animation-direction: alternate;

  @keyframes underline {
    0% { border-bottom: 4px solid orange; }
    20% { border-bottom: 4px solid var(--white); }  
    40% { border-bottom: 4px solid #ff6363; }
    60% { border-bottom: 4px solid #a187e8; }
    80% { border-bottom: 4px solid #94e1ff; }
    100% { border-bottom: 4px solid #f5ea18; }
}
`

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

const sharedIconStyles = css`
  margin-right: 50px;
`

export const LinkedInIcon = styled.i.attrs({
  className: "fab fa-linkedin"
})`
  ${sharedIconStyles}
  &:hover {
    color: #0073b1;
    cursor: pointer;
  }
`

export const GitHubIcon = styled.i.attrs({
  className: "fab fa-github"
})`
  ${sharedIconStyles}
  color: var(--white);
  &:hover {
    color: #5c5c5c;
  }
`

export const CodePenIcon = styled.i.attrs({
  className: "fab fa-codepen"
})`
  ${sharedIconStyles}
  &:hover {
    color: #5c5c5c;
  }
`