import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import DynamicImage from './DynamicImage'
import styled from "styled-components"


const Text = styled.div`
  margin: 1rem;
  align-self: center;
  padding: 0 1.2em;
  color: black;
`

const Container = styled.div`
  margin: 10;
  padding: 5% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Modal = styled.div`
z-index: 1000;
padding-top: 100px;
position: fixed;
left: 0;
top: 0;
width: 100%;
height: 100%;
overflow: auto;
background-color: rgb(0,0,0);
background-color: rgba(0,0,0,0.8);
`

const ModalContent = styled.div`
    margin: auto;
    background-color: #fff;
    position: relative;
    padding: 2em;
    outline: 0;
    width: 80%;
    min-height:80% ;
`
const ModalButton = styled.button`
    border: none;
    display: inline-block;
    padding: 8px 16px;
    vertical-align: middle;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    background-color: inherit;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;
`
const TopRight = styled.div`
    position: absolute;
    font-size: 40px;
    font-weight: 400;
    padding: 10px;
    right: 0;
    top: 0;
`

const Name = styled.h1`
  font-size: 1.5rem;
  font-family: Tinos, serif;
  font-weight: 100;
  margin: 0;
`

const BioText = styled.p`
color: grey;
padding-top: 20px;
font-size: 1rem;
`

const ImageRow =  styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding-bottom: 3rem;
  justify-content: center;
`

const ImageCard =  styled.div`
  width: calc(33% - 2em);
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
        <Modal>
        <ModalContent>
        <Container>
            
            <TopRight>
                <ModalButton
                    onClick={() =>  props.setShowModalSetter(false)}
                >X</ModalButton>
            </TopRight>
            <Text>
        <Name>{props.name}</Name>
        <BioText>
            {props.bio}
        </BioText>
        </Text>
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
        </ModalContent>
    </Modal>  
    )
}

