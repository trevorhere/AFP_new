import React from "react"
import styled from "styled-components"

const Container = styled.div`
    background-color: #191F2C;
    margin: 10;
    width: 100%;
    min-height: 2rem;
    padding: 5% 0;
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

const Input = styled.input`
    margin: 0 1rem;
    background: transparent;
    color: #fff;
    height: 38px;
    width: 100%;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid #fff;
    padding: .5rem .5rem;
    margin: 20px;
    @media (max-width: 768px) {
        width: 90%;
      }
`

const Button = styled.button`
    background:transparent;
    margin: 10px;
    padding: 5px 15px;
    border: 1px solid #fff;
    color: #fff;
    &:hover {
        background-color: white;
        color:black;
    }
    &:active {
        border: 1px solid #fff;
    }
`

export default (props) => {
    return (
        <Container>
        <Title>Contact Us</Title>
        <FormRow>
            <form name="contact" method="post" data-netlify="true" action="/">
            <input type="hidden" name="form-name" value="contact" />
            <Input  placeholder="email"  name="email" />
            <Input  placeholder="name"  name="name" />
            <Input  placeholder="message"  name="message" />
            <Button text={`Submit`} type="submit">Submit </Button>
            </form>
        </FormRow>
        </Container>
    )
}

