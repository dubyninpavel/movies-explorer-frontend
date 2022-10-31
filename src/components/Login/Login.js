import AutorizationWithForm from '../AutorizationWithForm/AutorizationWithForm';

function Login() {
  return (
    <main className="login">
      <AutorizationWithForm
        isRegister = {false}
        title = {'Рады видеть!'}
        titleButton = {'Войти'}
        titleText = {'Ещё не зарегистрированы?'}
        titleLink = {'Регистрация'}
        link = {'/signup'}
      />
    </main>
  );
}

export default Login;
