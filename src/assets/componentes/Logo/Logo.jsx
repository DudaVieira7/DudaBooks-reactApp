import './Logo.css';
import logo from '../../imagens/logo.png';

const Logo = () => {
  return (
    <div className="logo">
      <img className="logo-img" src={logo} alt="Logo" />
      <p><strong>Duda</strong>books</p>
    </div>
  );
};

export default Logo;
