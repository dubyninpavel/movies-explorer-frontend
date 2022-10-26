import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import More from '../More/More';
import dataMovies from '../../constants/dataMovies';

function Movies() {
  return (
    <main>
      <SearchForm />
      <MoviesCardList
        arr = {dataMovies}
        isSavedMoviesPages = {false}
      />
      <More />
    </main>
  );
}

export default Movies;
