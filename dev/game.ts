class Game {

    squares : Array<Square>

    constructor(){

        this.squares = new Array()
        for(let index = 0; index < 100; index++){
            this.squares.push(new Square()) 
        }
        
        this.gameLoop()
    }

    gameLoop() : void {
        //square updaten
        for (let square of this.squares){
            square.move()
        }
        requestAnimationFrame( () => this.gameLoop() )
    }
}

window.addEventListener("load", () => new Game())
