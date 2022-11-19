import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isLoggedIn, children, navigateTo }) {
  return isLoggedIn ? children : <Navigate to={navigateTo} />;
}

ProtectedRoute.propTypes = {
  isLoggedIn: PropTypes.bool,
  children: PropTypes.array,
  navigateTo: PropTypes.string,
};

export default ProtectedRoute;
