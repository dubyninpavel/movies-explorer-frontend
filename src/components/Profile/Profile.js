import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/useHandlerFormInputs';
import Preloader from '../Preloader/Preloader';

function Profile({ onSubmit, goOut }) {
  const [isDisabledBtn, setDisabledBtn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const CurrentUserInfo = useContext(CurrentUserContext);
  const [
    valueInput, handleChangeInputs, errorsInput, isValid, setValueInput,
  ] = useFormWithValidation();
  const [isErrMessage, setIsErrMessage] = useState('');
  const [isErrAuth, setErrAuth] = useState(false);
  const btnStyle = (
    `profile__button profile__edit ${(isDisabledBtn) ? 'profile__button_disabled' : ''}`
  );

  useEffect(() => {
    setValueInput({
      name: CurrentUserInfo.name,
      email: CurrentUserInfo.email,
    });
  }, [CurrentUserInfo]);

  useEffect(() => {
    if (((valueInput.name === CurrentUserInfo.name)
    && (valueInput.email === CurrentUserInfo.email)) || !isValid) {
      setDisabledBtn(true);
    } else {
      setDisabledBtn(false);
    }
  }, [CurrentUserInfo, valueInput, isValid]);

  function changeInfoProfile(evt) {
    evt.preventDefault();
    setIsLoading(true);
    onSubmit(valueInput, setIsLoading, setIsErrMessage, setErrAuth);
  }

  return (
    <main className="profile">
      <h2 className='profile__hello'>Привет, {CurrentUserInfo.name}!</h2>
      <form className='profile__info'>
        <div className='profile__container'>
          <h3 className='profile__field'>Имя</h3>
          <input
            className='profile__data'
            type = 'text'
            name = 'name'
            pattern='[а-яА-Яa-zA-ZЁё\-\s]+$'
            value = {valueInput.name || ''}
            onChange = {handleChangeInputs}
          />
        </div>
        {isValid ? '' : <span className='autorizationwithform__errmessage'>{errorsInput.name}</span>}
        <hr className="profile__line" />
        <div className='profile__container'>
          <h3 className='profile__field'>E-mail</h3>
          <input
            className='profile__data'
            type = 'email'
            name = 'email'
            value = {valueInput.email || ''}
            onChange = {handleChangeInputs}
          />
        </div>
        {isValid ? '' : <span className='autorizationwithform__errmessage'>{errorsInput.email}</span>}
        {isErrAuth ? <span className='autorizationwithform__errauth'>{isErrMessage}</span> : ''}
        {isLoading ? <Preloader /> : <button type='submit' onClick={changeInfoProfile} disabled={isDisabledBtn} className={btnStyle}>Редактировать</button>}
        <button type='button' onClick={goOut} className='profile__button profile__signout'>Выйти из аккаунта</button>
      </form>
    </main>
  );
}

Profile.propTypes = {
  onSubmit: PropTypes.func,
  goOut: PropTypes.func,
};

export default Profile;
