import "./style.css";
import Header from "../Header/header";
import Card from "../Cards/Cards";
import species from "../Species/Species";
import { useState } from "react";

function Main() {
  const [specie] = useState(species);

  return (
    <div className="main">
      <Header />
      <div className="main-container">
        <div className="search">
          <input placeholder="Digite Algo"></input>
          <button>Buscar</button>
        </div>

        {specie.map((specieCurrent) => {
          return (
            
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
          );
        })}
      </div>
    </div>
  );
}

export default Main;
