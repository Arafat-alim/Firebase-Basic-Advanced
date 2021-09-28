//! this file is the part of the firebase.js
// here we import the package we needed in our application
//1st import the firebase we just created
import app from "./firebase.js";
//3rd
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js";

//2nd
let auth = getAuth(app);
//console.log(typeof auth); //! object

// ! onAuthStateChanged - realtime checking the user is login or not
//4th
let state = onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Logged in ");
  } else {
    console.log("Log Out");
  }
});
console.log(typeof state); //! function

// ! --  B O O O M (finished)
