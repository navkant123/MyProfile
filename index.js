function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="admin")
    {
       alert("Loggedin Succesfully !!");
      window.open("https://navkant123.github.io/navkant_portfillo.github.io/",'_blank');
       // window.open("https://navkant123.github.io/navkant_portfillo.github.io/",'_self');
      

    }
    else if(username=="" && password !=""){
        alert("Please enter username !!");
    }
    else if(password=="" && username !=""){
        alert("Please enter password !!");
    }
    else if(username =="" && password==""){
        alert("please enter username and password !!");
        
    }
    else{
        alert("You have enter wrong username or password !!");
    }
}