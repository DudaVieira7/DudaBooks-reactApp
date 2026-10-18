import { livros } from './dadosUltimosLancamentos'
import styled from 'styled-components'
import { Titulo } from '../Titulo/Titulo'
import CardRecomenda from '../CardRecomenda/CardRecomenda'
import livroHarry from '../../imagens/livro1.jpg'

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
            <Titulo
                cor='#23354b' 
                tamanhoFont ='30px' 
            >ULTIMOS LANCAMENTOS</Titulo>
            <NovosLivrosContainer>
                { livros.map( livro => (
                    <Imagem src={livro.src}/>
                ) ) }
            </NovosLivrosContainer>
                <CardRecomenda
                titulo={"Talvez você se interesse por:"}
                subtitulo={"Harry Potter e o Prisioneiro de Azkaban (1999)"}
                descricao={"Harry Potter descobre que o fugitivo Sirius Black é seu padrinho inocente, enquanto enfrenta os terríveis Dementadores em Hogwarts e usa um Vira-Tempo para salvar vidas."}
                imagem={livroHarry}
                />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos