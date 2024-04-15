// //  ------------ Setup ------------
// window.focus;
// let gameCanvas = document.getElementById("gameCanvas");
// let ctx = gameCanvas.getContext("2d"); // Drawing object
// const canvasWidth = window.innerWidth;
// const canvasHeight = window.innerHeight;
// // -------------------------------------
// // Player object with variables

// let player = {
//   width: 10,
//   height: 10,
//   speed: 2,
//   x: canvasWidth / 2,
//   y: canvasHeight / 2,
//   directionX: 0,
//   directionY: 0
// };

// function drawPlayer (canvas) {
//   ctx.fillStyle = 'blue';
//   ctx.fillRect(player.x, player.y, player.width, player.height);
// }

// function clearCanvas (canvas) {
//   ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
// }

// function update() {
//   clearCanvas();

//   player.x = player.directionX *player.speed;
//   player.y = player.directionY *player.speed;

//   if (player.x > gameCanvas.width) player.x = 0;
//   if (player.x < 0) player.x = gameCanvas.width;
//   if (player.y > gameCanvas.height) player.y = 0;
//   if (player.y < 0) player.y = gameCanvas.height;

//   drawPlayer();

//   requestAnimationFrame(update);
// }

// function keyDownHandler(e) {
//   if (e.key === 'ArrowUp') {
//       player.directionY = -1;
//       player.directionX = 0;
//   } else if (e.key === 'ArrowDown') {
//       player.directionY = 1;
//       player.directionX = 0;
//   } else if (e.key === 'ArrowLeft') {
//       player.directionX = -1;
//       player.directionY = 0;
//   } else if (e.key === 'ArrowRight') {
//       player.directionX = 1;
//       player.directionY = 0;
//   }
// }

// document.addEventListener('keydown', keyDownHandler);

// gameCanvas.width = gameCanvasWidth;
// gameCanvas.height = gameCanvasHeight;

// update();

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

const player = {
    width: 10,
    height: 10,
    speed: 2,
    x: canvasWidth / 2,
    y: canvasHeight / 2,
    directionX: 0,
    directionY: 0
};

function drawPlayer() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}

function update() {
    clearCanvas();

    player.x += player.directionX * player.speed;
    player.y += player.directionY * player.speed;

    // Wrap around the canvas
    if (player.x > canvasWidth) player.x = 0;
    if (player.x < 0) player.x = canvasWidth;
    if (player.y > canvasHeight) player.y = 0;
    if (player.y < 0) player.y = canvasHeight;

    drawPlayer();

    requestAnimationFrame(update);
}

function keyDownHandler(e) {
    if (e.key === 'ArrowUp') {
        player.directionY = -1;
        player.directionX = 0;
    } else if (e.key === 'ArrowDown') {
        player.directionY = 1;
        player.directionX = 0;
    } else if (e.key === 'ArrowLeft') {
        player.directionX = -1;
        player.directionY = 0;
    } else if (e.key === 'ArrowRight') {
        player.directionX = 1;
        player.directionY = 0;
    }
}

document.addEventListener('keydown', keyDownHandler);

canvas.width = canvasWidth;
canvas.height = canvasHeight;

update();