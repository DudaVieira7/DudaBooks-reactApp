import Logo from '../Logo/Logo';
import OpcoesHeader from '../OpcoesHeader/OpcoesHeader';
import IconesHeader from '../IconesHeader/IconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header `
background-color: #f0f8ff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 30px;
  gap: 20px;
  flex-wrap: wrap;

    

`
function Header() {
    return(
      <HeaderContainer>
        <Logo />
        <OpcoesHeader/>
        <IconesHeader/>
      </HeaderContainer>
    )
}


export default Header;