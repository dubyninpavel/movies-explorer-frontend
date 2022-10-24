import { Link, NavLink } from 'react-router-dom';
import promoLogo from '../../images/promoLogo.svg';
import promoPhotoWeb from '../../images/promoPhotoWeb.svg';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__header'>
        <Link to='/'><img className='promo__logo' src={promoLogo} alt='Логотип проекта Movies'/></Link>
        <nav className='promo__authorization'>
          <NavLink className='promo__signup' to='/signup'>Регистрация</NavLink>
          <NavLink className='promo__signin' to='/signin'>Войти</NavLink>
        </nav>
      </div>
      <div className='promo__info'>
        <div className='promo__text'>
          <h1 className='promo__text_main'>Учебный проект студента факультета <br /> Веб-разработки.</h1>
          <p className='promo__text_subline'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
        <img className='promo__image' src={promoPhotoWeb} alt='Web-разработка' />
      </div>
    </section>
  );
}

export default Promo;
