import React from "react";
import { Card } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Image } from "antd";
import { useCartStore } from "../../stores/useCartStore";

export const CardProdcut = ({ id, nombre, artista, precio, descripcion }) => {
  const { addProductToCart } = useCartStore();

  const handleAddCart = () => {
    addProductToCart({ id, nombre, artista, precio });
    console.log("Producto agregado al carrito");
  };

  return (
    <Card
      title={nombre}
      bordered={false}
      hoverable
      style={{ width: 300 }}
      actions={[<ShoppingCartOutlined onClick={handleAddCart} />]}
      cover={<Image src={`http://localhost:3000/images/${id}.jpg`} />}
    >
      <h3>Artista: {artista} </h3>
      <h4>Precio: {precio} </h4>
      <p>{descripcion}</p>
    </Card>
  );
};
