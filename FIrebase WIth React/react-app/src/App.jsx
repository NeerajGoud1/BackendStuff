import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Auth";
import Protected from "./Protected";
import VerifyEmail from "./VerifyEmail2";
import Firestore from "./FireStore Databse/firestore";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<VerifyEmail />} />
          <Route path="/protected" element={<Protected />} />
        </Routes>
      </BrowserRouter> */}
      <Firestore />
    </>
  );
}

export default App;
