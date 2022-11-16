/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function MoviesCard({
  nameRU, duration, link, index, isSavedMoviesPages, movie, like, handleLike,
  setLikeMovies, deleteLikeCard, deleteCard,
}) {
  const [isLike, setLike] = useState(like);
  const [movies, setMovies] = useState(movie);
  const [movieId, setMovieId] = useState('');

  function handlerChangeCheckbox() {
    if (isLike === true) {
      deleteLikeCard(setLike, movies._id, setMovieId);
    } else {
      setLikeMovies(setLike, movies, setMovies, setMovieId);
    }
  }

  function handlerClickDeleteMovie() {
    deleteCard(movie._id);
  }

  function movieDuration(minute) {
    return `${Math.floor(minute / 60)}ч ${minute % 60}мин`;
  }

  return (
    <li key={index} className="moviescard">
      <img className='moviescard__photo' src={isSavedMoviesPages ? link : `https://api.nomoreparties.co${link}`} alt='Картинка к фильму' />
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
  nameRU: PropTypes.string,
  duration: PropTypes.number,
  like: PropTypes.bool,
  link: PropTypes.string,
  index: PropTypes.number,
  isSavedMoviesPages: PropTypes.bool,
  movie: PropTypes.object,
  setLikeMovies: PropTypes.func,
  deleteLikeCard: PropTypes.func,
  handleLike: PropTypes.func,
  deleteCard: PropTypes.func,
};

export default MoviesCard;
