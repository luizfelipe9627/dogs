// Importa a biblioteca React.
import React from "react";

// Importa o componente.
import PhotoContent from "./PhotoContent";

// Importa o hook do React Router DOM.
import { useParams } from "react-router-dom";

// Importa o hook.
import useFetch from "../../hooks/useFetch";

// Importa a API.
import { PHOTO_GET } from "../../Api";

// Importa o helper.
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";

// Cria um componente chamado Photo.
const Photo = () => {
  // O useParams é um hook que retorna um objeto com os parâmetros da rota dinâmica. Nesse caso o id da foto.
  const { id } = useParams(); // Desestrutura o retorno da função useParams e armazena o id da foto na constante id.

  const { data, loading, error, request } = useFetch(); // Desestrutura o retorno da função useFetch e armazena a resposta da API nas constantes data, loading, error e request.

  // O useEffect executa quando o componente for renderizado na tela pela primeira vez e toda vez que o request e o id atualizar.
  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id); // Desestrutura o retorno da função PHOTO_GET e armazena a url e as options nas constantes url e options. Passa o id da foto como parâmetro da função PHOTO_GET.

    request(url, options); // Desestrutura o retorno da função request armazenando a response que armazena o resultado do fetch e o json que armazena a resposta convertida em json nas constantes response e json. A função request recebe a url que é a url da API e options que são as opções da requisição.
  }, [request, id]);

  // Se o error for verdadeiro ou seja se tiver erro executa o if.
  if (error) {
    return <Error error={error} />; // Retorna o componente Error com a prop error que contém a mensagem de erro que veio da API.
  }
  // Se o loading for verdadeiro ou seja se estiver carregando os dados executa o if.
  if (loading) {
    return <Loading />; // Retorna o componente Loading.
  }
  // Se data for verdadeiro ou seja se tiver os dados da foto executa o if.
  if (data) {
    // Retorna o componente PhotoContent com a prop data que contém os dados da foto.
    return (
      <section className="container mainContainer">
        {/* Chama o componente PhotoContent passando a prop data que contém os dados da foto e a prop single com o valor true para que o componente PhotoContent saiba que é uma foto única. */}
        <PhotoContent data={data} single={true} />
      </section>
    );
  }
};

export default Photo; // Exporta o componente Photo.
