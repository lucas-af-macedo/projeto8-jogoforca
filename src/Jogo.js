export default function Jogo(props){
    const {image, wordSelector, color, wordInGame, RenderWord} = props
    return(
        <div className="game">
                <div className="hangman">
                    <img  src={image} alt="Imagem não encontrada"/>
                </div>
                <div className="wordSelector">
                    <button onClick={wordSelector}><strong>Escolher palavra</strong></button>
                    <ul className={"wordInGame "+color}>
                        {wordInGame.map((f, index)=> (<li key ={index}><RenderWord character={f} index={index}/></li>))}
                    </ul>
                </div>
        </div>
    )
}
