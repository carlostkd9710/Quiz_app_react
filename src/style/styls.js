import styled from "styled-components";
import {
    Button,
    Form
} from "react-bootstrap";

export const Divform = styled.div `
background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 100%);
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
`

export const Formstyle = styled(Form)`
    width: 600px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px 2px rgba(100,100,100,01);
`
export const Titulo = styled.h1 `
    padding: 0;
    text-align: center;
    margin: 0;
    color:#7a4955;
    margin-bottom: 10px;
`

export const Radiostyle = styled(Form.Check)`
    padding: 0;
    margin: 1rem 1.5rem;
    font-size: 1.5rem;
`
export const Buttonstyle = styled(Button)`
    background-color: #8e44ad;
    width: 100%;
    border: none;
    padding: 1.3rem;
    font-size: 2rem;
    &:hover{
        background-color: #732d91;
    }
    &:focus{
        outline: none;
        background-color: #5e3370;
    }
`

export const ContainerStyle = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow:0 0 10px 2px rgba(100,100,100,0.1);
    width: 50%;
    padding: 4rem;
    display:flex;
    flex-direction: column;
    align-items:center;

`