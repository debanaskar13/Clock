setInterval(setClock,1000);

const hourHand=document.querySelector('[data-hour-hand]');
const minuteHand=document.querySelector('[data-minute-hand]');
const secondHand=document.querySelector('[data-second-hand]');
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let ampm = document.getElementById('ampm');

function setClock(){
    const currentDate=new Date();
    const secondsRatio=currentDate.getSeconds() / 60;
    const minutesRatio=(secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio=(minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);

    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    let currentSecond = currentDate.getSeconds();

    if (currentHour>12){
        currentHour = currentHour-12;
        ampm.innerHTML = 'PM';
    }
    else{
        ampm.innerHTML = 'AM';
    }

    hour.innerHTML = currentHour;
    minute.innerHTML = currentMinute;
    second.innerHTML = currentSecond;

}

function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio * 360);
}

setClock()