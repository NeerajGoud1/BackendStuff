//firebase authentication with gmail and password

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";

import { app } from "../firebase";

const auth = getAuth(app);

export const CreateUserWithEmailAndPass = async (email, password, navigate) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    console.log(res.user.accessToken);
    const token = res.user.accessToken;
    localStorage.setItem("token", token);
    await sendEmailVerification(res.user);
    console.log("Verification email sent.");
    navigate("/home");
  } catch (e) {
    console.log("error : ", e.message);
  }
};

export const LogoutUser = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem("token");
    console.log("User signed out successfully.");
    navigate("/");
  } catch (e) {
    console.log("Logout error: ", e.message);
  }
};
