import sacola from '../../imagens/sacola.svg';
import perfil from '../../imagens/perfil.svg';
import './IconesHeader.css';

const icones = [perfil, sacola];

function IconesHeader() {
    return (
        <ul className='icones'>
          {icones.map((icone) => (
            <li className="icone"><img src={icone} alt="Ícone" /></li>
          ))}
        </ul>
    )
}


export default IconesHeader
