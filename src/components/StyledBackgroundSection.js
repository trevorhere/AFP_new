import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "Header.jpeg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
        if (typeof window !== "undefined") {
            // eslint-disable-next-line global-require
            require("smooth-scroll")('a[href*="#"]')
          }
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
            <Overlay>
            <Nav>
                <NavItem to={`#whatwedo`}>
                    What We Do
                </NavItem>
                <NavItem to={`#bios`}>
                    Our Team
                </NavItem>    
                <NavItem to={`#contact`}>
                    Contact
                </NavItem>
            </Nav>
            <HeroText>
            <HeroTitle>Anchor Flank</HeroTitle>
            <br/>
            <HeroTitle> & Pinch</HeroTitle>
            <HeroSubtitle><i>Leaders in wildland firefighter training.</i></HeroSubtitle>
            </HeroText>
            </Overlay>
        </BackgroundImage>
      )
    }}
  />
)


const Nav = styled.div`
  display: flex;
  color: white;
  width: 100%;
  background: transparent;
  flex-direction: row;
  align-items: flex-end;
  align-content: flex-end;
  justify-content: flex-end;
  padding-top: 1.1em;
  padding-right: 1.1em;
  position: absolute;
`
const NavItem = styled(Link)`
  padding: 0 1.2em;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const HeroText = styled.div`
  width: 500px;
  margin: 1rem;
  align-self: center;
  justify-self: center;
  margin: 0 auto;
  text-align: center;
`
const HeroSubtitle = styled.p`
  color: white;
  margin-top: 30px;
`

const HeroTitle = styled.h1`
  color: white;
  width: 500px;
  font-size: 3.5em;
  font-family: Tinos, serif;
  font-weight: 100;
  line-height: .7;
  margin: 0;
`
const HeaderHR = styled.hr`
  color: white;
  border-top: 1px solid white;
  margin-top: 20px;
  width: 60%;
`
const Overlay = styled.div`
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: .7;
    display: flex;
`
const StyledBackgroundSection = styled(BackgroundSection)`
  height: 100vh;
  margin: 0;
  padding: 0;
  opacity: .5;
  background-position:  center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection