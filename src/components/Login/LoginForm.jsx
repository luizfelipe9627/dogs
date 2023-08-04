// Importa a biblioteca React.
import React from "react";

// Importa o componente da biblioteca react-router-dom.
import { Link } from "react-router-dom";

// Importa os componentes.
import Input from "../Forms/Input";
import Button from "../Forms/Button";

// Importa o hook.
import useForm from "../../hooks/useForm";

// Criado um componente chamado LoginForm.
const LoginForm = () => {
  // Armazena todos os dados(estados, funções etc) do hook useForm nas variáveis username e password.
  const username = useForm("email");
  const password = useForm("password");
  console.log(username, password);

  // Criado uma função chamada handleSubmit responsável por fazer o envio dos dados do formulário para a API.
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
      body: JSON.stringify(username.value, password.value),
    })
      // O response é a resposta da requisição.
      .then((response) => {
        console.log(response);
        return response.json(); // Retorna o corpo da resposta como JSON.
      })
      // O json é o corpo da resposta convertido em JSON.
      .then((json) => {
        console.log(json);
        return json; // Retorna o corpo da resposta como JSON.
      });
  }

  return (
    <section>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        {/* Está chamando o componente Input e passando as props label, type e name. */}
        {/* O ...username está dando acesso a todas as props do hook useForm, sendo elas: value, setValue e onChange. */}
        <Input label="Usuário" type="text" name="username" {...username} />

        {/* Está chamando o componente Input e passando as props label, type e name. */}
        {/* O ...password está dando acesso a todas as props do hook useForm, sendo elas: value, setValue e onChange. */}
        <Input label="Senha" type="password" name="password" {...password} />

        {/* Está chamando o componente Button e passando a props children, que é o conteúdo do botão. */}
        <Button>Entrar</Button>
      </form>

      {/* O Link é responsável por criar um link para uma rota. */}
      {/* O atributo to é o caminho para a página. */}
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm; // Exportando o componente LoginForm.
