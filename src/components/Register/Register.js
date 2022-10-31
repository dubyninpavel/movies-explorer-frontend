import AutorizationWithForm from '../AutorizationWithForm/AutorizationWithForm';

function Register() {
  return (
    <main className="register">
      <AutorizationWithForm
        isRegister = {true}
        title = {'Добро пожаловать!'}
        titleButton = {'Зарегистрироваться'}
        titleText = {'Уже зарегистрированы?'}
        titleLink = {'Войти'}
        link = {'/signin'}
      />
    </main>
  );
}

export default Register;
