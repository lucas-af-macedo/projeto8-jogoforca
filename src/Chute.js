import styled from 'styled-components';
import React from 'react';
export default function Chute(props){
    const {tryWord, setTryWord, disability,tryWin} = props
    return(
        <ChuteDiv className="chute">
                <p>Ja sei a palavra!</p>
                <input data-identifier="type-guess" value={tryWord} onChange={e => setTryWord(e.target.value.toLowerCase())} disabled={disability}></input>
                <button data-identifier="guess-button" onClick={tryWin} disabled={disability}><strong>Chutar</strong></button>
        </ChuteDiv>
    )
}
const ChuteDiv = styled.div`
margin-top: 30px;
display: flex;
justify-content: center;
align-items: center;


p{
margin-right: 15px;
font-size: 17px;
}

input{
height: 30px;
width: 300px;
margin-right: 15px;
border-radius: 5px;
}

button{
cursor: pointer;
height: 40px;
width: 75px;
font-size: 17px;
border-radius: 5px;
background-color: #E1ECF3;
color: #3A73AA;
border: 2px solid #3A73AA;
}`