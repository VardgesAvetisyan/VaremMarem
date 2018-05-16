$(document).ready(function () {
    roof1 = $("<div/>").attr("class", "roof1 roof").appendTo("#building");
    roof2 = $("<div/>").attr("class", "roof2 roof").appendTo("#building");

    var door = $("<div/>").attr("class", "door").appendTo(".roof1");
    
    function windows(tOp, riGht, boTTom, leFt, app, c1) {
        var name = $("<div/>").css({
            width: "10vw",
            height: "14vh",
            border: "1px solid black",
            position: "relative",
            display: "inline-block",
            top: tOp,
            right: riGht,
            bottom: boTTom,
            left: leFt,
        }).attr("class", c1 + " " + "window").appendTo(app);
    }

    function all_windows() {
        var num = 1;
        for (var i = 5; i < 27; i += 7) {
            windows("5vh", "0px", "0px", i + "vw", ".roof2", "window" + num);
            num++;
        }
    }
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
    all_windows();
   
})