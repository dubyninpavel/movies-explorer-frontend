import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useFormWithValidation } from '../../utils/useHandlerFormInputs';
import Preloader from '../Preloader/Preloader';

function AutorizationWithForm({
  isRegister, title, titleButton, titleText, titleLink, link, onSubmit, isErrAuth, textErrAuth,
}) {
  const [valueInput, handleChangeInputs, errorsInput, isValid] = useFormWithValidation();
  const [isLoading, setIsLoading] = useState(false);
  const btnStyle = (
    `autorizationwithform__button ${isValid ? '' : 'autorizationwithform__button_disabled'}`
  );

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsLoading(true);
    onSubmit(valueInput, setIsLoading);
  }

  return (
    <section className="autorizationwithform">
      <h2 className='autorizationwithform__title'>{title}</h2>
      <form className='autorizationwithform__form' onSubmit={handleSubmit} noValidate>
        {
          isRegister ? <>
          <label className='autorizationwithform__label' htmlFor='name'>Имя</label>
          <input
            className='autorizationwithform__input'
            type = 'text'
            name = 'name'
            id = 'name'
            placeholder='Введите ваше имя'
            value = {valueInput.name || ''}
            onChange = {handleChangeInputs}
            minLength = '2'
            maxLength = '30'
            pattern='[а-яА-Яa-zA-ZЁё\-\s]+$'
            required
          />
          {
            isValid ? '' : <span className='autorizationwithform__errmessage'>{errorsInput.name}</span>
          }
          </> : ''

        }
        <label className='autorizationwithform__label' htmlFor='email'>E-mail</label>
        <input
          className = 'autorizationwithform__input'
          type = 'email'
          name = 'email'
          id = 'email'
          placeholder = 'E-mail'
          pattern = '(?:[a-z0-9!#$%&*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])'
          value = {valueInput.email || ''}
          onChange = {handleChangeInputs}
          required
        />
        {
          isValid ? '' : <span className='autorizationwithform__errmessage'>{errorsInput.email}</span>
        }
        <label className='autorizationwithform__label' htmlFor='password'>Пароль</label>
        <input
          className = 'autorizationwithform__input'
          type = 'password'
          name = 'password'
          id = 'password'
          placeholder = 'Пароль'
          value = {valueInput.password || ''}
          onChange = {handleChangeInputs}
          minLength='8'
          required
        />
        {isValid ? '' : <span className='autorizationwithform__errmessage'>{errorsInput.password}</span>}
        {isErrAuth ? <span className='autorizationwithform__errauth'>{textErrAuth}</span> : ''}
        {isLoading ? <Preloader /> : <button type='submit' className={btnStyle} disabled={!isValid}>{titleButton}</button>}
        <p className='autorizationwithform__text'>{titleText}<Link className='autorizationwithform__link' to={link}>{titleLink}</Link></p>
      </form>
    </section>
  );
}

AutorizationWithForm.propTypes = {
  isRegister: PropTypes.bool,
  title: PropTypes.string,
  titleButton: PropTypes.string,
  titleText: PropTypes.string,
  titleLink: PropTypes.string,
  link: PropTypes.string,
  onSubmit: PropTypes.func,
  isErrAuth: PropTypes.bool,
  textErrAuth: PropTypes.string,
};

export default AutorizationWithForm;
