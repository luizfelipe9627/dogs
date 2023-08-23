// Importa a biblioteca React.
import React from "react";

// Importa o hook.
import { useParams } from "react-router-dom";
import Feed from "../Feed/Feed";

// Cria um componente chamado UserProfile.
const UserProfile = () => {
  // O useParams é um hook que retorna um objeto com os parâmetros da rota dinâmica. Nesse caso o id do usuário.
  const { user } = useParams(); // Desestrutura o retorno da função useParams e armazena o id do usuário na constante user.

  return (
    <section className="container mainContainer">
      <h1 className="title">{user}</h1>
      {/* Renderiza o componente Feed passando o id do usuário como parâmetro. */}
      <Feed user={user} />
    </section>
  );
};

export default UserProfile; // Exporta o componente UserProfile.
