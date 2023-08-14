// Importa a biblioteca React.
import React from "react";

// Importa o CSS Module.
import styles from "./UserPhotoPost.module.css";

// Importa os componentes.
import Input from "../Forms/Input";
import Button from "../Forms/Button";

// Importa os hooks.
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";

// Criado um componente chamado UserPhotoPost.
const UserPhotoPost = () => {
  // Está chamando o hook useForm responsável por tornar o formulário reativo e passando como parâmetro um objeto com os campos nome, peso e idade nas constantes criadas.
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");

  const [img, setImg] = React.useState({}); // Cria um estado chamado img e uma função setImg para alterar o estado. O estado inicial é um objeto vazio.

  const { data, error, loading, request } = useFetch(); // Está desestruturando o objeto retornado pelo hook useFetch e passando para as constantes data, error, loading e request.

  // Criado uma função handleSubmit responsável por enviar os dados do formulário.
  function handleSubmit(event) {
    event.preventDefault(); // Evita que o formulário seja enviado e a página seja recarregada.
  }

  // Criado uma função handleImgChange responsável por alterar o estado da imagem.
  function handleImgChange({ target }) {}

  return (
    <section className={`${styles.photoPost} animaLeft`}>
      <form onSubmit={handleSubmit}>
        {/* Está chamando o componente Input e passando as propriedades label, type e name. */}
        <Input label="Nome" type="text" name="nome" />
        <Input label="Peso" type="text" name="peso" />
        <Input label="Idade" type="text" name="idade" />
        <input type="file" name="img" id="img" onChange={handleImgChange} />
        {/* Está chamando o componente Button e passando a propriedade children que é o texto do botão. */}
        <Button>Enviar</Button>
      </form>
    </section>
  );
};

export default UserPhotoPost; // Exporta o componente UserPhotoPost.
