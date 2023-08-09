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
      <div className="description-container">
        <div className="first-part">
          <div>
            <h3 className="Name">{Nomecomum}</h3>
          </div>

          <div className="scientific-name">
            <h6>Nome Cientifico :</h6>
            <p>{Nomecientifíco}</p>
          </div>

          <div className="occurrence">
            <h6>Ocorrência :</h6>
            <p>{Ocorrência}</p>
          </div>
        </div>
        <div className="second-part">
          <div className="port">
            <h6>Porte :</h6>
            <p>{Porte}</p>
          </div>

          <div className="fruiting">
            <h6>Frutificação :</h6>
            <p>{Frutificação}</p>
          </div>

          <div className="flowering">
            <h6>Floração :</h6>
            <p>{Floração}</p>
          </div>
        </div>
        <div className="third-part">
          <div className="dispersal">
            <h6>Disperção :</h6>
            <p>{Disperção}</p>
          </div>

          <div className="state">
            <h6>Estado :</h6>
            <p>{Estado}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
