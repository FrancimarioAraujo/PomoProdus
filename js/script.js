
//Variables references
const horaText = document.getElementById("hora");
const btnPomodoro = document.getElementById('btnPomodoro');
const btnShortBreak = document.getElementById('btnShortBreak');
const btnLongBreak = document.getElementById('btnLongBreak');
const btnStart = document.getElementById('btnStart');
const body = document.getElementById('corpo');

//Variables
let minutes = 0;
let seconds = 0;
let status = "pomodoro";
let intervalo = 0;


function modifyStatus(statu,minute){
    seconds = 0;
    minutes = 0;
    status = statu;
    horaText.innerText = minute + ":00";
    btnStart.innerText = "START";
    clearInterval(intervalo);
}

function intervalBreak(interval){
        seconds+=1;
        if(minutes == interval){
            clearInterval(intervalo);
            horaText.innerText = interval + ":00";
            btnStart.innerText = "START";
            seconds = 0;
            minutes = 0;
            }
            else{
                if(seconds == 60){
                    seconds = 0;
                    minutes +=1;
                }
                horaText.innerText = minutes + ":" + seconds;
        }
}

function timer(){
    switch (status) {
        case "pomodoro":
            intervalBreak(1);
            break;
        case "longBreak":
            intervalBreak(15);
            break;
        case "shortBreak":
            intervalBreak(5);
            break;    
        default:
            console.log("Ocorreu um erro inesperado! na variavel status");
            break;
    }
}
//Change color of layout
function changeColor(color){
    body.style.backgroundColor = color;
    btnStart.style.color = color;
    btnPomodoro.style.backgroundColor = color;
    btnShortBreak.style.backgroundColor = color;
    btnLongBreak.style.backgroundColor = color;
}
//When the button "pomodoro" will clicked, will run this function
btnPomodoro.onclick = function(){
    modifyStatus('pomodoro',25);
    changeColor('#F05B56');
}

btnShortBreak.onclick = function(){
    modifyStatus('shortBreak',5);
    changeColor('#4CA6A9');
}

btnLongBreak.onclick = function(){
    modifyStatus('longBreak',15);
    changeColor('#4CA6A9');
}

btnStart.onclick = function(){
    if(btnStart.innerText == "START"){
       intervalo = setInterval(timer,1000);
        btnStart.innerText = "STOP";
    }
    else if(btnStart.innerText == "STOP"){
        clearInterval(intervalo);
        btnStart.innerText = "START";
    }
   
    
}
