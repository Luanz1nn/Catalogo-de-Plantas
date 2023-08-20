import "./style.css";
import Header from "../../Header/header";
import Footer from "../../Footer/Footer";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home-container">
        <div className="home-main">pagina inicial</div>
      </div>
      <Footer/>
    </div>
  );
}