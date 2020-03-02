var seconds = 0;
var minutes = 0;

var secondsDisplay = document.getElementById('secondDisplay');
var minutesDisplay = document.getElementById('minuteDisplay');


var score = 0;
document.getElementById("scoreDisplay").innerHTML = "Score: " +score;


var T = 0;
var coins = 0;

document.getElementById("coinDisplay").innerHTML = "Coins: " +coins;

function incrementSeconds() {
    seconds += T;   // adds 1 second.... per second
    document.getElementById("coinDisplay").innerHTML = "Coins: " +coins;
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

cancel = setInterval(incrementSeconds, 1000) //interval is 1 second (1000 miliseconds)



var Grid = 
[
    [],
]

// a number on the grid variable is associated with these values
var player = false; // 0    
var path = false;   //1
var block = false;      //2
var obstacle = false;       //3
var finish = false;     //4
var invisObstacle = false;      //5
var coin = false;       //6
var movingObstacle = false;     //7
var invisPath = false;      //8



/* variables that tell if a certain level is active, to determine lives and score when the player dies */
var L1active = false;
var L2active = false;

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

//var tableExist2 = true;
//var tableExist1 = false;


//if (tableExist1 = false)
//{

function createTable1()
{
    L1active = true;
    L2active = false;
    score = 1000;
    lives = 3;
    T = 1;
    y = 0;
    x = 4;
    seconds = 0;
    minutes = 0;
    coins = 0;

    document.getElementById("scoreDisplay").innerHTML = "Score: " +score;

    Grid =  //level 1 grid  ... 5x5
    [
        [2,2,1,1,4],   
        [2,2,3,2,1],
        [6,1,1,1,1],
        [2,2,1,2,1], 
        [0,1,1,2,6],


    ]

    

    var Py = 0;
    var Px = 0;
    var body = document.body;
    var table = document.createElement("table");
    table.id = "L1"
    var i = 0;
    var j = 4;
    body.appendChild(table);
    var cell = document.createElement("td");

    for (Px = 0; Px <= 4;Px++)
    {
        var row = document.createElement("tr");
        table.appendChild(row);
        for (Py = 4; Py >= 0; Py--)
        {
            cell = document.createElement("td");
            cell.id = "P"+Py+"-"+Px;
            row.appendChild(cell);
            
            if(Grid[j][i] == 0)
            {
                cell.className = "player";
            } 
            else if(Grid[j][i] == 2)
            {
                cell.className = "block";
            }  
            else if(Grid[j][i] == 3)
            {
                cell.className = "obstacle";
                cell.innerHTML = "<img src='images/still.png' style='width: 96%; height: 96%; margin: auto;'>"
            }        
            else if(Grid[j][i] == 4)
            {
                cell.className = "finish";
                cell.innerHTML = "<img src='images/Finish.png' style='width: 96%; height: 96%; margin: auto;'>"
            }  
            else if(Grid[j][i] == 8)
            {
                cell.className = "invisPath";
            }  
            else if(Grid[j][i] == 6)
            {
                cell.className = "coin";
                cell.innerHTML = "<img src='images/coin.gif' style='width: 96%; height: 96%; margin: auto;'>"
                
            }   
            else if(Grid[j][i] == 1)
            {
                cell.className = "path";
            }   

            if(j > 0)
            {
                j--;
            }
            else
            {
                j = 4;
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
        if(i < 4)
        {
            i++;
        }
    }
    //document.getElementById("L1BUTTON").onclick = ""
    //document.getElementById("L2BUTTON").onclick = "createTable2()"
    /*document.getElementById("L1BUTTON").removeEventListener("click", createTable1);
    document.getElementById("L2BUTTON").addEventListener("click", createTable2);
    document.getElementById("L2").innerHTML = "O"   
    document.getElementById("L2").style.display = "none"   */
    console.log(Grid);

    var tempTable = document.getElementById("L2");

    tempTable.parentNode.removeChild(tempTable);
    //tableExist1 = true;
    //tableExist2 = false;

}

//}

//if (tableExist2 = false)
//{

function createTable2()
{
    L2active = true;
    L1active = false;
    score = 5000;
    lives = 5;
    T = 1;
    y = 0;
    x = 24;
    seconds = 0;
    minutes = 0;
    coins = 0;

    document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
    Grid =  //level 2 grid
    [
        [2,2,2,2,2,2,1,1,1,1,6,1,1,1,1,1,1,1,1,1,2,2,2,2,4],   
        [2,2,6,1,1,1,1,2,2,2,2,2,2,2,3,2,2,2,2,1,1,3,1,1,1],
        [2,2,2,2,2,2,1,2,2,6,2,2,2,3,6,3,2,2,2,2,2,2,1,2,2],
        [1,3,2,2,2,2,1,2,2,1,2,2,2,3,1,3,2,2,2,1,6,1,1,2,2], 
        [1,2,1,1,1,1,1,2,2,1,2,2,1,1,1,1,1,2,2,1,2,1,2,2,2],
        [1,2,1,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,1,2,1,2,3,2],
        [1,1,1,2,2,2,6,1,1,1,1,1,1,1,1,1,1,1,1,6,2,1,2,1,2],
        [2,2,1,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,1,2,1,2],
        [2,2,1,2,2,2,1,1,2,2,1,1,1,1,1,1,1,1,2,1,2,1,2,6,2],
        [2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,2,2,1,2,1,2,1,2,1,2],
        [2,3,6,3,2,2,1,2,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2],
        [2,1,1,1,1,1,1,2,2,2,2,2,2,2,2,1,2,1,2,1,1,1,2,1,2],
        [2,1,2,2,2,2,6,2,1,1,1,1,1,1,1,1,2,1,2,2,2,2,2,1,2],
        [3,1,2,2,1,1,3,1,1,2,2,2,2,2,2,1,2,1,2,2,1,1,1,1,2],
        [2,1,2,2,1,2,2,2,1,2,2,1,1,1,1,1,2,1,2,2,2,2,2,1,2],
        [2,6,1,1,1,2,2,2,6,2,2,1,2,2,1,2,2,1,1,1,1,1,2,1,2],
        [2,2,1,2,1,2,2,2,2,2,2,1,2,2,1,2,2,1,2,2,2,1,2,1,2],
        [2,2,2,2,1,2,2,2,2,2,2,1,2,2,1,2,2,1,2,2,2,1,1,1,2],
        [2,1,1,2,1,1,1,1,1,2,2,1,2,1,1,2,2,3,1,1,1,1,2,2,2],
        [2,3,1,2,1,2,3,2,1,2,2,1,2,1,2,2,2,2,2,2,2,1,2,2,2],
        [2,3,1,8,1,2,6,2,1,1,1,1,2,6,2,2,2,2,2,2,2,1,2,2,3],
        [2,6,1,2,1,2,1,2,2,2,2,1,2,2,2,2,6,1,1,1,1,1,2,2,1],
        [2,2,2,2,1,3,1,1,1,1,1,1,2,2,1,2,2,2,2,1,2,2,2,2,1],
        [1,1,1,1,1,2,2,2,2,2,2,1,2,2,1,2,2,2,2,3,2,2,2,2,1],
        [0,2,2,2,1,1,1,6,2,2,2,1,1,1,1,1,1,6,1,1,1,1,1,1,1]    //25x25 level 2

    ]

    var Py = 0;
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
                cell.className = "player";
            } 
            else if(Grid[j][i] == 2)
            {

                cell.className = "block";
            }  
            else if(Grid[j][i] == 3)
            {
                cell.className = "obstacle";
                cell.innerHTML = "<img src='images/still.png' style='width: 96%; height: 96%; margin: auto;'>"
            }        
            else if(Grid[j][i] == 4)
            {
                cell.className = "finish";
                cell.innerHTML = "<img src='images/Finish.png' style='width: 96%; height: 96%; margin: auto;'>"
            }   
            else if(Grid[j][i] == 8)
            {
                cell.className = "invisPath";
            }  
            else if(Grid[j][i] == 6)
            {
                cell.className = "coin";
                cell.innerHTML = "<img src='images/coin.gif' style='width: 96%; height: 96%; margin: auto;'>"
            }   
            else if(Grid[j][i] == 1)
            {
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

    //document.getElementById("L2BUTTON").onclick = ""
    //document.getElementById("L1BUTTON").onclick = "createTable1()"
    /*document.getElementById("L2BUTTON").removeEventListener("click", createTable2);
    document.getElementById("L1BUTTON").addEventListener("click", createTable1);
    document.getElementById("L1").innerHTML = "O"   
    document.getElementById("L1").style.display = "none"  */

    var tempTable = document.getElementById("L1");

    tempTable.parentNode.removeChild(tempTable);
    //tableExist2 = true;
    //tableExist1 = false;

}



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

        if (next == 6)
        {
            Grid[x-1][y] = 0;
            Grid[x][y] = 1;

            //document.getElementById("P"+x+"-"+y) == path;
            x-=1;
            document.getElementById("P"+x+"-"+y).innerHTML = "<img src='images/splayer.png' style='width:100%'>"
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'orange';
            document.getElementById("P"+[x+1]+"-"+y).style.backgroundColor = 'beige';
            document.getElementById("P"+[x+1]+"-"+y).innerHTML = '';
            score += 25;
            if (score < 0)
            {
                score = 0;
            }
            coins++;
            document.getElementById("coinDisplay").innerHTML = "Coins: " +coins;
        }

        if (next == 3)
        {
            Grid[x][y] = 1;
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'beige';
            lives -= 1;
            score -= 100;

            document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
            if (score < 0)
            {
                score = 0;
                document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
            }
            //document.getElementById("P"+x+"-"+y) == path;
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'orange';
        }

        if (next == 4)
        {
            Grid[x][y] = 1;
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'beige';

            document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
            if (score < 0)
            {
                score = 0;
                document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
            }
            //document.getElementById("P"+x+"-"+y) == path;
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'beige';
            document.getElementById("P"+x+"-"+y).innerHTML = '';
            if (L1active == true)
            {
            document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
            alert("YOU WIN!!!  Final Score: " +score+ "     Time taken: "+minutes+" minutes and " +seconds+ " seconds   Lives Left: " +lives+ "     Coins Collected: " +coins+ '/2');
            y = 0;
            x = 4;
            seconds = -1;
            minutes = 0;
            score = 1010;
            lives = 3;
            coins = 0;
            }
            else if (L2active == true)
            {
                document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
                alert("YOU WIN!!!  Final Score: " +score+ "     Time taken: "+minutes+" minutes and " +seconds+ " seconds   Lives Left: " +lives+ "     Coins Collected: " +coins+ '/15');
                y = 0;
                x = 24;
                seconds = -1;
                minutes = 0;
                score = 5010;
                lives = 5;
                coins = 0;
            }
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'orange';
            
        }

        //   Final Position: " +[y]+ ", " +[x]   THis code does not work if coordinates are displayed to the viewer normally..
        if (lives == 0)
        {
            Grid[x][y] = 1;
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'beige';
            document.getElementById("P"+x+"-"+y).innerHTML = '';

            alert("YOU LOST!!!  Final Score: " +score+ "     Time taken: "+minutes+" minutes and " +seconds+ " seconds");

            if (L1active == true)
            {
            y = 0;
            x = 4;
            seconds = -1;
            minutes = 0;
            score = 1010;
            lives = 3;
            coins = 0;
            }
            else if (L2active == true)
            {
                y = 0;
                x = 24;
                seconds = -1;
                minutes = 0;
                score = 5010;
                lives = 5;
                coins = 0;
            }

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

            document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
            if (score < 0)
            {
                score = 0;
                document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
            }
            /*if (lives < 0)
            {
                lives = 0;
                document.getElementById("lifeDisplay").innerHTML = "Lives: " +lives;
            }*/
            //document.getElementById("P"+x+"-"+y) == path;
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'orange';
        }

        if (next == 4)
        {
            Grid[x][y] = 1;
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'beige';

            document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
            if (score < 0)
            {
                score = 0;
                document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
            }
            //document.getElementById("P"+x+"-"+y) == path;
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'beige';
            document.getElementById("P"+x+"-"+y).innerHTML = '';
            if (L1active == true)
            {
            document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
            alert("YOU WIN!!!  Final Score: " +score+ "     Time taken: "+minutes+" minutes and " +seconds+ " seconds   Lives Left: " +lives+ "     Coins Collected: " +coins+ '/2');
            y = 0;
            x = 4;
            seconds = -1;
            minutes = 0;
            score = 1010;
            lives = 3;
            coins = 0;
            }
            else if (L2active == true)
            {
                document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
                alert("YOU WIN!!!  Final Score: " +score+ "     Time taken: "+minutes+" minutes and " +seconds+ " seconds   Lives Left: " +lives+ "     Coins Collected: " +coins+ '/15');
                y = 0;
                x = 24;
                seconds = -1;
                minutes = 0;
                score = 5010;
                lives = 5;
                coins = 0;
            }
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'orange';
            
        }

        if (next == 6)
        {
            Grid[x+1][y] = 0;
            Grid[x][y] = 1;

            //document.getElementById("P"+x+"-"+y) == path;
            x+=1;
            document.getElementById("P"+x+"-"+y).innerHTML = "<img src='images/splayer.png' style='width:100%'>"
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'orange';
            document.getElementById("P"+[x-1]+"-"+y).style.backgroundColor = 'beige';
            document.getElementById("P"+[x-1]+"-"+y).innerHTML = '';
            score += 25;
            if (score < 0)
            {
                score = 0;
            }
            coins++;
            document.getElementById("coinDisplay").innerHTML = "Coins: " +coins;
        }

        if (lives == 0)
        {
            Grid[x][y] = 1;
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'beige';
            document.getElementById("P"+x+"-"+y).innerHTML = '';

            alert("YOU LOST!!!  Final Score: " +score+ "     Time taken: "+minutes+" minutes and " +seconds+ " seconds");
            if (L1active == true)
            {
            y = 0;
            x = 4;
            seconds = -1;
            minutes = 0;
            score = 1010;
            lives = 3;
            coins = 0;
            }
            else if (L2active == true)
            {
                y = 0;
                x = 24;
                seconds = -1;
                minutes = 0;
                score = 5010;
                lives = 5;
                coins = 0;
            }
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
            score -= 1;
            if (score < 0)
            {
                score = 0;
            }
            document.getElementById("P"+x+"-"+[y-1]).innerHTML = '';
        }

        if (next == 3)
        {
            Grid[x][y] = 1;
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'beige';
            lives -= 1;
            score -= 100;

            document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
            if (score < 0)
            {
                score = 0;
                document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
            }
            /*if (lives < 0)
            {
                lives = 0;
                document.getElementById("lifeDisplay").innerHTML = "Lives: " +lives;
            }*/
            //document.getElementById("P"+x+"-"+y) == path;
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'orange';
        }

        if (next == 4)
        {
            Grid[x][y] = 1;
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'beige';

            document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
            if (score < 0)
            {
                score = 0;
                document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
            }
            //document.getElementById("P"+x+"-"+y) == path;
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'beige';
            document.getElementById("P"+x+"-"+y).innerHTML = '';
            if (L1active == true)
            {
            document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
            alert("YOU WIN!!!  Final Score: " +score+ "     Time taken: "+minutes+" minutes and " +seconds+ " seconds   Lives Left: " +lives+ "     Coins Collected: " +coins+ '/2');
            y = 0;
            x = 4;
            seconds = -1;
            minutes = 0;
            score = 1010;
            lives = 3;
            coins = 0;
            }
            else if (L2active == true)
            {
                document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
                alert("YOU WIN!!!  Final Score: " +score+ "     Time taken: "+minutes+" minutes and " +seconds+ " seconds   Lives Left: " +lives+ "     Coins Collected: " +coins+ '/15');
                y = 0;
                x = 24;
                seconds = -1;
                minutes = 0;
                score = 5010;
                lives = 5;
                coins = 0;
            }
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'orange';
            
        }

        if (next == 6)
        {
            Grid[x][y+1] = 0;
            Grid[x][y] = 1;

            //document.getElementById("P"+x+"-"+y) == path;
            y+=1;
            document.getElementById("P"+x+"-"+y).innerHTML = "<img src='images/splayer.png' style='width:100%'>"
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'orange';
            document.getElementById("P"+[x]+"-"+[y-1]).style.backgroundColor = 'beige';
            document.getElementById("P"+[x]+"-"+[y-1]).innerHTML = '';
            score += 25;
            if (score < 0)
            {
                score = 0;
            }
            coins++;
            document.getElementById("coinDisplay").innerHTML = "Coins: " +coins;
        }

        if (lives == 0)
        {
            Grid[x][y] = 1;
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'beige';
            document.getElementById("P"+x+"-"+y).innerHTML = '';

            alert("YOU LOST!!!  Final Score: " +score+ "     Time taken: "+minutes+" minutes and " +seconds+ " seconds" );
            if (L1active == true)
            {
            y = 0;
            x = 4;
            seconds = -1;
            minutes = 0;
            score = 1010;
            lives = 3;
            coins = 0;
            }
            else if (L2active == true)
            {
                y = 0;
                x = 24;
                seconds = -1;
                minutes = 0;
                score = 5010;
                lives = 5;
                coins = 0;
            }
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
            score -= 1;
            if (score < 0)
            {
                score = 0;
            }
            document.getElementById("P"+x+"-"+[y+1]).innerHTML = '';
        }

        if (next == 8)
        {
            Grid[x][y-1] = 0;
            Grid[x][y] = 1;

            //document.getElementById("P"+x+"-"+y) == path;
            y-=1;
            document.getElementById("P"+x+"-"+y).innerHTML = "<img src='images/splayer.png' style='width:100%'>"
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'orange';
            document.getElementById("P"+x+"-"+[y+1]).style.backgroundColor = 'beige';
            score -= 1;
            if (score < 0)
            {
                score = 0;
            }
            document.getElementById("P"+x+"-"+[y+1]).innerHTML = '';
        }

        if (next == 3)
        {
            Grid[x][y] = 1;
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'beige';
            lives -= 1;
            score -= 100;

            document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
            if (score < 0)
            {
                score = 0;
                document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
            }
            /*if (lives < 0)
            {
                lives = 0;
                document.getElementById("lifeDisplay").innerHTML = "Lives: " +lives;
            }*/
            //document.getElementById("P"+x+"-"+y) == path;
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'orange';
        }

        if (next == 4)
        {
            Grid[x][y] = 1;
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'beige';

            document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
            if (score < 0)
            {
                score = 0;
                document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
            }
            //document.getElementById("P"+x+"-"+y) == path;
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'beige';
            document.getElementById("P"+x+"-"+y).innerHTML = '';
            
            if (L1active == true)
            {
            document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
            alert("YOU WIN!!!  Final Score: " +score+ "     Time taken: "+minutes+" minutes and " +seconds+ " seconds   Lives Left: " +lives+ "     Coins Collected: " +coins+ '/2');
            y = 0;
            x = 4;
            seconds = -1;
            minutes = 0;
            score = 1010;
            lives = 3;
            coins = 0;
            }
            else if (L2active == true)
            {
                document.getElementById("scoreDisplay").innerHTML = "Score: " +score;
                alert("YOU WIN!!!  Final Score: " +score+ "     Time taken: "+minutes+" minutes and " +seconds+ " seconds   Lives Left: " +lives+ "     Coins Collected: " +coins+ '/15');
                y = 0;
                x = 24;
                seconds = -1;
                minutes = 0;
                score = 5010;
                lives = 5;
                coins = 0;
            }
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'orange';
            
        }

        if (next == 6)
        {
            Grid[x][y-1] = 0;
            Grid[x][y] = 1;

            //document.getElementById("P"+x+"-"+y) == path;
            y-=1;
            document.getElementById("P"+x+"-"+y).innerHTML = "<img src='images/splayer.png' style='width:100%'>"
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'orange';
            document.getElementById("P"+[x]+"-"+[y+1]).style.backgroundColor = 'beige';
            document.getElementById("P"+[x]+"-"+[y+1]).innerHTML = '';
            score += 25;
            if (score < 0)
            {
                score = 0;
            }
            coins++;
            document.getElementById("coinDisplay").innerHTML = "Coins: " +coins;
        }

        if (lives == 0)
        {
            Grid[x][y] = 1;
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'beige';
            document.getElementById("P"+x+"-"+y).innerHTML = '';

            alert("YOU LOST!!!  Final Score: " +score+ "     Time taken: "+minutes+" minutes and " +seconds+ " seconds");
            if (L1active == true)
            {
            y = 0;
            x = 4;
            seconds = -1;
            minutes = 0;
            score = 1010;
            lives = 3;
            coins = 0;
            }
            else if (L2active == true)
            {
                y = 0;
                x = 24;
                seconds = -1;
                minutes = 0;
                score = 5010;
                lives = 5;
                coins = 0;
            }
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

