import sacola from '../../imagens/sacola.svg';
import perfil from '../../imagens/perfil.svg';


import styled from 'styled-components';

const Icone = styled.li`
  width: 30px;
  height: 30px;
`;

const IconeImg = styled.img`
  width: 30px;
  height: 30px;
  object-fit: fill;
`;

const Icones = styled.ul`
    display: flex;
    align-items: center; 
    list-style: none;
    gap: 20px;
`


const icones = [perfil, sacola];

function IconesHeader() {
    return (
        <Icones>
          {icones.map((icone) => (
            <Icone><IconeImg src={icone} alt="icone" /></Icone>
          ))}
        </Icones>
    )
}


export default IconesHeader
