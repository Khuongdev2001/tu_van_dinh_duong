<!DOCTYPE html>

<html>
<head lang="vi">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="description" content=""/>
    <meta name="author" content=""/>
    <link rel="icon" href=""/>
    <title>Admin Sky Viet Nam</title>
    <!-- Bootstrap core CSS -->
    <link href='https://fonts.googleapis.com/css?family=Open+Sans&subset=latin,vietnamese' rel='stylesheet' type='text/css'>
    <link href="<?php echo base_url();?>skin/admin/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="<?php echo base_url();?>skin/admin/css/bootstrap-theme.min.css" rel="stylesheet"/>
    <link href="<?php echo base_url();?>skin/admin/css/login.css" rel="stylesheet"/>
    <link href="<?php echo base_url();?>skin/admin/css/non-resposive.css" rel="stylesheet"/>
    <!-- Bootstrap core js -->
    <script src="<?php echo base_url();?>skin/admin/js/jquery.2.2.0.min.js"></script>
    <script src="<?php echo base_url();?>skin/admin/js/bootstrap.min.js"></script>
    <!--ie-->
    <script src="<?php echo base_url();?>skin/admin/js/html5shiv.js"></script>
    <script src="<?php echo base_url();?>skin/admin/js/respond.min.js"></script>
</head>
<body>
<div class="wrapper">
    <div class="popup_login">
        <div class="box_login">
            <div class="div_logo">
                <a href="http://skyweb.com.vn/" target="_blank">
                    <img src="<?php echo base_url();?>skin/admin/images/logo_login.png" alt="http://skyweb.com.vn/"/>
                </a>
            </div>
            <?php
            #check autologin
            $cookie_name	= base_url();
            // Check if the cookie exists
            if(isset($_COOKIE[$cookie_name])){
                echo 'cok';
                $a_User = parse_str($_COOKIE[$cookie_name]);
                $check=$this->common_model->getone('users',array('username'=>$a_User['username'],'password'=>SHA1(MD5($a_User['password']))));
                if(!empty($check)){
                    $this->session->set_userdata('loged',$check->id);
                    redirect('admin/dashboard');
                }
            }

            ?>
            <div class="box_form">
                <?php
                $email=form_error('email');
                if(!empty($error)) {
                    if ($error == 1) {
                        echo '<span class="glyphicon glyphicon-warning-sign custom_icon"></span><span class="span_error">Email này không tồn tại</span>';
                    }
                }
                if(!empty($success)) {
                    if ($success == 1) {
                        echo '<span class="glyphicon glyphicon-ok custom_icon"></span><span class="">Reset mật khẩu thành công</span>';
                    }
                }
                ?>
                <form action="<?php echo base_url();?>manager/forgot-password" method="post">
                    <input type="text" name="email" value="" placeholder="email" class=" input_login"/>
                    <input type="submit" value="Reset password" class="button_login"/>
                    <p class="row_action">
                        <a class="title_forgot" href="<?php echo base_url();?>manager/login">Đăng nhập</a>
                    </p>
                </form>
            </div>
        </div>
        <div class="link_web">
            <a href="http://skyvietnam.com.vn/" class="link_underline" target="_blank">Sky Việt Nam</a>
            <a href="http://skyweb.com.vn/" class="link_underline" target="_blank">Skyweb</a>
            <a class="link_underline" href="http://bigweb.com.vn/" target="_blank">Bigweb</a>
        </div>
        <p class="copyright">Copyright © 2016 SkyVietNam</p>
    </div>
    <div class="overlay"></div>
</div>
<script src="<?php echo base_url();?>skin/admin/js/customs.js"></script>
</body>

</html>

