import AutorizationWithForm from '../AutorizationWithForm/AutorizationWithForm';

function Register() {
  return (
    <section className="register">
      <AutorizationWithForm
        isRegister = {true}
        title = {'Добро пожаловать!'}
        titleButton = {'Зарегистрироваться'}
        titleText = {'Уже зарегистрированы?'}
        titleLink = {'Войти'}
        link = {'/signin'}
      />
    </section>
  );
}

export default Register;
