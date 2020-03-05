/* PROJECT CREATED BY 

 Luke Dujmic

 Veronica Tisdel

 */

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
    if (score > 0) //subtracts 10 from the score value every second you are in the maze game 
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
var L3active = false; 
 
var lives = 0; 
document.getElementById("lifeDisplay").innerHTML = "Lives: " +lives; 
 
 
var y,x; 
y=0; 
x=4; 
 
var b, a; 
var b = 0; 
var a = 0; 
 
var position = "P"+y+"-"+x; 
 
function createTable1() 
{ 
    if (L2active == true) 
    { 
    var tempTable = document.getElementById("L2"); 
    tempTable.parentNode.removeChild(tempTable); 
    } 
    else if (L3active == true) 
    { 
        var tempTable = document.getElementById("L3"); 
        tempTable.parentNode.removeChild(tempTable); 
    } 
    document.getElementById("whens").style.opacity = "0"; 
    document.getElementById("whens").style.backgroundColor = 'none'; 
    document.getElementById("whens").style.transform = "scale(1)"; 
    L1active = true; 
    L2active = false; 
    L3active = false; 
    score = 1000; 
    lives = 3; 
    timer = 0;
    T = 1; 
    y = 0; 
    x = 4; 
    seconds = 0; 
    minutes = 0; 
    coins = 0; 
 
    if (L1active == true) 
    { 
        document.getElementById("L1BUTTON").style = "display: none;"; 
    } 
    if (L2active == false) 
    { 
        document.getElementById("L2BUTTON").style = "display: block;"; 
    } 
    if (L3active == false) 
    { 
        document.getElementById("L3BUTTON").style = "display: block;"; 
    } 
 
    document.getElementById("scoreDisplay").innerHTML = "Score: " +score; 
 
    Grid =  //level 1 grid  ... 5x5 
    [ 
        [2,2,6,1,4],    
        [2,2,3,7,1], 
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
    b = 3; 
    a = 1; 
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
            else if(Grid[j][i] == 7) 
            { 
                cell.className = "movingObstacle"; 
                cell.innerHTML = "<img src='images/moving.png' style='width: 96%; height: 96%; margin: auto;'>" 
 
            }     
            else if(Grid[j][i] == 5) 
            { 
                cell.className = "invisObstacle"; 
                cell.innerHTML = "<img src='images/still.png' style='width: 96%; height: 96%; margin: auto;'>" 
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
        } 
        if(i < 4) 
        { 
            i++; 
        } 
    } 
    console.log(Grid); 
 
    var tempTable = document.getElementById("L2"); 
 
    tempTable.parentNode.removeChild(tempTable); 
 
    var tempTable3 = document.getElementById("L3"); 
 
    tempTable3.parentNode.removeChild(tempTable3); 
 
} 
 
