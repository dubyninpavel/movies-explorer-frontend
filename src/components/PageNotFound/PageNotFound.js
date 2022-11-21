import { Link } from 'react-router-dom';
import pageNotFoundImg from '../../images/page_not_found.jpg';

function PageNotFound() {
  return (
    <section className="pagenotfound">
      <img className='pagenotfound__img' src={pageNotFoundImg} alt='страница не найдена' />
      <p className="pagenotfound__subtitle">Извините, но такой страницы нет на нашем сайте на нашем сайте.</p>
      <p className="pagenotfound__subtitle">Возможно вы ввели неправильный адрес или страница была удалена.</p>
      <p className="pagenotfound__subtitle">Попробуйте вернуться на <Link className="pagenotfound__link" to='/'>Гланую страницу</Link></p>
    </section>
  );
}

export default PageNotFound;
