import styled from "styled-components";

export default function Jogo(props){
    const {image, wordSelector, color, wordInGame, RenderWord} = props
    return(
        <JogoDiv className="game">
                <div className="hangman">
                    <img  data-identifier="game-image" src={image} alt="Imagem não encontrada"/>
                </div>
                <div className="wordSelector">
                    <button data-identifier="choose-word" onClick={wordSelector}><strong>Escolher palavra</strong></button>
                    <ul  className={"wordInGame "+color}>
                        <li><p data-identifier="word">{wordInGame}</p></li>
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
    letter-spacing: .3rem;
}

.lose{
    color: red;
}
.win{
    color: green;
}`