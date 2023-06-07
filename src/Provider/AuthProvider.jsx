import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import Swal from "sweetalert2";
export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [reload, setReload] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(user);

  const updateUserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const singIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const singInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };
  const logOut = () => {
    return signOut(auth);
  };

  // observe auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("auth state change", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    if (reload) {
      Swal.fire({
        icon: "success",
        text: `Welcome ${user.displayName}✨`,
        title: "User Created Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    return () => unsubscribe();
  }, [reload]);

  const authInfo = {
    user,
    loading,
    createUser,
    updateUserProfile,
    setReload,
    singIn,
    singInWithGoogle,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
