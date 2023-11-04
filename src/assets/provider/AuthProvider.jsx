import { createContext } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/FirebaseConfig";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    // Sign Up
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        signUp
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;