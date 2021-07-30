// erase daily-challenge
document.body.innerHTML = '';


// --- Variables ---
const playerElement = document.createElement('img');
const obstacles = [];
const screenWidth = document.body.clientWidth;

let jumpValue = 0;
let speed = -10;
let jumpDirection = 0;
let playerX = parseInt(playerElement.style.left);
// --- End Variables ---

// --- Instantiate Variables ---
document.body.appendChild(playerElement);

obstacles.push(createObstacle(300), createObstacle(600));

playerElement.style.height = '100px';
playerElement.style.width = '100px';
playerElement.src = 'https://cdn.dribbble.com/users/19482/screenshots/2466218/frog-dribbble.gif';
playerElement.style.position = 'absolute';
playerElement.style.left = '200px';
playerElement.style.top = '200px';
// --- End Instantiate Variables ---

// --- Functions ---
function createObstacle(leftValue) {
    const obstacle = document.createElement('div');
    document.body.appendChild(obstacle);
    obstacle.style.backgroundColor = 'red';
    obstacle.style.position = 'absolute';
    obstacle.style.width = '20px';
    obstacle.style.height = '20px';
    obstacle.style.top = '275px';
    obstacle.style.left = leftValue + 'px';
    obstacle.location = leftValue;
    return obstacle;
}


function move(direction, distance) {
    if (speed < 0 ) {
        playerElement.style.transform = 'scaleX(-1)';
    } else {
        playerElement.style.transform = 'scaleX(1)';
    }
    playerX = parseInt(playerElement.style[direction]);
    playerElement.style[direction] = playerX + distance + 'px';
}


function getLeftValue() {
    return parseInt(playerElement.style.left)
}


function getTopValue() {
    return parseInt(playerElement.style.top)
}


function jump() {
    if (getTopValue() === 200) {
        jumpSpeed = -25;
        let myInterval = setInterval(() => {
            move('top', jumpSpeed);
            if (getTopValue() <  100) {
                jumpSpeed = 25;
            }
            if (getTopValue() >=  200) {
                jumpSpeed = 0;
                playerElement.style.top = '200px';
                clearInterval(myInterval);
            }
        }, 100)
    }
}


function hitDetection() {
    obstacles.forEach((obstacle) => {
        if (speed > 0 ){
            if (getLeftValue() + 70 === obstacle.location && getTopValue() > 180) {
                alert('you hit the obstacle')
            }
        }
        else if (getLeftValue() === obstacle.location && getTopValue() > 180) {
                alert('you hit the obstacle')
            }
    })
}

// --- End Functions ---

// -- auto movement --
setInterval(function() {
    if (speed < 0) {
        move('left', -10);
        if (getLeftValue() < 0) {
            speed = 10;
        }
    }
    else {     
        move('left', 10);
        if (getLeftValue() > screenWidth - 100) {
            speed = -10;
        }
    }
    hitDetection();
}, 100)
// -- end auto movement --

// -- enable jump button --
document.addEventListener('keydown', function(event){
    if (event.code == 'Space'){
            jump();
    }
});
// -- end enable jump button --