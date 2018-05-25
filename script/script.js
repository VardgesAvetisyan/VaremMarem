$(document).ready(function () {
    //**********random number***************
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    //**********create harker***************
    for (i = 1; i <= 18; i++) {
        roof = $("<div/>").attr("class", "roof" + i + " " + " roof").prependTo("#building");
    }
    //***********create door****************
    var door = $("<div/>").attr("class", "door").appendTo(".roof1");
    //***********create windows*************
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
    var topEnd = 3637;
    var topRange = 217;

    for (var y = leftStart; y <= leftEnd; y += leftRange) {

        for (var i = topStart; i <= topEnd; i += topRange) {
            wind(i + "px", y + "px");
            id++;

        }
    }

    var player = new Player();
    //**********take wondows position*******
    function windowPos() {
        var vereviHark = Math.floor(player.frunzDiv.position().top - player.frunzDiv.height() + 3);
        // console.log("verev" + vereviHark);
        // console.log("verevleft"+vereviHarkLeft);
        motikner = [];
        for (var x = 2; x < player.walls.length; x++) {
            if (player.walls[x].position().top - 2 < vereviHark && player.walls[x].position().top + 2 > vereviHark) {
                console.log("bla");
                motikner.push(player.walls[x]);
            }
            // console.log("top"+Math.floor(player.walls[x].position().top));
            // console.log("left"+Math.floor(player.walls[x].position().left));

        }
        return motikner;
    }
    //*********create Galya object*********
    hinArr = [];
    objTop = $(".windowSill").height() * 2.5;
    console.log(objTop);
    objLeft = $(".windowSill").width() / 2;
    function galyaShow() {
        var randWin = windowPos();
        var randWindow = randWin[Math.floor(Math.random() * randWin.length)];
        if (randWindow) {
            console.log(randWindow.position().top);
            console.log(randWindow.position().top - 100, randWindow.position().left);

            galyaDiv = $("<div>").attr("id", "galya").css({ "top": randWindow.position().top - 100, "left": randWindow.position().left}).appendTo('#world');
            
            console.log(galyaDiv);
            hinArr.push(galyaDiv);
            // console.log(randWindow);
        }
        console.log(randWin);



        // var obj = $("<div>").css({ "top": -objTop, "left": objLeft }).attr("class", "obj").appendTo(randWindow);


    }
    function galyaDel() {
        $("#galya").remove();
        // $(".obj").remove();
        hinArr.splice(0, 1);
    }
    $('html').keyup(stop).keydown(charMovement);

    function charMovement(e) {
        player.directions[e.which] = true;
    }

    function stop(e) {
        delete player.directions[e.which];
    }
    var time = 0;
    function render() {
        time += 20;
        player.move();

        var rand = getRandomInt(1000, 2500);
        // console.log(rand);
        if (hinArr.length == 0) {
            // console.log("Galyan ekav");
            if (time % 500 == 0) {
                galyaShow();
                setTimeout(galyaDel, rand);
            }

        }



    }

    var speed = 4;
    var interval = setInterval(render, 20);
})