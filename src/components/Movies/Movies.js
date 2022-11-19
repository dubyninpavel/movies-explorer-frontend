import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import More from '../More/More';
import {
  countMoviesForDeskTop, countMoviesForTablet, countMoviesForMobile, paginationForDeskTop,
  paginationForTablet, paginationForMobile, durationShortMovie, bigWidthWindow, mediumWidthWindow,
} from '../../constants/constants';

function Movies({
  arrMovies, showElseButton, isActiveElseButton, setLikeMovies, deleteLikeMovies,
}) {
  const [filterArr, setFilterArr] = useState([]);
  const [searchingFilter, setSearchingFilter] = useState(JSON.parse(localStorage.getItem('searchingFilter')) || '');
  const [isActiveCheckBox, setIsActiveCheckBox] = useState(JSON.parse(localStorage.getItem('stateCheckbox')) || false);
  const [countPaginationResize, setCountPaginationResize] = useState(0);
  const [countPagination, setCountPagination] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [theFirstLoadingMovies, setTheFirstLoadingMovies] = useState(0);
  const [resultNotFound, setResultNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function changeWindowWidth() {
    setWindowWidth(window.innerWidth);
  }

  function setTimeoutResize() {
    setTimeout(changeWindowWidth, 2000);
  }

  function handleCountPagination(count) {
    setCountPaginationResize(count);
  }

  useEffect(() => {
    window.addEventListener('resize', setTimeoutResize);
    if (windowWidth >= bigWidthWindow) {
      setTheFirstLoadingMovies(countMoviesForDeskTop);
      handleCountPagination(paginationForDeskTop);
    } else if (windowWidth < bigWidthWindow && windowWidth >= mediumWidthWindow) {
      setTheFirstLoadingMovies(countMoviesForTablet);
      handleCountPagination(paginationForTablet);
    } else {
      setTheFirstLoadingMovies(countMoviesForMobile);
      handleCountPagination(paginationForMobile);
    }

    return () => {
      window.removeEventListener('resize', setTimeoutResize);
    };
  }, [windowWidth]);

  useEffect(() => {
    const arr = arrMovies.filter((movies) => {
      const nameMovie = movies.nameRU.toLowerCase();
      return nameMovie.includes(searchingFilter);
    });
    if (isActiveCheckBox) {
      const arrChecked = arr.filter((movies) => {
        const durationMovie = movies.duration;
        return durationMovie < durationShortMovie;
      });
      setIsLoading(false);
      setFilterArr(arrChecked);
      localStorage.setItem('arrSearchingMovies', JSON.stringify(arrChecked));
    } else {
      setIsLoading(false);
      setFilterArr(arr);
      localStorage.setItem('arrSearchingMovies', JSON.stringify(arr));
    }
  }, [searchingFilter, isActiveCheckBox, arrMovies]);

  useEffect(() => {
    if (filterArr.length === 0 && searchingFilter.length > 0) {
      setResultNotFound(true);
    } else {
      setResultNotFound(false);
    }
  }, [filterArr]);

  function handleSubmit(search) {
    localStorage.setItem('searchingFilter', JSON.stringify(search));
    if (!(search.toLowerCase() === searchingFilter)) {
      setIsLoading(true);
    }
    setSearchingFilter(search.toLowerCase());
  }

  function handleClickMoreButton() {
    setCountPagination(countPagination + countPaginationResize);
  }

  function handleStateCheckbox() {
    setIsActiveCheckBox(!isActiveCheckBox);
    localStorage.setItem('stateCheckbox', JSON.stringify(!isActiveCheckBox));
  }

  return (
    <main>
      <SearchForm
        isSavedMoviesPages = {false}
        onSubmit = {handleSubmit}
        isActiveCheckBox = {isActiveCheckBox}
        handleStateCheckbox = {handleStateCheckbox}
      />
      <MoviesCardList
        isSavedMoviesPages = {false}
        filterArr = {filterArr}
        theFirstLoadingMovies = {theFirstLoadingMovies}
        count = {countPagination}
        showElseButton = {showElseButton}
        resultNotFound = {resultNotFound}
        isLoading = {isLoading}
        setLikeMovies = {setLikeMovies}
        deleteLikeMovies = {deleteLikeMovies}
      />
      <More
        filterArr = {filterArr}
        handleClickBtn = {handleClickMoreButton}
        isActiveElseButton = {isActiveElseButton}
      />
    </main>
  );
}

Movies.propTypes = {
  arrMovies: PropTypes.array,
  showElseButton: PropTypes.func,
  isActiveElseButton: PropTypes.bool,
  setLikeMovies: PropTypes.func,
  deleteLikeMovies: PropTypes.func,
};

export default Movies;
