// Your web app's Firebase configuration
 
  
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDYUhGj2CoDTvzCi1BApBRQK_miwoMmmMc",
    authDomain: "mybrand-db60c.firebaseapp.com",
    databaseURL: "https://mybrand-db60c.firebaseio.com",
    projectId: "mybrand-db60c",
    storageBucket: "mybrand-db60c.appspot.com",
    messagingSenderId: "1088363171783",
    appId: "1:1088363171783:web:3de045e9f128f18573d3e2",
    measurementId: "G-1LZ6JTHJ03"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  var db=firebase.firestore();

function  onlaudFunction(){
  var form=document.getElementById('contactForm');
  form.addEventListener('submit',send);
}

function onlaudFunctionArticle(){
 var formArticle=document.getElementById('createForm');
 formArticle.addEventListener('submit',create);
}

function send(e) {
  e.preventDefault();

  var name=getInput('Name');
  var email=getInput('Email');
  var message=getInput('message');
 
 db.collection("messages").add({
         name:name,
         email:email,
         message:message
 })
 
 document.querySelector('.alert').style.display='block';
 
 setTimeout(() => {
   document.querySelector('.alert').style.display='none';
 },3000 );
 
 document.getElementById('contactForm').reset();

 db.collection("messages").get().then(function(snapshot){
   snapshot.forEach(function (doc){
       console.log(doc.data());
   });
 })
}

function create(e){
e.preventDefault();

var title=getInput('blogTitle');
var article=getInput('article');

db.collection("articles").add({
  title:title,
  article:article,
})
document.querySelector('.alert').style.display='block';
 
 setTimeout(() => {
   document.querySelector('.alert').style.display='none';
 },3000 );
 
document.getElementById('blogTitle').value='';
document.getElementById('article').value='';

 db.collection("articles").get().then(function(snapshot){
  snapshot.forEach(function (doc){
      console.log(doc.data());
  });
})
 }
 
function getInput(id){
  return document.getElementById(id).value;
} 





 

