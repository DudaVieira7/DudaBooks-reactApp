import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../componentes/Header/Header';

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(90deg, #23354b, #dbedfb);
`;

const Lista = styled.ul`
  list-style: none;
  padding: 24px;
  margin: 0;
  color: #fff;
  font-size: 20px;
`;

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    async function carregarFavoritos() {
      try {
        const resposta = await fetch('http://localhost:3000/favoritos');
        const dados = await resposta.json();
        setFavoritos(dados);
      } catch (erro) {
        console.error('Erro ao buscar favoritos:', erro);
      }
    }

    carregarFavoritos();
  }, []);

  return (
    <AppContainer>
      <Header />
      <Lista>
        {favoritos.map(livro => (
          <li key={livro.id}>{livro.nome}</li>
        ))}
      </Lista>
    </AppContainer>
  );
}

export default Favoritos;