$(document).ready(function () {
    var content = $("<div/>").css({
        width: "85vw",
        height: "98vh",
        margin: "auto",
        border: "1px solid black",
    }).appendTo("body");

    var world = $("<div/>").css({
        width: "85vw",
        height: "78vh",
        border: "1px solid black",
        position: "relative",
    }).appendTo(content);

    var building = $("<div/>").css({
        width: "72vw",
        height: "78vh",
        margin: "auto",
        border: "1px solid black",
        backgroundColor: "#663300",
        position: "relative",
    }).appendTo(world);

    var roof1 = $("<div/>").css({
        width: "71.8vw",
        height: "27vh",
        border: "1px solid",
        position:"relative",
        top:"50.8vh",
    }).attr("class", "roof1 roof").appendTo(building);

    var roof2 = $("<div/>").css({
        width: "71.8vw",
        height: "27vh",
        border: "1px solid",
        position:"relative",
        bottom:"3.5vh",
    }).attr("class", "roof2 roof").appendTo(building);

    var door = $("<div/>").css({
        width: "22vw",
        height: "27vh",
        margin: "auto",
        border: "1px solid black",
        position: "relative",
    }).attr("class", "door").appendTo(roof1);


    function windows(tOp, riGht,boTTom,leFt,app,name){
        var name = $("<div/>").css({
            width: "10vw",
            height: "14vh",
            border: "1px solid black",
            position: "relative",
            display:"inline-block",
            top:tOp,
            right:riGht,
            bottom:boTTom,
            left:leFt,
        }).appendTo(app);
    }
    for(var i = 5;i<27;i+=7){
        windows("5vh","0px","0px",i+"vw",roof2,"window1");
    }

    

    var route = $("<div/>").css({
        height: "19.5vh",
        border: "1px solid black",
    }).attr("id", "route").appendTo(content);
})