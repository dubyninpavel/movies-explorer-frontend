import MoviesCardList from '../MoviesCardList/MoviesCardList';
import dataMoviesSaved from '../../constants/dataMoviesSaved';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies() {
  return (
    <main>
      <SearchForm />
      <MoviesCardList
        arr = {dataMoviesSaved}
        isSavedMoviesPages = {true}
      />
    </main>
  );
}

export default SavedMovies;
