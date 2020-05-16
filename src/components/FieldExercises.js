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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5% 0;
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
        <ImageContainer>
          <DynamicImage src={"TankerDrop.png"} /> 
        </ImageContainer>
        <HeroText>
          <HeroTitle>Field Exercises</HeroTitle>
          <HeaderHR class="header-hr"/>
          <HeroSubtitle>In-field training exercises developed specifically for your team, based on real world scenarios.</HeroSubtitle>
          <Points>
            <PointItem>
            • Live Simulations
            </PointItem>
            <PointItem>
            •  Performance review and evaluation    
            </PointItem>  
            <PointItem>
            •  Ground tactics and strategy
            </PointItem>    
          </Points>
        </HeroText>
        </Container>
    )
}

