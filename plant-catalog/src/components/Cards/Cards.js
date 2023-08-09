import "./style.css";

function Card({
  Nomecientifíco,
  Nomecomum,
  imagemcapa,
  Ocorrência,
  Porte,
  Frutificação,
  Floração,
  Disperção,
  Estado,
}) {
  return (
    <div className="card-container">
      <img src={imagemcapa} alt="espécie" />
      <ul className="description">        
        <p className="Name">
            {Nomecomum}
        </p>
        <div>
         <p className="question">
            Nome Cientifico :
        </p>
        <p className="response">
            {Nomecientifíco}
        </p>
        <div>   
        </div>
        
          <p className="question">
            Ocorrência :
        </p>
        <p className="response">
          {Ocorrência}  
        </p>  
        </div>
        
      </ul>
    </div>
  );
}

export default Card;
