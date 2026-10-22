import Header from './assets/componentes/Header/Header';
import Pesquisa from './assets/componentes/Pesquisa/Pesquisa';

import styled from 'styled-components';

const AppContainer = styled.div`
    
      width: 100vw;
      height: 100vh;
      background-image: linear-gradient(90deg, #23354b, #dbedfb);

`

function Estante() {
  return (
    <AppContainer>
        <Header />
        <Pesquisa/>
    </AppContainer>   
        
  );
}

export default Estante