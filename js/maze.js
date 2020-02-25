var seconds = -1;
var minutes = 0;

var secondsDisplay = document.getElementById('secondDisplay');
var minutesDisplay = document.getElementById('minuteDisplay');

function incrementSeconds() {
    seconds += 1;
    if (seconds <= 9)
    {
    secondDisplay.innerText = ": 0"+seconds;
    }
    else{
        secondDisplay.innerText = ": "+seconds;
    }

    minutesDisplay.innerHTML = ""+minutes+""
    

    if (seconds >= 59)
    {
        seconds = -1;
        minutes += 1;
    }

    

}

var cancel = setInterval(incrementSeconds, 1000);