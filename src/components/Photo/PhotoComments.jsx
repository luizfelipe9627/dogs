// Importa a biblioteca React.
import React from "react";

// Importa o contexto.
import { UserContext } from "../../UserContext";

// Importa o componente.
import PhotoCommentsForm from "./PhotoCommentsForm";

// Importa o CSS Module.
import styles from "./PhotoComments.module.css";

// Cria um componente chamado PhotoComments que recebe como parâmetro as propriedades comments e id.
const PhotoComments = (props) => {
  const { login } = React.useContext(UserContext); // Desestrutura o retorno da função useContext pegando apenas o login e armazena na constante login.

  const [comments, setComments] = React.useState(() => props.comments); // Cria um estado para armazenar os comentários e a função para atualizar o estado chamado setComments. O estado inicial é o valor das propriedades comments.

  return (
    // O React.Fragment é utilizado para agrupar elementos filhos sem adicionar nós extras ao DOM, por isso não é necessário utilizar uma div.
    <React.Fragment>
      {/* Cria uma lista com os comentários, onde o map percorre o array comments e para cada comentário retorna um li com o nome do autor e o comentário digitado pelo usuário. */}
      <ul className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>

      {/* Se o login for verdadeiro, ou seja o usuário estiver logado, então renderiza o componente PhotoCommentsForm que é passado como propriedade o id da foto e a função atualizadora setComments. */}
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </React.Fragment>
  );
};

export default PhotoComments; // Exporta o componente PhotoComments.
