import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import DynamicImage from './DynamicImage'
import styled from "styled-components"


const HeroTitle = styled.h1`
  width: 500px;
  font-size: 2.5em;
  font-family: Tinos, serif;
  font-weight: 100;
  margin: 0;
  margin-bottom: -20px;
  padding: 1rem 0;
`

const HeroSubtitle = styled.p`
color: grey;
padding-top: 20px;
`

const HeroText = styled.div`
  width: 500px;
  margin: 1rem;
`
const HeaderHR = styled.hr`
  margin-top: 20px;
  width: 60%;
`
const ImageContainer = styled.div`
  width: 500px;
  margin: 1rem;
`
const Container = styled.div`
  margin: 10;
  padding: 5% 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const Points = styled.div`
  font-weight: bold;
  padding: 0;
  margin-bottom: -10px;
  text-decoration: bold;
`
const PointItem = styled.div`
  font-weight: bold;
  padding: 0;
  margin-bottom: -2px;
`

export default () => {
    return (
        <Container>
        <HeroText>
          <HeroTitle>Clasroom</HeroTitle>
          <HeroSubtitle>
          An engaging course curriculum taught by experts with decades of firefighter training and education experience.
            </HeroSubtitle>
          <Points>
            <PointItem>
            • Incident command system
            </PointItem>
            <PointItem>
            •  Fire traffic area    
            </PointItem>  
            <PointItem>
            •  Sand table exercises
            </PointItem>    
            <PointItem>
            •  Fire anatomy/terminology
            </PointItem>  
            <PointItem>
            •  Initial attack & size up
            </PointItem>  
          </Points>
        </HeroText>
        <ImageContainer>
          <DynamicImage src={"classroom.png"} />
        </ImageContainer>
        </Container>
    )
}

