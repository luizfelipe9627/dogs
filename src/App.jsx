// Importa a biblioteca React.
import React from "react";

// Importa os componentes do React Router.
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importa o CSS.
import "./App.css";

// Importa os componentes.
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import User from "./components/User/User";
import Photo from "./components/Photo/Photo";
import UserProfile from "./components/User/UserProfile";
import NotFound from "./components/NotFound";

// Importa o contexto.
import { UserStorage } from "./UserContext";

// Importa o helper.
import ProtectedRoute from "./components/Helper/ProtectedRoute";

// Criado um componente chamado App.
function App() {
  return (
    <div className="App">
      {/* O BrowserRouter é o componente que vai encapsular toda a aplicação.*/}
      <BrowserRouter>
        {/* O UserStorage é o componente que vai prover(disponibilizar) os dados para os componentes filhos, ou seja, todos os componentes que estão dentro do UserStorage vão ter acesso aos dados do contexto. */}
        <UserStorage>
          {/* O Header é o componente que vai estár presente em todas as rotas, pois está fora do Routes. */}
          <Header />

          <main className="AppBody">
            {/* O Routes é o componente que vai conter todas as rotas da aplicação. */}
            <Routes>
              {/* O Route é o componente que vai conter cada rota da aplicação. */}
              {/* O path é o caminho da rota. */}
              {/* O element é o componente que vai ser renderizado quando a rota for acessada. */}

              {/* Renderiza o componente Home quando a rota: / for acessada, ou seja, a rota raiz. */}
              <Route path="/" element={<Home />} />

              {/* Renderiza o componente Login quando a rota: /login for acessada. */}
              {/* O * está sendo usado para indicar que a rota pode ter mais de um nível, ou seja, /login/criar por exemplo. */}
              <Route path="login/*" element={<Login />} />

              {/* Renderiza o componente User quando a rota: /conta for acessada. */}
              {/* O * está sendo usado para indicar que a rota pode ter mais de um nível, ou seja, /conta/estatisticas por exemplo. */}
              <Route
                path="conta/*"
                element={
                  // Chamado o componente ProtectedRoute responsável por verificar se o usuário está logado e passa o componente User responsável por renderizar a página de usuário como filho.
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />

              {/* Renderiza o componente Photo quando a rota: /foto for acessada. */}
              {/* O :id é um parâmetro dinamico que vai receber o id da foto que vai ser acessada. */}
              <Route path="foto/:id" element={<Photo />} />

              {/* Renderiza o componente UserProfile quando a rota: /user for acessada. */}
              {/* O :user é um parâmetro dinamico que vai receber o user do usuário que vai ser acessado. */}
              <Route path="perfil/:user" element={<UserProfile />} />

              {/* Renderiza o componente NotFound quando nenhuma rota for acessada. */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* O Footer é o componente que vai estár presente em todas as rotas, pois está fora do Routes. */}
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App; // Exporta o componente App.
