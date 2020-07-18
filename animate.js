let ballList = [];  
let stickList = [];
let blockList = []; 
let boxList = [];

let mapGrid = new Array(20)
for (var s = 0 ; s < mapGrid.length; s++) {
    mapGrid[s] = new Array(30);
}

function clearMapGrid() {
    for (var s = 0 ; s < mapGrid.length; s++) {
        for ( var g=0; g<mapGrid[s].length; g++) {
            mapGrid[s][g] = null;
        }
    }
}

function clearBallList() {
    
    for(var s = 1; s<ballList.length; s++) {
        ballList[s] = null;
    }

}


function gameLoop() {
    context.clearRect(0,0,canvas.width, canvas.height);

    drawMain();
    drawBar();

    window.requestAnimationFrame(gameLoop);
}

window.onload = function() {
    window.requestAnimationFrame(gameLoop);
}
