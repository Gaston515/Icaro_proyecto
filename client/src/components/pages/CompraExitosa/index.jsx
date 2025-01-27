import React from "react";
import { Card, Space } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

export const CompraExitosa = () => {
  const { id } = useParams();
  const [total, setTotal] = useState(0); // Estado para el total
  const [productos, setProductos] = useState(""); // Estado para productos

  const fetchCompra = async (id) => {
    const response = await axios.get(`http://localhost:3000/compras/${id}`);
    const productos = response.data[0].productos;

    setProductos(productos); // Actualiza el estado de productos
    setTotal(response.data[0].total);
  };

  fetchCompra(id);

  return (
    <>
      <Space
        direction="vertical"
        size={16}
        style={{
          display: "flex",
          flex: 1,
          padding: 24,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          title={<h1>Compra Exitosa!</h1>}
          extra={<a href="#">More</a>}
          style={{ width: 800, height: 300 }}
        >
          <h2>Datos de su compra: </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",

              justifyContent: "space-between",
              marginTop: 50,
            }}
          >
            <h3>Nro de compra: {id} </h3>
            <h3>Articulos comprados: {productos} </h3>
            <h3>Total de la compra: {total}</h3>
          </div>
        </Card>
      </Space>
    </>
  );
};
