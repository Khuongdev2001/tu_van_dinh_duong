<?php if(!empty($sett)){
    $notes = json_decode($sett->notes);
} ?>
<section style="position: relative; background: url(<?php if(!empty($notes[12])){echo $notes[12]; }?>) center no-repeat" class="sec-form">
    <img src="<?php if(!empty($notes[11])){echo $notes[11]; }?>" alt=""
         class="img-responsive d-block d-sm-none">
    <div class="row">
        <div class="col-sm-4 col-lg-3 banner-popup-register">
            <div class="wrap-form">
                <img src="<?php if(!empty($notes[10])){echo $notes[10]; }?>" alt=""
                     class="img-responsive">
                <form  accept-charset="utf-8" method="post"
                      class="form-contact register-form">
                    <div class="input-group-wrapper">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Họ và Tên" name="name" required=""
                                   aria-required="true">
                        </div>
                        <div class="input-group">
                            <input name="phone" type="tel" value="" required="" class="form-control"
                                   placeholder="Số điện thoại" required="" data-msg-required="Thông tin bắt buộc"
                                   data-rule-vnphone="true" aria-required="true">
                        </div>
                        <div class="input-group">
                            <select name="address" required=""
                                    data-msg-required="Thông tin cần thiết" class="form-control"
                                    aria-required="true">
                                <option value="">Chọn cơ sở</option>
                                <?php if(!empty($contact)){ foreach ($contact as $con) { ?>
                                    <option value="<?php echo $con->title ;?>"><?php echo $con->title ;?></option>
                                <?php } } ?>
                            </select>
                        </div>
                    </div>
                    <input type="hidden" name="curl" value="<?php echo current_url();?>">
                    <button type="submit" class="cool-btn-cta">hoàn tất</button>
                </form>
                <script>
                    $(document).ready(function () {
                        $('.form-contact').submit(function () {
                            $.ajax({
                                type: "post",
                                url: '<?php echo base_url();?>register',
                                data: $('.form-contact').serialize(),
                                dataType: 'json',
                                success: function (data) {
                                    $('.form-contact').html(data.view);
                                }
                            });
                            return false;
                        })
                    })
                </script>
            </div>
        </div>
    </div>
</section>
