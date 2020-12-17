//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyC8mnFks131f81XyiS422p1fbWCq2krV6k",
      authDomain: "kwitter-app-f1016.firebaseapp.com",
      databaseURL: "https://kwitter-app-f1016.firebaseio.com",
      projectId: "kwitter-app-f1016",
      storageBucket: "kwitter-app-f1016.appspot.com",
      messagingSenderId: "1086505816092",
      appId: "1:1086505816092:web:187d0a0a7fc2111e204fd9",
      measurementId: "G-SYWLT6N5DE"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

 user_name=localStorage.getItem("usernamekey");
 room_name=localStorage.getItem("roomnamekey");

 function send(){
       var msg=document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
       name:user_name,message:msg,like:0
       });
       document.getElementById("msg").value="";
 }
 
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("usernamekey");
      localStorage.removeItem("roomnamekey");
      window.location="index.html";
}