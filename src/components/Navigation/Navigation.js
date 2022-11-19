import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import headerLogoLk from '../../images/lk_logo.svg';

function Navigation({ isOpenNavMenu, onCloseMenu }) {
  return (
    <nav className={`navigation ${isOpenNavMenu ? 'navigation_active' : ''}`}>
      <div className={`navigation__container ${isOpenNavMenu ? 'navigation__container_active' : ''}`}>
        {
          isOpenNavMenu ? <>
            <div className='navigation__btnclose' onClick={onCloseMenu}>
              <span></span>
            </div>
            <NavLink exact to='/' className={({ isActive }) => `navigation__main ${isOpenNavMenu ? 'navigation__main_active' : ''} ${isActive && 'navigation__main_activelink'}`}>Главная</NavLink>
          </> : ''
        }
        <NavLink to='/movies' className={({ isActive }) => `navigation__movies ${isOpenNavMenu ? 'navigation__main_active navigation__movies_active' : ''} ${isActive && 'navigation__movies_activelink navigation__main_activelink'}`}>Фильмы</NavLink>
        <NavLink to='/saved-movies' className={({ isActive }) => `navigation__savedmovies ${isOpenNavMenu ? 'navigation__main_active navigation__savedmovies_active' : ''} ${isActive && 'navigation__savedmovies_activelink navigation__main_activelink'}`}>Сохраненные фильмы</NavLink>
        <NavLink to='/profile' className={({ isActive }) => `navigation__lk ${isOpenNavMenu ? 'navigation__lk_active' : ''} ${isActive && 'navigation__lk_activelink'}`}>
          <h2 className='navigation__textlk'>Аккаунт</h2>
          <img className='navigation__imagelk' src={headerLogoLk} alt='Логопит личного кабинета' />
        </NavLink>
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  isOpenNavMenu: PropTypes.bool,
  onCloseMenu: PropTypes.func,
};

export default Navigation;
