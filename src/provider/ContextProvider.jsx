import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const myGithubProvider = new GithubAuthProvider() ;

  // Create a user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // User Sign in
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // User Sign out
  const signOutAUser = ()=> {
    setLoading(true);
    return signOut(auth);
  }

  // Google Sign in with popUp
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // GitHub Sign in with PopUp
  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, myGithubProvider);
  };

  // Set an Observer to monitor User
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
       console.log("Current user in Client Side is:", currentUser);
      setLoading(false);
    });
    return () =>{
      unSubscribe();
    }
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutAUser,
    googleSignIn,
    githubSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
