$(document).ready(function () {
    for (i = 1; i <= 7; i++) {
        roof = $("<div/>").attr("class", "roof" + i + " " + " roof").prependTo("#building");
    }


    var door = $("<div/>").attr("class", "door").appendTo(".roof1");
    function wind(topPos, leftPos) {
        windowSill = $("<div>").css({
            top: topPos,
            left: leftPos,
        }).attr("class", "window" + id + " " + "windowSill").appendTo("#world");
        var windows = $("<div>").attr("id", "windows").appendTo(windowSill);
    }
    var id = 1;
    var leftStart = 144;
    var leftEnd = 820;
    var leftRange = 225;
    var topStart = 165;
    var topEnd = 1250;
    var topRange = 217;
    for (var y = leftStart; y <= leftEnd; y += leftRange) {

        for (var i = topStart; i <= topEnd; i += topRange) {
            wind(i + "px", y + "px");
            id++;

        }
    }

    var player = new Player();
    
    function windowPos() {
        var vereviHark = Math.floor((player.frunzDiv.position().top - player.frunzDiv.height()) + 3);
        motik = [];
        for (var x = 2; x < player.walls.length; x++) {
            if (player.walls[x].position().top == vereviHark) {
                motik.push(player.walls[x]);
            }
        }
        return motik;
    }
    
    function galya(){
        var randWin = windowPos();
        var randWindow = randWin[Math.floor(Math.random()*randWin.length)];
        galyaDiv = $("<div>").attr("class","galya").appendTo(randWindow);
    }

    function sox(){
        var obj = $("<div>").attr("class","obj").appendTo(".galya");
        var kord = $(".galya").position().top;
        kord--;

    }

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
    var speed = 4;
    var interval = setInterval(render, 15);
    var inter = setInterval(galya, 1000);
    var inter1 = setInterval(sox, 1000);




})