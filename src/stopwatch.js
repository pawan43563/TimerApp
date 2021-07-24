var hoursLabel = document.getElementById("hours");
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
const startpause=document.getElementById("startpause");
const resetbutton=document.getElementById("reset");
let stop=document.getElementById("rootstopwatch");
let countdown=document.getElementById("rootcountdown");


var totalSeconds = 0;
let flag="stop"

function startpause1(){
  if(flag==="stop"){
    resetbutton.style.display="inline-block";
    startpause.classList.remove("fa-play-circle");
    startpause.classList.add("fa-pause");
    flag="start";
    timer();
  }else{
    startpause.classList.add("fa-play-circle");
    startpause.classList.remove("fa-pause");
    clearInterval(execution);
    flag="stop";
  }
}

function reset(){
  resetbutton.style.display="none";
  startpause.classList.add("fa-play-circle");
  startpause.classList.remove("fa-pause");
  hoursLabel.innerHTML="00";
  minutesLabel.innerHTML="00";
  secondsLabel.innerHTML="00";
  totalSeconds=0;

    flag="stop"
    clearInterval(execution);


}


var execution;

function timer() {
  
  
  
  
  clearInterval(execution);

  execution = setInterval(function() {
    setTime()
  }, 1000);

  
function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  hoursLabel.innerHTML = pad(parseInt(totalSeconds / 3600));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
}

function timerstype(){

  const x=document.getElementById("timers");
  if(x.value==="stopwatch"){
    stop.style.display="flex";
    countdown.style.display="none";
  }else{
    stop.style.display="none";
    countdown.style.display="flex";
  }
}


