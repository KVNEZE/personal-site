import styled, {css} from "styled-components"

import {
  FlexProps,
  SpacingProps,
  AnchorProps,
  SectionProps,
  HeadingProps,
  SubHeadingProps,
  ImageProps,
  ParaProps
} from "../types";

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
    padding: 70px;
    width: 60%;
    margin: 0 auto;
  }

  i:first-child {
    padding-right: 10px;
  }
`

export const ProfileImage = styled.img`
  object-fit: contain;
  border-radius: 5px;
  width: 80%;
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

  @media (min-width: 701px) {
    width: 80%;
  }
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
  border: 3px solid #FFF;
  border-radius: 30px;
  cursor: pointer;
  display: inline-block;
  margin-top: 10px;

  &:hover {
    border-color: orange;
  }
`

export const StyledUl = styled.ul`
  li {
    margin-left: 20px;
    font-size: 1.2em;
  }
`;