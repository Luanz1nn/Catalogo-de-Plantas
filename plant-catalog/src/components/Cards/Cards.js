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
  CurrentSpecies
}) {

  function modal() {
    console.log(CurrentSpecies);
  }

  return (
    <button className="card-container" onClick={modal}>
      <img src={imagemcapa} alt="espécie" />
      <div className="description-container">
        <div className="first-part">
          <div>
            <h3 className="Name">{Nomecomum}</h3>
          </div>

          <div className="scientific-name">
            <h6>Nome Cientifico :</h6>
            <p>{Nomecientifíco}</p>
          </div>
          </div>
        
      </div>
    </button>
  );
}

export default Card;
