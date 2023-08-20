import "./style.css";
import Catalog from "./Pages/Catalog/Catalog";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";

function Main() {
  return (
    <div className="main">
      <Routes>
      <Route path="/">
        <Route path="/" element={<Home/>} />
        <Route path="/Catalog" element={<Catalog/>} />
      </Route>
      </Routes>
    </div>
  );
}

export default Main;
