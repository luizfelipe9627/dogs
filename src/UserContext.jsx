// Importa a biblioteca React.
import React from "react";

export const UserContext = React.createContext(); // Criado um contexto chamado UserContext que pode ser acessado por qualquer componente.

// Criado um cpontexto chamado UserContext.
export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null); // Criado um estado chamado data e uma função chamada setData para alterar o estado. O valor inicial do estado é null.

  return (
    // O UserContext.Provider é o componente que vai prover(disponibilizar) os dados para os componentes filhos, ou seja, todos os componentes que estão dentro do UserContext vão ter acesso aos dados do contexto.
    // O value é o valor que vai ser disponibilizado para os componentes filhos.
    <UserContext.Provider value={{ usuario: "André" }}>
      {children}
    </UserContext.Provider>
  );
};
