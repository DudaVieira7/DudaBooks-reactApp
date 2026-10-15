
import styled from 'styled-components';


const Opcoes = styled.ul`
    display: flex;
`

const Opcao = styled.li`
    min-width: 120px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 100%;
    cursor: pointer;
    padding: 0 5px;
`

const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];

function OpcoesHeader() {
  return (
        <Opcoes>
          {textoOpcoes.map((texto) => (
            <Opcao><p>{texto}</p></Opcao>
          ))}   
        </Opcoes>
  )
}

export default OpcoesHeader
