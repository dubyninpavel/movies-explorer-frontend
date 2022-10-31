import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="searchform">
      <div className='searchform__area'>
        <form className="searchform__form">
          <input type='search' className="searchform__input" placeholder='Фильм' required />
          <button type='submit' className="searchform__button"></button>
        </form>
        <hr className='searchform__hr' />
        <FilterCheckbox />
      </div>
      <hr className='searchform__line' />
    </section>
  );
}

export default SearchForm;
