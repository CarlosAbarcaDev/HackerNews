import Logo from './assets/logo.png'
const Header = () => {
    return ( 
        <nav className='header'>
          <img src={Logo} alt='logo' />
        </nav>
     );
}
 
export default Header;