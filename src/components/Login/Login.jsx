// Importa a biblioteca React.
import React from "react";

// Importa o componente da biblioteca React Router DOM.
import { Routes, Route, Navigate } from "react-router-dom";

// Importa o componente.
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import NotFound from "../NotFound";

// Importa o contexto.
import { UserContext } from "../../UserContext";

// Importa os CSS Modules.
import styles from "./Login.module.css";

// Importa o helper.
import Head from "../Helper/Head";

// Criado um componente chamado Login.
const Login = () => {
  // Chama o componente Head e passa as props title e description que são usadas para mudar o título da página e a descrição da página.
  <Head title="Fotos" description="Home do site Dogs, com o feed de fotos." />;

  const { login } = React.useContext(UserContext); // Puxa o estado login do contexto UserContext e armazena na variável login.

  if (login === true) return <Navigate to="/" />; // Se o login for true, redireciona o usuário para a rota raiz.

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        {/* O Routes é o componente que vai conter todas as rotas da aplicação. */}
        <Routes>
          {/* O Route é o componente que vai conter cada rota da aplicação. */}
          {/* O path é o caminho da rota. */}
          {/* O element é o componente que vai ser renderizado quando a rota for acessada. */}

          {/* Renderiza o componente LoginForm quando a rota: / for acessada, ou seja, a rota raiz. */}
          <Route path="/" element={<LoginForm />} />

          {/* Renderiza o componente LoginCreate quando a rota: /cirar for acessada. */}
          <Route path="criar" element={<LoginCreate />} />

          {/* Renderiza o componente LoginPasswordLost quando a rota: /perdeu for acessada. */}
          <Route path="perdeu" element={<LoginPasswordLost />} />

          {/* Renderiza o componente LoginPasswordReset quando a rota: /resetar for acessada. */}
          <Route path="resetar" element={<LoginPasswordReset />} />

          {/* Renderiza o componente NotFound quando nenhuma rota for acessada. */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login; // Exportando o componente Login.
