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

const trail = [];

function drawPlayer() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawTrail() {
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = player.width;
    ctx.lineCap = 'round';
    for (let i = 0; i < trail.length; i++) {
        ctx.beginPath();
        if (i === 0) {
            ctx.moveTo(trail[i].x, trail[i].y);
        } else {
            ctx.lineTo(trail[i].x, trail[i].y);
        }
        ctx.stroke();
    }
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}

function update() {
    clearCanvas();

    trail.push({ x: player.x, y: player.y });
    if (trail.length > 50) {
        trail.shift();
    }

    player.x += player.directionX * player.speed;
    player.y += player.directionY * player.speed;

    // Wrap around the canvas
    if (player.x > canvasWidth) player.x = 0;
    if (player.x < 0) player.x = canvasWidth;
    if (player.y > canvasHeight) player.y = 0;
    if (player.y < 0) player.y = canvasHeight;

    drawTrail();
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
</script>
</body>
</html>
