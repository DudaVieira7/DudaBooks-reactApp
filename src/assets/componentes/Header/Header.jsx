import Logo from '../Logo/Logo';
import OpcoesHeader from '../OpcoesHeader/OpcoesHeader';
import IconesHeader from '../IconesHeader/IconesHeader';
import './Header.css';


function Header() {
    return(
      <header className="App-header">
        <Logo />
        <OpcoesHeader/>
        <IconesHeader/>
      </header>
    )
}


export default Header;