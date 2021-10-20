import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, updateProfile, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "../pages/LogIn/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const [error, setError] = useState('');

    const [user, setUser] = useState({});

    const [isLoading, setIsLoading] = useState(true);



    const auth = getAuth();



    // Registering with Email and Password
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    };
    const handleNameChange = e => {
        setName(e.target.value);
    };

    const setUserName = () => {
        updateProfile(auth.currentUser, {displayName: name}).then(result => {});
    };

    const handleRegistration = e => {
        e.preventDefault();
        setIsLoading(true);
        if(password.length < 6) { 
            setError("Password must contain at least 6 characters.")
            return;
        }
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)) { 
            setError("Password must contain at least 2 uppercase characters.")
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setError('');
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // registering with email and password
    const handleLogIn = e => {
        e.preventDefault();
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };


    // signing in with google 
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    // loging out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {})
            .finally(() => setIsLoading(false));
    };


    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });

        return () => unsubscribed;
    }, [])




    return {
        user,
        signInUsingGoogle,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        handleLogIn,
        logOut,
        error,
        isLoading
    }
};


export default useFirebase;