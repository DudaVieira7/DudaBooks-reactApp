
import logo from '../../imagens/logo.png';

import styled from 'styled-components';

const LogoContainer = styled.div`

    display: flex;
    align-items: center;
    font-size: 30px;
    color: #888f93db;
`

const LogoImg = styled.img `
    width: 100px;
    height: 100px;
    object-fit: cover;
`

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImg src={logo} alt="Logo" />
      <p><strong  style={{ color: '#47555A' }}>Duda</strong>books</p>
    </LogoContainer>
  );
};

export default Logo;
