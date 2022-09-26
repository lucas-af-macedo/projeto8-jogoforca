import styled from "styled-components";

export default function Jogo(props){
    const {image, wordSelector, color, wordInGame, RenderWord} = props
    return(
        <JogoDiv className="game">
                <div className="hangman">
                    <img  src={image} alt="Imagem não encontrada"/>
                </div>
                <div className="wordSelector">
                    <button onClick={wordSelector}><strong>Escolher palavra</strong></button>
                    <ul className={"wordInGame "+color}>
                        {wordInGame.map((f, index)=> (<li key ={index}><RenderWord character={f} index={index}/></li>))}
                    </ul>
                </div>
        </JogoDiv>
    )
}

const JogoDiv = styled.div`
    display: flex;
    justify-content: space-between;
    height: auto;

button{
    margin-top: 40px;
    width: 180px;
    height: 50px;
    cursor: pointer;
    background-color: #2CAE65;
    border-radius: 10px;
    border: 0px solid blueviolet;
    color: white;
    font-size: 16px;
}

img{
    max-width: 80%;
}

.wordSelector{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    max-width: 180px;
}

ul{
    display: flex;
    font-size: 50px;
    justify-content: end;
    overflow: visible;
    margin-bottom: 60px;
}
li{
    margin: 4px;
}

.lose{
    color: red;
}
.win{
    color: green;
}`