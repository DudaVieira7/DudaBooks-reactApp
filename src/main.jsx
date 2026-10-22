import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favoritos from './Favoritos.jsx';
import Estante from './Estante.jsx';
import Categorias from './Categorias.jsx';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }

  li {
    list-style: none;
  }
`;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App /> }/>
        <Route path='/favoritos' element={ <Favoritos/>}/>
        <Route path='/estante' element={<Estante/>}/>
        <Route path='/categorias' element={<Categorias/>}/>

      </Routes>
    </BrowserRouter>
  
  </StrictMode>,
);
