var seconds = -1;
var minutes = 0;

var secondsDisplay = document.getElementById('secondDisplay');
var minutesDisplay = document.getElementById('minuteDisplay');
document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
var score = 100;

function incrementSeconds() {
    seconds += 1;
    score -= 1;
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
    [2,2,1,1,4],
    [2,2,3,2,1],
    [2,2,1,1,1],
    [2,2,1,2,2], 
    [0,1,1,2,2],
]

var player = false; // 0    
var path = false;   //1
var block = false;      //2
var obstacle = false;       //3
var finish = false;     //4
var invisObstacle = false;      //5


var lives = 3;
document.getElementById("lifeDisplay").innerHTML = "Lives: " +lives;

if (lives <= 0)
{
    lives = 3;
    score = 0;
}
var y,x;
y=0;
x=4;
var position = "P"+y+"-"+x;

/*function createTable()
{
    var Py = 10;
    var Px = 0;
    var body = document.body;
    var table = document.createElement("table");
    
    
    body.appendChild(table);
    

    for (Px = 0; Px <= 25;Px++)
    {
        var row = document.createElement("tr");
        table.appendChild(row);
        for (Py = 25; Py >= 0; Py--)
        {
            var cell = document.createElement("td");
            cell.id = "P"+Py+"-"+Px;
            row.appendChild(cell);
        }
    }

    
}*/
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


function moveRight(event)
{
    var right = event.key;
    if (right == "d")
    {

        //Grid[x][y] = 1;
        var next = Grid[x-1][y];
        if (next == 1)
        {
            Grid[x-1][y] = 0;
            Grid[x][y] = 1;

            //document.getElementById("P"+x+"-"+y) == path;
            x-=1;
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'orange';
            document.getElementById("P"+[x+1]+"-"+y).style.backgroundColor = 'beige';

        }

        if (next == 3)
        {
            Grid[x][y] = 1;
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'beige';
            lives -= 1;
            score -= 10;
            y = 0;
            x = 4;

            

            //document.getElementById("P"+x+"-"+y) == path;
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'orange';

        }



        console.log("x:"+x);
        console.log("y:"+y);
        console.log("P"+x+"-"+y);
        console.log(Grid);
        document.getElementById("lifeDisplay").innerHTML = "Lives: " +lives;
        document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
    }
}

function moveLeft(event)
{
    var left = event.key;
    if (left == "a")
    {

        //Grid[x][y] = 1;
        var next = Grid[x+1][y];
        if (next == 1)
        {
            Grid[x+1][y] = 0;
            Grid[x][y] = 1;

            //document.getElementById("P"+x+"-"+y) == path;
            x+=1;
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'orange';
            document.getElementById("P"+[x-1]+"-"+y).style.backgroundColor = 'beige';

        }



        console.log("x:"+x);
        console.log("y:"+y);
        console.log("P"+x+"-"+y);
        console.log(Grid);

    }
}

function moveDown(event)
{
    var down = event.key;
    if (down == "s")
    {

        //Grid[x][y] = 1;
        var next = Grid[x][y+1];
        if (next == 1)
        {
            Grid[x][y+1] = 0;
            Grid[x][y] = 1;

            //document.getElementById("P"+x+"-"+y) == path;
            y+=1;
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'orange';
            document.getElementById("P"+x+"-"+[y-1]).style.backgroundColor = 'beige';
            
        }



        console.log("x:"+x);
        console.log("y:"+y);
        console.log("P"+x+"-"+y);
        console.log(Grid);
        
    }
}

function moveUp(event)
{
    var up = event.key;
    if (up == "w")
    {

        //Grid[x][y] = 1;
        var next = Grid[x][y-1];
        if (next == 1)
        {
            Grid[x][y-1] = 0;
            Grid[x][y] = 1;

            //document.getElementById("P"+x+"-"+y) == path;
            y-=1;
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'orange';
            document.getElementById("P"+x+"-"+[y+1]).style.backgroundColor = 'beige';

        }



        console.log("x:"+x);
        console.log("y:"+y);
        console.log("P"+x+"-"+y);
        console.log(Grid);

    }
    
}