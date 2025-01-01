
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import {getdatabase , ref, set, get, child} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD4NO9FovjhoE5yfwoyNZGB4aB_zJQTZGw",
    authDomain: "venuease-625f6.firebaseapp.com",
    projectId: "venuease-625f6",
    storageBucket: "venuease-625f6.appspot.com",
    messagingSenderId: "461434112170",
    appId: "1:461434112170:web:f39c6febf64f7d47c668d3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //get ref to databases service
  const db=getDatabase(app);

  document.getElementById("submit").addEventListener('click',function(e){
    set(ref(db,'user/'+document.getElementById("time").value),
    {
      time: document.getElementById("time").value,
      venue: document.getElementById("venue").value,
      menu: document.getElementById("menu").value,
      ppl: document.getElementById("ppl").value,
      caterer: document.getElementById("caterer").value          
    });
    alert("Order Placed!")
  })
