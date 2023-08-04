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

// Criado um componente chamado App.
function App() {
<<<<<<< HEAD
  return (
    <React.Fragment>
      {/* O BrowserRouter é o componente que vai encapsular toda a aplicação.*/}
      <BrowserRouter>
        {/* O Header é o componente que vai estár presente em todas as rotas, pois está fora do Routes. */}
        <Header />
        {/* O Routes é o componente que vai conter todas as rotas da aplicação. */}
        <Routes>
          {/* O Route é o componente que vai conter cada rota da aplicação. */}
          {/* O path é o caminho da rota. */}
          {/* O element é o componente que vai ser renderizado quando a rota for acessada. */}

          {/* Renderiza o componente Home quando a rota: / for acessada, ou seja, a rota raiz. */}
          <Route path="/" element={<Home/>} />
          {/* Renderiza o componente Login quando a rota: /login for acessada. */}
          <Route path="/login" element={<Login/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
=======
  return <div></div>;
>>>>>>> f1c0770f1199b3783563f3f35b0d4179ce3489ee
}

export default App; // Exporta o componente App.