function createTable2() 
{ 
    if (L1active == true) 
    { 
    var tempTable = document.getElementById("L1"); 
    tempTable.parentNode.removeChild(tempTable); 
    } 
    else if (L3active == true) 
    { 
        var tempTable = document.getElementById("L3"); 
        tempTable.parentNode.removeChild(tempTable); 
    } 
    document.getElementById("whens").style.opacity = "0"; 
    document.getElementById("whens").style.backgroundColor = 'none'; 
    document.getElementById("whens").style.transform = "scale(1)"; 
    L2active = true; 
    L1active = false; 
    L3active = false; 
    score = 5000; 
    lives = 5; 
    timer = 0;
    T = 1; 
    y = 0; 
    x = 24; 
    b = 5; 
    a = 0; 
    seconds = 0; 
    minutes = 0; 
    coins = 0; 
 
    if (L2active == true) 
    { 
        document.getElementById("L2BUTTON").style = "display: none;"; 
    } 
    if (L1active == false) 
    { 
        document.getElementById("L1BUTTON").style = "display: block;"; 
    } 
 
    if (L3active == false) 
    { 
        document.getElementById("L3BUTTON").style = "display: block;"; 
    } 
 
    document.getElementById("scoreDisplay").innerHTML = "Score: " +score; 
    Grid =  //level 2 grid 
    [ 
        [2,2,2,2,2,7,1,1,1,1,6,1,1,1,1,1,1,1,1,1,2,2,2,2,4],    
        [2,2,6,1,1,1,1,2,2,2,2,2,2,2,5,2,2,2,2,1,1,3,1,1,1], 
        [2,2,2,2,2,2,1,2,2,6,2,2,2,5,6,5,2,2,2,2,2,2,1,2,2], 
        [1,3,2,2,2,2,1,2,2,1,2,2,2,5,1,5,2,2,2,1,6,1,1,2,2],  
        [1,2,1,1,1,1,1,2,2,1,2,2,1,1,1,1,1,2,2,1,2,1,2,2,2], 
        [1,2,1,2,1,2,2,2,2,1,2,2,1,2,2,2,2,2,2,1,2,1,2,3,2], 
        [1,1,1,2,1,2,6,1,1,1,1,1,1,1,1,1,1,1,1,6,2,1,2,1,2], 
        [2,2,1,2,1,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,1,2,1,2], 
        [2,2,1,2,1,2,1,1,2,2,1,1,1,1,1,1,1,1,2,1,2,1,2,6,2], 
        [2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,2,2,1,8,1,2,1,2,1,2], 
        [2,3,6,3,2,2,1,2,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2], 
        [2,1,1,1,1,1,1,2,2,2,2,2,2,2,2,1,2,1,2,1,1,1,2,1,2], 
        [2,1,2,2,2,2,6,2,1,1,1,1,1,1,1,1,2,1,2,2,2,2,2,1,2], 
        [3,1,2,2,1,1,5,1,1,2,2,2,2,2,2,1,2,1,2,2,1,1,1,1,2], 
        [2,1,2,2,1,2,1,2,1,2,2,1,1,1,1,1,2,1,2,2,2,2,2,1,2], 
        [2,6,1,1,1,2,1,2,6,2,2,1,2,2,1,2,2,1,1,1,1,1,2,1,2], 
        [2,2,1,2,1,2,1,2,2,2,2,1,2,2,1,2,2,1,2,2,2,1,2,1,2], 
        [2,2,2,2,1,2,1,2,2,2,2,1,2,2,1,2,2,1,2,2,2,1,1,1,2], 
        [2,1,1,2,1,1,1,1,1,2,2,1,2,1,1,2,2,5,1,1,1,1,2,2,2], 
        [2,3,1,2,1,2,3,2,1,2,2,1,2,1,2,2,2,2,2,2,2,1,2,2,2], 
        [2,3,1,8,1,2,6,2,1,1,1,1,2,6,2,2,2,2,2,2,2,1,2,2,3], 
        [2,6,1,2,1,2,1,2,2,2,2,1,2,2,2,2,6,1,1,1,1,1,2,2,1], 
        [2,2,2,2,1,3,1,1,1,1,1,1,2,2,1,2,2,2,2,1,2,8,8,8,1], 
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
            else if(Grid[j][i] == 7) 
            { 
                cell.className = "movingObstacle"; 
                cell.innerHTML = "<img src='images/moving.png' style='width: 96%; height: 96%; margin: auto;'>" 
 
            }     
            else if(Grid[j][i] == 5) 
            { 
                cell.className = "invisObstacle"; 
                cell.innerHTML = "<img src='images/still.png' style='width: 96%; height: 96%; margin: auto;'>" 
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
        } 
        if(i < 24) 
        { 
            i++; 
        } 
    } 
    console.log(Grid); 
    var tempTable = document.getElementById("L1"); 
 
    tempTable.parentNode.removeChild(tempTable); 
 
     
    var tempTable3 = document.getElementById("L3"); 
 
    tempTable3.parentNode.removeChild(tempTable3); 
 
} 
 
 
function createTable3() 
{ 
 
     
    if (L1active == true) 
    { 
    var tempTable = document.getElementById("L1"); 
    tempTable.parentNode.removeChild(tempTable); 
    } 
    else if (L2active == true) 
    { 
        var tempTable = document.getElementById("L2"); 
        tempTable.parentNode.removeChild(tempTable); 
    } 
    document.getElementById("whens").style.opacity = "0"; 
    document.getElementById("whens").style.backgroundColor = 'none'; 
    document.getElementById("whens").style.transform = "scale(1)"; 
    L3active = true; 
    L2active = false; 
    L1active = false; 
    score = 10000; 
    lives = 7; 
    timer = 0;
    T = 1; 
    y = 25; 
    x = 0; 
    b = 14; 
    a = 22;
    seconds = 0; 
    minutes = 0; 
    coins = 0; 
 
    if (L3active == true) 
    { 
        document.getElementById("L3BUTTON").style = "display: none;"; 
    } 
 
    if (L2active == false) 
    { 
        document.getElementById("L2BUTTON").style = "display: block;"; 
    } 
    if (L1active == false) 
    { 
        document.getElementById("L1BUTTON").style = "display: block;"; 
    } 
 
    document.getElementById("scoreDisplay").innerHTML = "Score: " +score; 
    Grid =  //level 2 grid 
    [ 
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 
        [2,2,2,1,1,1,1,6,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,1,1,8,8,8,8,8,8,1,2],   
        [2,2,2,1,2,2,2,2,2,1,1,1,1,1,1,1,1,1,6,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,6,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2],   
        [2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,1,2,2,2,2,2,5,2,2,1,1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2],   
        [2,2,2,1,3,2,2,2,2,1,2,2,2,2,2,2,1,2,1,2,2,2,1,2,2,1,3,1,1,2,2,2,2,2,1,2,2,2,2,2,2,2,2,3,3,2,2,2,6,2],   
        [2,2,2,1,1,2,2,1,2,1,2,2,2,2,2,2,2,2,1,2,2,2,1,2,2,1,2,3,1,6,2,2,2,2,1,2,2,2,2,2,2,2,2,3,6,1,2,2,1,2],   
        [2,2,2,3,6,2,2,1,2,1,2,2,1,1,6,1,1,1,1,1,1,1,1,1,1,1,2,2,3,1,1,2,2,2,1,5,5,5,5,5,5,5,5,5,1,2,2,2,1,2],   
        [2,1,1,1,1,1,1,1,2,2,2,1,1,2,1,2,2,2,2,1,2,2,2,2,2,1,2,2,2,3,1,1,2,2,1,2,2,2,2,1,2,2,2,2,1,2,2,2,1,2],   
        [2,1,2,1,3,2,2,2,2,2,1,1,2,2,1,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,3,1,1,2,1,2,2,2,2,1,2,2,2,2,1,2,2,2,6,2],     
        [2,1,2,1,1,2,2,2,2,1,1,2,2,2,1,2,2,2,2,1,2,2,2,2,2,6,2,2,1,2,2,3,1,1,1,2,2,2,2,5,1,1,1,1,1,2,2,2,1,2],   
        [2,1,2,3,1,2,2,2,1,1,2,2,2,2,1,2,2,3,3,1,3,3,2,2,2,1,2,2,1,1,2,2,3,1,6,2,2,2,2,1,2,2,2,2,1,2,2,2,1,2],   
        [2,1,2,1,1,2,2,1,1,2,1,2,2,2,1,2,2,3,2,1,2,3,2,2,2,1,2,2,1,2,2,2,2,3,1,1,2,2,2,1,2,2,2,2,1,2,2,2,1,2],   
        [2,1,2,6,3,6,1,1,2,2,1,2,2,2,1,1,1,1,1,6,1,1,1,1,1,1,2,2,1,2,2,2,2,2,3,1,1,1,6,1,1,1,1,1,1,2,2,2,1,2],   
        [2,1,2,1,1,2,2,2,2,2,1,2,2,2,1,2,2,3,2,1,2,3,2,2,2,1,2,2,1,2,2,2,2,2,2,3,1,1,2,2,2,2,2,6,2,2,2,2,1,2],   
        [2,1,2,3,1,2,2,1,2,2,1,2,2,2,1,2,2,3,3,1,3,3,2,2,2,1,1,1,1,1,1,1,1,1,1,1,3,1,1,2,2,2,2,5,2,2,2,2,6,2],   
        [2,1,2,1,1,2,2,1,2,2,6,1,1,1,1,2,2,2,2,1,2,2,2,2,2,1,5,5,5,5,5,6,5,5,5,5,5,3,1,1,2,2,2,5,2,2,2,2,1,2],   
        [2,1,2,1,3,2,2,1,2,2,1,2,2,2,1,2,2,6,1,1,5,1,1,1,1,1,2,2,2,2,2,1,2,2,2,1,2,2,3,1,1,2,2,5,2,1,1,1,1,2],   
        [2,1,2,1,2,2,2,1,1,1,1,2,2,2,1,2,2,3,2,1,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,1,2,2,2,3,1,1,2,5,2,2,2,2,1,2],   
        [2,1,2,1,2,2,2,2,2,2,5,2,2,2,1,1,1,1,1,1,1,6,2,2,2,1,2,2,2,2,5,1,1,2,2,1,2,2,2,2,3,1,1,6,2,1,1,1,1,2],   
        [2,1,2,6,1,1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,1,5,1,2,2,2,2,2,2,2,2,1,2,2,2,1,2,2,6,2],   
        [2,1,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,5,1,1,2,2,2,1,6,1,1,1,1,2,2,2,5,2,2,1,2],   
        [2,5,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1,2,2,2,1,2,2,2,6,2,2,2,2,2,1,2,2,2,2,1,2,2,2,2,1,2,2,6,6,2,2,1,2],   
        [6,1,1,1,1,1,2,2,2,2,2,2,2,2,7,2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,2,1,2,2,2,2,1,2,2,2,2,1,8,8,6,6,2,2,1,2],   
        [2,2,2,2,3,1,6,1,1,1,1,1,1,1,1,1,1,1,2,2,2,1,2,2,2,1,1,1,1,1,1,1,2,2,2,2,1,2,2,2,2,1,2,2,2,5,2,2,1,2],   
        [2,2,2,2,2,2,2,2,8,2,2,3,2,2,5,2,2,1,2,2,2,1,2,3,3,3,2,6,1,2,2,2,2,2,2,2,1,2,2,2,2,1,2,2,2,1,2,2,6,2],   
        [2,2,2,2,2,2,2,2,1,1,1,6,1,1,1,2,2,1,2,2,2,1,5,6,8,8,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,1,2],   
        [2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,2,1,2,8,8,8,3,1,1,2,1,2,2,2,2,2,5,2,2,2,2,2,1,2,2,1,2,2,1,2],   
        [8,8,8,8,8,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,2,1,2,8,2,2,2,1,2,2,1,2,2,2,2,2,5,2,2,2,2,2,1,2,2,1,2,2,1,2],   
        [6,5,5,5,1,1,1,1,1,2,2,1,2,2,2,2,2,1,1,1,1,1,1,1,1,6,1,1,2,2,1,1,1,1,1,1,6,8,8,8,8,8,1,2,2,6,2,2,6,2],   
        [2,1,2,2,1,2,2,2,5,2,2,1,1,1,6,2,2,1,2,2,2,1,2,1,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1,2,2,2,1,1,1,1,8,8,1,2],   
        [2,1,2,2,1,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,1,2,1,2,2,5,1,1,1,1,2,2,2,2,2,2,2,1,2,2,2,1,2,2,2,2,2,8,2],   
        [2,1,2,2,6,2,2,2,1,1,1,2,2,2,2,2,2,6,1,1,1,1,2,1,1,1,1,2,2,2,1,2,2,2,2,2,2,2,1,2,2,2,1,2,2,2,2,2,8,2],   
        [2,1,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,1,2,2,2,2,2,2,2,6,1,1,1,1,2,2,2,2,2,8,8],   
        [2,1,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,1,1,1,1,2,1,1,2,2,2,2,2,2,1,5,5,5,5,6,8,8,5,2,2,2,6,2,2,2,2,2,2,8],   
        [2,1,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,1,2,2,2,1,1,1,1,1,2,2,2,2,1,2,2,2,2,2,2,1,2,2,2,2,2,2,8],   
        [2,2,8,2,2,2,2,2,2,2,2,5,8,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1,2,2,2,3,1,3,2,2,2,2,2,1,1,1,1,1,1,6,1],   
        [1,1,1,1,1,1,3,2,2,2,2,5,1,1,1,1,1,5,1,1,1,1,1,2,2,2,2,2,2,2,1,2,2,2,3,6,5,1,1,1,1,1,1,2,2,2,2,2,2,1],   
        [1,2,3,2,8,3,3,5,5,5,5,5,8,2,2,2,2,2,1,2,1,2,1,1,1,1,1,6,5,5,1,2,2,2,3,1,3,2,2,2,2,2,1,2,8,8,8,8,8,1],   
        [1,2,3,2,8,2,2,5,2,2,2,5,8,2,2,2,2,2,1,2,1,2,1,2,2,2,5,2,2,2,1,2,2,2,3,1,3,2,2,2,2,2,1,2,8,2,2,2,2,5],   
        [1,5,1,8,8,2,2,5,2,2,2,5,8,2,2,2,2,2,1,2,1,2,1,2,2,2,8,2,2,2,1,2,2,2,2,8,2,2,2,2,2,2,1,2,8,2,2,2,2,5],   
        [2,2,1,2,2,2,2,2,2,2,3,5,8,3,2,2,2,2,5,2,2,2,1,2,2,2,8,1,1,1,1,1,1,1,1,1,1,6,1,1,1,1,1,5,1,1,1,1,1,1],   
        [2,2,1,8,8,8,8,8,8,8,8,6,6,5,5,5,5,5,5,5,5,5,1,2,2,2,8,2,2,2,2,2,1,2,2,2,2,5,2,1,2,8,2,2,8,2,2,2,2,2],   
        [2,2,1,5,5,5,5,5,5,5,5,6,6,8,8,8,8,8,8,8,8,8,1,2,2,2,8,2,2,2,2,2,1,2,2,2,2,5,2,1,2,8,2,2,8,2,2,2,2,2],   
        [2,2,1,2,3,3,3,2,2,2,3,8,5,3,2,5,2,2,2,2,2,2,1,2,2,8,8,8,8,8,2,2,1,1,1,1,1,6,2,1,2,8,8,8,8,2,2,2,2,2],   
        [2,2,1,2,1,1,1,1,2,2,2,8,5,2,2,1,2,1,1,1,1,2,1,1,1,1,5,6,5,1,1,1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2],   
        [2,2,1,2,1,2,2,1,2,2,2,8,5,2,2,1,2,2,1,2,2,2,1,2,2,8,8,8,8,8,2,2,1,2,2,2,2,2,2,1,1,1,1,1,5,8,8,8,8,8],   
        [2,2,1,2,1,1,2,1,2,2,2,8,5,2,2,1,2,2,1,2,2,3,1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,5,2,2,2,2,8,5,5,5,5],   
        [2,2,1,2,2,1,2,1,2,2,2,8,5,5,8,1,1,1,1,8,8,2,3,3,1,1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,6,1,1,1,1,5,8,8,8],   
        [2,2,1,2,2,1,2,1,2,2,2,5,5,8,8,8,1,2,2,2,8,8,1,2,2,2,2,2,2,2,2,2,2,2,2,2,8,2,2,2,2,2,2,2,2,8,1,8,5,1],   
        [2,2,6,1,1,1,5,1,1,1,1,1,1,1,5,1,1,5,1,1,1,1,1,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2,2,2,2,2,2,2,2,8,5,8,5,4]  /* 50x50 level 3 */ 
         
 
    ] 
 
    var Py = 0; 
    var Px = 0; 
    var body = document.body; 
    var table = document.createElement("table"); 
    table.id = "L3" 
    var i = 0; 
    var j = 49; 
    body.appendChild(table); 
    var cell = document.createElement("td"); 
 
    for (Px = 0; Px <= 49;Px++) 
    { 
        var row = document.createElement("tr"); 
        table.appendChild(row); 
        for (Py = 49; Py >= 0; Py--) 
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
            else if(Grid[j][i] == 7) 
            { 
                cell.className = "movingObstacle"; 
                cell.innerHTML = "<img src='images/moving.png' style='width: 96%; height: 96%; margin: auto;'>" 
 
            }     
            else if(Grid[j][i] == 5) 
            { 
                cell.className = "invisObstacle"; 
                cell.innerHTML = "<img src='images/still.png' style='width: 96%; height: 96%; margin: auto;'>" 
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
                j = 49; 
            } 
 
        } 
        if(i < 49) 
        { 
            i++; 
        } 
    } 
    console.log(Grid); 
} 
 
