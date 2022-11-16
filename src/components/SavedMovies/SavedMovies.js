/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies({
  arrSavedMovies, showElseButton, deleteLikeCard, deleteCard,
}) {
  const [filterArr, setFilterArr] = useState([]);
  const [isActiveCheckBox, setIsActiveCheckBox] = useState(JSON.parse(localStorage.getItem('stateCheckboxSavedMovies')) || false);
  const [searchingFilter, setSearchingFilter] = useState(JSON.parse(localStorage.getItem('searchingFilterSavedMovies')) || '');
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
        return durationMovie < 40;
      });
      setIsLoading(false);
      setFilterArr(arrCheckedCheckbox);
      localStorage.setItem('arrSearchingMovies', JSON.stringify(arrCheckedCheckbox));
    } else {
      setIsLoading(false);
      setFilterArr(arr);
      localStorage.setItem('arrSearchingMoviesSaved', JSON.stringify(arr));
    }
  }, [searchingFilter, isActiveCheckBox, arrSavedMovies]);

  useEffect(() => {
    if (filterArr.length === 0 && searchingFilter.length >= 0) {
      setResultNotFound(true);
    } else {
      setResultNotFound(false);
    }
  }, [filterArr]);

  function handleSubmit(search) {
    localStorage.setItem('searchingFilterSavedMovies', JSON.stringify(search));
    setSearchingFilter(search.toLowerCase());
  }

  function handleStateCheckbox() {
    setIsActiveCheckBox(!isActiveCheckBox);
    localStorage.setItem('stateCheckboxSavedMovies', JSON.stringify(!isActiveCheckBox));
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
        showElseButton = {showElseButton}
        count = {arrSavedMovies.length}
        isLoading = {isLoading}
        resultNotFound = {resultNotFound}
        theFirstLoadingMovies = {arrSavedMovies.length}
        deleteLikeCard = {deleteLikeCard}
        deleteCard = {deleteCard}
      />
    </main>
  );
}

SavedMovies.propTypes = {
  arrSavedMovies: PropTypes.array,
  showElseButton: PropTypes.func,
  deleteLikeCard: PropTypes.func,
  deleteCard: PropTypes.func,
};

export default SavedMovies;
