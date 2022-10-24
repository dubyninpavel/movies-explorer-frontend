import AutorizationWithForm from '../AutorizationWithForm/AutorizationWithForm';

function Login() {
  return (
    <section className="login">
      <AutorizationWithForm
        isRegister = {false}
        title = {'Рады видеть!'}
        titleButton = {'Войти'}
        titleText = {'Ещё не зарегистрированы?'}
        titleLink = {'Регистрация'}
        link = {'/signup'}
      />
    </section>
  );
}

export default Login;
