/* Prototypal Method (Not class based)*/
var PanTool = {
    //Public attribute
    rate: 10,    
    
    //Private attributes
    _up: false, 
    _right: false,
    _down: false,
    _left: false,
    _gTop: [122,188,255],
    _gBottom: [64,150,238],
    _amount: 1,
    _movable: [],
    
    //Public functions
    startUp: function(){ this._up = true;},
    startRight: function(){this._right = true;},
    startDown: function(){this._down = true;},
    startLeft: function(){this._left = true;},
    
    stopUp: function(){this._up = false;},
    stopRight: function(){this._right = false;},
    stopDown: function(){this._down = false;},
    stopLeft: function(){this._left = false;},    
    
    //Panning will move all of the movable objects
    _pan: function(){       
        var background = $("#background");

        var parallaxOne = $("#parallaxOne");
        var pXOne = parallaxOne.position().left;
        var pYOne = parallaxOne.position().top;

        var parallaxTwo = $("#parallaxTwo");
        var pXTwo = parallaxTwo.position().left;
        var pYTwo = parallaxTwo.position().top;
        if(this._left == true){ 

            for(i = 0; i < this._movable.length; i++){
                var tmpPosX = this._movable[i].position().left;
                tmpPosX += this._amount * 10;
                this._movable[i].css("left", tmpPosX);                   
            }
            
            pXOne += this._amount * 2;
            pXTwo += this._amount;
        }

        if (this._right == true){ 
            for(i = 0; i < this._movable.length; i++){
                var tmpPosX = this._movable[i].position().left;
                tmpPosX -= this._amount * 10;
                this._movable[i].css("left", tmpPosX);                        
            }
            pXOne -= this._amount * 2;  
            pXTwo -= this._amount;
        }

        if (this._up == true){                     
            if(this._gTop[2] < 0){
                this._gTop[2] = 0;
            } else {
                if(this._gTop[2] > 0){
                    this._gBottom[0] -= this._amount;
                    this._gBottom[1] -= this._amount;
                    this._gBottom[2] -= this._amount;

                    this._gTop[0] -= this._amount * 2;
                    this._gTop[1] -= this._amount;
                    this._gTop[2] -= this._amount;     

                    for(i = 0; i < this._movable.length; i++){
                        var posY = this._movable[i].position().top;
                        posY += this._amount * 10;
                        this._movable[i].css("top", posY);                            
                    }

                    pYOne += this._amount * 2;
                    pYTwo += this._amount;
                }
            }
        }
        if (this._down == true){
            //Add boundaries to the scrolling
            if(this._gBottom[0] > 255){
                this._gBottom[0] = 255;
            } else {
                if(this._gBottom[0] < 100){
                    this._gBottom[0] += this._amount;
                    this._gBottom[1] += this._amount;
                    this._gBottom[2] += this._amount;

                    this._gTop[0] += this._amount * 2;
                    this._gTop[1] += this._amount;
                    this._gTop[2] += this._amount;     

                    for(i = 0; i < this._movable.length; i++){
                        var posY = this._movable[i].position().top;
                        posY -= this._amount * 10;
                        this._movable[i].css("top", posY);
                    }

                    pYOne -= this._amount * 2;
                    pYTwo -= this._amount;
                }
            }
        }
        background.removeAttr("style");
        background.attr("style", 
                                "background:-webkit-linear-gradient(top, " + 
                                "rgb(" + this._gBottom[0] + "," + this._gBottom[1] + "," + this._gBottom[2] + ") 0%, " + 
                                "rgb(" + this._gTop[0] + "," + this._gTop[1] + "," + this._gTop[2] + ") 100%);" +

                                "background: -moz-linear-gradient(top, " +
                                "rgb(" + this._gBottom[0] + "," + this._gBottom[1] + "," + this._gBottom[2] + ") 0%, " + 
                                "rgb(" + this._gTop[0] + "," + this._gTop[1] + "," + this._gTop[2] + ") 100%);" +                          

                                "background: -o-linear-gradient(top, " +
                                "rgb(" + this._gBottom[0] + "," + this._gBottom[1] + "," + this._gBottom[2] + ") 0%, " + 
                                "rgb(" + this._gTop[0] + "," + this._gTop[1] + "," + this._gTop[2] + ") 100%);" +

                                "background: -ms-linear-gradient, " +
                                "rgb(" + this._gBottom[0] + "," + this._gBottom[1] + "," + this._gBottom[2] + ") 0%, " + 
                                "rgb(" + this._gTop[0] + "," + this._gTop[1] + "," + this._gTop[2] + ") 100%);"                   
                        );

        parallaxOne.css("left", pXOne);
        parallaxOne.css("top", pYOne);

        parallaxTwo.css("left", pXTwo);
        parallaxTwo.css("top", pYTwo);             
    },
    
    //Add a movable object to the array of movable objects
    addMovableObject: function(object){
        this._movable.push(object);
    }
};

function loop(){      
    var count = 0;
    if(PanTool._left == true){count++;}
    else if(PanTool._right == true){count++;}
    else if(PanTool._up == true){count++;}
    else if(PanTool._down == true){count++;}
    if(count != 0){
        PanTool._pan();
    }
}

setInterval(loop,PanTool.rate);
                  
$('.bp').mouseover(function(){
    $('.bp').addClass("hover");            
    PanTool.startUp(); 
}).mouseout(function(){
    $('.bp').removeClass("hover");            
    PanTool.stopUp();
}); 

$('.br').mouseover(function(){
    PanTool.startRight();
    $('.br').addClass("hover");
}).mouseout(function(){
    $('.br').removeClass("hover");             
    PanTool.stopRight();
}); 
$('.bl').mouseover(function(){
    $('.bl').addClass("hover");
    PanTool.startLeft();  
}).mouseout(function(){
    $('.bl').removeClass("hover");             
    PanTool.stopLeft();
}); 

$('.bd').mouseover(function(){
    $('.bd').addClass("hover");            
    PanTool.startDown(); 
}).mouseout(function(){
    $('.bd').removeClass("hover");             
    PanTool.stopDown();
});

$(document).keydown(function(event){
    if(event.which == 38){ //Up
        $('.bp').addClass("hover");                
        PanTool.startUp();
    } else if(event.which == 39){
        $('.br').addClass("hover");                
        PanTool.startRight();
    } else if(event.which == 37){
        $('.bl').addClass("hover");
        PanTool.startLeft();
    } else if(event.which == 40){ 
        $('.bd').addClass("hover");                
        PanTool.startDown();
    }
});

$(document).keyup(function(event){
    if(event.which == 37){
        $('.bl').removeClass("hover"); 
        PanTool.stopLeft();
    } else if(event.which == 38){
        $('.bp').removeClass("hover"); 
        PanTool.stopUp();                
    } else if(event.which == 39){
        $('.br').removeClass("hover"); 
        PanTool.stopRight();                                
    } else if(event.which == 40){
        $('.bd').removeClass("hover"); 
        PanTool.stopDown();                
    }
});            