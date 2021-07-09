<section class="body-content">
    <div class="container">
        <div class="post-page">
            <div class="content-post-info-user">
                <div class="icon-cart">
                    <div class="cart-active" style="width: 50%">
                        <span></span>
                    </div>
                </div>
                <div class="pay">
                    <div class="row">
                        <div class="col-sm-8">
                            <h1 class="title-head cat">
                                <a><?php echo rear('info_cart'); ?></a>
                            </h1>
                            <?php if (empty($_COOKIE['member'])) { ?>
                                <div class="user-cart">
                                    <p class="note-user">
                                        <?php echo rear('info_user'); ?>
                                    </p>
                                    <form id="form-login">
                                        <div class="row justify-content-center">
                                            <div id="err-login">

                                            </div>
                                            <div class="col-sm-8 ">
                                                <div class="form-group row">
                                                    <label for="user-email" class="col-sm-3 col-form-label">Email <span>(*)</span></label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" id="user-email"
                                                               name="username" placeholder="email@example.com"
                                                               data-validation="required,email">
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label for="inputPassword"
                                                           class="col-sm-3 col-form-label"><?php echo rear('password'); ?>
                                                        <span>(*)</span></label>
                                                    <div class="col-sm-9">
                                                        <input type="password" class="form-control" id="inputPassword"
                                                               name="password" placeholder="Password"
                                                               data-validation="required">
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label for="inputPassword" class="col-sm-3 col-form-label"></label>
                                                    <div class="col-sm-9 ">
                                                        <button type="submit"
                                                                class="btn btn-primary float-right"><?php echo rear('user_login'); ?></button>
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
                                                                            window.location.href='<?php echo base_url().rear("link_check_out")?>';
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
                            <?php } ?>
                            <div class="form-order-send">
                                <p class="note-customer">
                                    <?php echo rear('info_cus'); ?>
                                </p>
                                <div class="content-post-cart">
                                    <form action="<?php echo base_url(rear('link_check_out')); ?>" method="post"
                                          id="form-validate"
                                          class="form-cart">
                                        <div class="form-group row">
                                            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                                            <div class="col-sm-10">
                                                <input type="text" readonly class="form-control-plaintext"
                                                       id="staticEmail" value="email@example.com">
                                            </div>
                                        </div>
                                        <div class="form-group row ">
                                            <label for="inputPassword"
                                                   class="col-sm-2 col-form-label">Password</label>
                                            <div class="col-sm-10">
                                                <input type="password" class="form-control" id="inputPassword"
                                                       placeholder="Password">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="row">
                                                    <div class="col-sm-8">
                                                        <div class="form-group">
                                                            <input name="email" class="form-control"
                                                                   placeholder="Email(*)"
                                                                   type="text"
                                                                   data-validation="required,email">
                                                        </div>
                                                        <div class="form-group">
                                                            <input name="name" class="form-control"
                                                                   placeholder="Họ và tên"
                                                                   type="text"
                                                                   data-validation="required">
                                                        </div>
                                                        <div class="form-group">
                                                            <input name="phone" class="form-control"
                                                                   placeholder="Điện thoại"
                                                                   type="text"
                                                                   data-validation="required,length,number"
                                                                   data-validation-allowing="float"
                                                                   data-validation-length="10-20">
                                                        </div>
                                                        <div class="form-group">
                                                            <input name="address" class="form-control"
                                                                   placeholder="Địa chỉ"
                                                                   type="text"
                                                                   data-validation="required">
                                                        </div>

                                                        <div class="form-group">
                                        <textarea name="content" class="form-control" rows="5"
                                                  placeholder="Ghi chú"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <input type="hidden" name="code" value="<?php echo $code; ?>">
                                                <input style="cursor: pointer" type="submit"
                                                       class="btn btn-primary"
                                                       value="Thanh toán"
                                                       name="update">
                                            </div>
                                            <script>
                                                $(document).ready(function () {
                                                    $.validate({
                                                        form: '#form-validate',
                                                        lang: 'vi'
                                                    });
                                                })
                                            </script>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="left-order-send">
                                <div class="content-post-cart">
                                    <div class="title-pay-cart">Chi tiết đơn hàng</div>
                                    <table class="list-pay">
                                        <tbody>
                                        <?php if ($this->cart->contents()) {
                                            foreach ($this->cart->contents() as $item) {
                                                $pro = $this->Common_model->get_one('product', array('id' => $item['id']));
                                                ?>
                                                <tr>
                                                    <td width="10%">
                                                        <a class="img" target="_blank"
                                                           href="<?php echo base_url() . $pro->alias; ?>">
                                                            <img alt="<?php echo show_meta($pro); ?>"
                                                                 src="<?php echo $pro->image; ?>">
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <span class="title"><?php echo $pro->title; ?></span>
                                                    </td>
                                                    <td width="20%">
											<span class="price">
																				          			<?php echo VndDot($pro->price); ?>
                                                <sup>đ</sup> x <?php echo $item['qty']; ?>
									          									          	</span>
                                                    </td>
                                                </tr>
                                            <?php } ?>
                                            <tr>
                                                <td colspan="2"><b>Tổng số tiền thanh toán:</b></td>
                                                <td colspan="1">
                                                    <b><?php echo VndDot($this->cart->total()); ?></b><sup>đ</sup></td>
                                            </tr>
                                        <?php } ?>
                                        </tbody>
                                    </table>
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