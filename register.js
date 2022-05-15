const firebaseConfig = {
  apiKey: "AIzaSyDY-44eNyPQSqGqSCyrKqE7X-P-phHzF_s",
  authDomain: "account-335c5.firebaseapp.com",
  databaseURL: "https://account-335c5-default-rtdb.firebaseio.com",
  projectId: "account-335c5",
  storageBucket: "account-335c5.appspot.com",
  messagingSenderId: "72350082635",
  appId: "1:72350082635:web:91fd75e4aba8592de5cfce"
};
const app = firebase.initializeApp(firebaseConfig); 
const dbRef = firebase.database().ref(); 

const detailsRef = dbRef.child('userdetails'); 
detailsRef.on("child_added", function(snapshot, prevChildKey) { 
  var newPost = snapshot.val(); 
}); 
function send(){ 
 
  var username = document.getElementById("username").value; 
  var password = document.getElementById("password").value; 
  
  detailsRef.push().set({   
    username: username, 
    password: password, 
  }); 
}
 
function get(){ 
  var email = document.getElementById("email1").value; 
  var username = document.getElementById("username1").value; 
  var password = document.getElementById("password1").value; 
  
  detailsRef.push().set({ 
    email: email, 
    username: username, 
    password: password, 
  }); 
}