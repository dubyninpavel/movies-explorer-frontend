import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { resultNotFoundMessage } from '../../constants/constants';

function MoviesCardList({
  isSavedMoviesPages, filterArr, theFirstLoadingMovies, count, showElseButton, resultNotFound,
  isLoading, setLikeMovies, deleteLikeMovies, deleteMovie,
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
      {isSavedMoviesPages ? filterArr.map((movie) => (
        <MoviesCard
          key = {movie.movieId}
          index = {movie.movieId}
          isSavedMoviesPages = {isSavedMoviesPages}
          nameRU = {movie.nameRU}
          duration = {movie.duration}
          like = {movie.like}
          link = {movie.image}
          trailerLink = {movie.trailerLink}
          movieId = {movie._id}
          deleteMovie = {deleteMovie}
        />
      )) : filterArr.map((movie, i) => (
        i < sumCardDisplayed && <MoviesCard
          key = {movie.id}
          index = {movie.id}
          isSavedMoviesPages = {isSavedMoviesPages}
          nameRU = {movie.nameRU}
          duration = {movie.duration}
          like = {movie.like}
          link = {movie.image.url}
          movie = {movie}
          movieId = {movie._id}
          setLikeMovies = {setLikeMovies}
          deleteLikeMovies = {deleteLikeMovies}
        />
      ))}
      </ul>
    </section>
  );
}

MoviesCardList.propTypes = {
  isSavedMoviesPages: PropTypes.bool,
  filterArr: PropTypes.array,
  theFirstLoadingMovies: PropTypes.number,
  count: PropTypes.number,
  showElseButton: PropTypes.func,
  resultNotFound: PropTypes.bool,
  isLoading: PropTypes.bool,
  setLikeMovies: PropTypes.func,
  deleteLikeMovies: PropTypes.func,
  deleteMovie: PropTypes.func,
};

export default MoviesCardList;
