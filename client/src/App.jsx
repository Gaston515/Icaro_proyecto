import "./App.css";
import { ListProducts } from "./components/common/ListProducts";
import { Routes, Route } from "react-router-dom";
import { Contacto } from "./components/pages/Contacto";
import { Home } from "./components/pages/Home";
import { Productos } from "./components/pages/Productos";
import { Navbar } from "./components/template/Navbar";
import { CompraExitosa } from "./components/pages/CompraExitosa";
import { QuienesSomos } from "./components/pages/QuienesSomos/QuienesSomos";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto></Contacto>} />
        <Route path="/productos" element={<Productos></Productos>} />
        <Route path="/quienes-somos" element={<QuienesSomos></QuienesSomos>} />
        <Route
          path="/compra-exitosa/:id"
          element={<CompraExitosa></CompraExitosa>}
        />
      </Routes>
    </>
  );
}

export default App;
