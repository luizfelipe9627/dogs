// Importa a biblioteca React.
import React from "react";

// Importa os componenetes.
import UserHeader from "./UserHeader";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStatis";

// Importa os componenetes da biblioteca React Router DOM.
import { Routes, Route } from "react-router-dom";

// Criado um componente chamado User.
const User = () => {
  return (
    <section className="container">
      {/* O UserHeader é o componente que vai estár presente em todas as rotas, pois está fora do Routes. */}
      <UserHeader />

      {/* O Routes é o componente que vai conter todas as rotas da aplicação. */}
      <Routes>
        {/* O Route é o componente que vai conter cada rota da aplicação. */}
        {/* O path é o caminho da rota. */}
        {/* O element é o componente que vai ser renderizado quando a rota for acessada. */}

        {/* Renderiza o componente Home quando a rota: / for acessada, ou seja, a rota raiz. */}
        <Route path="/" element={<Feed />} />

        {/* Renderiza o componente UserPhotoPost quando a rota: /postar for acessada. */}
        <Route path="postar" element={<UserPhotoPost />} />

        {/* Renderiza o componente UserStats quando a rota: /estatisticas for acessada. */}
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User; // Exporta o componente User.
