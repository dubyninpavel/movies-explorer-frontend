import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <section className="pagenotfound">
      <h2 className="pagenotfound__title">404</h2>
      <p className="pagenotfound__subtitle">Страница не найдена</p>
      <Link className="pagenotfound__link" to='/'>Назад</Link>
    </section>
  );
}

export default PageNotFound;
