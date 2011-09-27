$(document).ready(function(){          

    //Make the element go back to the toolbar
    $("#newIdea > img").draggable({ revert: "valid" });
    $("#newImage > img").draggable({ revert: "valid" });
    $("#newAudio > img").draggable({ revert: "valid" });        
    $("#newVideo > img").draggable({ revert: "valid" });
    $("#newNote > img").draggable({ revert: "valid" });
    $("#newCanvas > img").draggable({ revert: "valid" });

    $("#background").droppable({
        accept: "img", //This needs to be suitable addepted to take any toolbar item
        drop: function(e, ui){
            var elementType = $(ui.draggable).attr("data-type");
            var element;
            if(elementType == "idea")
            {
                element = $(
                    '<div class="cloud object">' +
                        '<textarea class="cloudContent" placeholder="what\'s your idea?"></textarea>' +                      
                    '</div>'
                );                                                                                               
            }
            else if(elementType == "image")
            {
                element = $(
                    '<div class="imagecontainer">' +
                        '<img src="assets/images/image.png" alt="Image alt text"/>' +
                    '</div>'
                );
            }
            else if (elementType == "audio")
            {
                element = $(
                    '<div class="audiocontainer object">' +
                        '<textarea class=""audioheader></textarea>' +
                        '<audio class="audio" controls="controls"></audio>' +
                        '<source src="assets/audio/nero.mp3" type="audio/mpeg"></source>' +
                    '</div>'                    
                );              
            }
            else if (elementType == "video")
            {
                element = $(
                    '<div class="videocontainer object">' +
                        '<textarea class="videoheader"></textarea>' +
                        '<div class="vInnerContainer"></div>' +
                        '<video controls="controls" width="400"></video>' +
                        '<source src="assets/video/avh.mp4" type="video/mp4"/>' +
                    '</div>'
                );
            }                        
            else if(elementType == "note")
            {
                element = $(
                    '<div class="note object">' +
                        '<div class="noteheader"></div>' +
                        '<textarea class="notebody" placeholder="feel free to make a note."></textarea>' +
                    '</div>'
                );
            }
            else if(elementType == "canvas")
            {
                element = $(
                    '<div class="canvascontainer object">' +
                        '<div class="canvasheader"></div>' +
                        '<canvas class="canvas"></canvas>' +
                    '</div>'
                )                  
                //When the canvas is placed, we need to allow them to draw, once they have finished drawing we could convert it to an img
            }
                       
            $("#background").append(element);
            PanTool.addMovableObject(element);
            
                //This has to appear last
                element.draggable()
                    .css({
                            //This only works if there is an existing cloud, we could just use default values....
                            'left' : e.pageX - (element.width() / 2),
                            'top' : e.pageY - (element.width() / 2)
                         });         
                                     
            var comments = $(
                '<div class="comments">' +
                    '<div class="commentControls">' +
                        '<a href="javascript:addComment(this);">Comment</a>' +
                    '</div>' +
                '</div>'
            )
                .css('top',element.height() + 20);                    
                
            element.append(comments);                         
            
            var controls = $(
                '<div class="controls">' +
                    '<a href="javascript:editElement(id);">Edit</a><br/>' +
                    '<a href="javascript:deleteElement(id);">Delete</a><br/>' +
                    '<hr/>' +
                    '<h2 align="center">Social</h2>' +
                    '<div class="socialControl">' +
                        '<table>' +
                            '<tr>' +
                                '<td><img src="assets/images/social/twitter_32.png" alt=""/></td>' +
                                '<td><img src="assets/images/social/facebook_32.png" alt=""/></td>' +
                                '<td><img src="assets/images/social/delicious_32.png" alt=""/></td>' +
                            '</tr>' +
                            '<tr>' +
                                '<td><img src="assets/images/social/reddit_32.png" alt=""/></td>' +
                                '<td><img src="assets/images/social/linkedin_32.png" alt=""/></td>' +
                                '<td><img src="assets/images/social/plus_32.png" alt=""/></td>' +
                            '</tr>' +                            
                    '</div>' +
                '</div>'
            );
                
            element.append(controls);            
            //Prevent propagation
            return false;
        }
    });
});        