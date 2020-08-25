// var firebaseConfig = {
//     apiKey: "AIzaSyDYUhGj2CoDTvzCi1BApBRQK_miwoMmmMc",
//     authDomain: "mybrand-db60c.firebaseapp.com",
//     databaseURL: "https://mybrand-db60c.firebaseio.com",
//     projectId: "mybrand-db60c",
//     storageBucket: "mybrand-db60c.appspot.com",
//     messagingSenderId: "1088363171783",
//     appId: "1:1088363171783:web:3de045e9f128f18573d3e2",
//     measurementId: "G-1LZ6JTHJ03"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
  
  
//   var db=firebase.firestore();
 
  

    
//     var btn=document.getElementById('btn').addEventListener('click',signUp)
//     var br2=document.getElementById('btn2').addEventListener('click',signIn);
  
  

//     function signUp(){
    
//       let email=getInput('email').value;
//       let password=getInput('password').value;
//       let passFormat= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

//       if(password.match(passFormat)){
//             //  create user
//       firebase.auth().createUserWithEmailAndPassword(email,password).catch(function(error){
//       // Handle Errors here.
//       console.log(Error.code);
//       console.log(Error.message);

//      })
//         alert('Account Created Successfully');
//         return false;
//       }
//       else{
//         alert('Input Password and Submit [7 to 15 characters which contain at least one numeric digit and a special character')
//         return false;
//       }
//     }

//     function signIn(){
//       let email=getInput('email').value;
//       let password=getInput('password').value;  
      
//       //Sign In User with Email and Password
  
//    firebase.auth().signInWithEmailAndPassword(email, password)
//    .then(()=>{
//      location.href='./Blog/blog.html'
//    })
//    .catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log(errorCode);
//     console.log(errorMessage);
//     }); 
//     }

   


  




 
  
// // firebase.auth().signOut().then(function() {
// //   // Sign-out successful.
// //   console.log('User Logged Out!');
// // }).catch(function(error) {
// //   // An error happened.
// //   console.log(error);
// // });

// function getInput(id){
//   return document.getElementById(id);
// } 