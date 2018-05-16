$(document).ready(function () {
    for(i = 1;i<=7;i++){
        roof = $("<div/>").attr("class", "roof"+i+" "+" roof").prependTo("#building");
    }
    

    var door = $("<div/>").attr("class", "door").appendTo(".roof1");
    function wind(topPos,leftPos){
    var windowSill = $("<div>").css({
        top: topPos,
        left:leftPos,
    }).attr("class", "window"+id+" "+"windowSill").appendTo("#world");
    var windows = $("<div>").attr("id","windows").appendTo(windowSill);
    }
    var id=0;
    for(var y = 11;y<=59;y+=16){
        for(var i = 20;i<=157.5;i+=27.5){
            id++;
            wind(i+"vh",y+"vw");
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
    

})