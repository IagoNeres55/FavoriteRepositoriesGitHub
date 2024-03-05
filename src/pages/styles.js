import styled, { css, keyframes } from 'styled-components'


const colors = {
    fundo: '#00182a',
    fundoForm: '#fefefe',
    sizeText: '15px',
    fontColor: 'black',
    fontHover: '#c1c1c1',

}

export const Container = styled.div`   
    background-color : ${colors.fundo};
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;

   
`

export const Title = styled.h1`
    font-size: ${colors.sizeText};
    color: ${colors.fontColor};
    padding-left: 45px;
    padding-top: 30px;
`

export const Form = styled.form`
    font-size: ${colors.sizeText};
    color: ${colors.fontColor};
    font-weight: bold;
    width: 50%;
    background-color: ${colors.fundoForm};
    height: 150px;
    border-radius: 8px;
    margin-top: 45px;

`

export const InputForm = styled.input.attrs({ type: 'text' })`
    font-size: ${colors.sizeText};
    color: ${colors.fontColor};
    width: 80%;
    height: 40px;
    border: 1px solid #d9d9d9;
    outline: none;
    border-radius: 8px;
    margin-left: 30px;
    padding-left: 15px;
    `

const animated = keyframes`
from {
    transform: rotate(0deg);
}

to {
    transform: rotate(360deg);
}   
`


export const Button = styled.button.attrs(props => ({ type: 'submit', disabled: props.loading }))`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${colors.sizeText};
    color: ${colors.fontColor};
    width: 10%;
    background-color: ${colors.fundoForm};
    border: 1px solid #d9d9d9;
    outline: none;
    border-radius: 8px;
    margin-right: 30px;
    margin-left: 5px;
    &:hover {
        background-color: ${colors.fontHover};
    }
    &[disabled] {
        cursor: not-allowed;
        opacity: 0.5;  

    }
    ${props => props.loading && css`
        svg{animation: ${animated} 2s linear infinite;}
    `}


    `;


export const ContainerInput = styled.div`
display: flex;
justify-content: space-around;
flex-direction: row;
`

export const Repositorio = styled.div`
    width: 50%;
    background-color: ${colors.fundoForm};
    height: 55px;
    border-radius: 8px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  
    `

export const List = styled.span`
    font-size: ${colors.sizeText};
    

    `


export const links = styled.a`
    text-decoration: none;
    padding-top: 2px;
    `

export const Avatar = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-left: 18px;
    margin-right: 10px
    `