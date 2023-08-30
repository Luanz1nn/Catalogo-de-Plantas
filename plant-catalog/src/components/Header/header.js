import './style.css';
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className="header-container">
        <div className="logo">
            <Link  className='link' to='/'>
              <img src={logo}alt='logo'/>
              <span>Nativas-PE</span>
            </Link>
        </div>
        <nav className='navbar-container'>
          <ul>
            <li><Link className='link' to='/'>Início</Link></li>
            <li><Link className='link' to='/Catalog'>Catálogo</Link></li>
          </ul>
        </nav>
    </div>
  );
}

export default Header;