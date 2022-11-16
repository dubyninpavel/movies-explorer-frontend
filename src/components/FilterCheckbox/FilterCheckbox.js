import PropTypes from 'prop-types';

function FilterCheckbox({ isActiveCheckBox, handleStateCheckbox }) {
  return (
    <div className="filtercheckbox">
      <input checked={isActiveCheckBox} onChange={handleStateCheckbox} type='checkbox' className="filtercheckbox__checkbox" id='search'/>
      <label className="filtercheckbox__label" htmlFor='search'>Короткометражки</label>
    </div>
  );
}

FilterCheckbox.propTypes = {
  isActiveCheckBox: PropTypes.bool,
  handleStateCheckbox: PropTypes.func,
};

export default FilterCheckbox;
