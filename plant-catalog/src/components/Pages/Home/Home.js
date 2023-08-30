import "./style.css";
import Header from "../../Header/header";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home-container">
        <div className="home-main">
          <h1>Mata Atlântica</h1>
          <p>Bioma Mata Atlântica: É
            composto por formações florestais nativas: Floresta Ombrófila Densa;
            Ombrófila Mista; Ombrófila Aberta; Estacional Semidecidual; e
            Estacional Decidual, e também ecossistemas associados como:
            manguezais, vegetação de restingas, campos de altitude, brejos
            interioranos e encraves florestais do Nordeste. Inicialmente ocupava
            cerca de 1,1 km² em 17 estados do Brasil (IBGE, 2019). Mas por conta
            da ocupação de atividades humanas, atualmente restam cerca de 12,5%
            da cobertura original da floresta. É extremamente biodiversa e
            fornece diversos serviços ecossistêmicos que são essenciais à
            população brasileira, como por exemplo regulação e equilíbrio
            climático, abastecimento de água, entre outros. A fauna e flora tem
            a segunda maior biodiversidade das Américas, sendo inferior apenas a
            Floresta Amazônica (THOMAS et al., 1998; MORELLATO; HADDAD, 2000).
            </p>
            <h2>Sobre o Site</h2>
          <p>
            Esse site nasceu com o intuito de servir como fonte de busca para as
            espécies nativas da Mata Atlântica em Pernambuco. Podendo servir de
            auxílio para agregar no conhecimento geral e também para trabalhos
            específicos voltados a essa temática.          
          </p>
          <span>
          Fonte:
            <a href="https://www.gov.br/mma/pt-br/assuntos/ecossistemas-1/biomas/mata-atlantica" target="_blank">https://www.gov.br/mma/pt-br/assuntos/ecossistemas-1/biomas/mata-atlantica</a>
            <a href= "https://antigo.mma.gov.br/biomas/mata-atl%C3%A2ntica_emdesenvolvimento.html" target="_blank">https://antigo.mma.gov.br/biomas/mata-atl%C3%A2ntica_emdesenvolvimento.html</a>
          </span>
        </div>
      </div>
    </div>
  );
}
