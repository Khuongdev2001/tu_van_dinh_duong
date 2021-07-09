<section class="bread-crumb breadcrumb-article ">
    <div class="container">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="<?php echo base_url(); ?>">Trang chủ</a></li>
            <li class="breadcrumb-item">
                <a href="<?php echo base_url() . 'dang-ky-lam-dai-ly'; ?>"
                   title="Đăng ký làm đại lý">
                    Đăng ký làm đại lý
                </a>
            </li>
        </ol>
    </div>
</section>
<section class="style-blog main-article">
    <div class="container">
        <h1 class="article-title">
            <a href="<?php echo base_url() . 'dang-ky-lam-dai-ly'; ?>"
               title="Đăng ký làm đại lý">
                Đăng ký làm đại lý
            </a>
        </h1>
        <div class="row">
            <div class="col-lg-6">
                <form id="form-contact">
                    <div class="row">
                        <div class="col-sm-12" style="float: none; margin: 0 auto">
                            <div class="form-group">
                                <input type="text" class="form-control" name="name" placeholder="Họ và tên (*)"
                                       data-validation="required">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" name="phone" placeholder="Số điện thoại (*)"
                                       data-validation="required,length,number"
                                       data-validation-allowing="float"
                                       data-validation-length="10-20">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" name="email" data-validation="email"
                                       placeholder="Email">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" name="address" placeholder="Địa chỉ">
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" rows="3" name="content"
                                          placeholder="Nội dung"></textarea>
                            </div>
                            <div class="row">
                                <div class="col-sm-12 text-left">
                                    <button type="submit" class="btn btn-danger btn-send"
                                            style="cursor: pointer">
                                        Hoàn thành đăng ký
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <script>
                    $(document).ready(function () {
                        $.validate({
                            form: '#form-contact',
                            lang: 'vi',
                            scrollToTopOnError: !1,
                            borderColorOnError: "#ff0000",
                            onSuccess: function (b) {
                                $.ajax({
                                    type: "post",
                                    url: '<?php echo base_url();?>register-contact',
                                    data: $('#form-contact').serialize(),
                                    dataType: 'json',
                                    success: function (data) {
                                        $('#form-contact').html(data.view);
                                    }
                                });
                                return false;
                            }
                        });
                    })
                </script>
            </div>
            <div class="col-lg-6">
                <?php if(!empty($sett)){echo $sett->address_contact; }?>
            </div>
        </div>
    </div>
</section>



