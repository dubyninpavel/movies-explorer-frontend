function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__container">
        <li className="portfolio__works">
          <h3 className="portfolio__name">Статичный сайт</h3>
          <a className="portfolio__link" href="https://github.com/dubyninpavel/how-to-learn">↗</a>
        </li>
        <hr className="portfolio__line" />
        <li className="portfolio__works">
          <h3 className="portfolio__name">Адаптивный сайт</h3>
          <a className="portfolio__link" href="https://github.com/dubyninpavel/russian-travel">↗</a>
        </li>
        <hr className="portfolio__line" />
        <li className="portfolio__works">
          <h3 className="portfolio__name">Одностраничное приложение</h3>
          <a className="portfolio__link" href="https://github.com/dubyninpavel/react-mesto-api-full">↗</a>
        </li>
        <hr className="portfolio__line" />
      </ul>
    </section>
  );
}

export default Portfolio;
