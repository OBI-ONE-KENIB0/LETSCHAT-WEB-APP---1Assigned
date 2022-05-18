const firebaseConfig = {
    apiKey: "AIzaSyCdUEA1mj8FGNcIq5_sTf4v3wOMgCdiOm8",
    authDomain: "kwitter-5c82a.firebaseapp.com",
    databaseURL: "https://kwitter-5c82a-default-rtdb.firebaseio.com",
    projectId: "kwitter-5c82a",
    storageBucket: "kwitter-5c82a.appspot.com",
    messagingSenderId: "655885663880",
    appId: "1:655885663880:web:b380ee0889fe7c0284e93d",
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
