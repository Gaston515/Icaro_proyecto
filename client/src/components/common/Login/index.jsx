import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleFormSubmit = async (values) => {
    const response = await axios.post(
      "http://localhost:3000/usuarios/login",
      values
    );
    console.log(response.data);

    if (response.data.status === "success") {
      localStorage.setItem("usser", JSON.stringify(response.data));
      navigate("/productos");
      alert("Inicio de sesion exitoso");
    } else {
      alert("Usuario o contraseña incorrecta");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 100 }}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={handleFormSubmit}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="Email"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" label={null}>
          <Checkbox>Recordar usuario</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Iniciar sesión
          </Button>
          <Button type="secondary" htmlType="submit" style={{ marginTop: 10 }}>
            Registrarse
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
