// Importa a biblioteca React.
import React from "react";

// Importa os componenetes.
import UserHeader from "./UserHeader";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import NotFound from "../NotFound";

// Importa os componenetes da biblioteca React Router DOM.
import { Routes, Route } from "react-router-dom";

// Importa o contexto.
import { UserContext } from "../../UserContext";

// Importa o helper.
import Head from "../Helper/Head";

// Criado um componente chamado User.
const User = () => {
  const { data } = React.useContext(UserContext); // Desestrutura o data de dentro do contexto UserContext. O data é responsável por armazenar os dados do usuário logado.

  return (
    <section className="container">
       {/* Chama o componente Head e passa a props title que é usada para mudar o título da página. */}
       <Head title="Minha Conta" />;
    
      {/* O UserHeader é o componente que vai estár presente em todas as rotas, pois está fora do Routes. */}
      <UserHeader />

      {/* O Routes é o componente que vai conter todas as rotas da aplicação. */}
      <Routes>
        {/* O Route é o componente que vai conter cada rota da aplicação. */}
        {/* O path é o caminho da rota. */}
        {/* O element é o componente que vai ser renderizado quando a rota for acessada. */}

        {/* Renderiza o componente Feed que recebe a prop user com o valor ID do data quando a rota: / for acessada. */}
        <Route path="/" element={<Feed user={data.id}/>} />

        {/* Renderiza o componente UserPhotoPost quando a rota: /postar for acessada. */}
        <Route path="postar" element={<UserPhotoPost />} />

        {/* Renderiza o componente UserStats quando a rota: /estatisticas for acessada. */}
        <Route path="estatisticas" element={<UserStats />} />

          {/* Renderiza o componente NotFound quando nenhuma rota for acessada. */}
          <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User; // Exporta o componente User.
