import './App.css';
import Header from '../Header/header';
import Card from '../Cards/Cards';
import species from '../Species/Species';
import {useState} from 'react'

function App() {
  const [specie, setSpecie] = useState(species[0]);

  return (
    <div className="App">
      <Header/>
      <Card
      Nomecientifíco={specie.Nomecientifíco} 
      Nomecomum={specie.Nomecomum} 
      imagemcapa={specie.imagemcapa}
      Ocorrência={specie.Ocorrência}
      Porte={specie.Porte}
      Frutificação={specie.Frutificação}
      Floração={specie.Floração}
      Disperção={specie.Disperção}
      Estado={specie.Estado}
      />
    </div>
  );
}

export default App;
