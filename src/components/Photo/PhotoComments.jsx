// Importa a biblioteca React.
import React from "react";

// Importa o contexto.
import { UserContext } from "../../UserContext";

// Importa o componente.
import PhotoCommentsForm from "./PhotoCommentsForm";

// Cria um componente chamado PhotoComments que recebe o id como parâmetro passado pelo componente PhotoContent.
const PhotoComments = ({ id }) => {
  const { login } = React.useContext(UserContext); // Desestrutura o retorno da função useContext pegando apenas o login e armazena na constante login.

  return (
    <div>
      {/* Se o login for verdadeiro, ou seja o usuário estiver logado, então renderiza o componente PhotoCommentsForm. */}
      {login && <PhotoCommentsForm id={id}/>}
    </div>
  );
};

export default PhotoComments; // Exporta o componente PhotoComments.
