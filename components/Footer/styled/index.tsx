import styled from "styled-components"

interface FooterTextProps {
  white?: boolean
}

export const StyledFooter = styled.footer`
  background-color: #363946;
`

export const ContentWrapper = styled.div`
  margin: 0 auto;
  padding: 20px 0 50px 50px;

  @media (min-width: 701px) {
    padding: 30px 0 80px 80px;
  }
`

export const FooterText = styled.p<FooterTextProps>`
  ${({white}) => white && `color: #fff`};
  
  margin: 20px auto;
`

export const GitHubIcon = styled.i.attrs({
  className: "fab fa-github"
})`
  font-size: 2em;
  color: #fff;
  margin-right: 25px;

  &:hover {
    color: #000;
  }
`

export const CodePenIcon = styled.i.attrs({
  className: "fab fa-codepen"
})`
  font-size: 2em;
  color: #FFF;
  margin-right: 25px;

  &:hover {
    color: #000;
  }
`
