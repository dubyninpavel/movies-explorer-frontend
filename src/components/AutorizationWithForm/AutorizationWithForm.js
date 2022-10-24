import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import promoLogo from '../../images/promoLogo.svg';

function AutorizationWithForm({
  isRegister, title, titleButton, titleText, titleLink, link,
}) {
  return (
    <div className="autorizationwithform">
      <Link to='/' className='autorizationwithform__logo'><img className='header__logo' src={promoLogo} alt='Логотип проекта Movies'/></Link>
      <h2 className='autorizationwithform__title'>{title}</h2>
      <form className='autorizationwithform__form'>
        {
          isRegister ? <>
          <label className='autorizationwithform__label' htmlFor='name'>Имя</label>
          <input
            className='autorizationwithform__input'
            type = 'text'
            name = 'name'
            id = 'name'
            placeholder='Введите ваше имя'
            required
          />
          </> : ''

        }
        <label className='autorizationwithform__label' htmlFor='email'>E-mail</label>
        <input
          className='autorizationwithform__input'
          type = 'email'
          name = 'email'
          id = 'email'
          placeholder='E-mail'
          required
        />
        <label className='autorizationwithform__label' htmlFor='password'>Пароль</label>
        <input
          className='autorizationwithform__input'
          type = 'password'
          name = 'password'
          id = 'password'
          placeholder='Пароль'
          required
        />
        <button className='autorizationwithform__button'>{titleButton}</button>
        <p className='autorizationwithform__text'>{titleText}<Link className='autorizationwithform__link' to={link}>{titleLink}</Link></p>
      </form>
    </div>
  );
}

AutorizationWithForm.propTypes = {
  isRegister: PropTypes.bool,
  title: PropTypes.string,
  titleButton: PropTypes.string,
  titleText: PropTypes.string,
  titleLink: PropTypes.string,
  link: PropTypes.string,
};

export default AutorizationWithForm;
