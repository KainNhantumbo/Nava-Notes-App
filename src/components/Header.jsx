import { header as Container } from '../styles/header';

const Header = ({ title, child, icon }) => (
  <Container className='headerContainer'>
    <div>{icon}</div>
    <h1>{title}</h1>
    {child}
  </Container>
);

export default Header;
