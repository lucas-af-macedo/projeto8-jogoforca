import palavras from "./palavras"
import React from 'react';
import Chute from "./Chute";
import Letras from "./Letras";
import Jogo from "./Jogo";
import styled from "styled-components";



let condicao = 'desabilitado'
let wordNow
let letterList;
let rightLettersList;
let arrayHability = [];
let wordInput = ''
let alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let wordToShow
alfabeto.map(()=>{arrayHability.push('')})
export default function App(){
    const [wordInGame,setWordInGame]= React.useState([])
    const [buttonCondition,setButtonCondition] = React.useState(arrayHability)
    const [newGame,setNewGame] = React.useState(0)
    const [image,setImage] = React.useState("./assets/img/forca0.png")
    const [disability,setDisability] = React.useState(true)
    const [color,setColor] = React.useState('')
    const [tryWord,setTryWord] = React.useState('')
    function RenderWord(props){

        return(
        <>
            {props.character}
        </>)
    }

    function testWin(){
        let index=0
        while (index<letterList.length){
            if(letterList[index]!==rightLettersList[index])
                return(0)
            index+=1
        }
        return (1)
    }

    function tryWin(){
        let index = 0
        let regex
        let win =1
        wordInput=tryWord
        if (tryWord.length<rightLettersList.length){
            for(let i=0;i<(rightLettersList.length-tryWord.length);i++){
                wordInput=wordInput+'_'
            }
        }
        while(index<rightLettersList.length){
            switch (wordInput[index]){
                case 'a':
                    regex = /^[aáàâã ]+$/i
                    if(!letterList[index].match(regex))
                            win=0
                        break
                case 'e':
                    regex = /^[eéèê ]+$/i
                    if(!letterList[index].match(regex))
                        win=0
                    break
                case 'i':
                    regex = /^[iíï ]+$/i
                    if(!letterList[index].match(regex))
                        win=0
                    break
                case 'u':
                    regex = /^[uú ]+$/i
                    if(!letterList[index].match(regex))
                        win=0
                    break
                case 'o':
                    regex = /^[oóôõö ]+$/i
                    if(!letterList[index].match(regex))
                        win=0
                    break
                case 'c':
                    regex = /^[cç ]+$/i
                    if(!letterList[index].match(regex))
                        win=0
                    break
                default:
                    if(letterList[index]!==wordInput[index])
                        win=0
                    break
            }
            index+=1
        }
        if (win===0){
            setNewGame(6)
            setImage("./assets/img/forca6.png")
            setDisability(true)
            arrayHability=alfabeto.map(()=>{return('')})
            setButtonCondition(arrayHability)
            setColor('lose')
            wordToShow=''
            letterList.map((f)=>{wordToShow=wordToShow+f})
            setWordInGame(wordToShow)
        }else{
            setDisability(true)
            arrayHability=alfabeto.map(()=>{return('')})
            setButtonCondition(arrayHability)
            setColor('win')
            wordToShow=''
            letterList.map((f)=>{wordToShow=wordToShow+f})
            setWordInGame(wordToShow)
        }
        setTryWord('')

    }

    function testRegex(letter){
        let regex
        let test = 0
        switch (letter){
            case 'a':
                regex = /^[aáàâã ]+$/i
                letterList.map((f, index)=>{if(f.match(regex)){
                    test=1
                    rightLettersList[index]=f
                }
            })
                break
            case 'e':
                regex = /^[eéèê ]+$/i
                letterList.map((f, index)=>{if(f.match(regex)){
                    test=1
                    rightLettersList[index]=f
                }
            })
                break
            case 'i':
                regex = /^[iíï ]+$/i
                letterList.map((f, index)=>{if(f.match(regex)){
                    test=1
                    rightLettersList[index]=f
                }
            })
                break
            case 'u':
                regex = /^[uú ]+$/i
                letterList.map((f, index)=>{if(f.match(regex)){
                    test=1
                    rightLettersList[index]=f
                }
            })
                break
            case 'o':
                regex = /^[oóôõö ]+$/i
                letterList.map((f, index)=>{if(f.match(regex)){
                    test=1
                    rightLettersList[index]=f
                }
            })
                break
            case 'c':
                regex = /^[cç ]+$/i
                letterList.map((f, index)=>{if(f.match(regex)){
                    test=1
                    rightLettersList[index]=f
                }
            })
                break
            default:
                letterList.map((f, index)=>{if(f===letter){
                    test=1
                    rightLettersList[index]=f
                }
            })
                break
        }
        return test
    }
    function testLetter(letter){
        let test = testRegex(letter)
        if (test === 1){
            wordToShow=''
            rightLettersList.map((f)=>{wordToShow=wordToShow+f})
            setWordInGame(wordToShow)

        }else{
            setNewGame(newGame+1)
            setImage("./assets/img/forca"+(newGame+1)+".png")
            if(newGame+1===6){
                setDisability(true)
                arrayHability=alfabeto.map(()=>{return('')})
                setButtonCondition(arrayHability)
                setColor('lose')
                wordToShow=''
                letterList.map((f)=>{wordToShow=wordToShow+f})
                setWordInGame(wordToShow)
            }
        }
        if (testWin()){
            setDisability(true)
            arrayHability=alfabeto.map(()=>{return('')})
            setButtonCondition(arrayHability)
            setColor('win')
        }
    }



    function BotaoAlfabeto(props){
        const [letterClicked,setLetterClicked] = React.useState(arrayHability[props.index])
        function letterSelected(){
            if (condicao==='habilitado'){
                arrayHability[props.index]=''
                setButtonCondition(arrayHability)
                if(letterClicked!=='')
                    testLetter(props.letra)
                setLetterClicked('')
            }
        }
        return(
            <button data-identifier="letter" className={buttonCondition[props.index]} onClick={letterSelected} disabled={disability}><strong>{props.letra.toUpperCase()}</strong></button>
        )
    }


    function wordSelector(){
        wordNow = palavras[Math.round(Math.random()*palavras.length)]
        condicao = 'habilitado'
        letterList=wordNow.split('')
        rightLettersList=letterList.map(()=>'_')
        wordToShow=''
        rightLettersList.map((f)=>{wordToShow=wordToShow+f})
        setWordInGame(wordToShow)
        setImage("./assets/img/forca0.png")
        arrayHability=alfabeto.map(()=>{return('habilitado')})
        setButtonCondition(arrayHability)
        setNewGame(0)
        setDisability(false)
        setColor('')
        wordInput=''
    }
    return(
        <Raiz>
            <div>
                <Jogo image={image} wordSelector={wordSelector} color={color} wordInGame={wordInGame} RenderWord={RenderWord}></Jogo>
                <Letras buttonCondition={buttonCondition} alfabeto={alfabeto} BotaoAlfabeto={BotaoAlfabeto}></Letras>
                <Chute tryWord={tryWord} setTryWord={setTryWord} disability={disability} tryWin={tryWin}></Chute>
            </div>
        </Raiz>
    )
}

const Raiz = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 50px;
`

