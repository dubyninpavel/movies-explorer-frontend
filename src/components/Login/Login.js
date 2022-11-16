import PropTypes from 'prop-types';
import { useState } from 'react';
import AutorizationWithForm from '../AutorizationWithForm/AutorizationWithForm';

function Login({ onLogin }) {
  const [isErrMessage, setIsErrMessage] = useState('');
  const [isErrAuth1, setErrAuth] = useState(false);

  function handleSubmit(valueInput, setIsLoading) {
    onLogin(valueInput, setIsLoading, setIsErrMessage, setErrAuth);
  }

  return (
    <main className="login">
      <AutorizationWithForm
        isRegister = {false}
        title = {'Рады видеть!'}
        titleButton = {'Войти'}
        titleText = {'Ещё не зарегистрированы?'}
        titleLink = {'Регистрация'}
        link = {'/signup'}
        onSubmit = {handleSubmit}
        isErrAuth = {isErrAuth1}
        textErrAuth = {isErrMessage}
      />
    </main>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func,
};

export default Login;
