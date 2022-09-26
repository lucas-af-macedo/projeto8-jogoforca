import React from 'react';
export default function Letras(props){
    const {buttonCondition, alfabeto, BotaoAlfabeto} = props
    return(
        <div>
                <ul className={"letterButtons "+buttonCondition}>
                 {alfabeto.map((f, index) => <li key={index} ><BotaoAlfabeto letra={f} index={index}/></li>)}
                </ul>
        </div>
        )
}

