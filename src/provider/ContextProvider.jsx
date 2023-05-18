import { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const googleProvider = new GoogleAuthProvider;


  // Create a user
  const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
  }

  //User Sign in
  const signInUser = (email,password) =>{
    return signInWithEmailAndPassword(auth, email, password);
  }

  const authInfo = { user, createUser, signInUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
