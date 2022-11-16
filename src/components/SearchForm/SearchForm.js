/* eslint-disable comma-dangle */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({
  isSavedMoviesPages, onSubmit, isActiveCheckBox, handleStateCheckbox,
}) {
  const [valueInput, setValueInput] = useState(
    isSavedMoviesPages ? JSON.parse(localStorage.getItem('searchingFilterSavedMovies')) : JSON.parse(localStorage.getItem('searchingFilter'))
  );

  function handleChangeInputs(evt) {
    setValueInput(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(valueInput);
  }

  return (
    <section className="searchform">
      <div className='searchform__area'>
        <form className="searchform__form" onSubmit={handleSubmit} noValidate>
          <input value={valueInput || ''} type='search' name='search' className="searchform__input" placeholder='Фильм' onChange={handleChangeInputs} required />
          <button type='submit'className="searchform__button"></button>
        </form>
        <hr className='searchform__hr' />
        <FilterCheckbox
          isActiveCheckBox = {isActiveCheckBox}
          handleStateCheckbox = {handleStateCheckbox}
        />
      </div>
      <hr className='searchform__line' />
    </section>
  );
}

SearchForm.propTypes = {
  isSavedMoviesPages: PropTypes.bool,
  onSubmit: PropTypes.func,
  isActiveCheckBox: PropTypes.bool,
  handleStateCheckbox: PropTypes.func,
};

export default SearchForm;
