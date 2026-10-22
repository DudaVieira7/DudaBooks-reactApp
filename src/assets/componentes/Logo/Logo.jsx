
import logo from '../../imagens/logo.png';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoContainer = styled(Link)`

    display: flex;
    align-items: center;
    font-size: 30px;
    color: #888f93db;
    cursor: pointer;
    text-decoration: none;
`

const LogoImg = styled.img `
    width: 100px;
    height: 100px;
    object-fit: cover;
`

const Logo = () => {
  return (
    <LogoContainer to={"/"}>
      <LogoImg src={logo} alt="Logo" />
      <p><strong  style={{ color: '#47555A' }}>Duda</strong>books</p>
    </LogoContainer>
  );
};

export default Logo;
