
const firebaseConfig = {
      apiKey: "AIzaSyAXpIQm_z7MbgYRTaxwKY4KKTZ_CRovCac",
      authDomain: "kwitter-2c4fb.firebaseapp.com",
      databaseURL: "https://kwitter-2c4fb-default-rtdb.firebaseio.com",
      projectId: "kwitter-2c4fb",
      storageBucket: "kwitter-2c4fb.appspot.com",
      messagingSenderId: "385509001083",
      appId: "1:385509001083:web:42deefdb86df66e7a6dfde"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
