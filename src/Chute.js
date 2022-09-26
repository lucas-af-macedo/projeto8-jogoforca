import React from 'react';
export default function Chute(props){
    const {tryWord,setTryWord,disability,tryWin} = props
    return(
        <div className="chute">
                <p>Ja sei a palavra!</p>
                <input value={tryWord} onChange={e => setTryWord(e.target.value.toLowerCase())} disabled={disability}></input>
                <button onClick={tryWin} disabled={disability}><strong>Chutar</strong></button>
        </div>
    )
}