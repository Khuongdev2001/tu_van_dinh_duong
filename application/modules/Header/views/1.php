<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="content-language" content="vi">
    <meta name="robots" content="noodp,index,follow">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,user-scalable=0">
    <meta name="revisit-after" content="1 days">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-title" content="jadespa.vn" />
    <meta name="copyright" content="jadespa.vn" />
    <meta name="author" content="jadespa.vn" />
    <meta property="fb:app_id" content="216163346320636"/>

    <link rel="shortcut icon" href="<?php echo base_url('favicon.ico'); ?>" type="image/x-icon">
    <link rel="icon" href="<?php echo base_url('favicon.ico'); ?>" type="image/x-icon">
    <title><?php if(!empty($title)){echo $title ;}else{ echo $GLOBALS['sett']->title;}?></title>
    <meta name="description" content="<?php if(!empty($meta_des)){echo $meta_des ;}else{echo $GLOBALS['sett']->meta_des;}?>"/>
    <meta name="keywords" content="<?php if(!empty($meta_key)){echo $meta_key ;}else{echo $GLOBALS['sett']->meta_key;}?>"/>

    <meta property="og:site_name" content="<?php if(!empty($title)){echo $title ;}else{ echo $GLOBALS['sett']->title;}?>" />
    <meta property="og:url" itemprop="url"  content="<?php echo current_url();?>" />
    <meta property="og:type"  content="article" />
    <meta property="og:description" content="<?php if(!empty($meta_des)){echo $meta_des ;}else{echo $GLOBALS['sett']->meta_des;}?>" />
    <meta property="og:title"  content="<?php if(!empty($title)){echo $title ;}else{ echo $GLOBALS['sett']->title;}?>" />
    <meta property="og:image" itemprop="thumbnailUrl"  content="<?php if(!empty($fb_image)){echo $fb_image ;}?>" />


    <!-- Bootstrap core CSS -->
    <base href="<?php echo base_url();?>">

    <link rel="canonical" href="<?php echo current_url(); ?>" />
    <link href="<?php echo base_url();?>skin/frontend/css/bootstrap.min.css?v=<?php echo time();?>" rel="stylesheet"/>
    <link href="<?php echo base_url();?>skin/frontend/css/owl.carousel.css?v=<?php echo time();?>" rel="stylesheet"/>
    <link href="<?php echo base_url();?>skin/frontend/css/owl.theme.css?v=<?php echo time();?>" rel="stylesheet"/>
<!--    <link href="--><?php //echo base_url();?><!--skin/frontend/font-awesome/css/font-awesome.min.css?v=--><?php //echo time();?><!--" rel="stylesheet">-->
    <link href="<?php echo base_url();?>skin/frontend/css/jquery.mCustomScrollbar.css?v=<?php echo time();?>" rel="stylesheet"/>
    <link href="<?php echo base_url();?>skin/frontend/css/lightbox.min.css?v=<?php echo time();?>" rel="stylesheet"/>
    <link href="<?php echo base_url();?>skin/frontend/css/theme-default.css?v=<?php echo time();?>" rel="stylesheet"/>
    <link href="<?php echo base_url();?>skin/frontend/css/slick.css?v=<?php echo time();?>" rel="stylesheet"/>
    <link href="<?php echo base_url();?>skin/frontend/css/slick-theme.css?v=<?php echo time();?>" rel="stylesheet"/>

    <link href="<?php echo base_url();?>skin/frontend/css/style.css?v=<?php echo time();?>" rel="stylesheet"/>

    <script src="<?php echo base_url();?>skin/frontend/js/jquery-3.1.1.min.js?v=<?php echo time();?>" ></script>
    <script src="<?php echo base_url();?>skin/frontend/js/tether.min.js" ></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" type="text/javascript"></script>
    <script src="<?php echo base_url();?>skin/frontend/js/bootstrap.bundle.min.js?v=<?php echo time();?>" ></script>
    <script src="https://kit.fontawesome.com/e9187148f6.js" crossorigin="anonymous"></script>
<!--    <script src="--><?php //echo base_url();?><!--skin/frontend/js/components/tooltip.js" ></script>-->
    <script src="<?php echo base_url();?>skin/frontend/js/owl.carousel.js?v=<?php echo time();?>" ></script>
    <script src="<?php echo base_url();?>skin/frontend/js/slick.min.js" ></script>
    <script src="<?php echo base_url();?>skin/frontend/js/jquery.form-validator.min.js" ></script>
    <script src="<?php echo base_url();?>skin/frontend/js/jquery.mCustomScrollbar.js" ></script>
    <script src="<?php echo base_url();?>skin/frontend/js/countdown.js?v=<?php echo time();?>" ></script>


    <script src="<?php echo base_url();?>skin/frontend/js/custom.js?v=<?php echo time();?>" ></script>
    <?php echo $GLOBALS['sett']->analytics ;?>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5HBFJQS');</script>
    <!-- End Google Tag Manager -->
    <?php $user = $this->session->userdata('loged');
    if(empty($user)){
        ?>
        <script type="text/javascript">
            var msg = "";
            function disableIE() {
                if (document.all) {
                    // alert(msg);
                    return false;
                }
            }
            function disableNS(e) {
                if (document.layers || (document.all
                ))
                {
                    if (e.which == 2 || e.which == 3) {
                        // alert(msg);
                        return false;
                    }
                }
            }
            if (document.layers) {
                document.captureEvents(Event.MOUSEDOWN);
                document.onmousedown = disableNS;
            } else {
                document.onmouseup = disableNS;
                document.oncontextmenu = disableIE;
            }
            document.oncontextmenu = new Function("return false");

        </script>
        <style>
            body{
                user-select: none;
                -moz-user-select: none; /* Firefox */
                -ms-user-select: none; /* Internet Explorer */
                -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
                -webkit-user-select: none; /* Chrome, Safari, and Opera */
                -webkit-touch-callout: none; /* Disable Android and iOS callouts*/
            }
        </style>
    <?php } ?>
</head>