// Importa a biblioteca React.
import React from "react";

// Importa o CSS Module.
import styles from "./Textarea.module.css";

// Criado um componente chamado Textarea que está recebendo as props label, type e name.
const Textarea = ({ cols, rows, name, value, placeholder, onChange, onBlur, error }) => {
  // Retorna uma div que contém um label e um Textarea.
  return (
    <div className={styles.wrapper}>
      <textarea
        className={styles.textarea}
        name={name}
        id={name}
        placeholder={placeholder}
        // O cols são as colunas do textarea.
        cols={cols}
        // O rows são as linhas do textarea.
        rows={rows}
        // O valor do textarea é o valor do estado value, ou seja, o que está sendo digitado no textarea.
        value={value}
        // Quando houver uma alteração no textarea, a função onChange responsável por atualizar o estado value será chamada.
        onChange={onChange}
        // Quando o textarea perde o foco executa a função onBlur.
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Textarea; // Exportando o componente Textarea.
