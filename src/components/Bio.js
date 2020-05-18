import React, {useState, useEffect} from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import DynamicImage from './DynamicImage'
import styled from "styled-components"
import BioModal from './BioModal'

const HeroTitle = styled.h1`
  font-size: .5em;
  font-family: Tinos, serif;
  font-weight: 100;
  margin: 0;
  text-align: center;
`
const HeroText = styled.button`
  margin: 1rem;
  align-self: center;
  padding: 0 1.2em;
  color: black;


  background:transparent;
  margin: 10px;
  padding: 5px 15px;
  border: 1px solid #000;
  &:hover {
      background-color: black;
      color:white;
  }
  &:active {
      border: 1px solid #fff;
  }
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



export default (props) => {
   
    const [showModal, setShowModal] = useState(false);



    return (
        <div>
        { showModal 
            ? <BioModal 
            name={props.name}
            src={props.imageSrc}
            bio={props.bio}
            showModal={showModal}
            setShowModalSetter={setShowModal}
            images={props.images}
            />

            :            
            <Container>
            <ImageContainer>
            <DynamicImage src={props.imageSrc} />
            </ImageContainer>
            <HeroText>
            <HeroTitle 
                onClick={() => setShowModal(true)}
            >{props.name}</HeroTitle>
            </HeroText>
            </Container>     
        }

        </div>
    )
}

