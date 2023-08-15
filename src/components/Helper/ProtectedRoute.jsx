// Importa a biblioteca React.
import React from "react";

// Importa o contexto.
import { UserContext } from "../../UserContext";

// Importa o componente da biblioteca React Router DOM.
import { Navigate } from "react-router-dom";

// Criado um componente chamado ProtectedRoute que recebe uma propriedade chamada children.
const ProtectedRoute = ({ children }) => {
  const { login } = React.useContext(UserContext); // Desestrutura o retorno da função UserContext e armazena a função login na constante login. O UserContext é responsável por acessar o contexto que foi criado no arquivo UserContext.jsx.

  // Verifica se o login é true, ou seja, se o usuário está logado, se for executa o if.
  if (login === true) {
    return children; // Se o login for true, ou seja, se o usuário estiver logado, retorna o children, ou seja, o componente que foi passado como filho.
  } // Senão se o login for false, ou seja, se o usuário não estiver logado, executa o else if.
  else if (login === false) {
    return <Navigate to="/login" />; // Se o login for false, ou seja, se o usuário não estiver logado, retorna o componente Navigate que redireciona o usuário para a rota: /login.
  } // Caso nenhuma das condições acima seja atendida, executa o else.
  else {
    return <></>; // Se o login for null, ou seja, se o usuário não tiver feito login ainda, retorna um fragmento vazio.
  }
};

export default ProtectedRoute; // Exporta o componente ProtectedRoute.
