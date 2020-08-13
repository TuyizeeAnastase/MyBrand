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
  
  var db=firebase.firestore()

var blog=document.querySelector('#blog');

function renderArticle(doc){
    let div=document.createElement("div");
    let title=document.createElement("h3");
    let article=document.createElement("p");
    
    div.setAttribute('data-id',doc.id);
    title.textContent=doc.data().title;
    article.textContent=doc.data().article;

    div.appendChild(title);
    div.appendChild(article);

    blog.appendChild(div);

}


db.collection("articles").get().then(function(snapshot){
       snapshot.docs.forEach(doc=> {
           renderArticle(doc);
       });
    });
  
    