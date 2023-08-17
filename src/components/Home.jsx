// Importa a biblioteca React.
import React from "react";

// Importa o componente.
import Feed from "./Feed/Feed";

// Criado um componente chamado Home.
const Home = () => {
  return (
    <section className="container mainContainer">
      <Feed />
    </section>
  );
};

export default Home; // Exportando o componente Home.
