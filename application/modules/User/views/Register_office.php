<section class="body-content">
    <div class="container">
        <div class="post-page">
            <div class="content-post-info-user">
                <div class="pay">
                    <div class="row">
                        <div class="col-sm-12">
                            <h1 class="title-head-login">
                                <a><?php echo rear('register_account'); ?></a>
                            </h1>
                            <div class="row justify-content-center">
                                <div class="col-sm-7 ">
                                    <div id="err-login">

                                    </div>
                                    <div class="user-cart">
                                        <form id="form-office-register">
                                            <div class="note-register-office">

                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label"><?php echo rear('office_name'); ?> <span>*</span></label>
                                                <div class="col-sm-9">
                                                    <input class="form-control" data-validation="required" name="fullname" type="text">
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label"><?php echo rear('office_phone'); ?> <span>*</span></label>
                                                <div class="col-sm-9">
                                                    <input class="form-control" data-validation="required" name="phone" type="text">
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label"><?php echo rear('office_address'); ?> <span>*</span></label>
                                                <div class="col-sm-9">
                                                    <input class="form-control" data-validation="required" name="address" type="text" placeholder="<?php echo rear('office_address_note'); ?>">
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label"><?php echo rear('office_email'); ?> <span>*</span></label>
                                                <div class="col-sm-9">
                                                    <input class="form-control" data-validation="required,email" name="email"
                                                           type="text">
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label"><?php echo rear('office_pass'); ?> <span>*</span></label>
                                                <div class="col-sm-9">
                                                    <input class="form-control" name="pass_confirmation" data-validation="length"
                                                           data-validation-length="min8" type="password">
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label"><?php echo rear('office_pass_cf'); ?> <span>*</span></label>
                                                <div class="col-sm-9">
                                                    <input class="form-control" name="pass" data-validation="confirmation"
                                                           type="password">
                                                </div>
                                            </div>
                                            <p class="btn-group-login text-center">
                                                <button class="btn btn-danger btn-office-reg"
                                                        type="submit"><?php echo rear('register'); ?></button>
                                            </p>
                                        </form>
                                        <script>
                                            $(document).ready(function () {
                                                $.validate({
                                                    form: "#form-office-register",
                                                    lang: "vi",
                                                    modules: 'security',
                                                    scrollToTopOnError: !1,
                                                    borderColorOnError: "#ff0000",
                                                    onSuccess: function (data) {
                                                        $.ajax({
                                                            type: "post",
                                                            url: '<?php echo base_url();?>register-online',
                                                            data: $('#form-office-register').serialize(),
                                                            dataType: 'json',
                                                            success: function (data) {
                                                                if(data.mess_num==1){
                                                                    $('.note-register-office').html(data.html);
                                                                    $('.note-register-office').show();
                                                                }else{
                                                                    window.location.href = data.html;
                                                                }

                                                            }
                                                        });
                                                        return false;
                                                    }
                                                })
                                            })
                                        </script>
                                    </div>
                                </div>
                            </div>


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
