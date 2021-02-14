   let checkvalidDate = false;
   let validFname ,validLname,validmsg,validGPname;
   let firstName = document.querySelector("#fname");
   let nmErrMsg = document.querySelector("#nmErrMsg"); 
   let lastName = document.querySelector("#lname");
   let nmErrMsg1 = document.querySelector("#nmErrMsg1");
   let dDate = document.querySelector("#dDate");
   let nmErrMsg2 = document.querySelector("#nmErrMsg2");
   let gp  = document.querySelector("#dname");
   let nmErrMsg4=document.querySelector("nmErrMsg4");
   let msg=document.querySelector("#message");
   let nmErrMsg3 = document.querySelector("#nmErrMsg3")
   let submit=document.querySelector("#sbmt");

   //on clicking the submit button the form with mandatory validations will be submitted
   submit.onclick = function(){

    datevalidation(dDate,nmErrMsg2);
    if (validFname && validLname && checkvalidDate && validmsg){
        alert("Booking has been confirmed.....!");
        }
    else
        {
         alert("Fill all mandatory fields correctly");
        }
    }

    firstName.addEventListener("input",function(event)
{
   if (event.target.value && event.target.value.length <=4){
         nmErrMsg.innerHTML="Please ,fill this field with atleast 4 characters";
         nmErrMsg.style.color="red";
         firstName.style.borderColor = "red";
         firstName.focus();
         validFname = false;
         // break;
      } else 
      {
        nmErrMsg.innerHTML="looks good!";
        nmErrMsg.style.color="green";
        firstName.style.borderColor = "green";
        validFname=true;
      }
   }
);


lastName.addEventListener("input",function(event){
   if (event.target.value && event.target.value.length <= 4) {
      nmErrMsg1.innerHTML="*Please ,fill this field with atleast 4 characters";
      nmErrMsg1.style.color="red";
      lastName.style.borderColor = "red"; 
      lastName.focus();
      validLname=false; 
   } else{
       lastName.style.borderColor = "green";
       nmErrMsg1.innerHTML="looks good";
       nmErrMsg1.style.color="green";
       validLname=true;
         
   } 
});


function datevalidation (dateElement,errorElement){
       var currentDate= new Date();
       let dueDate = new Date(dateElement.value);
       if (dueDate ==""){
       
      dueDate.value = new Date().toISOString().slice(0,10);
      // errorElement.innerHTML = "Please choose a date from today";
      //  errorElement.style.color = "red";
      checkValidDate = true;
      
    }
       
      else if (dueDate < currentDate){
      errorElement.innerHTML = "*Please choose a date from today";
      errorElement.style.color = "red";
      dateElement.focus();
      checkValidDate = false;
       
     } 
      else if (dueDate >= currentDate){
         // errorElement.style.color="green";
         errorElement.innerHTML= " "
         checkvalidDate=true;
         
      }
      }      
      
//       gp.addEventListener("input",function(event){
//    if (event.target.value && event.target.value.length <= 8) {
//       nmErrMsg4.innerHTML="*Please ,fill this field with atleast 8 characters";
//       nmErrMsg4.style.color="red";
//       gp.style.borderColor = "red"; 
//       gp.focus();
//       validGPname=false; 
//    } else{
//        gp.style.borderColor = "green";
//        nmErrMsg4.innerHTML="looks good";
//        nmErrMsg4.style.color="green";
//        validGPname=true;
         
//    } 
// });
      msg.addEventListener("input",function(event){
   if (event.target.value && event.target.value.length <= 15) {
      nmErrMsg3.innerHTML="*Please ,fill this field with atleast 15 characters";
      nmErrMsg3.style.color="red";
      msg.style.borderColor = "red"; 
      msg.focus();
      validmsg=false; 
   } else{
       msg.style.borderColor = "green";
       nmErrMsg3.innerHTML="looks good";
       nmErrMsg3.style.color="green";
       validmsg=true;
         
   } 
});