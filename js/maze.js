var seconds = 0;
var minutes = 0;

var secondsDisplay = document.getElementById('secondDisplay');
var minutesDisplay = document.getElementById('minuteDisplay');


var score = 1000;
document.getElementById("scoreDisplay").innerHTML = "Score: " +score;


function incrementSeconds() {
    seconds += 1;   // adds 1 second.... per second
    if (score > 0) //subtracts 1 from the score value every second you are in the maze game
    {
        score-= 10;
        document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
    }
    else
    {
        score -= 0;
        document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
    }
    if (seconds <= 9)
    {
    secondDisplay.innerText = ": 0"+seconds; //add a 0 in front of single digit numbers
    }
    else{
        secondDisplay.innerText = ": "+seconds; // otherwise no 0 
    }

    if (seconds == 60)
    {
        secondDisplay.innerText = ": 00";   //replace the 60th second with two zeros, so the time looks proper
    }

    minutesDisplay.innerHTML = ""+minutes+""        
    

    if (seconds > 58) //after 59 seconds, the minute will be added
    {
        minutes += 1;
    }
    if (seconds > 59)
    {
        seconds = 0;
        minutes -= 1;   // since a minute is added both at 59 and 60 seconds, we need to subtract that extra minute at the 60th second so the minute only increases by one 
    }
    
    

}



var cancel = setInterval(incrementSeconds, 1000) //interval is 1 second (1000 miliseconds)


var Grid = 
[
    [2,2,1,1,4],    //grid layout for level 1
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
//coin 6


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

function createTable2()
{

    Grid =  //level 2 grid
    [
        [2,2,1,1,4,2,2,2,2,2,2,2,2,2,2,1,1,1,2,2,2,2,2,2,2],   
        [2,2,3,2,1,2,2,2,2,2,2,2,2,2,3,1,2,1,2,2,2,2,2,2,2],
        [2,2,1,1,1,2,2,2,2,2,2,2,2,2,1,1,2,1,2,2,2,2,2,2,2],
        [2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,1,1,2,2,2], 
        [0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,3,1,2,2,2],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,2,2,3,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,2,2,3,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [2,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [2,2,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [2,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],    //25x25 level 2

    ]

    var Py = 10;
    var Px = 0;
    var body = document.body;
    var table = document.createElement("table");
    table.id = "L2"
    var i = 0;
    var j = 24;
    body.appendChild(table);
    var cell = document.createElement("td");

    for (Px = 0; Px <= 24;Px++)
    {
        var row = document.createElement("tr");
        table.appendChild(row);
        for (Py = 24; Py >= 0; Py--)
        {
            cell = document.createElement("td");
            cell.id = "P"+Py+"-"+Px;
            row.appendChild(cell);
            
            if(Grid[j][i] == 0)
            {
                //<td id="name" class="path">
                cell.className = "player";
            } 
            else if(Grid[j][i] == 2)
            {
                //<td id="name" class="block">
                cell.className = "block";
            }  
            else if(Grid[j][i] == 3)
            {
                //<td id="name" class="block">
                cell.className = "obstacle";
            }        
            else if(Grid[j][i] == 4)
            {
                //<td id="name" class="block">
                cell.className = "finish";
            }   
            else if(Grid[j][i] == 1)
            {
                //<td id="name" class="block">
                cell.className = "path";
            }   

            if(j > 0)
            {
                j--;
            }
            else
            {
                j = 24;
            }

            

            /*if (Py == -1)
            {
                for(var j = 0; j < 25; j++)
                {
                for(var i = 0; i < 25; i++)
                {
                    
                }
                }
            }*/

            

        }
        if(i < 24)
        {
            i++;
        }
    }

    




    //document.getElementById("P25-0").className = "block";
    
    console.log(Grid);
    
}
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
            document.getElementById("P"+x+"-"+y).innerHTML = "<img src='images/splayer.png' style='width:100%'>"
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'orange';
            document.getElementById("P"+[x+1]+"-"+y).style.backgroundColor = 'beige';
            document.getElementById("P"+[x+1]+"-"+y).innerHTML = '';
            score -= 1;
            if (score < 0)
            {
                score = 0;
            }
        }

        if (next == 3)
        {
            Grid[x][y] = 1;
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'beige';
            lives -= 1;
            score -= 100;
            y = 0;
            x = 4;
            document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
            if (score < 0)
            {
                score = 0;
                document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
            }
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
            document.getElementById("P"+x+"-"+y).innerHTML = "<img src='images/splayer.png' style='width:100%'>"
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'orange';
            document.getElementById("P"+[x-1]+"-"+y).style.backgroundColor = 'beige';
            document.getElementById("P"+[x-1]+"-"+y).innerHTML = '';
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
            document.getElementById("P"+x+"-"+y).innerHTML = "<img src='images/splayer.png' style='width:100%'>"
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'orange';
            document.getElementById("P"+x+"-"+[y-1]).style.backgroundColor = 'beige';
            document.getElementById("P"+x+"-"+[y-1]).innerHTML = '';
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
            document.getElementById("P"+x+"-"+y).innerHTML = "<img src='images/splayer.png' style='width:100%'>"
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'orange';
            document.getElementById("P"+x+"-"+[y+1]).style.backgroundColor = 'beige';
            document.getElementById("P"+x+"-"+[y+1]).innerHTML = '';
        }



        console.log("x:"+x);
        console.log("y:"+y);
        console.log("P"+x+"-"+y);
        console.log(Grid);

    }
    
}