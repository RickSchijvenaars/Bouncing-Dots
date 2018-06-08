"use strict";
var Game = (function () {
    function Game() {
        this.squares = new Array();
        for (var index = 0; index < 100; index++) {
            this.squares.push(new Square());
        }
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.squares; _i < _a.length; _i++) {
            var square = _a[_i];
            square.move();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Square = (function () {
    function Square() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        this.square = document.createElement("square");
        this.square.setAttribute('style', 'background-color:' + bgColor);
        document.body.appendChild(this.square);
        this.x = 100;
        this.y = 100;
        this.speedX = Math.random() * 10 + 10;
        this.speedY = Math.random() * 10 + 10;
        console.log("Square created");
    }
    Square.prototype.move = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x + this.square.clientWidth > window.innerWidth || this.x < 0) {
            this.speedX = this.speedX * -1;
        }
        if (this.y + this.square.clientHeight > window.innerHeight || this.y < 0) {
            this.speedY = this.speedY * -1;
        }
        this.draw();
    };
    Square.prototype.draw = function () {
        this.square.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return Square;
}());
//# sourceMappingURL=main.js.map