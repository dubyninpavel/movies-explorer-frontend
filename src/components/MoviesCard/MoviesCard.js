import PropTypes from 'prop-types';

function MoviesCard({
  title, duration, link, index, isSavedMoviesPages,
}) {
  /* const isLiked = (
    `moviescard__like ${like ? 'moviescard__like_active' : ''}`
  );
    <button className={isSavedMoviesPages ? 'moviescard__delete' : isLiked } />
 */
  return (
    <li key={index} className="moviescard">
      <img className='moviescard__photo' src={link} alt='Картинка к фильму' />
      <div className='moviescard__container'>
        <div className="moviescard__info">
          <h2 className='moviescard__title'>{title}</h2>
          <p className='moviescard__duration'>{duration}</p>
        </div>
        {
          isSavedMoviesPages ? <button type='button' className='moviescard__delete'></button>
            : <div className='moviescard__favorite'>
          <input className='moviescard__checkbox' type='checkbox' />
          <label className='moviescard__label'></label>
        </div>
        }
      </div>
    </li>
  );
}

MoviesCard.propTypes = {
  title: PropTypes.string,
  duration: PropTypes.string,
  like: PropTypes.bool,
  link: PropTypes.string,
  index: PropTypes.number,
  isSavedMoviesPages: PropTypes.bool,
};

export default MoviesCard;
