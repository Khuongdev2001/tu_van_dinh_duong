<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Broken - 404 Error Page</title>

    <!-- Load Lato font from Google Web Fonts -->
    <link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,900' rel='stylesheet' type='text/css'>

    <!-- Force mobile devices to turn fullscreen mode -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- Stylesheet assets -->
    <link rel="stylesheet" href="<?php echo base_url(); ?>skin/404/css/reset.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>skin/404/css/skeleton.css">
    <!-- /Stylesheet assets -->

    <!-- Template stylesheet -->
    <link href="<?php echo base_url(); ?>skin/404/css/style.css" rel="stylesheet">
    <!-- /Template stylesheet -->

    <!-- Color scheme stylesheet -->
    <link href="<?php echo base_url(); ?>skin/404/css/colors-blue.css" rel="stylesheet" id="color_stylesheet">
    <!-- /Color scheme stylesheet -->

    <!-- Customizer stylesheet -->
    <link href="<?php echo base_url(); ?>skin/404/css/customizer.css" rel="stylesheet">
    <!-- /Customizer stylesheet -->

    <!-- Scripts -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script src="<?php echo base_url(); ?>skin/404/js/jquery-animate-css-rotate-scale.js"></script>
    <!-- /Scripts -->
    <script>
        $(document).ready(function()
        {
            $( "#logo" ).animate({rotate:'90deg'},200);
            $( ".broken-crack" ).animate({
                rotate: '-30deg',
                top:'182.813px'
            }, 300, function() {
                $('.img_broke').show();
                $('.nobroke').hide();
            });
        });
    </script>
    <!-- Customizer script -->
    <script src="<?php echo base_url(); ?>skin/404/js/customizer.js"></script>
    <!-- /Customizer script -->
</head>

<!-- Body has to have "broken-animated" or "broken-static" class to do the magic -->
<body class="broken-animated">
<img src="<?php echo base_url(); ?>skin/404/img/404.png" class="img_broke" alt="404 Not Found" style="position: absolute; max-width: 100%; top: 126px; left: 170px;">
<img src="<?php echo base_url(); ?>skin/404/img/403.png" class="nobroke" alt="404 Not Found" style="position: absolute; max-width: 100%; top: 126px; left: 170px;">
<div class="container">
    <!-- HEADER -->
    <div id="header">
        <a href="#" id="logo" class="broken broken-swing">
            <img src="<?php echo base_url(); ?>skin/404/img/logo.png" alt="Logo">
        </a>
    </div>
    <!-- /HEADER -->

    <!-- NAVIGATION -->

    <form class="form-search" method="post" action="<?php echo base_url();?>search">
    <div id="nav" class="broken broken-crack"style="position: relative; " >
        <a href="<?php echo base_url();?>">Home</a>
        <?php if(!empty($categories)){ foreach ($categories as $cate) { ?>
        <a href="<?php echo base_url() . $cate->$GLOBALS['alias']; ?>"><?php echo $cate->$GLOBALS['title']; ?></a>
        <?php } }?>

            <input type="text" id="search" name="keyword" placeholder="Search">

    </div>
    <!-- /NAVIGATION -->
    </form>
</div>
</body>
</html>
