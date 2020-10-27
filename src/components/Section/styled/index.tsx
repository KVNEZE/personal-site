import styled, {css} from "styled-components"

interface SectionProps {
  color?: string,
  content?: string
}

interface HeadingProps {
  color?: string
}

interface SubHeadingProps {
  url?: boolean,
  color?: string
}

interface ParaProps {
  color?: string
}

interface ImageProps {
  responsive?: boolean
}

interface AnchorProps {
  underlineOnHover?: boolean,
  color?: string
}

interface FlexProps {
  justifyContent?: "space-between" | "space-around" | "center" | "flex-start" | "flex-end",
  alignItems?: "space-between" | "space-around" | "center" | "flex-start" | "flex-end",
  direction?: "row" | "column" | "row-reverse" | "column-reverse",
  responsiveDirection?: boolean,
  responsiveDirectionReverse?: boolean
}

const commonStyles = css`
  margin-bottom: 30px;
`

export const StyledSection = styled.section<SectionProps>`
  ${({color}) => color && css`
    background-color: ${color};
  `}
`

export const Flex = styled.div<FlexProps>`
  display: flex;

  ${({direction}) => direction && `flex-direction: ${direction}`};
  ${({justifyContent}) => justifyContent && `justify-content: ${justifyContent}`};
  ${({alignItems}) => alignItems && `align-items: ${alignItems}`};
  ${({responsiveDirection}) => responsiveDirection && `
    flex-direction: column;
    @media (min-width: 1224px) {
      flex-direction: row;
    }
  `}
  ${({responsiveDirectionReverse}) => responsiveDirectionReverse && `
    flex-direction: column-reverse;
    @media (min-width: 1224px) {
      flex-direction: row;
    }
  `}
`

export const ContentWrapper = styled.div`
  padding: 40px;

  @media (min-width: 701px) {
    padding: 80px;
    width: 60%;
    margin: 0 auto;
  }

  i:first-child {
    padding-right: 10px;
  }
`

export const ProfileImage = styled.img`
  border-radius: 5px;
  width: 100%;
  filter: drop-shadow(0 0 3px rgba(0,0,0,0.2));

  @media (min-width: 701px) {
    width: 350px;
  }
`

export const Image = styled.img<ImageProps>`
  object-fit: cover;
  border-radius: 5px;
  filter: drop-shadow(0 0 3px rgba(0,0,0,0.2));
  margin-bottom: 20px;
  width: 100%;
`

export const Heading = styled.h2<HeadingProps>`
  ${commonStyles}
  ${({color}) => css`
    color: ${color};
  `}
`

export const SubHeading = styled.h3<SubHeadingProps>`
  margin-bottom: 10px;
  ${({color}) => css`
    color: ${color};
  `}
`

export const Para = styled.p<ParaProps>`
  ${commonStyles}
  ${({color}) => css`
    color: ${color};
  `}
`

export const LinkedInIcon = styled.i.attrs({
  className: "fab fa-linkedin"
})`
  font-size: 3em;
  color: #363946;
  margin-right: 25px;

  &:hover {
    color: #0072b1;
    cursor: pointer;
  }
`

export const EmailIcon = styled.i.attrs({
  className: "far fa-envelope"
})`
  font-size: 3em;
  color: #FFF;
  margin-right: 20px;

  &:hover {
    color: #b23121;
    cursor: pointer;
  }
`

export const NoStyleAnchor = styled.a.attrs({
  target: "_blank"
})<AnchorProps>`
  color: inherit;
  text-decoration: none;
  ${({color}) => color && css`
    color: ${color};
  `}

  ${({underlineOnHover}) => underlineOnHover && css`
    &:hover {
      border-bottom: 3px solid #00adee;
    }
  `}
`

export const StyledAnchor = styled.a`
  background-color: transparent;
  color: #FFF;
  text-decoration: none;
  font-size: 1em;
  padding: 15px 25px;
  border: 1px solid #FFF;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  margin-top: 10px;
`
