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
    <link href="<?php echo base_url();?>skin/frontend/font-awesome/css/font-awesome.min.css?v=<?php echo time();?>" rel="stylesheet">
    <link href="<?php echo base_url();?>skin/frontend/css/theme-default.css?v=<?php echo time();?>" rel="stylesheet"/>


    <link href="<?php echo base_url();?>skin/frontend/css/checkout.css?v=<?php echo time();?>" rel="stylesheet"/>

    <script src="<?php echo base_url();?>skin/frontend/js/jquery-3.1.1.min.js?v=<?php echo time();?>" ></script>
    <script src="<?php echo base_url();?>skin/frontend/js/tether.min.js" ></script>
    <script src="<?php echo base_url();?>skin/frontend/js/bootstrap.min.js?v=<?php echo time();?>" ></script>
<!--    <script src="--><?php //echo base_url();?><!--skin/frontend/js/components/tooltip.js" ></script>-->

    <script src="<?php echo base_url();?>skin/frontend/js/jquery.form-validator.min.js" ></script>

    <script src="<?php echo base_url();?>skin/frontend/js/custom.js?v=<?php echo time();?>" ></script>
    <?php echo $GLOBALS['sett']->analytics ;?>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5HBFJQS');</script>
    <!-- End Google Tag Manager -->
</head>