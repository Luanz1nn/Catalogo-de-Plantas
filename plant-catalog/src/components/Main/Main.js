import "./style.css";
import Catalog from "../Catalog/Catalog";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";

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
