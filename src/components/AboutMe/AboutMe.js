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
          <p className="aboutme__info">Я родился в городе Хабаровске, а сейчас проживаю в Санкт-Петербурге.
          В этом году закончил магистартуру в Санкт-Петербургском политехническом университете
          Петра Великого. Я люблю слушать музыку, а также заниматься спортом. Сейчас занимаюсь
          программированием.</p>
          <a className="aboutme__git" href='https://github.com/dubyninpavel'>Github</a>
        </div>
        <img className="aboutme__photo" src={myPhoto} alt="Моя фотография"/>
      </div>
    </section>
  );
}

export default AboutMe;
