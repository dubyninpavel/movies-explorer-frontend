import myPhoto from '../../images/my_photo.jpg';

function AboutMe() {
  return (
    <section className="aboutme">
      <h2 className="aboutproject__header" id='aboutme-link'>Студент</h2>
      <hr className="aboutproject__line" />
      <div className="aboutme__container">
        <div className="aboutme__card">
          <h2 className="aboutme__name">Павел</h2>
          <h3 className="aboutme__subline">Фронтенд-разработчик, 25 лет</h3>
          <p className="aboutme__info">Я родился и живу в Саратове, закончил факультет экономики СГУ.
          У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал
          кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по
          веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a className="aboutme__git" href='https://github.com/dubyninpavel'>Github</a>
        </div>
        <img className="aboutme__photo" src={myPhoto} alt="Моя фотография"/>
      </div>
    </section>
  );
}

export default AboutMe;
