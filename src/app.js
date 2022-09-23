import palavras from "./palavras"
import React from 'react';
function BotaoAlfabeto(props){
    return(
        <button ><strong>{props.letra.toUpperCase()}</strong></button>
    )
}
export default function App(){
    const [word,setWord]= React.useState('')
    const [wordInGame,setWordInGame]= React.useState('')
    function wordSelector(){
        const wordInFunction = palavras[Math.round(Math.random()*palavras.length)]
        setWord(wordInFunction)
        let wordList=wordInFunction.split('')
        let word2 = ''
        console.log(wordInFunction)
        setWordInGame(wordList.map((f, index)=> <li key ={index}>_</li>))
    }
    function teste(){
        alfabeto.pop(0)
        console.log(alfabeto)
    }
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return(
        <div>
            <div className="game">
                <div className="hangman">
                    <img onClick={teste} src="./assets/img/forca0.png" alt="Imagem não encontrada"/>
                </div>
                <div className="wordSelector">
                    <button onClick={wordSelector}><strong>Escolher palavra</strong></button>
                    <ul className="wordInGame">{wordInGame}</ul>
                </div>
            </div>
            <div>
                <ul className="letterButtons">
                 {alfabeto.map((f, index) => <li key={index}><BotaoAlfabeto letra={f} key={index} /></li>)}
                </ul>
            </div>
            <div className="chute">
                <p>Ja sei a palavra!</p>
                <input></input>
                <button><strong>Chutar</strong></button>
            </div>
        </div>
    )
}


