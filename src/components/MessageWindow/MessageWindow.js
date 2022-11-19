import PropTypes from 'prop-types';
import { susuccessfulUpdateDataUser } from '../../constants/constants';

function MessageWindow({ onClickBtnClose }) {
  return (
    <div className="messagewindow">
      <div className="messagewindow__close" onClick={onClickBtnClose}>
        <span></span>
      </div>
      <p className="messagewindow__text">{susuccessfulUpdateDataUser}</p>
    </div>
  );
}

MessageWindow.propTypes = {
  onClickBtnClose: PropTypes.func,
};

export default MessageWindow;
