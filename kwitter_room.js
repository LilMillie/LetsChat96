var firebaseConfig = {
    apiKey: "AIzaSyDtWoFJerc-XRSI2-8MZCbzt30fJnqBGUA",
    authDomain: "lets-chat-2e28d.firebaseapp.com",
    databaseURL: "https://lets-chat-2e28d-default-rtdb.firebaseio.com",
    projectId: "lets-chat-2e28d",
    storageBucket: "lets-chat-2e28d.appspot.com",
    messagingSenderId: "1092520198007",
    appId: "1:1092520198007:web:d2c4612bd55bb28951ab72",
    measurementId: "G-JRGDV2EE7S"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML += "Welcome "+ user_name;

function addRoom() {
    room_name = document.getElementById("room_name").value ;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room"
    });
    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', 
        function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                childKey  = childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log("Room Name - " + Room_names);
                row = "<div class='room_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id);'>#"+ Room_names +"</div><hr>";
                document.getElementById("output").innerHTML += row;
   //End code
            });
        });
    }
getData();

function redirectToRoomName(name) {
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
}