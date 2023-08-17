// Importa a biblioteca React.
import React from "react";

// Importa o componente.
import Textarea from "../Forms/Textarea";

// Importa o CSS Module.
// import styles from "./PhotoCommentsForm.module.css";

// Importa o hook.
import useFetch from "../../hooks/useFetch";

// Importa o svg e transforma em um componente React chamado Enviar.
import { ReactComponent as Enviar } from "../../assets/svg/enviar.svg";
import { func } from "prop-types";

// Cria um componente chamado PhotoCommentsForm.
const PhotoCommentsForm = ({ id }) => {
  const [comment, setComment] = React.useState(""); // Cria um estado para armazenar o comentário digitado pelo usuário e a função para atualizar o estado chamado setComment. O estado inicial é uma string vazia.

  const { request, error } = useFetch(); // Desestrutura o retorno do useFetch pegando apenas o que vai ser utilizado(no caso o request e o error) nas constantes request e error.

  async function handleSubmit(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário que é enviar os dados para uma outra página e recarregar a página.
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Chama o componente Textarea passando as propriedades name, value, placeholder e onChange como parâmetro. */}
      <Textarea
        name="comment"
        id="comment"
        value={comment}
        placeholder="Comente..."
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <Enviar />
      </button>
    </form>
  );
};

export default PhotoCommentsForm; // Exporta o componente PhotoCommentsForm.
