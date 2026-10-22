
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Opcoes = styled.ul`
    display: flex;
`

const Opcao = styled.li`
    min-width: 130px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    gap: 20px;
    text-align: center;
    align-items: center;
    height: 100%;
    cursor: pointer;
    padding: 0 5px;
    
`

const textoOpcoes = ['CATEGORIAS', 'ESTANTE', 'FAVORITOS'];

function OpcoesHeader() {
  return (
        <Opcoes>
          {textoOpcoes.map((texto) => (
          <Link to={`/${texto.toLowerCase()}`}><Opcao><p>{texto}</p></Opcao></Link>
          ))}   
        </Opcoes>
  )
}

export default OpcoesHeader
