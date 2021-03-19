import React from 'react'

import Navigation from "./components/Navigation"
import Main from "./components/Main"

import {
  NoStyleAnchor,
  Heading,
  SubHeading,
  Para,
  ProfileImage,
  Image,
  FooterLink,
  Flex,
  ContentWrapper
} from "./components/Section/styled"

import "./index.css"

function App() {
  return (
    <div className="app">
      <Navigation />
      <Main />
      <section id="about">
        <ContentWrapper>
          <Flex responsive>
            <div style={{flex: 1}}>
              <Heading marginBottom="30px">About me</Heading>
              <Para width="95%" marginBottom="30px">
                I have <strong>2 years of commercial experience</strong> where I've had the opportunity to work on both internal and user-facing features.<br /><br />
              
                The ability to write code that solves problems and provides intuitive experiences is something I continue to enjoy as I
                develop in this career; and is a driving motivation for staying up-to-date with the latest frameworks, libraries and best practices.<br /><br />
              
                As a former <strong>QA Engineer</strong>, I also have both an interest and appreciation for good <strong>user experience</strong>; which helps me to always keep quality in the forefront when working on projects.
              </Para>
            </div>
            <ProfileImage alt="image of kevin" src="https://res.cloudinary.com/kvneze/image/upload/v1605909512/kevineze_srapmf.jpg" />
          </Flex>
          <br /><br />Skills I've gained along the way include: <br /><br /><strong>JavaScript (ES6+), TypeScript, React, Redux, Apollo GraphQL, JEST, Cypress</strong>
        </ContentWrapper>
      </section>
      <section id="experience">
        <ContentWrapper>
        <Heading marginBottom="30px">A few things I've worked on...</Heading>
        <div>
          <SubHeading url marginBottom="10px">Front-End Engineer @ <NoStyleAnchor href="https://www.perkbox.com/" color="#00adee" underlineOnHover>Perkbox</NoStyleAnchor></SubHeading>
          <Para>January 2019 - February 2021</Para>
        </div>
        <Flex direction="column" margin="60px 0">
          <Image alt="Perkbox contact preferences" src="https://res.cloudinary.com/kvneze/image/upload/v1614556675/Screenshot_2021-02-12_at_20.46.58_vskt1u.png" />
          <SubHeading marginBottom="10px">Contact Preferences </SubHeading>
          <Para>
            A page that gives the user more control of the content they want to recieve, on their preferred method of communication.
          </Para>
        </Flex>
        <Flex direction="column" margin="60px 0">
          <Image alt="Mark a redeemed perk as used" responsive src="https://res.cloudinary.com/kvneze/image/upload/c_scale,w_800/v1603829157/markAsUsed_ghhmjt.png" />
          <SubHeading marginBottom="10px">Mark a perk as used </SubHeading>
          <Para>
            A feature request that allows redeemed perks to be marked as 'used', in order to declutter your redemption history.
          </Para>
        </Flex>
        <Flex direction="column">
          <Image alt="Open value voucher redemption flow" responsive src="https://res.cloudinary.com/kvneze/image/upload/c_scale,w_800/v1603829157/openValue_q7gcrc.png" />
          <SubHeading marginBottom="10px">Open value voucher redemptions </SubHeading>
          <Para>
            The ability to specify exact value amounts when redeeming gift vouchers, using the WeGift API.
          </Para>
        </Flex>
        </ContentWrapper>
      </section>
      <section id="contact">
      <Flex direction="column" alignItems="center" padding="40px 0" marginTop="30px" style={{background: "#0a192f"}}>
        <Heading color="#f8f8f8" marginBottom="25px">Let's connect!</Heading>
        <FooterLink target="_blank" href="mailto:hello@kevineze.me">Say Hello <span role="img" aria-label="email button">👋🏾</span></FooterLink>
      </Flex>
      </section>
    </div>
  )
}

export default App
