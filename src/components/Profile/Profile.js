import { NAME, EMAIL } from '../../constants/constants';

function Profile() {
  return (
    <section className="profile">
      <h2 className='profile__hello'>Привет, {NAME}!</h2>
      <div className='profile__info'>
        <div className='profile__container'>
          <h3 className='profile__field'>Имя</h3>
          <h3 className='profile__data'>{NAME}</h3>
        </div>
        <hr className="profile__line" />
        <div className='profile__container'>
          <h3 className='profile__field'>E-mail</h3>
          <h3 className='profile__data'>{EMAIL}</h3>
        </div>
      </div>
      <button className='profile__button profile__edit'>Редактировать</button>
      <button className='profile__button profile__signout'>Выйти из аккаунта</button>
    </section>
  );
}

export default Profile;
