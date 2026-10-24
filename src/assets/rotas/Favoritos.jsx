import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../componentes/Header/Header';
import { deleteFavorito, getFavoritos } from '../servicos/favoritos';

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(90deg, #23354b, #dbedfb);
 align-items: center;
`;

const ResultadoContainer = styled.section`
  color: #fff;
  text-align: center;
  padding: 85px 0;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
  margin-bottom: 40px;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-bottom: 30px;
  padding: 20px;
  cursor: pointer;
  margin: auto;

  p {
    width: 200px;
  }

  img {
    width: 100px;
  }

  &:hover {
    border: 1px solid white;
  }
`;

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    carregarFavoritos();
  }, []);

  async function carregarFavoritos() {
    try {
      const favoritosAPI = await getFavoritos();
      setFavoritos(favoritosAPI);
    } catch (erro) {
      console.error('Erro ao buscar favoritos:', erro);
    }
  }


  async function deletarFavorito(id) {
    try {
      await deleteFavorito(id)
      alert(`O livro com o id : ${id} foi deletado da sua lista de livros favoritos!`)
    } catch (error) {
       alert(`Não foi possível deletar o livro da sua lista de favoritos: ${erro.message}`)
    }    
  }

  return (
    <AppContainer>
      <Header />
      <ResultadoContainer>
        <Titulo>Aqui estão seus livros favoritos</Titulo>
        {favoritos.map(livro => (
          <Resultado key={livro.id} onClick={()=> deletarFavorito(livro.id)}>
            <p>{livro.nome}</p>
            <img src={livro.src} alt={livro.nome} />
          </Resultado>
        ))}
      </ResultadoContainer>
    </AppContainer>
  );
}

export default Favoritos;