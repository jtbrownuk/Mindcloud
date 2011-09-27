<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Co-lab - Peer mentoring and collaboration</title>
        
        <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
        <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js"></script>        
        
        <script type="text/javascript" src="assets/ui/scripts/ui.js"></script>
        <script type="text/javascript" src="assets/ui/scripts/pan.js"></script>
        <script type="text/javascript" src="assets/ui/scripts/drag.js"></script>
        <script type="text/javascript" src="assets/ui/scripts/objects.js"></script>
        
        <link rel="stylesheet" href="assets/style/main.css"/>        
        <link rel="stylesheet" href="assets/ui/style/pan.css"/>
        <link rel="stylesheet" href="assets/ui/style/ui.css"/>
        <link rel="stylesheet" href="assets/style/objects.css"/>           
    </head>
    <body>   
        <?php
            //ui.html, this is where all of the menu functionality is kept.
            require("assets/ui/view/ui.html"); 
        ?>  
        <?php
            //panarea.html, this is where the elements which provide the parralax effect are kept
            //TODO: Generate these elements at run time, and only draw the required ones on the screen
            //      Allow for more / less / no clouds, for performance boost
            require("assets/ui/view/panarea.html");
        ?>     
        <div id="background">
                <?php
                    //This is where all of the inner page content goes, this content will be moved when the 
                    //pan tool is used.
                    //TODO: The content displayed here should be dependent on what the user has created
                    require("view/content.php");
                ?>
        </div>
    </body>
</html>
