import { useState } from 'react';
import { Link } from 'react-router-dom';
import promoLogo from '../../images/promoLogo.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
  const [isOpenNavMenu, setIsOpenNavMenu] = useState(false);

  function openNavMenu() {
    setIsOpenNavMenu(!isOpenNavMenu);
  }

  return (
    <header className="header">
      <Link to='/'><img className='header__logo' src={promoLogo} alt='Логотип проекта Movies'/></Link>
      <div className='header__container'>
        <div className={`header__burger ${isOpenNavMenu ? 'header__burger_active' : ''}`} onClick={openNavMenu}>
          <span className='header__line'></span>
        </div>
        <Navigation
          isOpenNavMenu = {isOpenNavMenu}
          onCloseMenu = {openNavMenu}
        />
      </div>
    </header>
  );
}

export default Header;
