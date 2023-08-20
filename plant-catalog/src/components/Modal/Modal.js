import "./style.css";

export default function Modal({
  isoOpen,
  setOpenModal,
  name,
  Nomecientifíco,
  imagemcapa,
  Ocorrência,
  Porte,
  Frutificação,
  Floração,
  Disperção,
  Estado,
  imagemfruto,
  imagemarvore,
}) {
  if (isoOpen) {
    return (
      <div className="modal-background">
        <div className="modal-container">
          <div className="modal">
            <div className="close-btn-container">
              <button
                className="close-btn"
                onClick={() => setOpenModal(false)}
              ></button>
            </div>
            <div className="section-modal">
              <div className="name">
                <h1>{name}</h1>
                <div className="occurrence">
                 <p>{Ocorrência}</p>
                </div>
              </div>
              <div className="information">
                <div className="first-part">
                  <div className="scientific-name">
                    <h2>Nome Científico :</h2> <p>{Nomecientifíco}</p>
                  </div>
                  <div className="size">
                    <h2>Porte :</h2> <p>{Porte}</p>
                  </div>
                  <div className="state">
                    <h2>Estado :</h2> <p>{Estado}</p>
                  </div>
                </div>
                <div className="second-part">
                  <div className="fruiting">
                    <h2>Frutificação :</h2> <p>{Frutificação}</p>
                  </div>
                  <div className="flowering">
                    <h2>Floração :</h2> <p>{Floração}</p>
                  </div>
                  <div className="dispersal">
                    <h2>Disperção ;</h2> <p>{Disperção}</p>
                  </div>
                </div>
              </div>
              <div className="image">
                <div className="tree-img">
                  <img src={imagemcapa} alt="tree"/>
                  <p>link da imagem : <a href={imagemcapa} target="_blank">{imagemcapa}</a></p>
                </div>
                <div className="fruit-img">
                  <img src={imagemfruto} alt="fruits or seeds"/>
                <p>link da imagem : <a href={imagemfruto} target="_blank">{imagemfruto}</a></p>
                </div>
                <div className="sheets-img">
                  <img src={imagemarvore} alt="sheets"/>
                  <p>link da imagem : <a href={imagemarvore} target="_blank">{imagemarvore}</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
