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
  const context = React.useContext(UserContext); // O useContext é um hook que permite que um componente acesse o contexto e os seus dados e funcionalidades, armazenando na variável context.
  console.log(context); // Imprime no console o valor da variável usuario.

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        {/* O Link é responsável por criar um link para uma rota. */}
        {/* O atributo to é o caminho para a página. */}
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link className={styles.login} to="/login">
          {context.usuario}
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header; // Exportando o componente Header.
