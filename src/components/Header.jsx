// Importa a biblioteca React.
import React from "react";

// Importa os componentes do React Router.
import { Link } from "react-router-dom";

// Importa o CSS Module.
import styles from "./Header.module.css";

// Importa e transforma a imagem em um componente nomeado como Dogs.
import { ReactComponent as Dogs } from "../assets/svg/dogs.svg";

// Importa o contexto.
import { UserContext } from "../UserContext";

// Criado um componente chama Header.
const Header = () => {
  // Está desestruturando o retorno do contexto UserContext, sendo data os dados do usuário.
  const { data, userLogout } = React.useContext(UserContext); // O useContext é um hook que permite que um componente acesse o contexto e os seus dados e funcionalidades, armazenando na variável context.

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        {/* O Link é responsável por criar um link para uma rota. */}
        {/* O atributo to é o caminho para a página. */}
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>

        {/* Se o data for verdadeiro, ou seja, se o usuário estiver logado, então renderiza o link para a página de conta, caso contrário, renderiza o link padrão de login. */}
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
            <button onClick={userLogout}>Sair</button>
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header; // Exportando o componente Header.
