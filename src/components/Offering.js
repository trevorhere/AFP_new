import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import DynamicImage from './DynamicImage'
import styled from "styled-components"

const HeroTitle = styled.h1`
  width: 500px;
  font-size: 2.5em;
  font-family: Tinos, serif;
  font-weight: 100;
  margin: 0;
`

const HeroSubtitle = styled.p`
color: grey;
padding-top: 20px;
`

const HeroText = styled.div`
  width: 500px;
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
export default (props) => {
    return (
        <div>

        { props.pictureFirst?
            <Container>
        <ImageContainer>
          <DynamicImage src={props.imageSrc} />
        </ImageContainer>
        <HeroText>
        <HeroTitle>{props.title}</HeroTitle>
          <HeroSubtitle>
            {props.tagline}
          </HeroSubtitle>
          <Points>
           {props.points.map(point => {
               return(
                <PointItem>
                • {point}
                </PointItem>
               )
           })}
          </Points>
        </HeroText>
        </Container>      
        : 
        <Container>
        <HeroText>
        <HeroTitle>{props.title}</HeroTitle>
          <HeroSubtitle>
            {props.tagline}
          </HeroSubtitle>
          <Points>
           {props.points.map(point => {
               return(
                <PointItem>
                • {point}
                </PointItem>
               )
           })}
          </Points>
        </HeroText>
        <ImageContainer>
          <DynamicImage src={props.imageSrc} />
        </ImageContainer>
        </Container>   
    }
    </div>
    )
}

