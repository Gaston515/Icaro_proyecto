import React from "react";
import { Typography } from "antd";

export const QuienesSomos = () => {
  return (
    <div>
      <Typography.Title level={2} style={{ textAlign: "center" }}>
        Quiénes Somos - Balgio Discos
      </Typography.Title>
      <Typography.Paragraph
        style={{
          fontSize: "18px",
          lineHeight: "1.6",
          color: "#2c3e50",
          fontWeight: "300",
          textAlign: "justify", // Cambiado a "justify"
          marginBottom: "20px",
          letterSpacing: "0.5px",
          padding: "0 20px", // Agregada separación desde los costados
        }}
      >
        Bienvenidos a Balgio Discos, un rincón donde la pasión por los vinilos
        cobra vida. Somos una disquería dedicada a la comercialización de discos
        de vinilo usados, cuidadosamente seleccionados, provenientes de todas
        partes del mundo. Desde nuestros inicios, nos propusimos ser más que un
        simple lugar de compra y venta. Balgio Discos es un espacio donde la
        música trasciende generaciones, formatos y fronteras. Cada vinilo en
        nuestras estanterías cuenta una historia única: desde las melodías
        clásicas que definieron décadas hasta las rarezas y joyas ocultas que
        emocionan a los coleccionistas más exigentes. Nuestro compromiso no solo
        es con la calidad, sino también con la experiencia. En Balgio Discos
        encontrarás: Un catálogo diverso: Desde rock, jazz y blues hasta música
        latina, electrónica y más. Una comunidad apasionada: Amantes de los
        vinilos que comparten un amor genuino por la música analógica.
        Asesoramiento personalizado: Ayudamos a principiantes y coleccionistas
        experimentados a encontrar el disco perfecto. En un mundo digital,
        apostamos por el encanto del vinilo, por ese momento mágico en el que la
        aguja toca el surco y la música te envuelve de una forma auténtica y
        nostálgica. Te invitamos a visitarnos, explorar nuestro catálogo y
        sumergirte en el universo de los vinilos. En Balgio Discos, no solo
        vendemos música, vendemos historias. ¡Porque la música se escucha, pero
        los vinilos se sienten!
      </Typography.Paragraph>
    </div>
  );
};
