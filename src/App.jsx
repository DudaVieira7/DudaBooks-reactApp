
import Header from './assets/componentes/Header/Header';

import styled from 'styled-components';

const AppContainer = styled.div`
    
      width: 100vw;
      height: 100vh;
      background-image: linear-gradient(90deg, #23354b, #dbedfb);
     


`

function App() {
  return (
    <AppContainer>
        <Header />
    </AppContainer>   
        
  );
}

export default App
