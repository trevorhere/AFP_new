import React from "react"
import styled from "styled-components"

const FooterText = styled.div`
  margin: 1rem;
  color: white;
  align-self: center;
`
const Container = styled.div`
  margin: 10;
  width: 100%;
  height: 2rem;
  padding: 5% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
`
export default (props) => {
    return (
        <Container>
            <FooterText >
            {props.text}
            </FooterText >
        </Container>      
    )
}

