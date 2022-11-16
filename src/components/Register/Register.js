import PropTypes from 'prop-types';
import { useState } from 'react';
import AutorizationWithForm from '../AutorizationWithForm/AutorizationWithForm';

function Register({ onRegister }) {
  const [isErrMessage, setIsErrMessage] = useState('');
  const [isErrAuth, setErrAuth] = useState(false);

  function handleSubmit(valueInput, setIsLoading) {
    onRegister(valueInput, setIsLoading, setIsErrMessage, setErrAuth);
  }

  return (
    <main className="register">
      <AutorizationWithForm
        isRegister = {true}
        title = {'Добро пожаловать!'}
        titleButton = {'Зарегистрироваться'}
        titleText = {'Уже зарегистрированы?'}
        titleLink = {'Войти'}
        link = {'/signin'}
        onSubmit = {handleSubmit}
        isErrAuth = {isErrAuth}
        textErrAuth = {isErrMessage}
      />
    </main>
  );
}

Register.propTypes = {
  onRegister: PropTypes.func,
};

export default Register;
