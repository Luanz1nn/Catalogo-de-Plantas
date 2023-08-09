import './style.css';
import logo from '../../assets/logo.png'

function Header() {
  return (
    <div className="header-container">
        <div className="logo">
            <img src={logo}alt='logo'/>
        </div>
        <nav className='navbar-container'>
          <ul>
            <li>Início</li>
            <li>Catálogo</li>
          </ul>
        </nav>
    </div>
  );
}

export default Header;