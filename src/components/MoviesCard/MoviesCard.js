import PropTypes from 'prop-types';
import { useState } from 'react';

function MoviesCard({
  index, isSavedMoviesPages, nameRU, duration, like, link, trailerLink, movie, movieId,
  setLikeMovies, deleteLikeMovies, deleteMovie,
}) {
  const [isLike, setLike] = useState(like);

  function handlerChangeCheckbox() {
    if (isLike === true) {
      deleteLikeMovies(setLike, movieId);
    } else {
      setLikeMovies(setLike, movie);
    }
  }

  function handlerClickDeleteMovie() {
    deleteMovie(movieId);
  }

  function movieDuration(minute) {
    return `${Math.floor(minute / 60)}ч ${minute % 60}мин`;
  }

  return (
    <li key={index} className="moviescard">
      <a className='moviescard__trailerlink' href={isSavedMoviesPages ? trailerLink : movie.trailerLink} target="_blank" rel='noreferrer'>
        <img className='moviescard__photo' src={isSavedMoviesPages ? link : `https://api.nomoreparties.co${link}`} alt='Картинка к фильму' />
      </a>
      <div className='moviescard__container'>
        <div className="moviescard__info">
          <h2 className='moviescard__title'>{nameRU}</h2>
          <p className='moviescard__duration'>{movieDuration(duration)}</p>
        </div>
        {
          isSavedMoviesPages ? <button type='button' className='moviescard__delete' onClick={handlerClickDeleteMovie}></button>
            : <div className='moviescard__favorite'>
          <input className='moviescard__checkbox' onChange={handlerChangeCheckbox} type='checkbox' checked={isLike} />
          <label className='moviescard__label'></label>
        </div>
        }
      </div>
    </li>
  );
}

MoviesCard.propTypes = {
  index: PropTypes.number,
  isSavedMoviesPages: PropTypes.bool,
  nameRU: PropTypes.string,
  duration: PropTypes.number,
  like: PropTypes.bool,
  link: PropTypes.string,
  trailerLink: PropTypes.string,
  movie: PropTypes.object,
  movieId: PropTypes.string,
  setLikeMovies: PropTypes.func,
  deleteLikeMovies: PropTypes.func,
  deleteMovie: PropTypes.func,
};

export default MoviesCard;
