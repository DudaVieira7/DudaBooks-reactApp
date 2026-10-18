import styled from "styled-components"


 export const Titulo  = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${ props => props.cor || '#4a4e5c'}; 
    font-size: ${ props => props.tamanhoFont || '36px'};
    text-align: ${ props => props.alinhamento || 'center'} ;
    margin: 0;
    font-weight: ${props => props.grossura || '600'};
`