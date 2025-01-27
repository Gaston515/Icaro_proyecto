import { useEffect, useState } from "react";
import { Layout, Menu, Button, FloatButton, Image } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { use } from "react";

const { Header } = Layout;

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const handleMenuClick = (key) => {
    if (key === "1") {
      navigate("/");
    } else if (key === "2") {
      navigate("/productos");
    } else if (key === "3") {
      navigate("/contacto");
    } else if (key === "4") {
      navigate("/quienes-somos");
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("usser");
    setLogin(user);
  }, ["Inicio de sesion"]);

  return (
    <>
      <Layout>
        <Header>
          <div
            style={{
              float: "left",
              color: "white",
              fontSize: "20px",
              marginRight: "20px",
            }}
          >
            Baldgio Discos
          </div>

          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ flex: "0 0 auto" }}
          >
            <Menu.Item key="1" onClick={() => handleMenuClick("1")}>
              Inicio
            </Menu.Item>
            <Menu.Item key="2" onClick={() => handleMenuClick("2")}>
              Productos
            </Menu.Item>
            <Menu.Item key="3" onClick={() => handleMenuClick("3")}>
              Contacto
            </Menu.Item>
            <Menu.Item key="4" onClick={() => handleMenuClick("4")}>
              Quienes somos
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
      <Sidebar open={open} setOpen={setOpen} />
      <FloatButton
        shape="square"
        description="Carrito"
        onClick={() => setOpen(true)}
        style={{ width: 60, height: 60 }}
        icon={<ShoppingCartOutlined />}
      />
    </>
  );
};
