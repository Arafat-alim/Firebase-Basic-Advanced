//! Single firebase connectivity + firebase auth(onAuthstatechanged)

//1st
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
// 4th
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js";

//2nd
let firebaseApp = {
  apiKey: "AIzaSyCvDSVBQrfeq91U5RDGyBRdYWFHSSeNBhw",
  authDomain: "fir-fbf06.firebaseapp.com",
  projectId: "fir-fbf06",
  storageBucket: "fir-fbf06.appspot.com",
  messagingSenderId: "809242851479",
  appId: "1:809242851479:web:f0c809b957c76fa3a711d2",
};

//3rd
let app = initializeApp(firebaseApp);
//5th
let auth = getAuth(app);
//5th
let state = onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Logged in");
  } else {
    console.log("log Out");
  }
});
