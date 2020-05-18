import React from "react"
import styled from "styled-components"
import DynamicImage from './DynamicImage'


const Container = styled.div`
    background-color: #191F2C;
    margin: 10;
    width: 100%;
    min-height: 2rem;
    padding: 5% 0;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align:center;
`

const Title = styled.h1`
    color: white;
    font-family: Tinos, serif;
    font-weight: 100;
    @media (max-width: 768px) {
        font-size: 1.5rem;
      }
`

const ImageRow =  styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding-bottom: 3rem;
  justify-content: center;
  align-items: center;
`

const ImageCard =  styled.div`
  border-radius: 4px;
  min-width: 200px;
  margin: 1rem;
  @media (max-width: 768px) {
    heigh: 20px;
  }
`

export default (props) => {
    return (
        <Container>
        <Title>Who We've Worked With</Title>
        <ImageRow>
        { props.images.map(i => {
            return ( 
            <ImageCard>
                <DynamicImage src={i} /> 
            </ImageCard>
            )
        })}
        </ImageRow>
        </Container>
    )
}

