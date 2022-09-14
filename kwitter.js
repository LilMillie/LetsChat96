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

function addUser() {
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"
  });
  localStorage.setItem("user_name", user_name);
  window.location = "kwitter_room.html";
}