function move(event)
{
    
    
    
    
    var key = event.key
    //Move Right
    if (key == "d")
    {
        //nextR;
        var nextR = Grid[x-1][y]; 

        if (nextR == 1 || nextR == 8) 
        { 
            Grid[x-1][y] = 0;
            Grid[x][y] = 1; 
 
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
 
        if (nextR == 6) 
        { 
            Grid[x-1][y] = 0;
            Grid[x][y] = 1; 

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
    }

    if (key == "a") 
    { 
        //nextL;
        var nextL = Grid[x+1][y]; 
        if (nextL == 1 || nextL == 8) 
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

        if (nextL == 6) 
        { 
            Grid[x+1][y] = 0;
            Grid[x][y] = 1; 

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
    }

    if (key == "s")
    {
        var nextD = Grid[x][y+1]; 
        if (nextD == 1  || nextD == 8) 
        { 
            Grid[x][y+1] = 0;
            Grid[x][y] = 1; 

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
        if (nextD == 6) 
        { 
            Grid[x][y+1] = 0;
            Grid[x][y] = 1; 
 

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
    }

    if (key == "w")
    {
        var nextU = Grid[x][y-1]; 

        if (nextU == 1  || nextU == 8) 
        { 
            Grid[x][y-1] = 0;
            Grid[x][y] = 1; 

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
        if (nextU == 6) 
        { 
            Grid[x][y-1] = 0;
            Grid[x][y] = 1; 
 

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
    }
    

    if (nextR == 3 || nextR == 5 || nextR == 7 || nextL == 3 || nextL == 5 || nextL == 7 || nextU == 3 || nextU == 5 || nextU == 7 || nextD == 3 || nextD == 5 || nextD == 7) 
    {
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
    }
 
        if (nextR == 4 || nextL == 4 || nextU == 4 || nextD == 4) 
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
            document.getElementById("whens").style.backgroundColor = 'rgba(26, 155, 65, 1)'; 
            document.getElementById("whens").style.transform = "scale(2)"; 
            document.getElementById("whens").style.transition = "all 3s"; 
            document.getElementById("whens").style.display = "block"; 
            document.getElementById("whens").style.opacity = "1"; 
            document.getElementById("whens").innerHTML = ("YOU WIN!!!  Final Score: " +score+ "   |  Time taken: "+minutes+" minutes and " +seconds+ " seconds  | Lives Left: " +lives+ "  |   Coins Collected: " +coins+ '/3'); 
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
                document.getElementById("whens").innerHTML = ("YOU WIN!!!  Final Score: " +score+ "  |   Time taken: "+minutes+" minutes and " +seconds+ " seconds  | Lives Left: " +lives+ "  |   Coins Collected: " +coins+ '/15'); 
                y = 0; 
                x = 24; 
                seconds = -1; 
                minutes = 0; 
                score = 5010; 
                lives = 5; 
                coins = 0; 
                document.getElementById("whens").style.backgroundColor = 'rgba(26, 155, 65, 1)'; 
                document.getElementById("whens").style.transform = "scale(2)"; 
                document.getElementById("whens").style.transition = "all 3s"; 
                document.getElementById("whens").style.display = "block"; 
                document.getElementById("whens").style.opacity = "1"; 
            } 

            else if (L3active == true) 
            { 
                document.getElementById("scoreDisplay").innerHTML = "Score: " +score; 
                document.getElementById("whens").innerHTML = ("YOU WIN!!!  Final Score: " +score+ "  |   Time taken: "+minutes+" minutes and " +seconds+ " seconds  | Lives Left: " +lives+ "  |   Coins Collected: " +coins+ '/15');
                y = 25; 
                x = 0; 
                seconds = -1; 
                minutes = 0; 
                score = 10010; 
                lives = 7; 
                coins = 0; 
                document.getElementById("whens").style.backgroundColor = 'rgba(26, 155, 65, 1)'; 
                document.getElementById("whens").style.transform = "scale(2)"; 
                document.getElementById("whens").style.transition = "all 3s"; 
                document.getElementById("whens").style.display = "block"; 
            } 
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'orange'; 
             
        } 
 
        if (lives == 0) 
        { 
            Grid[x][y] = 1; 
            document.getElementById("P"+x+"-"+y).style.backgroundColor = 'beige'; 
            document.getElementById("P"+x+"-"+y).innerHTML = ''; 
 
            
            document.getElementById("whens").style.backgroundColor =  "rgba(255, 26, 44, 1)";
            document.getElementById("whens").style.transform = "scale(2)"; 
            document.getElementById("whens").style.transition = "3s"; 
            document.getElementById("whens").style.display = "block"; 
            document.getElementById("whens").style.opacity = "1"; 
            document.getElementById("whens").innerHTML = ("YOU LOST!!!  Final Score: " +score+ "   |    Time taken: "+minutes+" minutes and " +seconds+ " seconds"); 
 
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
            else if (L3active == true) 
            { 
                y = 25; 
                x = 0; 
                seconds = -1; 
                minutes = 0; 
                score = 10010; 
                lives = 7; 
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

var timer = 0;
obstacleMove = setInterval(moveObstacle, 1000) //interval is 1 second (1000 miliseconds) 
function moveObstacle()  
{ 
        timer++;
        
        if (timer % 2 != 0)
        {
            var next = Grid[a+1][b]; 
            if (next == 1  || next == 8 || next == 0) 
            { 
                Grid[a+1][b] = 7; 
                Grid[a][b] = 1; 
    
                a+=1; 
                document.getElementById("P"+a+"-"+b).innerHTML = "<img src='images/moving.png' style='width: 96%; height: 96%; margin: auto;'>" 
                document.getElementById("P"+a+"-"+b).style = 'background-color: rgb(82, 137, 255);'; 
                document.getElementById("P"+[a-1]+"-"+[b]).style.backgroundColor = 'beige'; 
                document.getElementById("P"+[a-1]+"-"+[b]).innerHTML = ''; 
            } 
            else if (next == 1 && a == x && b == y)
            {
                Grid[a+1][b] = 7; 
                Grid[a][b] = 0; 
    
                a+=1; 
                document.getElementById("P"+a+"-"+b).innerHTML = "<img src='images/moving.png' style='width: 96%; height: 96%; margin: auto;'>" 
                document.getElementById("P"+a+"-"+b).style = 'background-color: rgb(82, 137, 255);'; 
                document.getElementById("P"+[a-1]+"-"+[b]).style.backgroundColor = 'orange'; 
                document.getElementById("P"+[a-1]+"-"+[b]).innerHTML = "<img src='images/splayer.png' style='width: 96%; height: 96%; margin: auto;'>"; 
            }
        }   
        else if (timer % 2 == 0)
        {
            var next = Grid[a-1][b]; 
            if (next == 1  || next == 8 || next == 0) 
            { 
                Grid[a-1][b] = 7; 
                Grid[a][b] = 1; 
     
                a-=1; 
                document.getElementById("P"+a+"-"+b).innerHTML = "<img src='images/moving.png' style='width: 96%; height: 96%; margin: auto;'>" 
                document.getElementById("P"+a+"-"+b).style = 'background-color: rgb(82, 137, 255);'; 
                document.getElementById("P"+[a+1]+"-"+[b]).style.backgroundColor = 'beige'; 
                document.getElementById("P"+[a+1]+"-"+[b]).innerHTML = ''; 

            } 
            else if (next == 1 && a == x && b == y)
            {
                Grid[a-1][b] = 7; 
                Grid[a][b] = 0; 
    
                a-=1; 
                document.getElementById("P"+a+"-"+b).innerHTML = "<img src='images/moving.png' style='width: 96%; height: 96%; margin: auto;'>" 
                document.getElementById("P"+a+"-"+b).style = 'background-color: rgb(82, 137, 255);'; 
                document.getElementById("P"+[a+1]+"-"+[b]).style.backgroundColor = 'orange'; 
                document.getElementById("P"+[a+1]+"-"+[b]).innerHTML = "<img src='images/splayer.png' style='width: 96%; height: 96%; margin: auto;'>"; 
            }
        }

        if (a == x && b == y)   //if Sonic position is equal to Knuckles position  (moving obstacle goes on top of player)
        {
            lives -= 1;
            document.getElementById("P"+a+"-"+b).style = 'orange';
            document.getElementById("lifeDisplay").innerHTML = "Lives: " +lives; 
            if (lives == 0) 
            { 
                Grid[x][y] = 1; 
                document.getElementById("P"+x+"-"+y).style.backgroundColor = 'beige'; 
                document.getElementById("P"+x+"-"+y).innerHTML = ''; 
    
                
                document.getElementById("whens").style.backgroundColor =  "rgba(255, 26, 44, 1)";
                document.getElementById("whens").style.transform = "scale(2)"; 
                document.getElementById("whens").style.transition = "3s"; 
                document.getElementById("whens").style.display = "block"; 
                document.getElementById("whens").style.opacity = "1"; 
                document.getElementById("whens").innerHTML = ("YOU LOST!!!  Final Score: " +score+ "   |    Time taken: "+minutes+" minutes and " +seconds+ " seconds"); 
    
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
                else if (L3active == true) 
                { 
                    y = 25; 
                    x = 0; 
                    seconds = -1; 
                    minutes = 0; 
                    score = 10010; 
                    lives = 7; 
                    coins = 0; 
                } 
    
                document.getElementById("P"+x+"-"+y).style.backgroundColor = 'orange'; 
            } 
        }

} 