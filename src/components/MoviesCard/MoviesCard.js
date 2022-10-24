import PropTypes from 'prop-types';

function MoviesCard({
  title, duration, like, link, index, isSavedMoviesPages,
}) {
  const isLiked = (
    `moviescard__like ${like ? 'moviescard__like_active' : ''}`
  );

  return (
    <li key={index} className="moviescard">
      <div className='moviescard__container'>
        <div className="moviescard__info">
          <h2 className='moviescard__title'>{title}</h2>
          <p className='moviescard__duration'>{duration}</p>
        </div>
        <button className={isSavedMoviesPages ? 'moviescard__delete' : isLiked } />
      </div>
      <img className='moviescard__photo' src={link} alt='Картинка к фильму' />
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
