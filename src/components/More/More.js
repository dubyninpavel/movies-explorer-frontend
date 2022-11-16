import PropTypes from 'prop-types';

function More({ filterArr, handleClickBtn, isActiveElseButton }) {
  return (
    (filterArr.length && isActiveElseButton) ? <section className='more'>
      <button className="more__button" onClick={handleClickBtn}>Еще</button>
    </section> : ''
  );
}

More.propTypes = {
  filterArr: PropTypes.array,
  handleClickBtn: PropTypes.func,
  isActiveElseButton: PropTypes.bool,
};

export default More;
