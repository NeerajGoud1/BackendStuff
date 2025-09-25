import { useContext, createContext } from "react";
import {
  CreateUserWithEmailAndPass,
  LogoutUser,
} from "../Authentications/AuthWithEmialAndPass";

import { SignUpWithGoogle } from "../Authentications/AuthwithGoogle";

export const FirebaseContext = createContext(null);

//creating custom hook (without this also fine, you can use directly via use context where ever u need)
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider
      value={{ CreateUserWithEmailAndPass, LogoutUser, SignUpWithGoogle }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
