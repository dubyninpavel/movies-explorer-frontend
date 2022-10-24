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
            <NavLink exact to='/' className={`navigation__main ${isOpenNavMenu ? 'navigation__main_active' : ''}`} activeClassName='navigation__main_activelink' >Главная</NavLink>
          </> : ''
        }
        <NavLink to='/movies' className={`navigation__movies ${isOpenNavMenu ? 'navigation__main_active navigation__movies_active' : ''}`} activeClassName='navigation__movies_activelink navigation__main_activelink' >Фильмы</NavLink>
        <NavLink to='/saved-movies' className={`navigation__savedmovies ${isOpenNavMenu ? 'navigation__main_active navigation__savedmovies_active' : ''}`} activeClassName='navigation__savedmovies_activelink navigation__main_activelink'>Сохраненные фильмы</NavLink>
        <NavLink to='/profile' className={`navigation__lk ${isOpenNavMenu ? 'navigation__lk_active' : ''}`} activeClassName='navigation__lk_activelink' >
          <img className='navigation__imagelk' src={headerLogoLk} alt='Логопит личного кабинета' />
          <h2 className='navigation__textlk'>Аккаунт</h2>
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
