import "./style.css";
import Card from "../../Cards/Cards";
import species from "../../Species/Species";
import {  useState } from "react";
import Modal from "../../Modal/Modal";
import Header from "../../Header/header";
import Footer from "../../Footer/Footer";

function Catalog() {
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [currentCard, setCurrentCard] = useState([]);
  const cardFilter = species.filter(
    (specieCurrent) =>
      specieCurrent.Nomecomum.toLocaleLowerCase().startsWith(
        search.toLocaleLowerCase().trim()
      ) ||
      specieCurrent.Nomecientifíco.trim()
        .toLocaleLowerCase()
        .startsWith(search.toLocaleLowerCase().trim())
  );

  function modal(specieinfo) {
    setOpenModal(true);
    setCurrentCard(specieinfo);
  }

  return (
    <div className="catalog">
      <Header />
      <Modal
        isoOpen={openModal}
        setOpenModal={setOpenModal}
        name={currentCard.Nomecomum}
        key={currentCard.id}
        Nomecientifíco={currentCard.Nomecientifíco}
        imagemcapa={currentCard.imagemcapa}
        imagemfruto={currentCard.imagemfruto}
        imagemarvore={currentCard.imagemarvore}
        Ocorrência={currentCard.Ocorrência}
        Porte={currentCard.Porte}
        Frutificação={currentCard.Frutificação}
        Floração={currentCard.Floração}
        Disperção={currentCard.Disperção}
        Estado={currentCard.Estado}
      />
      <div className="search">
        <input
          type="text"
          value={search}
          placeholder="Buscar"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
      <div className="catalog-container">
        {cardFilter.map((specieCurrent) => {
          return (
            <button
              className="btn-card"
              key={specieCurrent.id}
              onClick={() => modal(specieCurrent)}
            >
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
      <Footer />
    </div>
  );
}

export default Catalog;
