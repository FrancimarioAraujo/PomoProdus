
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
//
function timer(){
    switch (status) {
        case "pomodoro":
            seconds+=1;
            if(minutes == 25){
                clearInterval(intervalo);
                horaText.innerText = "25:00";
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

            break;
        case "longBreak":
            seconds+=1;
            if(minutes == 25){
                clearInterval(intervalo);
                horaText.innerText = "15:00";
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
            break;
        case "shortBreak":
            seconds+=1;
            if(minutes == 5){
                clearInterval(intervalo);
                horaText.innerText = "5:00";
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
    seconds = 0;
    minutes = 0;
    status = "pomodoro";
    horaText.innerText = "25:00";
    changeColor('#F05B56');
}

btnShortBreak.onclick = function(){
    seconds = 0;
    minutes = 0;
    status = "shortBreak";
    horaText.innerText = "5:00";
    changeColor('#4CA6A9');
}

btnLongBreak.onclick = function(){
    seconds = 0;
    minutes = 0;
    status = "longBreak";
    horaText.innerText = "15:00";
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
