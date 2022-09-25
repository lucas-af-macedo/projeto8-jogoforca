import palavras from "./palavras"
import React from 'react';

let condicao = 'desabilitado'
let wordNow
let underlineWordNow
let letterList;
let rightLettersList;
let arrayHability = [];
let alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
alfabeto.map(()=>{arrayHability.push('habilitado')})
export default function App(){
    const [word,setWord]= React.useState('')
    const [wordInGame,setWordInGame]= React.useState('')
    const [buttonCondition,setButtonCondition] = React.useState('')
    const [newGame,setNewGame] = React.useState(0)
    const [image,setImage] = React.useState("./assets/img/forca0.png")
    const [letterButtons,setLetterButtons] = React.useState(listaLetras)
    const [disability,setDisability] = React.useState(true)
    const [color,setColor] = React.useState('')
    function listaLetras(){
        return(
            <>
            {alfabeto.map((f, index) => <li key={index} ><BotaoAlfabeto letra={f}/></li>)}
            </>
        )
    }
    function RenderWord(props){

        return(
        <>
            {props.character}
        </>)
    }

    function testWin(wordArray1,wordArray2){
        let index=0
        while (index<wordArray1.length){
            if(wordArray1[index]!==wordArray2[index])
                return(0)
            index+=1
        }
        console.log(wordArray1)
        console.log(wordArray2)
        return (1)
    }

    function testLetter(letter){
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
        if (test === 1){
            setWordInGame(rightLettersList.map((f, index)=> (<li key ={index}><RenderWord character={f} index={index}/></li>)))

        }else{
            setNewGame(newGame+1)
            setImage("./assets/img/forca"+(newGame+1)+".png")
            if(newGame+1===6){
                setDisability(true)
                setButtonCondition('')
                setColor('lose')
                setWordInGame(letterList.map((f, index)=> (<li key ={index}><RenderWord character={f} index={index}/></li>)))
            }
        }
        if (testWin(letterList,rightLettersList)){
            setDisability(true)
            setButtonCondition('')
            setColor('win')
        }
    }



    function BotaoAlfabeto(props){
        const [letterClicked,setLetterClicked] = React.useState(arrayHability[props.index])
        function letterSelected(){
            if (condicao==='habilitado'){
                arrayHability[props.index]=''
                if(letterClicked!=='')
                    testLetter(props.letra)
                setLetterClicked('')
            }
        }
        
        return(
            <button className={letterClicked} onClick={letterSelected} disabled={disability}><strong>{props.letra.toUpperCase()}</strong></button>
        )
    }


    function wordSelector(){
        wordNow = palavras[Math.round(Math.random()*palavras.length)]
        setWord(palavras[0])
        condicao = 'habilitado'
        letterList=wordNow.split('')
        rightLettersList=letterList.map(()=>'_')
        setWordInGame(rightLettersList.map((f, index)=> (<li key ={index}><RenderWord character={f} index={index}/></li>)))
        setButtonCondition('habili')
        setImage("./assets/img/forca0.png")
        alfabeto.map((f, index)=>{arrayHability[index]='habilitado'})
        setNewGame(0)
        setDisability(false)
        setColor('')
    }
    return(
        <div>
            <div className="game">
                <div className="hangman">
                    <img  src={image} alt="Imagem não encontrada"/>
                </div>
                <div className="wordSelector">
                    <button onClick={wordSelector}><strong>Escolher palavra</strong></button>
                    <ul className={"wordInGame "+color}>{wordInGame}</ul>
                </div>
            </div>
            <div>
                <ul className={"letterButtons "+buttonCondition}>
                 {alfabeto.map((f, index) => <li key={index} ><BotaoAlfabeto letra={f} index={index}/></li>)}
                </ul>
            </div>
            <div className="chute">
                <p>Ja sei a palavra!</p>
                <input disabled={disability}></input>
                <button><strong>Chutar</strong></button>
            </div>
        </div>
    )
}


