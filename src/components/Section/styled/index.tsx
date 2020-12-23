import styled, {css} from "styled-components"

interface SpacingProps {
  margin?: string,
  marginTop?: string,
  marginBottom?: string,
  marginLeft?: string,
  marginRight?: string,
  padding?: string,
  paddingTop?: string,
  paddingBottom?: string,
  paddingLeft?: string,
  paddingRight?: string
}

interface SectionProps {
  color?: string,
  content?: string
}

interface HeadingProps extends SpacingProps {
  color?: string
}

interface SubHeadingProps extends SpacingProps {
  url?: boolean,
  color?: string
}

interface ParaProps extends SpacingProps {
  color?: string,
  width?: string
}

interface ImageProps {
  responsive?: boolean
}

interface AnchorProps {
  underlineOnHover?: boolean,
  color?: string
}

interface FlexProps extends SpacingProps {
  justifyContent?: "space-between" | "space-around" | "center" | "flex-start" | "flex-end",
  alignItems?: "space-between" | "space-around" | "center" | "flex-start" | "flex-end",
  direction?: "row" | "column" | "row-reverse" | "column-reverse",
  responsive?: boolean,
  responsiveReverse?: boolean
}

const spacingStyles = css<SpacingProps>`
  ${({margin}) => margin && `margin: ${margin};`}
  ${({marginTop}) => marginTop && `margin-top: ${marginTop};`}
  ${({marginBottom}) => marginBottom && `margin-bottom: ${marginBottom};`}
  ${({marginLeft}) => marginLeft && `margin-left: ${marginLeft};`}
  ${({marginRight}) => marginRight && `margin-right: ${marginRight};`}
  ${({padding}) => padding && `padding: ${padding};`}
  ${({paddingTop}) => paddingTop && `padding-top: ${paddingTop};`}
  ${({paddingBottom}) => paddingBottom && `padding-bottom: ${paddingBottom};`}
  ${({paddingLeft}) => paddingLeft && `padding-left: ${paddingLeft};`}
  ${({paddingRight}) => paddingRight && `padding-right: ${paddingRight};`}
`

export const StyledSection = styled.section<SectionProps>`
  ${({color}) => color && css`
    background-color: ${color};
  `}
`

export const Flex = styled.div<FlexProps>`
  display: flex;

  ${({direction}) => direction && css`
    flex-direction: ${direction};
  `}

  ${({justifyContent}) => justifyContent && css`
    justify-content: ${justifyContent};
  `}

  ${({alignItems}) => alignItems && css`
    align-items: ${alignItems};
  `}

  ${({responsive}) => responsive && css`
    flex-direction: column;

    @media (min-width: 1224px) {
      flex-direction: row;
    }
  `}

  ${({responsiveReverse}) => responsiveReverse && css`
    flex-direction: column-reverse;

    @media (min-width: 1224px) {
      flex-direction: row;
    }
  `}

  ${spacingStyles}
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
  ${({color}) => css`
    color: ${color};
  `}

  ${spacingStyles}
`

export const SubHeading = styled.h3<SubHeadingProps>`
  ${({color}) => color && css`
    color: ${color};
  `}

  ${spacingStyles}
`

export const Para = styled.p<ParaProps>`
  ${({color}) => color && css`
    color: ${color};
  `}

  ${({width}) => width && css`
    width: ${width};
  `}

  ${spacingStyles}
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
      border-bottom: 3px solid #00ADEE;
    }
  `}
`

export const FooterLink = styled.a`
  background-color: transparent;
  color: #FFF;
  text-decoration: none;
  font-size: 1.25em;
  padding: 15px 30px;
  border: 2px solid #FFF;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  margin-top: 10px;

  &:hover {
    border-color: orange;
  }
`
