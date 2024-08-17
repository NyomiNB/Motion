//POMODORO
 let interval;
let timeLeft = 1500;

function updateTimer(){
let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toStrong().padStart(2,"0")}:$ + ${seconds.toString().padStart(2,"0")}`;

  timerE1.innerHTML = formattedTime;
}

//long break

//short break
function startTimer(){
interval = setInterval(()=>{
  timeLeft--;
  updateTimer();
  if(timeLeft ==0){
    clearInterval(interval);
    alert("Time's up");
    timeLeft = 1500;
  }
}, 1000);
}
function stopTimer(){
console.log("stop");
}
function resetTimer(){
console.log("reset");
}
 
const startE1 = document.getElementById("start")
const stopE1 = document.getElementById("stop")
const resetE1 = document.getElementById("reset")
const timerE1 = document.getElementById("timer")
 startE1.addEventListener("click", startTimer)
  stopE1.addEventListener("click", stopTimer)
  resetE1.addEventListener("click", resetTimer)
 