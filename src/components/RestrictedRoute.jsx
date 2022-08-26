import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const RestrictedRoute = ({ children }) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return isLoggedIn ? <Navigate to="/contacts" /> : children;
};

export default RestrictedRoute;

RestrictedRoute.propTypes = {
    children: PropTypes.element.isRequired,
};
