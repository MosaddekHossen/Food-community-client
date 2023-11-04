import { createContext } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/FirebaseConfig";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    // Sign Up
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign In 
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        signUp,
        signIn
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