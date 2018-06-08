class Square {

    square : HTMLElement
    x : number
    y : number
    speedX : number
    speedY : number

    constructor() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        this.square = document.createElement("square");
        this.square.setAttribute('style', 'background-color:'+ bgColor)
        document.body.appendChild(this.square)
        this.x = 100;
        this.y = 100;

        this.speedX = Math.random() * 10 + 10
        this.speedY = Math.random() * 10 + 10

        console.log("Square created")
    }
    move() : void {

        this.x += this.speedX
        this.y += this.speedY

        if(this.x + this.square.clientWidth > window.innerWidth || this.x < 0) {
            this.speedX = this.speedX * -1
        }
        if(this.y + this.square.clientHeight > window.innerHeight || this.y < 0) {
            this.speedY = this.speedY * -1
        }

        this.draw()
    }

    draw() : void {
        this.square.style.transform = "translate("+this.x+"px,"+this.y+"px)" 
    }
}
