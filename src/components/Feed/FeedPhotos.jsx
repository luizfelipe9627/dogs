// Importa a biblioteca React.
import React from "react";

// Importa o componente.
import FeedPhotosItem from "./FeedPhotosItem";

// Importa o hook.
import useFetch from "../../hooks/useFetch";

// Importa a API.
import { PHOTOS_GET } from "../../Api";

// Importa os helpers.
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";

// Importa o CSS Module.
import styles from "./FeedPhotos.module.css";

// Cria um componente chamado FeedPhotos que recebe a prop user, page, e as funções atualizadoras setModalPhoto e setInfinite.
const FeedPhotos = ({ user, page, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch(); // Desestrutura o retorno da função useFetch e armazena a resposta da API nas constantes data, loading, error e request.

  // O useEffect executa quando o componente for renderizado na tela e toda vez que o user, page e setInfinite atualizar.
  React.useEffect(() => {
    // Criado uma função chamada fetchPhotos responsável por fazer a requisição das fotos da API. O async faz com que a função espere a resposta da API para continuar o código.a
    async function fetchPhotos() {
      const total = 6; // Cria uma constante chamada total e inicializa com o valor 6.

      // Desestrutura o retorno da função PHOTO_GET e armazena a url e options nas constantes url e options. A função PHOTOS_GET recebe um objeto vazio.
      const { url, options } = PHOTOS_GET({
        page, // Número da página que será exibida.
        total, // Total de fotos que será exibida.
        user, // Número do ID do usuário.
      });

      // Desestrutura o retorno da função request armazenando a response que armazena o resultado do fetch e o json que armazena a resposta convertida em json nas constantes response e json. A função request recebe a url que é a url da API e options que são as opções da requisição.
      const { response, json } = await request(url, options); // O await faz com que a função espere a resposta da API para continuar o código.

      // Se a resposta for true, se a resposta for ok e se o tamanho da array json for menor que o total(no caso 6) então não tem mais fotos para serem carregadas executando o if.
      if (response && response.ok && json.length < total) {
        setInfinite(false); // Muda o valor do estado infinite para false.
      }
    }

    fetchPhotos(); // Executa a função fetchPhotos.
  }, [request, user, page, setInfinite]);

  // Se o error for verdadeiro retorna a mensagem de erro.
  if (error) return <Error error={error} />;

  // Se o loading for verdadeiro retorna o componente Loading.
  if (loading) return <Loading />;

  // Se o data for verdadeiro retorna o componente FeedPhotosItem.
  if (data) {
    return (
      <ul className={`${styles.feed} animaLeft`}>
        {/* Percorre o array data e retorna o componente FeedPhotosItem com as props e seus valores. */}
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            // Está passando a foto como prop para o componente FeedPhotosItem.
            photo={photo}
            // Está passando a função setModalPhoto como prop para o componente FeedPhotosItem.
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  } else return null; // Se o data for falso retorna null.
};

export default FeedPhotos; // Exporta o componente FeedPhotos.
