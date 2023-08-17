// Importa a biblioteca React.
import React from "react";

// Importa os componentes.
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

// Criado um componente chamado Feed.
const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState(null); // Cria um estado para o modalPhoto e a função atualizadora setModalPhoto. Inicializa o estado com null.

  return (
    <div>
      {/* Se o modalPhoto for true, renderiza o FeedModal e passa a prop photo com o valor de modalPhoto e a prop setModalPhoto com a função atualizadora setModalPhoto. */}
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto}/>}
      {/* Renderiza o FeedPhotos e passa a prop setModalPhoto com a função atualizadora setModalPhoto. */}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
};

export default Feed; // Exporta o componente Feed.
