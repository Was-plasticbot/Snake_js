class Block{
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.oldx = x;
        this.oldy = y;
        this.size = size;
    }

    position_XY(x,y){
        this.oldx = this.x;
        this.oldy = this.y;
        this.x = x;
        this.y = y;
    }

    draw() {
        ctx.fillStyle = `green`;
        ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    }

    // teleport le serpent de l'autre coté de la map //

    outOfMap() {
        const map_Size = game_size / this.size;
        if (this.x < 0){
            this.x = map_Size;
        } else if (this.x > map_Size) {
            this.x = 0;
        }
        if (this.y < 0){
            this.y = map_Size;
        } else if (this.y > map_Size) {
            this.y = 0;
        }
    }
}