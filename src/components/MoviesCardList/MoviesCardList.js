/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { resultNotFoundMessage } from '../../constants/constants';

function MoviesCardList({
  filterArr, isSavedMoviesPages, count, showElseButton, theFirstLoadingMovies, resultNotFound,
  isLoading, setLikeMovies, deleteLikeCard, deleteCard,
}) {
  const [sumCardDisplayed, setSumCardDisplayed] = useState(0);

  const filter = (
    `moviescardlist__container ${filterArr.length ? '' : 'moviescardlist__container_none'}`
  );
  const blockOfResult = (
    `moviescardlist__blockofresult ${(resultNotFound) && 'moviescardlist__blockofresult_active'}`
  );

  useEffect(() => {
    setSumCardDisplayed(theFirstLoadingMovies + count);
    if (sumCardDisplayed < filterArr.length) {
      showElseButton(true);
    } else {
      showElseButton(false);
    }
  }, [theFirstLoadingMovies, count, sumCardDisplayed, filterArr]);

  return (
    <section className="moviescardlist">
      {isLoading && <Preloader />}
      <div className={blockOfResult}>
          <h2 className='moviescardlist__textnotfound'>{resultNotFoundMessage}</h2>
      </div>
      <ul className={filter}>
      {isSavedMoviesPages ? filterArr.map((movie, i) => (
        <MoviesCard
          key = {i}
          index = {i}
          nameRU = {movie.nameRU}
          duration = {movie.duration}
          like = {movie.like}
          link = {movie.image}
          isSavedMoviesPages = {isSavedMoviesPages}
          movie = {movie}
          deleteLikeCard = {deleteLikeCard}
          deleteCard = {deleteCard}
        />
      )) : filterArr.map((movie, i) => (
        i < sumCardDisplayed && <MoviesCard
          key = {movie.id}
          index = {movie.id}
          nameRU = {movie.nameRU}
          duration = {movie.duration}
          like = {movie.like}
          link = {movie.image.url}
          isSavedMoviesPages = {isSavedMoviesPages}
          movie = {movie}
          setLikeMovies = {setLikeMovies}
          deleteLikeCard = {deleteLikeCard}
        />
      ))}
      </ul>
    </section>
  );
}

MoviesCardList.propTypes = {
  filterArr: PropTypes.array,
  isSavedMoviesPages: PropTypes.bool,
  count: PropTypes.number,
  showElseButton: PropTypes.func,
  theFirstLoadingMovies: PropTypes.number,
  resultNotFound: PropTypes.bool,
  isLoading: PropTypes.bool,
  setLikeMovies: PropTypes.func,
  deleteLikeCard: PropTypes.func,
  deleteCard: PropTypes.func,
};

export default MoviesCardList;
