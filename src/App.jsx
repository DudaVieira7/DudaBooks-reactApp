import './App.css';
import Logo from './assets/componentes/Logo/Logo';
import perfil from './assets/imagens/perfil.svg';
import sacola from './assets/imagens/sacola.svg';


const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];
const icones = [perfil, sacola];

function App() {
  return (
   <div className="App">
      <header className="App-header">
        <Logo />
        <ul className="opcoes">
          {textoOpcoes.map((texto) => (
            <li className="opcao"><p>{texto}</p></li>
          ))}   
        </ul>

        <ul className='icones'>
          {icones.map((icone) => (
            <li className="icone"><img src={icone} alt="Ícone" /></li>
          ))}
        </ul>

      </header>
   </div>
      
  );
}

export default App
