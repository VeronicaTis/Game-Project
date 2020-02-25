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
    [0,2,2,2,2],
    [1,2,2,2,2],
    [1,1,1,3,1],
    [2,2,1,2,1], 
    [2,2,1,1,1],
]

var player = false;
var path = false;
var block = false;
var obstacle = false;
var invisObstacle = false;


var x,y;
x=0;
y=0;
var position = "P"+x+"-"+y;


/*for (x=0; x <= 4; x++)
{
    for(y = 0; y <= 4; y += 1)
    {
        console.log(Grid[x][y]);


        if (Grid[x][y] == 0)
        {   
            player == true;
        }
        else 
        {
            player == false;
        }

        if (Grid[x][y] == 1)
        {   
            path == true;
        }
        else 
        {
            path == false;
        }

        if (Grid[x][y] == 2)
        {   
            block == true;
        }
        else 
        {
            block == false;
        }

        if (Grid[x][y] == 3)
        {   
            obstacle == true;
        }
        else 
        {
            obstacle == false;
        }

        if (Grid[x][y] == 4)
        {   
            invisObstacle == true;
        }
        else 
        {
            invisObstacle == false;
        }



    }
}*/

//var position = Grid[x][y];





//var startPosition = Grid[0][0];


function moveUp(event)
{
    var up = event.key;
    if (up == "w")
    {
        Grid[x][y-1] = player;
        Grid[x][y] = path;

        document.getElementById(position) == path;
        y-=1;
        document.getElementById(position) == player;
        console.log(x);
        console.log(y);

    }
}

function moveDown(event)
{
    var down = event.key;
    if (down == "s")
    {
        Grid[x][y+1] = player;
        Grid[x][y] = path;
console.log(position);
        document.getElementById(position).name ="path";
        
        y+=1;
        document.getElementById(position).name ="path";
        console.log(position);
        
        console.log(x);
        console.log(y);

    }
    
}