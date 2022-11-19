/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/useHandlerFormInputs';
import Preloader from '../Preloader/Preloader';
import MessageWindow from '../MessageWindow/MessageWindow';

function Profile({
  onSubmit, goOut, isOpenMessageWindow, onClickBtnClose,
}) {
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
      {isOpenMessageWindow ? <MessageWindow onClickBtnClose={onClickBtnClose} /> : ''}
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
            pattern = '(?:[a-z0-9!#$%&*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])'
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
  isOpenMessageWindow: PropTypes.bool,
  onClickBtnClose: PropTypes.func,
};

export default Profile;
