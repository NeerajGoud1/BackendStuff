import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const SignUpWithGoogle = async (navigate) => {
  try {
    const res = await signInWithRedirect(auth, provider); //signInWithPopup
    console.log(res.user.accessToken);
    const token = res.user.accessToken;
    localStorage.setItem("token", token);
    navigate("/verify");
  } catch (e) {
    console.log("Error : ", e.message);
  }
};
