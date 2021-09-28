//just configuration for connecting to the firebase

//1st
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";

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

//4th
export default app;

// ! this file attached to the file name - state.js
