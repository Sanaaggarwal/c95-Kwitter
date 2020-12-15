//ADD YOUR FIREBASE LINKS HERE
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
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
   
function addroom(){
 room_name=document.getElementById("room_name").value;
 localStorage.setItem("roomnamekey",room_name);
 firebase.database().ref("/").child(room_name).update({purpose:"addroomname"});
 window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
 console.log(Room_names);
 row="<div class='room_name' id="+Room_names+" onclick='RedirectToRoomname(this.id)' >#"+Room_names+"</div> <hr>";
 document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function RedirectToRoomname(name){
      console.log(name);
      localStorage.setItem("roomnamekey",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("usernamekey");
      localStorage.removeItem("roomnamekey");
      window.location="index.html";
}