function Techs() {
  return (
    <section className="techs">
      <h2 className="aboutproject__header" id='techs-link'>Технологии</h2>
      <hr className="aboutproject__line" />
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__grid">
        <li className="techs__cell">HTML</li>
        <li className="techs__cell">CSS</li>
        <li className="techs__cell">JS</li>
        <li className="techs__cell">React</li>
        <li className="techs__cell">Git</li>
        <li className="techs__cell">Express.js</li>
        <li className="techs__cell">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
