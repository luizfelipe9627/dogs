// Importa a biblioteca React.
import { func } from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

// Criado um componente chamado LoginForm.
const LoginForm = () => {
  const [username, setUsername] = React.useState(""); // Cria um estado chamado username e uma função setUsername para alterar o estado. O valor inicial do estado é uma string vazia.
  const [password, setPassword] = React.useState(""); // Cria um estado chamado password e uma função setPassword para alterar o estado. O valor inicial do estado é uma string vazia.

  function handleSubmit(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário, que é recarregar a página quando o formulário é enviado.

    // Faz uma requisição para a API usando o método fetch, que está recebendo dois parâmetros: o endereço da API e um objeto com as configurações da requisição.
    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST", // Define o método como POST, ou seja, está enviando os dados para a API.
      // O headers é um objeto que contém os cabeçalhos da requisição.
      headers: {
        // O cabeçalho Content-Type informa o tipo de conteúdo que está sendo enviado no corpo da requisição.
        "Content-Type": "application/json", // Define o cabeçalho como application/json, ou seja, o corpo da requisição é um objeto JSON.
      },
      // Define o corpo da requisição com o método JSON.stringify que transforma um objeto JavaScript em uma string JSON.
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json(); // Retorna o corpo da resposta como JSON.
      })
      .then((json) => {
        console.log(json);
        return json; // Retorna o corpo da resposta como JSON.
      });
  }

  return (
    <section>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          // O valor do input é o valor do estado username, ou seja, o valor inicial é uma string vazia.
          value={username}
          // Quando houver uma alteração no input, a função anõnima é chamada, atualizando o estado username pelo value(o que foi digitado) do target(elemento que disparou o evento).
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="password"
          // O valor do input é o valor do estado username, ou seja, o valor inicial é uma string vazia.
          value={password}
          // Quando houver uma alteração no input, a função anõnima é chamada, atualizando o estado username pelo value(o que foi digitado) do target(elemento que disparou o evento).
          onChange={({ target }) => setPassword(target.value)}
        />

        <button>Entrar</button>
      </form>

      {/* O Link é responsável por criar um link para uma rota. */}
      {/* O atributo to é o caminho para a página. */}
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm; // Exportando o componente LoginForm.
