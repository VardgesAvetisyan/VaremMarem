$(document).ready(function () {
    roof1 = $("<div/>").attr("class", "roof1 roof").appendTo("#building");
    roof2 = $("<div/>").attr("class", "roof2 roof").appendTo("#building");

    var door = $("<div/>").attr("class", "door").appendTo(".roof1");

    var windowSill = $("<div>").css({
        width: "12vw",
        height: "4vh",
        border: "1px solid",
        position: "absolute",
        top: "44vh",
        left:"11vw",
    }).attr("id", "windowStill").appendTo("#world");

    var windows = $("<div>").attr("id","windows").appendTo(windowSill);
    
    var player = new Player();
    player.frunzDiv.appendTo("#world");


    $('html').keyup(stop).keydown(charMovement);

    function charMovement(e) {
        player.directions[e.which] = true;
    }

    function stop(e) {


        delete player.directions[e.which];
    }

    function render() {

        player.move();
    }
    var interval = setInterval(render, 20);
    

})