// Importa a biblioteca React.
import React from "react";

// Importa os componentes.
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

// Criado um componente chamado Feed que recebe a prop user.
const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null); // Cria um estado para o modalPhoto e a função atualizadora setModalPhoto. Inicializa o estado com null.

  const [pages, setPages] = React.useState([1]); // Cria um estado chamado pages e a função atualizadora chamada setPages. Inicializa o estado com uma array com o valor 1.

  const [infinite, setInfinite] = React.useState(true); // Cria um estado chamado infinite e a função atualizadora chamada setInfinite. Inicializa o estado com true.

  // Criado um hook chamado useEffect que é disparado toda vez que o componente é montado ou atualizado pela primeira vez e quando o estado infinite atualizar.
  React.useEffect(() => {
    let wait = false; // Criado uma variável chamada wait e inicializada como false.

    // Criado uma função chamada infiniteScroll responsável por fazer mais páginas serem carregadas quando o usuário chegar no final da página.
    function infiniteScroll() {
      

      // Se o valor do estado infinite for true executa o if.
      if (infinite) {
        const scroll = window.scrollY; // Pega o valor do scrollY, ou seja, a quantidade de pixels que o usuário já rolou a página.
        const height = document.body.offsetHeight - window.innerHeight; // Pega o valor da altura do body menos a altura da janela do navegador.

        // Se o scroll for maior ou igual a altura da página vezes 0.75, ou seja, se o usuário já rolou 75% da página e a variável wait for false executa o if.
        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]); // Pega o valor do estado pages anterior e pega a quantidade de páginas que tem na array e adiciona mais uma página.
          wait = true; // Muda o valor da variável wait para true.

          // O setTimeout é uma função que executa uma função depois de um determinado tempo, nesse caso 500ms.
          setTimeout(() => {
            wait = false; // Depois de 500ms muda o valor da variável wait para false.
          }, 500);
        }
      }
    }
    window.addEventListener("wheel", infiniteScroll); // Adiciona um evento wheel que é disparado quando o usuário rola a roda do mouse para cima ou para baixo, quando acionado chama a função infiniteScroll.
    window.addEventListener("scroll", infiniteScroll); // Adiciona um evento scroll que é disparado quando o usuário rola a página para cima ou para baixo, quando acionado chama a função infiniteScroll.

    // Quando o componente é desmontado, ou seja quando o usuário sai da página, remove os eventos wheel e scroll.
    return () => {
      window.removeEventListener("wheel", infiniteScroll); // Remove o evento wheel.
      window.removeEventListener("scroll", infiniteScroll); // Remove o evento scroll.
    };
  }, [infinite]);

  return (
    <div>
      {/* Se o modalPhoto for true, renderiza o FeedModal e passa a prop photo com o valor de modalPhoto e a prop setModalPhoto com a função atualizadora setModalPhoto. */}
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}

      {/* Faz um map na array pages e retorna um FeedPhotos para cada página. */}
      {pages.map((page) => {
        return (
          // Renderiza o FeedPhotos e passa a prop key com o valor de page(número da página), a prop user com o valor de user e a prop setModalPhoto com a função atualizadora setModalPhoto e a prop setInfinite com a função atualizadora setInfinite.
          <FeedPhotos
            key={page}
            user={user}
            page={page}
            setModalPhoto={setModalPhoto}
            setInfinite={setInfinite}
          />
        );
      })}
    </div>
  );
};

export default Feed; // Exporta o componente Feed.
