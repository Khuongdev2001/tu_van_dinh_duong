<?php if (!empty($cate)) { ?>
    <div class="body-content body-about">
        <div class="container">
            <div class="support-online">
                <div class="row row-10">
                    <div class="col-sm-6 padding-10">
                        <a href="tel:<?php echo $GLOBALS['supp']->phone; ?>">
                            <img src="<?php echo base_url('skin/frontend/images/tu-van.png') ?>" alt="support online">
                        </a>
                    </div>
                    <?php if (!empty($GLOBALS['supp']->support)) {
                        $support = json_decode($GLOBALS['supp']->support);
                        ?>
                        <div class="col-sm-6 padding-10">
                            <div class="support-list">
                                <div class="row row-5">
                                    <?php foreach ($support as $sp) { ?>
                                        <div class="col-sm-4 padding-5">
                                            <div class="item-support">
                                                <p class="it-img"><img src="<?php echo $sp->image; ?>"
                                                                       alt="<?php echo $sp->name; ?>"></p>
                                                <p class="it-name"><?php echo $sp->name; ?></p>
                                                <p class="it-title"><?php echo $sp->title; ?></p>
                                                <p class="it-phone"><?php echo $sp->phone; ?></p>
                                            </div>
                                        </div>
                                    <?php } ?>
                                </div>
                            </div>
                        </div>
                    <?php } ?>
                </div>
            </div>
            <div class="form-poll">
                <form id="form-poll">
                    <div class="note-err"></div>
                    <div class="row row-5">
                        <div class="col-sm-6 padding-5">
                            <div class="form-group row">
                                <label class="col-3 col-form-label">Họ và tên <span>*</span></label>
                                <div class="col-9">
                                    <input class="form-control" name="fullname" type="text" data-validation="required">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-3 col-form-label">Số điện thoại <span>*</span></label>
                                <div class="col-9">
                                    <input class="form-control" name="phone" type="text"
                                           data-validation="required,length,number"
                                           data-validation-allowing="float"
                                           data-validation-length="10-20">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-3 col-form-label">Email <span>*</span></label>
                                <div class="col-9">
                                    <input class="form-control" name="email" type="text"
                                           data-validation="required,email">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-3 col-form-label">Tiêu đề <span>*</span></label>
                                <div class="col-9">
                                    <input class="form-control" name="title" type="text" data-validation="required">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-3 col-form-label">Nội dung</label>
                                <div class="col-9">
                                    <textarea class="form-control" name="excerpt" rows="3"
                                              placeholder="Nhập nội dung câu hỏi của bạn "
                                              data-validation="required"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 padding-5 text-right ">
                            <button type="submit" class="btn btn-danger btn-send"
                                    style="cursor: pointer">
                                Gửi câu hỏi
                            </button>
                            <button type="button" class="btn btn-danger btn-send"
                                    style="cursor: pointer">
                                Hủy
                            </button>
                        </div>
                    </div>
                </form>
                <script>
                    $(document).ready(function () {
                        $.validate({
                            form: '#form-poll',
                            lang: 'vi',
                            scrollToTopOnError: false,
                            onSuccess: function () {
                                return $.ajax({
                                    type: "POST",
                                    url: '<?php echo base_url("poll-send")?>',
                                    data: $('#form-poll').serialize(),
                                    dataType: 'json',
                                    success: function (data) {
                                        if (data.mes == 1) {
                                            $("#form-poll").html(data.html);
                                        } else {
                                            var htm = '<p class="by-err">Đã có lỗi xảy ra.</p>';
                                            $('.note-err').html(htm);
                                        }
                                    }
                                }), !1
                            },
                        });
                    })
                </script>


            </div>
            <?php if (!empty($poll)) { ?>
                <div class="poll-list">
                    <p class="title-poll-list">Câu hỏi thường gặp</p>
                    <ul>
                        <?php foreach ($poll as $po) { ?>
                            <li>
                                <a href="<?php echo base_url('hoi-dap/'.$po->alias.'.html');?>"><?php echo $po->title ;?></a>
                            </li>
                        <?php } ?>
                    </ul>
                </div>
            <?php } ?>
        </div>
    </div>
<?php } ?>