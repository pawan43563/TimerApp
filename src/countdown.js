var userhours = document.getElementById("userhours");
var userminutes = document.getElementById("userminutes");
var userseconds = document.getElementById("userseconds");
var hoursc = document.getElementById("hoursc");
var minutesc = document.getElementById("minutesc");
var secondsc = document.getElementById("secondsc");
const startpausec=document.getElementById("startpausec");
const resetbuttonc=document.getElementById("resetc");
const inputs=document.getElementById("inputs");
var modal = document.getElementById("myModal");
var executionglobal;

function startpausecountdown(){
    
    if(isNaN(userhours.value)){
        alert("Provide valid Inputs")
        return
    }
    if(isNaN(userminutes.value)){
        alert("Provide valid Inputs")
        return
    }
    if(isNaN(userseconds.value)){
        alert("Provide valid Inputs")
        return
    }
        
    if(userhours.value=="" ){
        if(userminutes.value==""){
            if(userseconds.value==""){
                alert("Provide Inputs")
                return 
            }
        }
        
    }
    if(userhours.value>24){
        alert("Hours should be less than 24")
        return
    }
    if(userminutes.value>60){
        alert("Minutes should be less than 60")
        return
    }
    if(userminutes.value>60){
        alert("Seconds should be less than 60")
        return
    }
    inputs.style.display="none";
    if(flag==="stop"){
        resetbuttonc.style.display="inline-block";
        startpausec.classList.remove("fa-play-circle");
        startpausec.classList.add("fa-pause");
        flag="start";
        countdown1();
      }else{
        startpausec.classList.add("fa-play-circle");
        startpausec.classList.remove("fa-pause");
        clearInterval(executionglobal);
        flag="stop";
      }
}

function resetc(){
    inputs.style.display="flex";
    resetbuttonc.style.display="none";
    startpausec.classList.add("fa-play-circle");
    startpausec.classList.remove("fa-pause");
    hoursc.innerHTML="00";
    minutesc.innerHTML="00";
    secondsc.innerHTML="00";
    userhours.value=" ";
    userminutes.value=" ";
    userseconds.value=" ";
    flag="stop"

    clearInterval(executionglobal);

}


function countdown1(){
    clearInterval(executionglobal);

    executionglobal = setInterval(function() {
        timercountdown()
    }, 1000);
    

}

function timercountdown() {

    if (userseconds.value > 0) {
        userseconds.value--;
    }
    else {
        if (userminutes.value > 0) {
            userminutes.value--;
            userseconds.value = 59;
        }
        else {
            userminutes.value = 59;
            userseconds.value = 59;
            userhours.value--;
        }
    }

    if (userhours.value >=0) {
        hoursc.innerHTML=pad(userhours.value);
        minutesc.innerHTML=pad(userminutes.value);
        secondsc.innerHTML=pad(userseconds.value);
    }
    else {
        clearInterval(executionglobal);

        inputs.style.display="flex";
        resetbuttonc.style.display="none";
        startpausec.classList.add("fa-play-circle");
        startpausec.classList.remove("fa-pause");
        userhours.value=" ";
        userminutes.value=" ";
        userseconds.value=" ";
        flag="stop";
        const sound=document.getElementById("audio")
        sound.play();
        modal.style.display="block";
    
    }
}

function pad(val) {
    var valString = val + "";
    if(val==" "){
        return "00"
    }
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }
  






var span = document.getElementsByClassName("close")[0];



span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}