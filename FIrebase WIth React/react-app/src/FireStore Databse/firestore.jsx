import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
  where,
  query,
  updateDoc,
} from "firebase/firestore";
import { app } from "../firebase";

//there are two types of databases provided by the firebase
// 1. Realtime Database
//2. Firestore Database --> collections and documents based

const db = getFirestore(app);

import React from "react";

function firestore() {
  const addData = async () => {
    try {
      const docRef = await addDoc(collection(db, "employe"), {
        // 2nd argument specifies path   -- > if u want to make another collection with in employee you can give like employe/:id/collection name
        Name: "Ramesh",
        Age: 21,
        salary: 100000,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getAllData = async () => {
    const docs = await getDocs(collection(db, "users"));
    docs.forEach((doc) => {
      console.log(doc.data());
    });
  };

  const getData = async () => {
    const docRef = doc(db, "users", "7le1G3KPNXKRtPngajcf");
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
  };

  const getDocsByQuery = async () => {
    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("Age", "==", 20));
      const docs = await getDocs(q);
      //   console.log(docs.data());

      docs.forEach((doc) => {
        console.log(doc.data());
      });
    } catch (e) {
      console.log("Error", e.message);
    }
  };

  const update = async () => {
    const ref = doc(db, "users", "zDKdjTyXUR0STLBFD5hx");
    const res = await updateDoc(ref, {
      Age: 23,
    });
    console.log(res);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>FireStore Database</h1>
      <button onClick={addData}>Add Data</button>
      <button onClick={getAllData}> Get All Docs</button>
      <button onClick={getData}>Get Single Doc</button>
      <button onClick={getDocsByQuery}>Get Docs Via Query</button>
      <button onClick={update}>Update DOC</button>
    </div>
  );
}

export default firestore;
