function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__container">
        <li className="portfolio__item">
          <div className="portfolio__works">
            <a className="portfolio__name" href="https://github.com/dubyninpavel/how-to-learn" target="_blank" rel='noreferrer'>Статичный сайт</a>
            <a className="portfolio__link" href="https://github.com/dubyninpavel/how-to-learn" target="_blank" rel='noreferrer'>↗</a>
          </div>
          <hr className="portfolio__line" />
        </li>
        <li className="portfolio__item">
          <div className="portfolio__works">
            <a className="portfolio__name" href="https://github.com/dubyninpavel/russian-travel" target="_blank" rel='noreferrer'>Адаптивный сайт</a>
            <a className="portfolio__link" href="https://github.com/dubyninpavel/russian-travel" target="_blank" rel='noreferrer'>↗</a>
          </div>
          <hr className="portfolio__line" />
        </li>
        <li className="portfolio__item">
          <div className="portfolio__works">
            <a className="portfolio__name" href="https://github.com/dubyninpavel/react-mesto-api-full" target="_blank" rel='noreferrer'>Одностраничное приложение</a>
            <a className="portfolio__link" href="https://github.com/dubyninpavel/react-mesto-api-full" target="_blank" rel='noreferrer'>↗</a>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
