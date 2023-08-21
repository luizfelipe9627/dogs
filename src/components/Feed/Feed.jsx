// Importa a biblioteca React.
import React from "react";

// Importa os componentes.
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

// Criado um componente chamado Feed que recebe a prop user.
const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null); // Cria um estado para o modalPhoto e a função atualizadora setModalPhoto. Inicializa o estado com null.

  const [pages, setPages] = React.useState([1]); // Cria um estado chamado pages e a função atualizadora chamada setPages. Inicializa o estado com uma array com o valor 1.

  function infiniteScroll(event) {
    console.log(event);
  }

  React.useEffect(() => {
    window.addEventListener("wheel", infiniteScroll); // Adiciona um evento wheel que é disparado quando o usuário rola a roda do mouse para cima ou para baixo, quando acionado chama a função infiniteScroll.
    window.addEventListener("scroll", infiniteScroll); // Adiciona um evento scroll que é disparado quando o usuário rola a página para cima ou para baixo, quando acionado chama a função infiniteScroll.

    // Quando o componente é desmontado, ou seja quando o usuário sai da página, remove os eventos wheel e scroll.
    return () => {
      window.removeEventListener("wheel", infiniteScroll); // Remove o evento wheel.
      window.removeEventListener("scroll", infiniteScroll); // Remove o evento scroll.
    };
  }, []);

  return (
    <div>
      {/* Se o modalPhoto for true, renderiza o FeedModal e passa a prop photo com o valor de modalPhoto e a prop setModalPhoto com a função atualizadora setModalPhoto. */}
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {/* Renderiza o FeedPhotos e passa o user e a prop setModalPhoto com a função atualizadora setModalPhoto. */}
      <FeedPhotos user={user} page="1" setModalPhoto={setModalPhoto} />
      <FeedPhotos user={user} page="2" setModalPhoto={setModalPhoto} />
    </div>
  );
};

export default Feed; // Exporta o componente Feed.
