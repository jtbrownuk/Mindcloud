var menu = new function(){
    var windowWidth;         
    var windowHeight;
    $(document).ready(function(){
        windowWidth = $(window).width();
        windowHeight = $(window).height();
        $('#leftMenu').css({"width": windowWidth - 500});
        $('#help').css({
            "width" : windowWidth - 400,
            "height" : windowHeight - 200,
            "bottom" : - windowHeight,
            "left" : 200
        });

        //Call the menuEvents function to bind all of the UI elements with appropriate events
        menuEvents();
    });

    /* 
     * When the page size is changed, resize the top menu bar left component. Otherwise the menu
     * at the top of the page will not display correctly.
     */    
    $(window).resize(function(){
        windowWidth = $(window).width();
        $('#leftMenu').css({"width": windowWidth - 500});            
    });
    
    function menuEvents(){
        $("#toggleoption").hover(
           function() {
              $(this).animate({"bottom": "-10px"}, "fast");                   
           },
           function() {
              $(this).animate({"bottom": "0px"}, "fast");                  
           }
        );  

        $("#toggleoption").toggle(
           function() {
              $("#dropdown").animate({"top": "-150px"}, "fast");
           },
           function() {
              $("#dropdown").animate({"top": "20px"}, "fast");                  
           }
        );                     

        $("#togglechat").hover(
           function() {
              $(this).animate({"bottom": "-10px"}, "fast");
           },
           function() {
              $(this).animate({"bottom": "0px"}, "fast");                  
           }
        );

        $("#togglechat").toggle(
           function() {
              $("#chat").animate({"right": "-340px"}, "fast");
           },
           function() {
              $("#chat").animate({"right": "-5px"}, "fast");                  
           }
        );                     

        $("#toggletool").hover(
           function() {
              $(this).animate({"bottom": "-10px"}, "fast");
           },
           function() {
              $(this).animate({"bottom": "0px"}, "fast");                  
           }
        );
            
        $("#toggletool").toggle(
           function() {
              $("#toolbar").animate({"bottom": "-550px"}, "fast");
           },
           function() {
              $("#toolbar").animate({"bottom": "-5px"}, "fast");                  
           }
        );

        $("#toggleall").hover(
           function() {
              $(this).animate({"bottom": "-10px"}, "fast");
           },
           function() {
              $(this).animate({"bottom": "0px"}, "fast");                  
           }
        );
            
        $("#togglehelp").hover(
           function() {
              $(this).animate({"bottom": "-10px"}, "fast");
           },
           function() {
              $(this).animate({"bottom": "0px"}, "fast");                  
           }
        );            
            
        $("#togglehelp").toggle(
           function() {
              $("#help").animate({"bottom": "100px"}, "fast");                
           },
           function() {                 
              $("#help").animate({"bottom": -windowHeight}, "fast");               
           }
        );      
            
        $("#toggleall").toggle(
           function() {
              $("#toolbar").hide("fast");
              $("#chat").hide("fast");
              $("#dropdown").hide("fast");
              $("#menu").hide("fast"); 
              $("#help").hide("fast");              

              $("#toggleoption").hide("fast");
              $("#togglechat").hide("fast");
              $("#toggletool").hide("fast");
              $("#togglehelp").hide("fast");
           },
           function() {
              $("#toolbar").show("fast");
              $("#chat").show("fast");
              $("#dropdown").show("fast");
              $("#menu").show("fast");
              $("#help").show("fast");              

              $("#toggleoption").show("fast");
              $("#togglechat").show("fast");
              $("#toggletool").show("fast");
              $("#togglehelp").show("fast");              
           }
        );                                  
    }
}();