import React from 'react'

import Navigation from "./components/Navigation"
import Main from "./components/Main"
import Section from "./components/Section"
import {NoStyleAnchor, Heading, SubHeading, Para, ProfileImage, Image, StyledAnchor, Flex} from "./components/Section/styled"

import "./index.css"

function App() {
  return (
    <div className="app">
      <Navigation />
      <Main />
      <Section id="about">
        <Flex responsiveDirection>
          <div>
            <Heading>About</Heading>
            <Para style={{width: "90%"}}>
            I have <strong>~2 years of commercial experience</strong> where I've had the opportunity to work on both internal and user-facing features.<br /><br />
            
            The ability to write code that solves problems and provides great experiences for end users is something I continue to enjoy as I
            develop in this career; and is a driving motivation for staying up-to-date with the latest frameworks, libraries and best practices.<br /><br />
            
            As a former <strong>QA Engineer</strong>, I have both an interest and appreciation for good <strong>user experience</strong> - which helps me to always keep quality in the forefront when working on projects.

            <br /><br />Technologies I've used along the way include: <strong>JavaScript (ES6+), TypeScript, React, Redux, Apollo GraphQL, JEST</strong>.
            </Para>
          </div>
          <ProfileImage alt="image of kevin" src="https://res.cloudinary.com/kvneze/image/upload/v1603829344/kvneze.jpg" />
        </Flex>
      </Section>
      <Section id="experience" heading="Experience">
        <div>
          <SubHeading url>Front-End Engineer @ <NoStyleAnchor href="https://www.perkbox.com/" color="#00adee" underlineOnHover>Perkbox</NoStyleAnchor></SubHeading>
          <Para>Jan 2019 - Present</Para>
        </div>
        <Flex responsiveDirection alignItems="center" style={{margin: "60px 0"}}>
          <Image alt="image of mark as used feature" responsive src="https://res.cloudinary.com/kvneze/image/upload/c_scale,w_800/v1603829157/markAsUsed_ghhmjt.png" />
          <p style={{marginLeft: 20}}>A feature requested by customers to mark redeemed perks as 'used' as a way to organise their redemption history. </p>
        </Flex>
        <Flex responsiveDirectionReverse alignItems="center">
          <p style={{marginRight: 20}}>The ability to redeem open value gift vouchers for users who don't want to select from the provided denominations.<br /><br />
          The voucher redemption process includes integration with the WeGift API.</p>
          <Image alt="image of open value voucher feature" responsive src="https://res.cloudinary.com/kvneze/image/upload/c_scale,w_800/v1603829157/openValue_q7gcrc.png" />
        </Flex>
      </Section>
      <Section id="contact" color="#0a192f" heading="Let's connect!" headingColor="#FFF">
        <StyledAnchor target="_blank" href="mailto:hello@kevineze.me">SAY HELLO <span role="img" aria-label="contact button">👋🏾</span></StyledAnchor>
      </Section>
    </div>
  )
}

export default App
