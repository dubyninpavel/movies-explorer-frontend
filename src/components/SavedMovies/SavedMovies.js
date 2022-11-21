import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { durationShortMovie } from '../../constants/constants';

function SavedMovies({
  arrSavedMovies, showElseButton, deleteMovie,
}) {
  const [filterArr, setFilterArr] = useState([]);
  const [isActiveCheckBox, setIsActiveCheckBox] = useState(false);
  const [searchingFilter, setSearchingFilter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resultNotFound, setResultNotFound] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const arr = arrSavedMovies.filter((movies) => {
      const nameMovie = movies.nameRU.toLowerCase();
      return nameMovie.includes(searchingFilter);
    });
    if (isActiveCheckBox) {
      const arrCheckedCheckbox = arr.filter((movies) => {
        const durationMovie = movies.duration;
        return durationMovie < durationShortMovie;
      });
      setIsLoading(false);
      setFilterArr(arrCheckedCheckbox);
      localStorage.setItem('arrSearchingMovies', JSON.stringify(arrCheckedCheckbox));
    } else {
      setIsLoading(false);
      setFilterArr(arr);
      localStorage.setItem('arrSearchingMovies', JSON.stringify(arr));
    }
  }, [searchingFilter, isActiveCheckBox, arrSavedMovies]);

  useEffect(() => {
    if (filterArr.length === 0 && searchingFilter.length > 0) {
      setResultNotFound(true);
    } else {
      setResultNotFound(false);
    }
  }, [filterArr]);

  function handleSubmit(search) {
    if (!(search.toLowerCase() === searchingFilter)) {
      setIsLoading(true);
    }
    setSearchingFilter(search.toLowerCase());
  }

  function handleStateCheckbox() {
    setIsActiveCheckBox(!isActiveCheckBox);
  }

  return (
    <main>
      <SearchForm
        isSavedMoviesPages = {true}
        onSubmit = {handleSubmit}
        isActiveCheckBox = {isActiveCheckBox}
        handleStateCheckbox = {handleStateCheckbox}
      />
      <MoviesCardList
        isSavedMoviesPages = {true}
        filterArr = {filterArr}
        theFirstLoadingMovies = {arrSavedMovies.length}
        count = {arrSavedMovies.length}
        showElseButton = {showElseButton}
        resultNotFound = {resultNotFound}
        isLoading = {isLoading}
        deleteMovie = {deleteMovie}
      />
    </main>
  );
}

SavedMovies.propTypes = {
  arrSavedMovies: PropTypes.array,
  showElseButton: PropTypes.func,
  deleteMovie: PropTypes.func,
};

export default SavedMovies;
