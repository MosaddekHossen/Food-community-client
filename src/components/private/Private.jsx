import { useContext } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "../../provider/AuthProvider";

const Private = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>

};

Private.propTypes = {
    children: PropTypes.node
}

export default Private;