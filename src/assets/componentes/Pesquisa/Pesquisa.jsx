 import styled from "styled-components";
 import Input from "../Input/Input";
 import { useEffect, useState } from "react";
import { getLivros } from "../../servicos/livros";

const PesquisaContainer = styled.section`
		background-image: linear-gradient(90deg, #23354b 35%, #dbedfb 165%);
		color: #FFF;
		text-align: center;
		padding: 85px 0;
		height: auto;
		width: 100%;


`

const Titulo = styled.h2`

		color: #FFF;
		font-size: 36px;
		text-align: center;
		width: 100%;
`
const Subtitulo = styled.h3`

		font-size: 16px;
		font-weight: 500;
		margin-bottom: 40px;
` 

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }

`

 function Pesquisa(){
    console.log()
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros] = useState([])

    useEffect(() => {
        featchLivros()
    }, [])

    async function featchLivros(){
      const livrosAPI= await getLivros()
      setLivros(livrosAPI)
    }

    console.log(livrosPesquisados)
    return(
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
            <Input 
                placeholder="Escreva sua próxima leitura"
                onBlur={ evento => {
                    const textoDigitado = evento.target.value
                    const resutadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resutadoPesquisa)

                }}
            />
            {livrosPesquisados.map(livro =>(
               <Resultado>
                    <p>{livro.nome}</p>
                    <img src={livro.src}/>
               </Resultado>
            ))}
        </PesquisaContainer>
    )
 }

 export default Pesquisa;
