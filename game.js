let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let aparencia = 2
let escala = 7

let imagemSprite = new Image();
imagemSprite.src = "img/sprites_player/sprites (2).png";

imagemSprite.src = "img/sprites_player/sprites (" + aparencia + ").png";

const player = {
    x: 50,
    y: 300,
    width: 48,
    height: 48,
    speed: 3,
    movingUp: false,
    movingDown: false,
    movingLeft: false,
    movingRight: false,
};

const arvore = {
    x: 50,
    y: 300,
    width: 48,
    height: 48,
    speed: 3,
    movingUp: false,
    movingDown: false,
    movingLeft: false,
    movingRight: false,
};

// centralizar o player
player.x = (canvas.width / 2) - (player.width / 2)
player.y = (canvas.height / 2) - (player.height / 2)

function update() {

    // de costas
    if (player.movingUp && player.y > 0) {
        aparencia = 11
        player.y -= player.speed;
    }

    // de frente
    if (player.movingDown && player.y + player.height < canvas.height) {
        aparencia = 2
        player.y += player.speed;
    }

    // direita
    if (player.movingRight && player.x + player.width < canvas.width) {
        aparencia = 8
        player.x += player.speed;
    }

    // esquerda
    if (player.movingLeft && player.x > 0) {
        aparencia = 5
        console.log(aparencia)
        player.x -= player.speed;
    }

}

function draw() {
    // Limpa o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    
    ctx.drawImage(
        imagemSprite, 0, 0, player.width, player.height,
        player.x, player.y, player.width, player.height
    )

    let imagemArvore = new Image()
    imagemArvore.src = "img/tree.png"
    
    // desenhando o player
    imagemSprite.src = "img/sprites_player/sprites ("+aparencia+").png"
    ctx.drawImage(
        imagemSprite,
        player.x, player.y, player.width, player.height,
        player.x, player.y, player.width, player.height,
    )

    // desenhando as arvores
    ctx.drawImage(
        imagemArvore,
        0, 0, 350, 450,
        30, 25, 350/escala, 450/escala
    )

    ctx.drawImage(
        imagemArvore,
        0, 0, 350, 450,
        450, 110, 350/escala, 450/escala
    )

    ctx.drawImage(
        imagemArvore,
        0, 0, 350, 450,
        120, 280, 350/escala, 450/escala
    )

}

function soltouTecla(event) {

    if (event.key === 'ArrowUp') {
        aparencia = 11
        player.movingUp = false;
    }

    if (event.key === 'ArrowDown') {
        aparencia = 2
        player.movingDown = false;
    }

    if (event.key === 'ArrowRight') {
        aparencia = 8
        player.movingRight = false;
    }

    if (event.key === 'ArrowLeft') {
        aparencia = 5
        player.movingLeft = false;
    }

}

function apertouTecla(event) {

    if (event.key === 'ArrowUp') {
        player.movingUp = true;
    }

    if (event.key === 'ArrowDown') {
        player.movingDown = true;
    }

    if (event.key === 'ArrowRight') {
        player.movingRight = true;
    }

    if (event.key === 'ArrowLeft') {
        player.movingLeft = true;
    }
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Adiciona ouvintes de eventos ao documento
document.addEventListener('keydown', apertouTecla);
document.addEventListener('keyup', soltouTecla);

gameLoop()