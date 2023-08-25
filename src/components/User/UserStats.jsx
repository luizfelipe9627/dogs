// Importa a biblioteca React.
import React from "react";

// Importa o helper.
import Head from "../Helper/Head";

// Criado um componente chamado UserStats.
const UserStats = () => {
  return (
    <div>
      {/* Chama o componente Head e passa a props title que é usada para mudar o título da página. */}
      <Head title="Estastisticas" />
      Estastisticas
    </div>
  );
};

export default UserStats; // Exporta o componente UserStats.
