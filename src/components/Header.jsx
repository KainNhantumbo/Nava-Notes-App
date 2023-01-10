import { HeaderStyled } from '../styles/header';

const Header = ({ title, child, icon }) => (
  <HeaderStyled className='headerContainer'>
    <div>{icon}</div>
    <h1>{title}</h1>
    {child}
  </HeaderStyled>
);

export default Header;
