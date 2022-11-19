import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import promoLogo from '../../images/promoLogo.svg';
import promoPhoto from '../../images/promo_photo.svg';
import Header from '../Header/Header';

function Promo({ isLoggedIn }) {
  return (
    <header className='promo'>
      {isLoggedIn ? <Header /> : <div className='promo__header'>
        <Link to='/'><img className='promo__logo' src={promoLogo} alt='Логотип проекта Movies'/></Link>
        <nav className='promo__authorization'>
          <NavLink className='promo__signup' to='/signup'>Регистрация</NavLink>
          <NavLink className='promo__signin' to='/signin'>Войти</NavLink>
        </nav>
      </div>
      }

      <div className='promo__info'>
        <div className='promo__text'>
          <h1 className='promo__text_main'>Учебный проект студента факультета Веб-разработки.</h1>
        </div>
        <img className='promo__image' src={promoPhoto} alt='Web-разработка' />
      </div>
    </header>
  );
}

Promo.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default Promo;
