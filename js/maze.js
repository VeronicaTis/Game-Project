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


var Grid = 
[
    [ , , , , ],
    [ , , , , ],
    [ , , , , ],
    [ , , , , ], 
    [ , , , , ]
]

var position = Grid[x][y];

var openArea = 1;
var block = 2;
var obstacle = 3;

var startPosition = Grid[0][3];


function move(event)
{
    var r = event.key;
    if (r == "w")
    {
        for (count = 0; count < Grid; count++)
        {
            Grid[x][y - 1];
        }
    }
}