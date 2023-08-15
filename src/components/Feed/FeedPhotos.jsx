// Importa a biblioteca React.
import React from "react";

// Importa o componente.
import FeedPhotosItem from "./FeedPhotosItem";

// Importa o hook.
import useFetch from "../../Hooks/useFetch";

// Importa a API.
import { PHOTOS_GET } from "../../Api";

// Importa os helpers.
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";

// Importa o CSS Module.
import styles from "./FeedPhotos.module.css";

// Cria um componente chamado FeedPhotos.
const FeedPhotos = () => {
  const { data, loading, error, request } = useFetch(); // Desestrutura o retorno da função useFetch e armazena a resposta da API nas constantes data, loading, error e request.

  // O useEffect executa quando o componente for renderizado na tela e toda vez que o request mudar.
  React.useEffect(() => {
    // Criado uma função chamada fetchPhotos responsável por fazer a requisição das fotos da API. O async faz com que a função espere a resposta da API para continuar o código.a
    async function fetchPhotos(event) {
      // Desestrutura o retorno da função PHOTO_GET e armazena a url e options nas constantes url e options. A função PHOTOS_GET recebe um objeto vazio.
      const { url, options } = PHOTOS_GET({
        page: 1, // Página inicial.
        total: 6, // Total de fotos.
        user: 0, // Usuário.
      });

      // Desestrutura o retorno da função request e armazena a resposta da API já convertida na constante json. A função request recebe a url que é a url da API e options que são as opções da requisição.
      const { json } = await request(url, options); // O await faz com que a função espere a resposta da API para continuar o código.
      console.log(json); // Exibe no console a resposta da API e o retorno da API.
    }
    fetchPhotos(); // Executa a função fetchPhotos.
  }, [request]);

  // Se o error for verdadeiro retorna a mensagem de erro.
  if (error) return <Error error={error} />;

  // Se o loading for verdadeiro retorna o componente Loading.
  if (loading) return <Loading />;

  // Se o data for verdadeiro retorna o componente FeedPhotosItem.
  if (data) {
    return (
      <ul className={`${styles.feed} animaLeft`}>
        {/* Percorre o array data e retorna o componente FeedPhotosItem com as props key e photo. */}
        {data.map((photo) => (
          <FeedPhotosItem key={photo.id} photo={photo} />
        ))}
      </ul>
    );
  } else return null; // Se o data for falso retorna null.
};

export default FeedPhotos; // Exporta o componente FeedPhotos.
