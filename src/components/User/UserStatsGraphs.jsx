// Importa a biblioteca React.
import React from "react";

// Importa a biblioteca Victory.
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

// Importa o CSS Module.
import styles from "./UserStatsGraphs.module.css";

// Criado um componente chamado UserStatsGraphs que recebe a props data contendo a resposta da API.
const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]); // Cria um estado chamado graph e uma função atualizadora chamada setGraph para alterar o estado. O estado inicial é um array vazio.
  const [total, setTotal] = React.useState(0); // Cria um estado chamado total e uma função atualizadora chamada setTotal para alterar o estado. O estado inicial é 0.

  // O React.useEffect é executado sempre que o componente for renderizado ou quando data for alterado.
  React.useEffect(() => {
    console.log(data); // Exibe no console o valor de data.
  }, [data]);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={styles.total}>
        <p>Acessos: {total}</p>
      </div>
    </section>
  );
};

export default UserStatsGraphs; // Exporta o componente UserStatsGraphs.
