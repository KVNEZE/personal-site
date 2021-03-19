export interface SpacingProps {
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

export interface SectionProps {
  color?: string,
  content?: string
}

export interface HeadingProps extends SpacingProps {
  color?: string
}

export interface SubHeadingProps extends SpacingProps {
  url?: boolean,
  color?: string
}

export interface ParaProps extends SpacingProps {
  color?: string,
  width?: string
}

export interface ImageProps {
  responsive?: boolean
  width?: string
}

export interface AnchorProps {
  underlineOnHover?: boolean,
  color?: string
}

export interface FlexProps extends SpacingProps {
  justifyContent?: "space-between" | "space-around" | "center" | "flex-start" | "flex-end",
  alignItems?: "space-between" | "space-around" | "center" | "flex-start" | "flex-end",
  direction?: "row" | "column" | "row-reverse" | "column-reverse",
  responsive?: boolean,
  responsiveReverse?: boolean
}
