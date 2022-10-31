import PropTypes from 'prop-types';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ arr, isSavedMoviesPages }) {
  return (
    <section className="moviescardlist">
      <ul className="moviescardlist__container">
        {arr.map(({
          title, duration, like, link,
        }, index) => (
          <MoviesCard
            key = {index}
            index = {index}
            title = {title}
            duration = {duration}
            like = {like}
            link = {link}
            isSavedMoviesPages = {isSavedMoviesPages}
          />
        ))}
      </ul>
    </section>
  );
}

MoviesCardList.propTypes = {
  arr: PropTypes.array,
  isSavedMoviesPages: PropTypes.bool,
};

export default MoviesCardList;
