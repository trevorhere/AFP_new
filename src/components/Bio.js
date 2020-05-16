import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import DynamicImage from './DynamicImage'
import styled from "styled-components"

const HeroTitle = styled.h1`
  font-size: 1.5em;
  font-family: Tinos, serif;
  font-weight: 100;
  margin: 0;
  text-align: center;
`

const HeroSubtitle = styled.p`
color: grey;
padding-top: 20px;
`

const HeroText = styled.div`
  margin: 1rem;
  align-self: center;
`
const HeaderHR = styled.hr`
  margin-top: 20px;
  width: 60%;
`
const ImageContainer = styled.div`
  width: 500px;
  margin: 1rem;
  max-width: 300px;
`
const Container = styled.div`
  margin: 10;
  padding: 5% 0;
  display: flex;
  flex-direction: column;
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
export default (props) => {
    return (
        <Container>
        <ImageContainer>
          <DynamicImage src={props.imageSrc} />
        </ImageContainer>
        <HeroText>
        <HeroTitle>{props.name}</HeroTitle>
        </HeroText>
        </Container>      
       
    )
}

