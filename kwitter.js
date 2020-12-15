function adduser(){
    username=document.getElementById("user_name").value;
    localStorage.setItem("usernamekey",username);
    window.location="kwitter_room.html";
}