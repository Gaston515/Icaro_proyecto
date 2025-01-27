import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardProdcut } from "../CardProduct";

export const ListProducts = () => {
  const [productos, setProductos] = useState([]);

  const fetch = async () => {
    const response = await axios.get("http://localhost:3000/productos/");
    setProductos(response.data);
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "100px",
        gap: "50px",
      }}
    >
      {productos.map((producto, index) => (
        <CardProdcut
          key={index}
          id={producto.id}
          nombre={producto.nombre}
          artista={producto.artista}
          precio={producto.precio}
          descripcion={producto.descripcion}
        ></CardProdcut>
      ))}
    </div>
  );
};
