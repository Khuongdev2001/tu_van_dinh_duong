<?php
@session_start();
$_SESSION['baseUrl_ck'] = base_url();
session_cache_limiter(base_url());
$_SESSION['CKFinder_UserRole'] = 'admin';
?>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="description" content=""/>
    <meta name="author" content="Hung development"/>
    <link rel="icon" href="<?php echo base_url();?>skin/admin/images/favicon.png"/>
    <title>Admin </title>
    <!-- Bootstrap core CSS -->
<!--    <link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed:300,300i,400,400i,700,700i" rel="stylesheet">-->
    <base href="<?php echo base_url();?>" />
    <link href="<?php echo base_url(); ?>skin/common/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="<?php echo base_url(); ?>skin/common/css/bootstrap-theme.min.css" rel="stylesheet"/>
    <link href="<?php echo base_url(); ?>skin/admin/css/bootstrap-colorpicker.min.css" rel="stylesheet"/>
    <link href="<?php echo base_url(); ?>skin/admin/css/bootstrap-tagsinput.css" rel="stylesheet"/>
    <link href="<?php echo base_url(); ?>skin/admin/css/customs.css?v<?php echo time(); ?>" rel="stylesheet"/>
    <link href="<?php echo base_url(); ?>skin/admin/css/animate.css" rel="stylesheet"/>
    <link href="<?php echo base_url(); ?>skin/admin/css/custom_dh.css?v<?php echo time(); ?>" rel="stylesheet"/>
    <link href="<?php echo base_url(); ?>skin/admin/css/non-resposive.css" rel="stylesheet"/>
    <link href="<?php echo base_url(); ?>skin/admin/css/bootstrap-datepicker.min.css" rel="stylesheet"/>
    <!-- Bootstrap core js -->
    <script src="<?php echo base_url(); ?>skin/common/js/jquery.2.2.0.min.js"></script>
    <script src="<?php echo base_url(); ?>skin/admin/js/bootstrap.min.js"></script>
    <!--ie-->
    <script src="<?php echo base_url(); ?>skin/admin/js/moment.js"></script>
    <script src="<?php echo base_url(); ?>skin/admin/js/bootstrap-datepicker.min.js"></script>
    <script src="<?php echo base_url(); ?>skin/admin/js/bootstrap-datepicker.vi.min.js"></script>
    <script src="<?php echo base_url(); ?>skin/admin/js/bootstrap-colorpicker.min.js"></script>
    <script src="<?php echo base_url(); ?>skin/admin/js/bootstrap-notify.js"></script>
    <script src="<?php echo base_url(); ?>skin/admin/js/html5shiv.js"></script>
    <script src="<?php echo base_url(); ?>skin/admin/js/respond.min.js"></script>
    <script src="<?php echo base_url(); ?>skin/admin/js/jquery.cookie.js"></script>
    <script src="<?php echo base_url(); ?>skin/admin/js/bootstrap-tagsinput.min.js"></script>
    <script type="text/javascript" src="<?php echo base_url(); ?>ckeditor/ckeditor.js"></script>
    <script type="text/javascript" src="<?php echo base_url(); ?>ckeditor/ckfinder/ckfinder.js"></script>

</head>
<body data-table="<?php if(!empty($_GET['table'])){echo $_GET['table'];}?>" data-base="<?php echo base_url();?>">
<div class="warp">
    <div class="main main-top">
        <div class="container">
            <a class="admin-logo navbar-left" href="<?php echo base_url();?>manager" title="Admin sky viet nam">
                <img src="<?php echo base_url(); ?>skin/admin/images/logo.png" alt="Logo">
            </a>
            <ul class="admin-top navbar-right">
                <li class="admin-name"><a href="<?php echo base_url();?>" target="_blank"><span class="glyphicon glyphicon-home"></span>Xem trang</a></li>
                <li class="admin-notice"><a href="<?php echo base_url('manager/list?table=order');?>"> <span class="glyphicon glyphicon-shopping-cart"></span>  Đơn hàng (<?php $order = $this->Admin_model->get_total('order',array('show'=>0)); if(!empty($order)){echo $order;}else{echo '0';}?>)</a></li>
                <li class="admin-notice"><a href="<?php echo base_url('manager/list?table=contact');?>"> <span class="glyphicon glyphicon-envelope"></span>  Thư chưa xem (<?php $con = $this->Admin_model->get_total('contact',array('show'=>0)); if(!empty($con)){echo $con;}else{echo '0';}?>)</a></li>
                <li><a class="name-user"><span class="glyphicon glyphicon-user"> <?php if(!empty($_SESSION['mem_admin'])){echo $_SESSION['mem_admin']->fullname ;} ?></a></li>
                <li><a class="log-out" href="<?php echo base_url(); ?>manager/logout"><span class="fa fa-sign-out"></span>Đăng xuất</a></li>
            </ul>
        </div>
    </div>
    <!-- end main top-->
    <?php $this->load->view('Admin/menu');?>
    <!-- end main menu-->
    <div class="main main-body">
        <div class="container">
            <div class="row row-section">
                <!-- end admin left-->
                <div class="col-xs-12  admin-content ">
                    <?php echo $page; ?>
                </div>
                <!-- end admin content-->
            </div>
        </div>
    </div>
    <!-- end main body-->
</div>
<script src="<?php echo base_url(); ?>skin/admin/js/customs.js?v<?php echo time(); ?>"></script>
<script src="<?php echo base_url(); ?>skin/admin/js/custom_dh.js?v<?php echo time(); ?>"></script>
<script>
    //CHECK SELECTED FILTER FOR LIST
    function getQueryVariable(variable)
    {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
        }
        return(false);
    }
    $('.action_selecte').each(function(){
        var obj_name=$(this).attr('name');
        var obj_id=getQueryVariable(obj_name);
        if(obj_id){
            $('#'+obj_name+'_'+obj_id).attr("selected","selected");
        }
    });

</script>
</body>
</html>
