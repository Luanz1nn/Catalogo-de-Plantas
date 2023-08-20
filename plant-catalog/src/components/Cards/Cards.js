import "./style.css";

function Card({
  Nomecientifíco,
  Nomecomum,
  imagemcapa,
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
          </div>
        
      </div>
    </div>
  );
}

export default Card;
