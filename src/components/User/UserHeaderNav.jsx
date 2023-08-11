// Importa a biblioteca React.
import React from "react";

// Importa o componente da biblioteca React Router DOM.
import { NavLink } from "react-router-dom";

// Importa o contexto.
import { UserContext } from "../../UserContext";

// Importa as imagens.
import { ReactComponent as MinhasFotos } from "../../assets/svg/feed.svg";
import { ReactComponent as Estatisticas } from "../../assets/svg/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../../assets/svg/adicionar.svg";
import { ReactComponent as Sair } from "../../assets/svg/sair.svg";

// Importa o CSS Module.
import styles from "./UserHeaderNav.module.css";

// Importa o componente da biblioteca react-router-dom.
import { useNavigate } from "react-router-dom";

// Criado um componente chamado UserHeaderNav.
const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null); // Cria um estado chamado mobile, e a função setMobile para alterar o estado. O valor inicial do estado é null.

  // O useContext é um hook que permite que um componente acesse o contexto e os seus dados e funcionalidades, armazenando na variável context.
  const { userLogout } = React.useContext(UserContext); // Está desestruturando o retorno da função UserContext e pegando a função userLogout e armazenando na variável userLogout.

  const navigate = useNavigate(); // Armazena a função useNavigate da biblioteca react-router-dom na variável navigate. O useNavigate é responsável por fazer a navegação entre as páginas.

  // Criado uma função chamada handleLogout responsável por fazer o logout do usuário.
  function handleLogout() {
    userLogout(); // Chama a função userLogout responsável por fazer o logout do usuário.
    navigate("/login"); // Quando o usuário fizer o logout, é redirecionado para a página /login.
  }

  return (
    <nav className={styles.nav}>
      {/* O NavLink é responsável por adicionar uma classe ao link quando ele estiver ativo, ou seja, quando a rota for acessada. */}
      {/* Está inserindo um componente dentro de cada NavLink, responsável por renderizar as imagens. */}
      {/* O end serve para quando for clicado no NavLink, ele passe a classe active para o NavLink que foi clicado, e remova a classe active dos outros NavLink. */}
      <NavLink to="/conta" end>
        <MinhasFotos />
        {/* Se o mobile for true, então renderiza o texto "Minhas fotos", caso contrário, renderiza null(nada). */}
        {mobile && "Minhas fotos"}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Estatisticas />
        {/* Se o mobile for true, então renderiza o texto "Estatísticas", caso contrário, renderiza null(nada). */}
        {mobile && "Estatísticas"}
      </NavLink>
      <NavLink to="/conta/postar">
        <AdicionarFoto />
        {/* Se o mobile for true, então renderiza o texto "Adicionar foto", caso contrário, renderiza null(nada). */}
        {mobile && "Adicionar foto"}
      </NavLink>
      <button onClick={handleLogout}>
        <Sair />
        {/* Se o mobile for true, então renderiza o texto "Sair", caso contrário, renderiza null(nada). */}
        {mobile && "Sair"}
      </button>
    </nav>
  );
};

export default UserHeaderNav; // Exporta o componente UserHeaderNav.
