let users= [
    {
        "username":"demo",
        "pswd":"1234"

    },
    
    {

      "username":"Lunamary",
      "pswd":"Mary123"
    },
]
 let userName = document.querySelector("#fname");
 let paswrd  = document.querySelector("#pswd");
 let login_button=document.querySelector("#logIn");
 const message="wrong user name or password";
 login_button.onclick=function()
 {
          users.forEach(function (user,index) {
           if ((user.username === userName.value) && (user.pswd === paswrd.value)){
          alert("logged in!!");
           }
     });
      return (alert(message));
     }


