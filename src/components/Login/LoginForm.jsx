// Importa a biblioteca React.
import React from "react";

// Importa o componente da biblioteca react-router-dom.
import { Link } from "react-router-dom";

// Importa os componentes.
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import Error from "../Helper/Error";

// Importa o CSS Module.
import styles from "./LoginForm.module.css";

// Importa o hook.
import useForm from "../../hooks/useForm";

// Importa o contexto.
import { UserContext } from "../../UserContext";

// Criado um componente chamado LoginForm.
const LoginForm = () => {
  // Armazena todos os dados(estados, funções etc) do hook useForm nas variáveis username e password.
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext); // Armazena a função userLogin do contexto UserContext na variável userLogin. O userLogin é responsável por fazer o login do usuário.

  // Criado uma função chamada handleSubmit responsável por fazer o envio dos dados do formulário para a API. O async faz com que a função espere a resposta da API para continuar o código.
  async function handleSubmit(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário, que é recarregar a página quando o formulário é enviado.

    // Se o username e o password forem válidos, ou seja, se o formulário estiver válido, executa o if e faz a requisição para a API.
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value); // Executa a função userLogin passando o username e o password como parâmetro, assim fazendo o login do usuário.
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Está chamando o componente Input e passando as props label, type e name. */}
        {/* O ...username está dando acesso a todas as props do hook useForm, sendo elas: value, setValue e onChange. */}
        <Input label="Usuário" type="text" name="username" {...username} />

        {/* Está chamando o componente Input e passando as props label, type e name. */}
        {/* O ...password está dando acesso a todas as props do hook useForm, sendo elas: value, setValue e onChange. */}
        <Input label="Senha" type="password" name="password" {...password} />

        {/* Se o estado loading for true, mostra o botão desabilitado, senão, mostra o botão habilitado entrar. */}
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        {/* Está chamando o componente Error e passando a props error que recebe o estado error do contexto UserContext. */}
        <Error error={error} />
      </form>

      {/* O Link é responsável por criar um link para uma rota e o to é responsável por definir a rota. */}
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a senha?
      </Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>

        {/* O Link é responsável por criar um link para uma rota e o to é responsável por definir a rota. */}
        <Link className={styles.buttonCriar} to="/login/criar">
          Cadastrar
        </Link>
      </div>

      {/* O Link é responsável por criar um link para uma rota e o to é responsável por definir a rota. */}
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm; // Exportando o componente LoginForm.
