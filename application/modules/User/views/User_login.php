<section class="body-content">
    <div class="container">
        <div class="post-page">
            <div class="content-post-info-user">
                <div class="pay">
                    <div class="row">
                        <div class="col-sm-12">
                            <h1 class="title-head-login">
                                <a><?php echo rear('info_login'); ?></a>
                            </h1>
                            <?php if (empty($_SESSION['member'])) { ?>
                                <div class="user-cart">
                                    <form id="form-login">
                                        <div class="row justify-content-center">
                                            <div id="err-login">

                                            </div>
                                            <div class="col-sm-8 ">
                                                <div class="form-group row">
                                                    <label for="user-email" class="col-sm-3 col-form-label">Email <span>(*)</span></label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" id="user-email"
                                                               name="username" 
                                                               data-validation="required,email">
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label for="inputPassword"
                                                           class="col-sm-3 col-form-label"><?php echo rear('password'); ?>
                                                        <span>(*)</span></label>
                                                    <div class="col-sm-9">
                                                        <input type="password" class="form-control" id="inputPassword"
                                                               name="password"
                                                               data-validation="required">
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label for="inputPassword" class="col-sm-3 col-form-label"></label>
                                                    <div class="col-sm-9 ">
                                                        
                                                        <p class="text-right" style="margin-bottom: 30px"><button type="submit"
                                                                   class="btn btn-primary"><?php echo rear('user_login'); ?></button></p>
                                                        <p class="register-account text-right"><a style="color: #00a66b" href="<?php echo base_url().rear('link_register');?>">Tạo tài khoản mới</a></p>
                                                    </div>
                                                </div>
                                                <script>
                                                    $(document).ready(function () {
                                                        $.validate({
                                                            form: '#form-login',
                                                            lang: 'vi',
                                                            scrollToTopOnError: !1,
                                                            borderColorOnError: "#ff0000",
                                                            onSuccess: function (data) {
                                                                $.ajax({
                                                                    type: "post",
                                                                    url: '<?php echo base_url() . 'login-cart';?>',
                                                                    data: $('#form-login').serialize(),
                                                                    dataType: 'json',
                                                                    success: function (data) {
                                                                        if (data.mes == 1) {
                                                                            location.reload();
                                                                        } else {
                                                                            $('#err-login').html(data.html);
                                                                        }
                                                                    }
                                                                });
                                                                return false;
                                                            }
                                                        });
                                                    })
                                                </script>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            <?php } else { ?>
                            <?php } ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<style>
    .form-error {
        display: none;
    }

</style>