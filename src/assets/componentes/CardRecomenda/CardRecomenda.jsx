import styled from "styled-components"
import { Titulo } from "../Titulo/Titulo"

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 660px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;
    margin-top: 30px;  
`

const Botao = styled.button`
    background-color: #8533bf;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    transition: all-easy 7s;
    border-radius: 5px;
    &:hover {
        cursor: pointer;
        background-color: #302453;
        color: #B57EDC;
    }
`

const Descricao = styled.p`
    max-width: 300px;
    color: #1F1E2E;
    
`

const Subtitulo = styled.h4`
    color: #261732;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`

const ImgLivro = styled.img`
    width: 150px;
`


function CardRecomenda({titulo, subtitulo, descricao, imagem}){
    return(
            <Card>
                <div>
                    <Titulo tamanhoFont ='16px' cor ='#302453' alinhamento ='left' grossura ='400'>{titulo}</Titulo>
                    <Subtitulo>{subtitulo}</Subtitulo>
                    <Descricao>{descricao}</Descricao>
                </div>
                <div>
                    <ImgLivro src={imagem} />
                    <Botao>Saiba mais</Botao>
                </div>
            </Card>
    )
}

export default CardRecomenda