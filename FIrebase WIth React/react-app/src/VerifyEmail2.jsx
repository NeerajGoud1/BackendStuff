import React, { useEffect, useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { app } from "./firebase";
import { useNavigate } from "react-router-dom";
const auth = getAuth(app);

function verifyEmail() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, async (user) => {
  //     if (user) {
  //       if (!user.emailVerified) {
  //         console.log("User not verified!");
  //         // Optionally log out or block access
  //         // signOut(auth);
  //         setUser(null);
  //       } else {
  //         console.log("User is verified.");
  //         await user.reload();
  //         setUser(user);
  //       }
  //     }
  //   });
  //   return () => unsubscribe();
  // }, []);

  const [checking, setChecking] = useState(false);

  useEffect(() => {
    const interval = setInterval(async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        setChecking(true);
        await currentUser.reload();
        if (currentUser.emailVerified) {
          console.log("User verified!");
          setUser(currentUser);
          clearInterval(interval); // stop polling
          // replace "/dashboard" with your destination
        } else {
          console.log("User not yet verified.");
        }
        setChecking(false);
      }
    }, 5000); // check every 5 seconds

    return () => clearInterval(interval);
  }, [navigate]);

  if (user === null) {
    return (
      <div>
        <h1>
          Please Verify Your Email, We have Sent Verification Link <br />
          if you not received any email verification link, pls check your email
          and password once
          <br />
          pls refresh the page after u verified the email
        </h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Hi {user.email}</h1>
    </div>
  );
}

export default verifyEmail;
