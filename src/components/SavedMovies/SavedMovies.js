import MoviesCardList from '../MoviesCardList/MoviesCardList';
import dataMoviesSaved from '../../constants/dataMoviesSaved';

function SavedMovies() {
  return (
    <MoviesCardList
      arr = {dataMoviesSaved}
      isSavedMoviesPages = {true}
    />
  );
}

export default SavedMovies;
