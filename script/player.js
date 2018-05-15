function Player() {
    this.frunzDiv = $("<div>").css({
        position: "absolute",
        width: "3vw",
        height: "10vh",
        border: "1px solid",
        top: "70vh",
        left:"1vw",
    }).appendTo("#world");

    this.directions = {};
    this.move = function() {
        for (var i in this.directions) {
            if (!this.directions.hasOwnProperty(i)) continue;

            if (this.heroDiv.position().left > 0 && i == 37) {
                this.heroDiv.css("left", (this.heroDiv.position().left - (this.speedX + 2)) + "px");
            }

            if (this.heroDiv.position().top > 0 && i == 38 && this.jumpState == false) {
                this.epsilon = 6;
                this.jumpState = true;
                this.heroDiv.css("top", (this.heroDiv.position().top - 5) + "px");
            }
            if (i == 32) {
                that.shoot();
            }
        }
    }

    this.move();
}