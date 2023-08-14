import "./style.css";
import Card from "../Cards/Cards";
import species from "../Species/Species";
import { useState } from "react";
import Modal from "../Modal/Modal";
import Header from "../Header/header";

function Catalog() {
  const [specie] = useState(species);
  const [busca, setBusca] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [currentCard, setCurrentCard] = useState([])

  const cardFilter = specie.filter((specieCurrent) =>
    specieCurrent.Nomecomum.toLocaleLowerCase().startsWith(
      busca.toLocaleLowerCase().trim()) || specieCurrent.Nomecientifíco.trim().toLocaleLowerCase().startsWith(busca.toLocaleLowerCase().trim())
  );

  function modal(specieinfo){
    setOpenModal(true)
    setCurrentCard(specieinfo)
  }

  return (
    <div className="catalog">
        <Header/>
      <Modal
      isoOpen={openModal}
      setOpenModal={setOpenModal}
      name={currentCard.Nomecomum}
      />
      <div className="search">
        <input
          type="text"
          value={busca}
          placeholder="Buscar"
          onChange={(e) => setBusca(e.target.value)}
        ></input>
      </div>
      <div className="catalog-container">
        {cardFilter.map((specieCurrent) => {
          return (
            <button className="btn-card" key={specieCurrent.id} onClick={() => modal(specieCurrent)}>
            <Card
              key={specieCurrent.id}
              Nomecientifíco={specieCurrent.Nomecientifíco}
              Nomecomum={specieCurrent.Nomecomum}
              imagemcapa={specieCurrent.imagemcapa}
              Ocorrência={specieCurrent.Ocorrência}
              Porte={specieCurrent.Porte}
              Frutificação={specieCurrent.Frutificação}
              Floração={specieCurrent.Floração}
              Disperção={specieCurrent.Disperção}
              Estado={specieCurrent.Estado}
              CurrentSpecies={specieCurrent}
            ></Card>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Catalog;
