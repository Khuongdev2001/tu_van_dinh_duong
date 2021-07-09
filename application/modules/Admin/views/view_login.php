<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head lang="vi">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="description" content=""/>
    <meta name="author" content=""/>
    <link rel="icon" href=""/>
    <title>Administrator</title>
    <!-- Bootstrap core CSS -->
    <link href='https://fonts.googleapis.com/css?family=Open+Sans&subset=latin,vietnamese' rel='stylesheet'
          type='text/css'>
    <link href="<?php echo base_url(); ?>skin/admin/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="<?php echo base_url(); ?>skin/admin/css/bootstrap-theme.min.css" rel="stylesheet"/>
    <link href="<?php echo base_url(); ?>skin/admin/css/login.css" rel="stylesheet"/>
    <link href="<?php echo base_url(); ?>skin/admin/css/non-resposive.css" rel="stylesheet"/>
    <!-- Bootstrap core js -->
    <script src="<?php echo base_url(); ?>skin/admin/js/jquery.2.2.0.min.js"></script>
    <script src="<?php echo base_url(); ?>skin/admin/js/bootstrap.min.js"></script>
    <!--ie-->
    <script src="<?php echo base_url(); ?>skin/admin/js/html5shiv.js"></script>
    <script src="<?php echo base_url(); ?>skin/admin/js/respond.min.js"></script>
</head>
<body>
<div class="wrapper">
    <div class="popup_login">
        <div class="box_login">
            <div class="div_logo">
                <a href="" target="_blank">
                    <img src="<?php echo base_url(); ?>skin/admin/images/logo_login.png" alt="Administrator"/>
                </a>
            </div>
            <?php
            #check autologin
            $cookie_name = base_url();
            // Check if the cookie exists
            if (isset($_COOKIE[$cookie_name])) {
                echo 'cok';
                $a_User = parse_str($_COOKIE[$cookie_name]);
                $check = $this->common_model->getone('users', array('username' => $a_User['username'], 'password' => SHA1(MD5($a_User['password']))));
                if (!empty($check)) {
                    $this->session->set_userdata('loged', $check->id);
                    redirect('admin/dashboard');
                }
            }

            ?>
            <div class="box_form">
                <?php if (isset($_COOKIE['number_cap']) && $_COOKIE['number_cap'] >= 5) {
                    echo '<span class="glyphicon glyphicon-warning-sign custom_icon"></span><span class="span_error">Bạn đã đăng nhập quá 5 lần. Vui lòng đăng nhập lại sau 5 phút</span>';
                } else { ?>
                    <?php
                    $name = form_error('username');
                    $pass = form_error('password');
                    if (!empty($name) || !empty($pass)) {
                        echo '<span class="glyphicon glyphicon-warning-sign custom_icon"></span><span class="span_error">Vui lòng nhập đầy đủ Tên đăng nhập và Mật khẩu</span>';
                    } elseif (!empty($error)) {
                        if ($error == 1) {
                            echo '<span class="glyphicon glyphicon-warning-sign custom_icon"></span><span class="span_error">Tên đăng nhập hoặc mật khẩu không đúng</span>';
                        }
                    }
                    if ($capt2 == 1) {
                        echo '<span class="glyphicon glyphicon-warning-sign custom_icon"></span><span class="span_error">Nhập sai mã kiểm tra</span>';
                    }

                    ?>
                    <form action="<?php echo base_url(); ?>manager" method="post">
                        <div>
                            <label>Username</label>
                            <input type="text" name="username" value="" placeholder="Nhập username"
                                   class="input_user input_login"/>
                        </div>
                        <label>Mật khẩu</label>
                        <div class="show-pass">
                            <input type="password" name="password" placeholder="Nhập mật khẩu"
                                   class="input_pass input_login"/>
                            <button type="button" class="btn-show-pass"><i class="glyphicon glyphicon-eye-open"></i>
                            </button>
                        </div>
                        <div class="captcha-login">
                            <div class="row">
                                <div class="col-xs-6">
                                    <input type="text" name="capt"
                                           class="input_login <?php if (!empty($capt) || ($capt2 == 1)) {
                                               echo 'error';
                                           } ?>"
                                           value="<?php if (!empty($_POST['capt'])) {
                                               echo $_POST['capt'];
                                           } ?>" placeholder="Mã kiểm tra">

                                </div>
                                <div class="col-xs-6">
                                    <?php if (!empty($cap)) {
                                        echo $cap['image'];
                                    } ?>
                                </div>
                            </div>

                        </div>
                        <input type="submit" value="Đăng nhập" class="button_login"/>
                    </form>
                    <script>
                        $(document).ready(function () {
                            $('.btn-show-pass').on('click', function () {
                                var pass = $('.input_pass').attr('type');
                                if (pass == 'password') {
                                    $('.input_pass').attr('type', 'text');
                                } else {
                                    $('.input_pass').attr('type', 'password');
                                }
                            })
                        })
                    </script>
                <?php } ?>
            </div>
        </div>
    </div>
    <div class="overlay"></div>
</div>
<script src="<?php echo base_url(); ?>skin/admin/js/customs.js"></script>
</body>

</html>

