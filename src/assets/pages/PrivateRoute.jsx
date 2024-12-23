
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types"; // For prop validation

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.authenticate.isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

// Validate props
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
