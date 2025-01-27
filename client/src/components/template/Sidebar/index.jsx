import React from "react";
import { Drawer, Image } from "antd";
import { useCartStore } from "../../stores/useCartStore";
import { Card } from "antd";
import { Typography, Button } from "antd";
import { DeleteOutlined, ImportOutlined } from "@ant-design/icons";
import { floatButtonPrefixCls } from "antd/es/float-button/FloatButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Sidebar = ({ open, setOpen }) => {
  const { cart, deleteProduct, cleanProduct } = useCartStore();
  const navigate = useNavigate();

  const handleDelete = (producto) => {
    deleteProduct(producto);
  };

  const finalizarCompra = async () => {
    if (cart.length === 0) {
      return alert("No hay productos en el carrito");
    }
    if (!localStorage.getItem("usser")) {
      return alert("Debes iniciar sesion para realizar la compra");
    }
    console.log(cart);
    const data = {
      productos: cart.map((item) => item.nombre).join(", "),
      total: cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0),
      id_usuario: JSON.parse(localStorage.getItem("usser")).userId,
    };
    console.log(data);
    const response = await axios.post("http://localhost:3000/compras", data);

    if (response.status === 200) {
      setOpen(false);
      cleanProduct();
      navigate("/compra-exitosa/" + response.data.insertId);
    }
  };

  //suma de los productos
  const Total = cart.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <>
      <Drawer title="Carrito" open={open} onClose={() => setOpen(false)}>
        {cart.map((producto) => (
          <Card
            style={{ width: 200, marginTop: 16, marginLeft: 70 }}
            cover={
              <Image
                style={{
                  width: 200,
                  height: 200,
                }}
                src={`http://localhost:3000/images/${producto.id}.jpg`}
                preview={false}
              />
            }
            actions={[
              <DeleteOutlined onClick={() => handleDelete(producto)} />,
            ]}
          >
            <h4>{producto.nombre}</h4>
            <p>Cantidad: {producto.cantidad} </p>
            <p>Precio: ${producto.precio}</p>
          </Card>
        ))}
        <h3 style={{ marginTop: 20 }}>
          Total: $ {parseFloat(Total.toFixed(2))}
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        >
          <Button type="primary" onClick={() => finalizarCompra()}>
            Comprar
          </Button>
          <Button
            type="secondary"
            style={{ background: "red", color: "white" }}
            onClick={cleanProduct}
          >
            Vaciar carrito
          </Button>
        </div>
      </Drawer>
    </>
  );
};
