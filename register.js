const firebaseConfig = {
  apiKey: "AIzaSyAMh-vGfCDQTRrBPEH_qm2zCxHb9Cm25Jg",
  authDomain: "cosmetic-2a870.firebaseapp.com",
  databaseURL: "https://cosmetic-2a870-default-rtdb.firebaseio.com/",
  projectId: "cosmetic-2a870",
  storageBucket: "cosmetic-2a870.appspot.com",
  messagingSenderId: "139801476243",
  appId: "1:139801476243:web:8a1c240d7b5b82678ca166"
};
 
const app = firebase.initializeApp(firebaseConfig); 
const dbRef = firebase.database().ref(); 

const detailsRef = dbRef.child('userdetails'); 
detailsRef.on("child_added", function(snapshot, prevChildKey) { 
  var newPost = snapshot.val(); 
}); 
 
function send(){ 
  var email = document.getElementById("email").value; 
  var username = document.getElementById("username").value; 
  var password = document.getElementById("password").value; 
  
  detailsRef.push().set({ 
    email: email, 
    username: username, 
    password: password, 
  }); 
   
 
} 