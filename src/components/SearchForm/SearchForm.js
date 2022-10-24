import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="searchform">
      <div className='searchform__area'>
        <form className="searchform__form">
          <input type='search' className="searchform__input" placeholder='Фильмы' />
          <button className="searchform__button"></button>
        </form>
        <FilterCheckbox />
      </div>
      <hr className='searchform__line' />
    </section>
  );
}

export default SearchForm;
