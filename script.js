
const workTime = document.querySelector('#workTime');
const toggle = document.querySelector('#toggleBtn');
  
function displayTime(){

}

function setWorkDuration(){
    
}

function setBreakDuration() {

}

/*let reduce = setInterval(timer, 1000) {
};
*/


const timer = {
    startTime: null,
    countingDown: false,
    workDuration: 25*60,
    breakDuration: 5*60,
    displayTime: null,
    minutes: null,
    seconds: null,
    start: null,
}


function countDown() {
    timer.workDuration -= 1;
    timer.minutes = Math.floor(timer.workDuration / 60);
    timer.seconds = timer.workDuration % 60;
    timer.displayTime = `${String(timer.minutes)} : ${String(timer.seconds)}`;
    workTime.textContent = timer.displayTime;
    console.log(timer.displayTime)
}

function pauseTimer() {
    setTimeout();
    timer.countingDown = false;
}



function startTimer() {
    if (timer.countingDown === false) {
        timer.start = setInterval(countDown, 1000);
        timer.countingDown = true;
        toggle.textContent = 'Pause';

    }
    else  {
        clearInterval(timer.start);
        timer.countingDown = false;
        toggle.textContent = 'Start';
    }
    return
}

function resetTimer() {
    toggle.textContent = 'Start';
    clearInterval(timer.start);
    workTime.textContent = `25 : 00`;
    timer.startTime = null,
    timer.countingDown = false,
    timer.workDuration = 25*60,
    timer.breakDuration = 5*60,
    timer.displayTime = null,
    timer.minutes = null,
    timer.seconds = null,
    timer.start = null
}

const testBtn = document.querySelector('.testBtn');




document.getElementById("workDurationBtn").addEventListener("click", setWorkDuration);
document.getElementById("breakDurationBtn").addEventListener("click", setBreakDuration);
document.getElementById("toggleBtn").addEventListener("click", startTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);
const displayText = document.getElementById("display");




