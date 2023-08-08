// Importa a biblioteca React.
import React from "react";

// Importa os CSS Module.
import styles from "./LoginCreate.module.css";

// Importa o componente.
import Input from "../Forms/Input";
import Button from "../Forms/Button";

// Importa o hook.
import useForm from "../../hooks/useForm";

// Importa a API.
import { USER_POST } from "../../Api";

// Criado um componente chamado LoginCreate.
const LoginCreate = () => {
  // Armazena todos os dados(estados, funções etc) do hook useForm nas variáveis username, email e password.
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");

  // Criado uma função chamada handleSubmit responsável por fazer o envio dos dados do formulário para a API. O async faz com que a função espere a resposta da API para continuar o código.
  async function handleSubmit(event) {
    event.preventDefault(); // Impede que o formulário seja enviado e a página seja recarregada.

    // Desestrutura o retorno da função USER_POST e armazena a url e as options nas constantes url e options. Passa um objeto com os valores dos campos do formulário como parâmetro da função USER_POST.
    const {url, options} = USER_POST({
      // Passa os dados do que foi digitado no Form para criar o usuário na API.
      username: username.value,
      email: email.value,
      password: password.value,
    }); 

    // Se o username, o email e o password forem válidos, ou seja, se o formulário estiver válido, executa o if e faz a requisição para a API.
    if (username.validate() && email.validate() && password.validate()) {
      const respose = await fetch(url, options); // Faz a requisição para a API e armazena a resposta na constante response.
      const json = await respose.json(); // Transforma a resposta da requisição em um objeto JSON e armazena na constante json.
      console.log(json); // Mostra no console o retorno da requisição.
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>

      <form onSubmit={handleSubmit}>
        {/* Está chamando o componente Input e passando as props label, type e name. */}
        {/* O operador spread(...) está dando acesso a todas as props do hook useForm, sendo elas: value, setValue, onChange, error, validate e onBlur. */}
        <Input label="Usuário" type="text" name="username" {...username}/>
        <Input label="Email" type="email" name="email" {...email}/>
        <Input label="Senha" type="password" name="password" {...password}/>

        {/* Está chamando o componente Button e passando a props children que recebe o texto Cadastrar. */}
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default LoginCreate; // Exportando o componente LoginCreate.
