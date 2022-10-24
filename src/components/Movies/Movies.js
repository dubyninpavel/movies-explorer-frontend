import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import More from '../More/More';
import dataMovies from '../../constants/dataMovies';

function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList
        arr = {dataMovies}
        isSavedMoviesPages = {false}
      />
      <More />
    </>
  );
}

export default Movies;
