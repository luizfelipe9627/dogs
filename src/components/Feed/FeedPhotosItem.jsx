// Importa a biblioteca React.
import React from "react";

// Importa o CSS Module.
import styles from "./FeedPhotosItem.module.css";

// Cria um componente chamado FeedPhotosItem que recebe a propriedade photo definida no componente FeedPhotos.
const FeedPhotosItem = ({ photo }) => {
  return (
    <li className={styles.photo}>
      {/* Cria uma tag img que recebe a propriedade src(caminho da foto) e alt(texto alternativo) criado na API. */}
      <img src={photo.src} alt={photo.title} />
      {/* Cria uma tag span que recebe a propriedade acessos criado na API. */}
      <span className={styles.views}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem; // Exporta o componente FeedPhotosItem.
