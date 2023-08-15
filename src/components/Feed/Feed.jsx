// Importa a biblioteca React.
import React from "react";

// Importa os componentes.
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

// Criado um componente chamado Feed.
const Feed = () => {
  return <div>
    <FeedModal/>
    <FeedPhotos/>
  </div>;
};

export default Feed; // Exporta o componente Feed.
