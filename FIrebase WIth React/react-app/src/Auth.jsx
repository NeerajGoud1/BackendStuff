import { useState } from "react";
import { useFirebase } from "./context/FIrebase";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const firebase = useFirebase();

  return (
    <>
      <input
        placeholder="Enter email"
        name="email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        placeholder="Enter password"
        name="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button
        onClick={() =>
          firebase.CreateUserWithEmailAndPass(email, password, navigate)
        }
      >
        Submit
      </button>
      <br /> <br />
      <button onClick={() => firebase.SignUpWithGoogle(navigate)}>
        SignUp With Google
      </button>
    </>
  );
}
