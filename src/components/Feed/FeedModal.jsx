// Importa a biblioteca React.
import React from "react";

// Importa o componente.
import PhotoContent from "../Photo/PhotoContent";

// Importa o hook.
import useFetch from "../../hooks/useFetch";

// Importa a API.
import { PHOTO_GET } from "../../Api";

// Importa o helper.
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";

// Importa o CSS Module.
import styles from "./FeedModal.module.css";

// Cria um componente chamado FeedModal que recebe a propriedade photo.
const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, loading, error, request } = useFetch(); // Desestrutura o retorno da função useFetch e armazena a resposta da API nas constantes data, loading, error e request.

  // O useEffect executa quando o componente for renderizado na tela e toda vez que o estado photo e o método request forem alterados.
  React.useEffect(() => {
    // Desestrutura o retorno da função PHOTO_GET e armazena a url e options nas constantes url e options. A função PHOTOS_GET recebe o id da foto como parâmetro.
    const { url, options } = PHOTO_GET(photo.id);
    // Executa a função request passando a url responsável por fazer a requisição para a API e options responsável por passar o token de autenticação.
    request(url, options);
  }, [photo, request]);

  // Função chamada handleOutsideClick que recebe o evento como parâmetro e que é responsável por fechar o modal quando o usuário clicar fora dele.
  function handleOutsideClick(event) {
    // Se o target(elemento clicado) for igual ao currentTarget(elemento que está recebendo o evento), então executa o if.
    if (event.target === event.currentTarget) {
      setModalPhoto(null); // Altera o estado modalPhoto para null fazendo com que o modal seja fechado.
    }
  }

  return (
    // Cria um elemento div com a classe modal e o evento onClick que executa a função handleOutsideClick.
    <div className={styles.modal} onClick={handleOutsideClick}>
      {/* Se o estado error for true, renderiza o componente Error passando a propriedade error que recebe o estado error com a mensagem de erro da API. */}
      {error && <Error error={error} />}
      {/* Se o estado loading for true, renderiza o componente Loading. */}
      {loading && <Loading />}
      {/* Se o estado data for true, renderiza o componente PhotoContent passando a propriedade data que recebe o estado data. */}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal; // Exporta o componente FeedModal.
