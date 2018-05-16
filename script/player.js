 function Player() {
    this.frunzDiv = $("<div>").css({
        position: "absolute",
        width: "5vw",
        height: "15vh",
        border: "1px solid",
        bottom: "60vh",
        left:"1vw",
    }).attr("id","player");

    this.directions = {};
    this.speedX = 4;
    this.speedY = 0;
    
    this.gravity = 0.15;
    this.jumpState = true;

    this.walls = [$("#dontTouch"),$("#route")];
    for(var i = 1;i<25;i++){
        this.walls.push($(".window"+i))
    }
    this.STATIC_HORIZONTAL_CENTER;
    this.STATIC_VERTICAL_CENTER
    
    this.WIDTH_DIFFERENCE;
    this.HEIGHT_DIFFERENCE;
    
    this.DYNAMIC_HORIZONTAL_CENTER;
    this.DYNAMIC_VERTICAL_CENTER;
    
    this.startPosition;
    

     this.charMovement= function (e)
    {
        directions[e.which] = true;
    }

   this.stop=function (e)
    {
        delete directions[e.which];
    }
    
    this.move = function()
    {
        for (var i in this.directions) 
        {
            
            if(this.frunzDiv.position().left > 0 && i == 37)
            {
                this.frunzDiv.css("left", (this.frunzDiv.position().left - this.speedX) + "px");
            }
            
            if(this.frunzDiv.position().left <($("#world").width() - this.frunzDiv.width()) && i == 39)
            {
                this.frunzDiv.css("left", (this.frunzDiv.position().left + this.speedX) + "px");
            }   
            
            if(this.frunzDiv.position().top > 0 && i == 38 && this.jumpState == false)
            {
                this.epsilon = 5;
                this.jumpState = true;
                this.frunzDiv.css("top", this.frunzDiv.position().top - 6);
            }
        }
        
        this.checkCollision();
        this.jump();
    }
    
    this.epsilon = 5;
    console.log(this.walls[2].position().top)
    this.checkCollision =function()
    {   
        for(var i in this.walls)
        {
            //ONLY FLOOR
            this.WIDTH_DIFFERENCE = this.frunzDiv.width()/2 + this.walls[i].width()/2;
            this.STATIC_HORIZONTAL_CENTER = this.walls[i].position().left + this.walls[i].width()/2;
            this.STATIC_VERTICAL_CENTER = this.walls[i].position().top;
            
           this.DYNAMIC_HORIZONTAL_CENTER = this.frunzDiv.position().left + this.frunzDiv.width()/2;
            this.DYNAMIC_VERTICAL_CENTER = this.frunzDiv.position().top + this.frunzDiv.height();
            
            if( Math.abs(this.DYNAMIC_HORIZONTAL_CENTER - this.STATIC_HORIZONTAL_CENTER) < this.WIDTH_DIFFERENCE &&
                Math.abs(this.DYNAMIC_VERTICAL_CENTER - this.STATIC_VERTICAL_CENTER) <= 0 + this.epsilon)
            {
                this.epsilon = 0;
                this.jumpState = false;
                this.frunzDiv.css("top", this.walls[i].position().top - this.frunzDiv.height());
                this.speedY = 9;
                break;
            }
            else
            {
                if(this.jumpState == false)
                {
                    this.speedY = 0;
                    this.epsilon = 5;
                    this.jumpState = true;
                    this.frunzDiv.css("top", this.frunzDiv.position().top + this.gravity);
                }
            }
        }
    }
    

    
    this.jump = function()
    {
        if(this.jumpState)
        {
            this.speedY -= this.gravity;
            this.frunzDiv.css("top", this.frunzDiv.position().top - this.speedY);
        }
    }

}