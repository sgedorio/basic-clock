const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
let timeText = document.querySelector('.time');

const now = new Date();
let seconds = now.getSeconds() + 1; //script run-time offset?
let minutes = now.getMinutes();
let hour = now.getHours();

let secondsText, minutesText, hoursText, timeOfDay;

function setDate() {
    //CLOCK TIME
    const secondsDegrees = (seconds / 60) * 360 - 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minuteDegrees = (minutes / 60) * 360 - 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    if (seconds % 60 === 0) {
        minutes++;
    }

    const hourDegrees = (hour / 12) * 360 - 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    if (minutes % 60 === 0) {
        hour++;
    }

    seconds++;

    //TEXT TIME
    const now2 = new Date(); //now2 for the text time!
    secondsText = ("0" + now2.getSeconds()).slice(-2);
    minutesText = ("0" + now2.getMinutes()).slice(-2);
    hoursText = ("0" + (now2.getHours() % 12)).slice(-2);
    if (now2.getHours() > 11) {
        timeOfDay = 'PM';
    } else {
        timeOfDay = 'AM';
    }
    timeText.innerHTML =   `${hoursText}:${minutesText}:${secondsText}<br>${timeOfDay}`;
}

setInterval(setDate, 1000); //runs function setDate every 1000ms (1s)