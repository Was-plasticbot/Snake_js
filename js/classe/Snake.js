class Snake {
    constructor(){
        this.x = 0;
        this.y = 0;
        this.blockSize = square_size;
        this.blocks = [];
        this.addblock(this.x, this.y);
        this.live = true;
        console.log(this.blocks)
    }

    addblock(x, y) {
        const block = new Block(x, y, this.blockSize)
        this.blocks.push(block);    
    }

    move_head() {
        const head = this.blocks[0]
        head.oldx = head.x;
        head.oldy = head.y;
        //la variable "snakeDirection" dans script_game.js modifie headx / heady //
        switch (snakeDirection) {
            case 'right':
                head.x += 1;
                break;
            case 'left':
                head.x -= 1;
                break;
            case 'down':
                head.y += 1;
                break;
            case 'up':
                head.y -= 1;
                break;
        }
        head.outOfMap();
    }

    newBlockPosition(){
        // détermine la position du futur du bloc //
        let x = this.blocks[this.blocks.length -1];
        let y = this.blocks[this.blocks.length -1];
        switch (snakeDirection) {
            case 'right':
                x -= 1;
                break;
            case 'left':
                x += 1;
                break;
            case 'down':
                y -= 1;
                break;
            case 'up':
                y += 1;
                break;
        }
    return {x, y};
    }

        //
    eat(){
        const head = this.blocks[0]
        if (head.x === Food.x && head.y === Food.y){
            Food.randomPosition();
            console.log("eat food",Food.x, Food.y)
            const {x, y} = this.newBlockPosition();
            this.addblock(x,y);
        }
    }

    head_bite_body(block){
        const head = this.blocks[0];
        const head_y = head.y;
        const head_x = head.x;
        return(head_x === block.x && head_y === block.y);
    }

    update() {
        // move_head choisie la direction de la tête du serpent
        this.move_head();
        this.eat();
        for (const [index, block] of this.blocks.entries()){
            if (index > 0){
                const {oldx, oldy} = this.blocks[index - 1];
                block.position_XY(oldx, oldy);
                if (this.head_bite_body(block)){
                    this.live = false;
                }
            }
            block.draw();
            }
    }
}