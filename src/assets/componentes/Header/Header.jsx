import Logo from '../Logo/Logo';
import OpcoesHeader from '../OpcoesHeader/OpcoesHeader';
import IconesHeader from '../IconesHeader/IconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header `
    background-color: #f0f8ff;
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    

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