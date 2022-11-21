import PropTypes from 'prop-types';

function ModalWindow({ isOpen, toggleModalWindow, textErrForModalWindow }) {
  return (
      <div className={`modalwindow ${isOpen ? 'modalwindow_is-active' : ''}`} onClick={toggleModalWindow}>
          <div className={'modalwindow__content'} onClick={(evt) => evt.stopPropagation()}>
              <button className="modalwindow__close" type="button" onClick={toggleModalWindow}></button>
              <h2 className="modalwindow__heading">{textErrForModalWindow}</h2>
          </div>
      </div>
  );
}

ModalWindow.propTypes = {
  isOpen: PropTypes.bool,
  toggleModalWindow: PropTypes.func,
  textErrForModalWindow: PropTypes.string,
};

export default ModalWindow;
