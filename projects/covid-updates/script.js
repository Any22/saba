// fetching the data 
const dbutton= document.getElementById('resbtn');
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
// https://api.covid19api.com/summary
const getdata= async () => {
const response = await fetch('./response.json');
const data= await response.json();
let items =data;
console.log(items);
const newConfirm = data.Global.All.confirmed;
const newDeaths = data.Global.All.deaths;
const newRecovered = data.Global.All.recovered;

const speed=200;

const counter= () =>{
const target=newConfirm;
const target1=newDeaths;
const target2=newRecovered;
const count= document.getElementById("confirmedCasesFigure").innerText;
const count1= document.getElementById("newDeathsFigure").innerText;
const count2=document.getElementById('newRecoveredFigure').innerText;

const inc =target/speed;
const inc1=target1/speed;
const inc2=target2/speed; 

 
   if (count < target){
    document.getElementById('confirmedCasesFigure').innerText=parseInt(count+inc);
    document.getElementById('newDeathsFigure').innerText=parseInt(count1+inc1); 
    document.getElementById('newRecoveredFigure').innerText=parseInt(count2+inc2);
    
    setTimeout(counter,300);
   }else {
    document.getElementById('confirmedCasesFigure').innerText=target; 
    document.getElementById('newDeathsFigure').innerText=target1;
    document.getElementById('newRecoveredFigure').innerHTML=target2;
    

    }
};
counter();

// Filtering Australian cases  from the global data 
const getOzData = () =>{
  const newConfirmedAustralia= data.Australia.All.confirmed;
  const newDeathsAustralia = data.Australia.All.deaths;
  const newRecoveredAustralia = data.Australia.All.recovered;
  const ozStateSelect=document.querySelector(".state-select");
  
 document.getElementById('oZResponse').innerHTML=newConfirmedAustralia;
 document.getElementById('oZResponse1').innerHTML=newDeathsAustralia;
 document.getElementById('oZResponse2').innerHTML=newRecoveredAustralia;  
 

ozStateSelect.addEventListener("change", (event)=>
{
  const ozStates=["Australian Capital Territory", "New South Wales", "Northern Territory", "Queensland",
"South Australia","Tasmania","Victoria","Western Australia"];
  const result = document.querySelector('.result');
  // result.textContent = `Cases in ${event.target.value}`;
  const stateName=event.target.value;
console.log(stateName.toString());
// console.log(data.Australia..confirmed);
  console.log(data.Australia.AustralianCapitalTerritory.confirmed);
   if(stateName===ozStates[0])
   {
 
    result.textContent=data.ozStates[0].confirmed;
   }

});    
}
getOzData();
};

getdata();


const bounce= () => {
$(".newRecovered").addClass("animated bounce");
$(".newRecoveredOz").addClass("animated bounce");
$(".totalRecovered").addClass("animated bounce");
}
setTimeout(bounce,1000);