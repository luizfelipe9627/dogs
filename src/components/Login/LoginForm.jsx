// Importa a biblioteca React.
import React from "react";

// Importa o componente da biblioteca react-router-dom.
import { Link } from "react-router-dom";

// Importa os componentes.
import Input from "../Forms/Input";
import Button from "../Forms/Button";

// Importa o hook.
import useForm from "../../hooks/useForm";

// Importa os dados da API.
import { TOKEN_POST, USER_GET } from "../../Api";

// Criado um componente chamado LoginForm.
const LoginForm = () => {
  // Armazena todos os dados(estados, funções etc) do hook useForm nas variáveis username e password.
  const username = useForm();
  const password = useForm();

  // O React.useEffect é responsável por executar uma função quando o componente é renderizado, nesse caso é executado apenas quando o componente é renderizado pela primeira vez, pois o array de dependências está vazio.
  React.useEffect(() => {
    const token = window.localStorage.getItem("token"); // Puxa o token no localStorage e armazena na constante token.

    // Se o token existir, executa o if.
    if (token) {
      getUser(token); // Executa a função getUser passando o token como parâmetro, assim puxando os dados do usuário.
    }
  }, []);

  // Criado uma função chamada getUser responsável por fazer a requisição para a API para pegar os dados do usuário, a função é assíncrona ou seja, ela espera a resposta da API para continuar o código.
  async function getUser(token) {
    // Criado duas constantes que desestruturam o retorno da função USER_GET, sendo a url a url da API e options as configurações da requisição.
    const { url, options } = USER_GET(token); // Está passando o token como parâmetro para a função USER_GET.

    // O fetch faz uma requisição para a API que está recebendo dois parâmetros: o endereço da API e um objeto com as configurações da requisição.
    const response = await fetch(url, options);
    // O await faz com que a requisição espere a resposta da API para continuar o código, quando a resposta chegar, ela é armazenada na constante response.
    const json = await response.json(); // Transforma a resposta da requisição em um objeto JSON e armazena na constante json quando a resposta chegar.
    console.log(json); // Exibe o objeto json no console.
  }

  // Criado uma função chamada handleSubmit responsável por fazer o envio dos dados do formulário para a API. O async faz com que a função espere a resposta da API para continuar o código.
  async function handleSubmit(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário, que é recarregar a página quando o formulário é enviado.

    // Se o username e o password forem válidos, ou seja, se o formulário estiver válido, executa o if e faz a requisição para a API.
    if (username.validate() && password.validate()) {
      // Criado duas constantes que desestruturam o retorno da função TOKEN_POST, sendo a url a url da API e options as configurações da requisição.
      const { url, options } = TOKEN_POST({
        // Está passando os dados do formulário para a API.
        username: username.value,
        password: password.value,
      });

      // O fetch faz uma requisição para a API que está recebendo dois parâmetros: o endereço da API e um objeto com as configurações da requisição.
      const response = await fetch(url, options); // O await faz com que a requisição espere a resposta da API para continuar o código, quando a resposta chegar, ela é armazenada na constante response.
      const json = await response.json(); // Transforma a resposta da requisição em um objeto JSON e armazena na constante json quando a resposta chegar.

      window.localStorage.setItem("token", json.token); // Armazena o token no localStorage.
      getUser(json.token); // Executa a função getUser passando o token como parâmetro.
    }
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
