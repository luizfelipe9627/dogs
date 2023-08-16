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
const FeedModal = ({ photo }) => {
  const [modal, setModal] = React.useState(null); // Cria um estado chamado modal e uma função setModal para alterar o estado. Inicia o estado com null.

  const { data, loading, error, request } = useFetch(); // Desestrutura o retorno da função useFetch e armazena a resposta da API nas constantes data, loading, error e request.

  // O useEffect executa quando o componente for renderizado na tela e toda vez que o estado modal for alterado.
  React.useEffect(() => {
    // Desestrutura o retorno da função PHOTO_GET e armazena a url e options nas constantes url e options. A função PHOTOS_GET recebe o id da foto como parâmetro.
    const { url, options } = PHOTO_GET(photo.id);

    // Cria uma função assíncrona chamada fetchPhoto que executa a função request passando a url e options como parâmetro. O async está fazendo com que a função fetchPhoto espere a resposta da API para continuar a execução.
    const fetchPhoto = async () => {
      const { json } = await request(url, options); // Desestrutura o retorno da função request e armazena a resposta da API já em formato JSON na constante json.

      setModal(json); // Altera o estado modal para json.
    };
    fetchPhoto(); // Executa a função fetchPhoto.
  }, [photo, request]);

  return (
    <div className={styles.modal}>
      {/* Se o estado error for true, renderiza o componente Error passando a propriedade error que recebe o estado error com a mensagem de erro da API. */}
      {error && <Error error={error} />}
      {/* Se o estado loading for true, renderiza o componente Loading. */}
      {loading && <Loading />}
      {/* Se o estado data for true, renderiza o componente PhotoContent passando a propriedade data que recebe o estado data. */}
      {data && <PhotoContent data={data}/>}
    </div>
  );
};

export default FeedModal; // Exporta o componente FeedModal.
