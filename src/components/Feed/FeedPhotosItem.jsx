// Importa a biblioteca React.
import React from "react";

// Importa o helper.
import Image from "../Helper/Image";

// Importa o CSS Module.
import styles from "./FeedPhotosItem.module.css";

// Cria um componente chamado FeedPhotosItem que recebe a propriedade photo e setModalPhoto definida no componente FeedPhotos.
const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo); // A propriedade setModalPhoto recebe o valor da propriedade photo.
  }

  return (
    // Cria uma tag li que recebe a propriedade className com o valor de styles.photo e um evento de clique que ao ser acionado chamado a função handleClick.
    <li className={styles.photo} onClick={handleClick}>
      {/* Renderiza o componente Image passando as propriedades src e alt. */}
      <Image src={photo.src} alt={photo.title} />
      {/* Cria uma tag span que recebe a propriedade acessos criado na API. */}
      <span className={styles.views}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem; // Exporta o componente FeedPhotosItem.
