const users= [
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
            // alert(users.user.username[index]);
            // alert(index);
           if ((userName.value === users[index].username) && ( paswrd.value === users[index].pswd)){
          alert("logged in!!");
          // break;
           } else {
            alert (message);
        }
        return false;
     });
      return false;
     }


