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
`

const FormRow = styled.div`
    padding: 5% 0;
`



const Button = styled.button`
    background:transparent;
    margin: 10px;
    padding: 5px 15px;
    border: 1px solid #ff;
    color: #fff;
    &:hover {
        background-color: white;
        color:black;
    }
    &:active {
        border: 1px solid #fff;
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
  @media (max-width: 768px) {
    width: 90%; 
    margin: 1rem 0;
  }
  min-width: 200px;
  margin: 1rem;
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

