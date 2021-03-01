import React from 'react'

import Navigation from "./components/Navigation"
import Main from "./components/Main"
import Section from "./components/Section"

import {
  NoStyleAnchor,
  Heading,
  SubHeading,
  Para,
  ProfileImage,
  Image,
  FooterLink,
  Flex
} from "./components/Section/styled"

import "./index.css"

function App() {
  return (
    <div className="app">
      <Navigation />
      <Main />
      <Section id="about">
        <Flex responsive>
          <div>
            <Heading marginBottom="30px">About me</Heading>
            <Para width="90%" marginBottom="30px">
              I have <strong>2 years of commercial experience</strong> where I've had the opportunity to work on both internal and user-facing features.<br /><br />
            
              The ability to write code that solves problems and provides intuitive experiences is something I continue to enjoy as I
              develop in this career; and is a driving motivation for staying up-to-date with the latest frameworks, libraries and best practices.<br /><br />
            
              As a former <strong>QA Engineer</strong>, I also have both an interest and appreciation for good <strong>user experience</strong>; which helps me to always keep quality in the forefront when working on projects.

              <br /><br />Skills I've gained along the way include: <br /><br /><strong>JavaScript (ES6+), TypeScript, React, Redux, Apollo GraphQL, JEST, Cypress</strong>.
            </Para>
          </div>
          <ProfileImage alt="image of kevin" src="https://res.cloudinary.com/kvneze/image/upload/v1605909512/kevineze_srapmf.jpg" />
        </Flex>
      </Section>
      <Section id="experience" heading="A few things I've worked on...">
        <div>
          <SubHeading url marginBottom="10px">Front-End Engineer @ <NoStyleAnchor href="https://www.perkbox.com/" color="#00adee" underlineOnHover>Perkbox</NoStyleAnchor></SubHeading>
          <Para>January 2019 - February 2021</Para>
        </div>
        <Flex responsive alignItems="center" margin="60px 0">
          <Image alt="Perkbox contact preferences" responsive src="https://res.cloudinary.com/kvneze/image/upload/v1614556675/Screenshot_2021-02-12_at_20.46.58_vskt1u.png" />
          <Para marginLeft="20px">
            <br />
            <strong>Contact Preferences </strong><br /><br />A page that gives the user more control of the content they want to recieve, on their preferred method of communication.
          </Para>
        </Flex>
        <Flex responsive alignItems="center" margin="60px 0">
          <Image alt="Mark a redeemed perk as used" responsive src="https://res.cloudinary.com/kvneze/image/upload/c_scale,w_800/v1603829157/markAsUsed_ghhmjt.png" />
          <Para marginLeft="20px">
            <br />
            <strong>Mark a perk as used </strong><br /><br />A feature request that allows redeemed perks to be marked as 'used', in order to declutter your redemption history.
          </Para>
        </Flex>
        <Flex responsiveReverse alignItems="center">
          <Para marginRight="20px">
            <br />
            <strong>Open value voucher redemptions </strong><br /><br />The ability to specify exact value amounts when redeeming gift vouchers, using the WeGift API.
          </Para>
          <Image alt="Open value voucher redemption flow" responsive src="https://res.cloudinary.com/kvneze/image/upload/c_scale,w_800/v1603829157/openValue_q7gcrc.png" />
        </Flex>
      </Section>
      <Section id="contact" color="#0a192f" heading="Let's connect!" headingColor="#FFF">
        <FooterLink target="_blank" href="mailto:hello@kevineze.me">Say Hello <span role="img" aria-label="contact button">👋🏾</span></FooterLink>
      </Section>
    </div>
  )
}

export default App
