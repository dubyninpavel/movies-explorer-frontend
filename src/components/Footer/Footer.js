function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <hr className="portfolio__line" />
      <div className="footer__container">
        <p className="footer__year">© 2022</p>
        <div className="footer__author">
          <a className="footer__project" href='https://practicum.yandex.ru' target="_blank" rel='noreferrer'>Яндекс.Практикум</a>
          <a className="footer__git" href='https://github.com/dubyninpavel' target="_blank" rel='noreferrer'>Github</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
