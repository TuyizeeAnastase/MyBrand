function sendEmail(){
    var name=document.getElementById("Name").value;
    var email=document.getElementById("Email").value;
    var message=document.getElementById("message").value;

    if(name==""){
       alert("Please enter Your Names");
       return false;
    }
    else if(email==""){
        alert("Please enter Your user Email");
         return false;
     }
     else if(message==""){
        alert("Please enter your Message");
         return false;
     }
     else{
         alert("email sent successsfully!")
     }
}
