function authentification(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    
    if(email==""){
        alert("Please enter Your Email");
        return false;
     }
    else if (password==""){
         alert("Please enter Your Password");
          return false;
    }
    else{
        if(password=="anastase"){
            location.href='blogOwner.html'
        }
        else{
            alert("Please Eneter BlogOwner Password?")
        }
    }
}