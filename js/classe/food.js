class food {
    constructor(){
        this.size = square_size;
        this.randomPosition();

    }
        // Donne une position aléatoire pour la nourriture  //
    randomPosition(){
        this.x = Math.round(Math.random() * game_size % ((game_size / this.size)-1));
        this.y = Math.round(Math.random() * game_size % ((game_size / this.size)-1));
        console.log(this.x,this.y);
    }

    draw(){
        ctx.fillStyle = "red";
        ctx.fillRect(this.x * this.size,this.y * this.size,this.size ,this.size );
    }
}