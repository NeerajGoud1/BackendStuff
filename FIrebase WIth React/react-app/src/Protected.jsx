import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { app } from "./firebase";
import { useFirebase } from "./context/FIrebase";
const auth = getAuth(app);

function Protected() {
  const navigate = useNavigate();
  const Firebase = useFirebase();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (!user.emailVerified) {
          console.log("Email not verified!");
          // Optionally log out or block access
          // signOut(auth);
          Firebase.LogoutUser;
        } else {
          console.log("User is verified.");
        }
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>You Successfully Logged In</h1>
      <button onClick={() => Firebase.LogoutUser(navigate)}>LogOut</button>
    </div>
  );
}

export default Protected;
