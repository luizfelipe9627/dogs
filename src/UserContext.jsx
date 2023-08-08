// Importa a biblioteca React.
import React from "react";

// Importa o componente da biblioteca react-router-dom.
import { useNavigate } from "react-router-dom";

// Importa os dados da API.
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "./Api";

export const UserContext = React.createContext(); // Criado um contexto chamado UserContext que pode ser acessado por qualquer componente.

// Criado um cpontexto chamado UserContext.
export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null); // Criado um estado chamado data e uma função chamada setData para alterar o estado. O valor inicial do estado é null.
  const [login, setLogin] = React.useState(null); // Criado um estado chamado login e uma função chamada setLogin para alterar o estado. O valor inicial do estado é null.
  const [loading, setLoading] = React.useState(false); // Criado um estado chamado loading e uma função chamada setLoading para alterar o estado. O valor inicial do estado é false.
  const [error, setError] = React.useState(null); // Criado um estado chamado error e uma função chamada setError para alterar o estado. O valor inicial do estado é null.

  const navigate = useNavigate(); // Armazena a função useNavigate da biblioteca react-router-dom na variável navigate. O useNavigate é responsável por fazer a navegação entre as páginas.

  // Criado uma função assincrona chamada getUser responsável por puxar os dados do usuário da API. O async faz com que a função espere a resposta da API para continuar o código.
  async function getUser(token) {
    // Criado duas constantes que desestruturam o retorno da função USER_GET, sendo a url a url da API e options as configurações da requisição.
    const { url, options } = USER_GET(
      // Está passando o token como parâmetro para a função USER_GET.
      token,
    );

    // O fetch faz uma requisição para a API que está recebendo dois parâmetros: o endereço da API e um objeto com as configurações da requisição.
    const response = await fetch(url, options); // O await faz com que a requisição espere a resposta da API para continuar o código, quando a resposta chegar, ela é armazenada na constante response.
    const json = await response.json(); // Transforma a resposta da requisição em um objeto JSON e armazena na constante json quando a resposta chegar.
    setData(json); // Armazena os dados do usuário no estado data.
    setLogin(true); // Altera o estado login para true, ou seja, o usuário está logado.

    console.log(json); // Imprime os dados do usuário no console.
  }

  // Criado uma função assincrona chamada userLogin responsável por fazer o envio dos dados do formulário para a API. O async faz com que a função espere a resposta da API para continuar o código.
  async function userLogin(username, password) {
    try {
      setError(null); // Altera o estado error para null, limpando o erro.
      setLoading(true); // Altera o estado loading para true, ou seja, está carregando.

      // Criado duas constantes que desestruturam o retorno da função TOKEN_POST, sendo a url a url da API e options as configurações da requisição.
      const { url, options } = TOKEN_POST({
        // Está passando os dados username e password para o parâmetro da função TOKEN_POST.
        username,
        password,
      });

      // O fetch faz uma requisição para a API que está recebendo dois parâmetros: o endereço da API e um objeto com as configurações da requisição.
      const tokenResponse = await fetch(url, options); // O await faz com que a requisição espere a resposta da API para continuar o código, quando a resposta chegar, ela é armazenada na constante tokenRes.

      // Se a resposta não for ok, executa o if.
      if (!tokenResponse.ok) {
        throw new Error("Usuário ou senha inválidos."); // Lança um erro com uma mensagem personalizada.
      }

      const { token } = await tokenResponse.json(); // Transforma a resposta da requisição em um objeto JSON e armazena na constante token quando a resposta chegar.

      window.localStorage.setItem("token", token); // Armazena o token no localStorage.

      // Executa a função getUser passando o token como parâmetro, assim puxando os dados do usuário.
      await getUser(token); // O await faz com que a função espere a resposta para continuar o código.

      navigate("/conta"); // Quando o usuário fizer o login, é redirecionado para a página /conta.
    } catch (err) {
      setError(err.message); // Armazena o erro no estado error.
      setLogin(false); // Altera o estado login para false, ou seja, o usuário não está logado.
    } finally {
      setLoading(false); // Altera o estado loading para false, ou seja, não está carregando.
    }
  }

  // Criado uma função assincrona chamada userLogout responsável por fazer o logout do usuário. O async faz com que a função espere a resposta da API para continuar o código. O useCallback é responsável por memorizar a função, ou seja, se a função for recriada, ela vai ser memorizada e não vai ser recriada novamente.
  const userLogout = React.useCallback(
    async function () {
      setData(null); // Altera o estado data para null, limpando os dados do usuário.
      setError(null); // Altera o estado error para null, limpando o erro.
      setLoading(false); // Altera o estado loading para false, ou seja, não está carregando.
      setLogin(false); // Altera o estado login para false, ou seja, o usuário não está logado.
      window.localStorage.removeItem("token"); // Remove o token do localStorage.
      navigate("/login"); // Quando o usuário fizer o logout, é redirecionado para a página /login.
    },
    [navigate],
  );

  // Criado um useEffect que vai ser executado sempre que o componente for renderizado, nesse caso renderiza apenas uma vez.
  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token"); // Puxa o token armazenado no localStorage e armazena na constante token.

      // Se o token existir, executa o if.
      if (token) {
        // O try é um bloco de código que pode ou não gerar um erro, caso gere um erro, o catch é executado, o finally é executado sempre.
        try {
          setError(null); // Altera o estado error para null, limpando o erro.
          setLoading(true); // Altera o estado loading para true, ou seja, está carregando.

          const { url, options } = TOKEN_VALIDATE_POST(token); // Criado duas constantes que desestruturam o retorno da função TOKEN_VALIDATE_POST, sendo a url a url da API e options as configurações da requisição. Está passando o token como parâmetro para a função TOKEN_VALIDATE_POST.

          // O fetch faz uma requisição para a API que está recebendo dois parâmetros: o endereço da API e um objeto com as configurações da requisição.
          const response = await fetch(url, options); // O await faz com que a requisição espere a resposta da API para continuar o código, quando a resposta chegar, ela é armazenada na constante response.

          // Se a resposta não for ok, executa o if.
          if (!response.ok) {
            throw new Error("Token inválido"); // Lança um erro com a mensagem "Token inválido".
          }

          await getUser(token); // Executa a função getUser passando o token como parâmetro, assim puxando os dados do usuário que estão armazenados no localStorage.
        } catch (err) {
          userLogout(); // Executa a função userLogout responsável por fazer o logout do usuário.
        } finally {
          setLoading(false); // Altera o estado loading para false, ou seja, não está carregando.
        }
      }
    }
    autoLogin(); // Executa a função autoLogin assim que o componente for renderizado.
  }, [userLogout]);

  return (
    // O UserContext.Provider é o componente que vai prover(disponibilizar) os dados para os componentes filhos, ou seja, todos os componentes que estão dentro do UserContext vão ter acesso aos dados do contexto.
    // O value é o valor que vai ser disponibilizado para os componentes filhos.
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
