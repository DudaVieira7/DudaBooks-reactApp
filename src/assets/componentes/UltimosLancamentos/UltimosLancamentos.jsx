import { livros } from './dadosUltimosLancamentos'
import styled from 'styled-components'
import { Titulo } from '../Titulo/Titulo'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    height: auto;
`



const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
    gap: 30px
`

const Imagem = styled.img`
    height: 300px;
    width: 200px;
    object-fit: cover;

`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor='#f6f'>ULTIMOS LANCAMENTOS</Titulo>
            <NovosLivrosContainer>
                { livros.map( livro => (
                    <Imagem src={livro.src}/>
                ) ) }
            </NovosLivrosContainer>
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos