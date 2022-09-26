import React from 'react';
import styled from 'styled-components';
export default function Letras(props){
    const {buttonCondition, alfabeto, BotaoAlfabeto} = props
    return(
        <div>
                <LetrasUl className={buttonCondition}>
                 {alfabeto.map((f, index) => <li key={index} ><BotaoAlfabeto letra={f} index={index}/></li>)}
                </LetrasUl>
        </div>
        )
}

const LetrasUl = styled.div`
        margin-top: 30px;
        margin-left: 50px;
        margin-right: 50px;
        display: flex;
        overflow: hidden;
        max-width: 900px;
        flex-wrap: wrap;
        justify-content: center;
        list-style-type: none;
    
    
    button{
        color: #798189;
        border: 2px solid #798189;
        border-radius: 5px;
        background-color: #9FAAB4;
        width: 55px;
        font-size: 20px;
        height: 55px;
        margin: 5px;
    }
    .habilitado{
        cursor: pointer;
        width: 55px;
        font-size: 20px;
        height: 55px;
        margin: 5px;
        border-radius: 5px;
        background-color: #E1ECF3;
        color: #3A73AA;
        border: 2px solid #3A73AA;
    }
    `

