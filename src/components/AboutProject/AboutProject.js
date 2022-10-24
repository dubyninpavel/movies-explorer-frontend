function AboutProject() {
  return (
    <section className="aboutproject">
      <h2 className="aboutproject__header" id='aboutproject-link'>О проекте</h2>
      <hr className="aboutproject__line" />
      <div className="aboutproject__info">
        <div className="aboutproject__container">
          <h3 className="aboutproject__text">Дипломный проект включал 5 этапов</h3>
          <p className="aboutproject__sunline">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="aboutproject__container">
          <h3 className="aboutproject__text">На выполнение диплома ушло 5 недель</h3>
          <p className="aboutproject__sunline">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="aboutproject__scale">
        <div className="aboutproject__progress">
          <p className="aboutproject__week">1 неделя</p>
        </div>
        <div className="aboutproject__progress">
          <p className="aboutproject__week">4 недели</p>
        </div>
      </div>
      <div className="aboutproject__scale">
        <div className="aboutproject__undertext">
          <p className="aboutproject__subline">Back-end</p>
        </div>
        <div className="aboutproject__undertext">
          <p className="aboutproject__subline">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
