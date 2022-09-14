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

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}

function getData() {
    firebase.database().ref("/"+room_name).on('value', function(snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function(childSnapshot) {
                childKey  = childSnapshot.key;
                childData = childSnapshot.val();
                if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();