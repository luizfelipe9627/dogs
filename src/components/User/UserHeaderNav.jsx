// Importa a biblioteca React.
import React from "react";

// Importa o componente da biblioteca react-router-dom.
import { useNavigate, NavLink } from "react-router-dom";

// Importa o contexto.
import { UserContext } from "../../UserContext";

// Importa as imagens.
import { ReactComponent as MinhasFotos } from "../../assets/svg/feed.svg";
import { ReactComponent as Estatisticas } from "../../assets/svg/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../../assets/svg/adicionar.svg";
import { ReactComponent as Sair } from "../../assets/svg/sair.svg";

// Importa o CSS Module.
import styles from "./UserHeaderNav.module.css";

// Importa o hook.
import useMedia from "../../hooks/useMedia";

// Criado um componente chamado UserHeaderNav.
const UserHeaderNav = () => {
  // O useContext é um hook que permite que um componente acesse o contexto e os seus dados e funcionalidades, armazenando na variável context.
  const { userLogout } = React.useContext(UserContext); // Está desestruturando o retorno da função UserContext e pegando a função userLogout e armazenando na variável userLogout.

  const mobile = useMedia("(max-width: 40rem)"); // Chama o hook useMedia passando como parâmetro o tamanho máximo da tela do dispositivo e armazenando na variável mobile.
  console.log(mobile); // Imprime no console o valor da variável mobile.

  const [mobileMenu, setMobileMenu] = React.useState(false); // Cria um estado chamado mobileMenu, e a função setMobileMenu para alterar o estado. O valor inicial do estado é false.

  const navigate = useNavigate(); // Armazena a função useNavigate da biblioteca react-router-dom na variável navigate. O useNavigate é responsável por fazer a navegação entre as páginas.

  // Criado uma função chamada handleLogout responsável por fazer o logout do usuário.
  function handleLogout() {
    userLogout(); // Chama a função userLogout responsável por fazer o logout do usuário.
    navigate("/login"); // Quando o usuário fizer o logout, é redirecionado para a página /login.
  }

  return (
    <React.Fragment>
      {/* Se o mobile for true, então renderiza o button, caso contrário, renderiza null(nada). */}
      {mobile && (
        <button
          aria-label="Menu"
          // Está adicionando a classe mobileButtonActive no button quando o estado mobileMenu for true.
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          // Adicionado um evento de click no button, e quando o evento for disparado, chama a função setMobileMenu passando como parâmetro o contrário do valor atual do estado mobileMenu, ou seja, se o valor atual do estado mobileMenu for true, então o valor passado para a função setMobileMenu será false, e vice-versa.
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

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
    </React.Fragment>
  );
};

export default UserHeaderNav; // Exporta o componente UserHeaderNav.
