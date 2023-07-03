

const square_size = 20;
const game_size = 500;
const Canvas = document.getElementById('game_snake');

console.log(Canvas)

const ctx = Canvas.getContext("2d");
const snake = new Snake(square_size);
const Food = new food(); 
let snakeDirection = 'down';

 
function key_pressed() {
    document.addEventListener('keydown', function(event){
        switch (event.key) {
            case 'ArrowRight':
                snakeDirection = 'right';
                break;
            case 'ArrowLeft':
                snakeDirection = 'left';
                break;
            case 'ArrowUp':
                snakeDirection = 'up';
                break;
            case 'ArrowDown':
                snakeDirection = 'down';
                break;
            default:
                break;
        }
    })
}


function clearFrame () {
    ctx.clearRect(0 , 0, game_size, game_size);
}

// update a chaque image de canvas  //
//  let speed_frame = 300;  //


function update(){
    clearFrame();
    Food.draw();
    snake.update(); 
    if(snake.live){
        setTimeout(update, 125);
    }
}

function start_game(){
    key_pressed();
    update();
}

start_game();
