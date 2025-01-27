import React from "react";
import { Button, Form, Input } from "antd";

export const TarjetaContacto = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
        style={{
          maxWidth: "400px",
          width: "100%",
          marginTop: "20px",
          padding: "20px",
          marginLeft: "-100px",
        }}
      >
        <Form.Item
          label="Nombre"
          name="nombre"
          rules={[{ required: true, message: "Por favor ingresa tu nombre" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Correo"
          name="correo"
          rules={[
            {
              required: true,
              type: "email",
              message: "Por favor ingresa un correo válido",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Texto"
          name="texto"
          rules={[{ required: true, message: "Por favor ingresa tu mensaje" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
