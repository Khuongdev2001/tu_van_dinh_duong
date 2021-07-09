<div class="modal" tabindex="-1" role="dialog" id="v3-modal1">
    <div class="popup-holder banner-popup-register" style="background: #fff url(<?php echo $GLOBALS['sett']->banner_popup; ?>) center top no-repeat;">
        <button type="button" class="close d-block d-sm-none" data-dismiss="modal" aria-label="Close"><img
                    src="<?php echo base_url();?>skin/frontend/images/icon-close.png"
                    alt="">
        </button>
        <div class="row">
            <div class="col-sm-6">
                <div class="offer-wrap"><img
                            src="<?php echo $GLOBALS['sett']->logo; ?>"
                            alt="" class="img-responsive"></div>
            </div>
        </div>
        <form accept-charset="utf-8" method="post"
              class="form-contact1 register-form-cookie">
            <div class="input-group-wrapper">
                <div class="input-group"><label>Họ Tên</label>
                    <input type="text" class="form-control"
                           placeholder=""
                           name="name" required></div>
                <div class="input-group"><label>Số ĐT</label>
                    <input name="phone" type="tel"
                           value=""
                           class="form-control" required
                           data-msg-required="Thông tin bắt buộc"
                           data-rule-vnphone="true"></div>
                <div class="input-group">
                    <label>Chọn cơ sở</label>
                    <select name="address" required=""
                            data-msg-required="Thông tin cần thiết"
                            class="form-control"
                            aria-required="true">
                        <option value=""></option>
                        <?php if(!empty($contact)){ foreach ($contact as $con) { ?>
                        <option value="<?php echo $con->title ;?>"><?php echo $con->title ;?></option>
                        <?php } } ?>
                    </select>
                </div>
            </div>
            <input type="hidden" name="curl" value="<?php echo current_url();?>">
            <button type="submit" class="cool-btn-cta">Đăng ký ngay</button>
            <p><small>Jade Spa sẽ liên hệ tư vấn và xác nhận thông tin.</small></p></form>
    </div>
</div>
<script>
    $(document).ready(function () {
        $('.form-contact1').submit(function () {
            $.ajax({
                type: "post",
                url: '<?php echo base_url();?>register',
                data: $('.form-contact1').serialize(),
                dataType: 'json',
                success: function (data) {
                    $('.form-contact1').html(data.view);
                }
            });
            return false;
        })
    })
</script>