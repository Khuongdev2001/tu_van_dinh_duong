<?php if (!empty($pro)) { ?>
    <div id="wap-comment" class="wap-comment">
        <p class="wap-title-comment">Ý kiến khách hàng (<?php echo $total_comment ;?>)</p>
        <div class="wap-comment-pri">
            <form id="form-comment-parent" class="form-comment-parent">
                <input type="hidden" name="type" class="form-control" value="1">
                <input type="hidden" name="idpost" class="form-control" value="<?php echo $pro->id; ?>">
                <div class="form-group">
                    <label for="wap-content">Đánh giá của bạn</label>
                    <textarea name="comment" class="form-control" id="wap-content" onclick="display_text();" rows="3"
                              placeholder="Nhận xét của bạn" data-validation="required"></textarea>
                </div>
                <div class="form-group text-comment" style="display: none">
                    <div class="row">
                        <div class="col-sm-6">
                            <input type="text" name="name" class="form-control" placeholder="Tên bạn"
                                   data-validation="required">
                        </div>
                    </div>
                </div>
                <div class="form-group text-comment" style="display: none">
                    <div class="row">
                        <div class="col-sm-6">
                            <input type="text" name="phone" class="form-control" placeholder="Số điện thoại của bạn"
                                   data-validation="required,length,number"
                                   data-validation-allowing="float"
                                   data-validation-length="10-20">
                        </div>
                    </div>
                </div>
                <div class="form-group text-comment" style="display: none">
                    <div class="row">
                        <div class="col-sm-6">
                            <input type="email" name="email" class="form-control" placeholder="Email của bạn"
                                   data-validation="required,email">
                        </div>
                    </div>
                </div>
                <div class="form-group  action-btn-comment" style="text-align: right">
                    <button class="btn btn-primary" type="submit">Thêm nhận xét</button>
                    <button class="btn btn-primary btn-reset" type="button" style="display: none"
                            onclick="reset_text()">Hủy
                    </button>
                </div>
            </form>
        </div>
        <?php if (!empty($comment)) {
            foreach ($comment as $cm) {
                ?>
                <div class="list-comment-pro" >
                    <div class="item-parent-pri" id="comment-user-<?php echo $cm->id ;?>">
                        <div class="row">
                            <div class="col-sm-12">
                                <p class="full_content">
                            <span class="avatar-user">
                                <span class="fa fa-user"></span>
                            </span>
                                    <span class="nickname txt_666 hover" title="" href="javascript:;"><?php echo $cm->name ;?></span> <span
                                            class="bought"
                                            style="font-weight:normal;font-style:italic;color:#999;font-size:95%"></span>
                                    <span class="ount-comment"></span>
                                    <span class="content"><?php echo $cm->comment ;?></span>
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <p class="date-comment">
                                    <i class="fa fa-clock-o"></i> <?php echo date('H:i , d/m/Y',strtotime($cm->date_create));?>
                                </p>
                            </div>
                            <div class="col-6">
                                <p class="action-add-rep" style="text-align: right">
                                    <span class="btn-rep-pri" data-com="<?php echo $cm->id ;?>" data-post="<?php echo $pro->id ;?>">
                                        <i class="fa fa-reply"></i> Trả lời
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <?php echo Modules::run('Comment/Comment/sub_comment',$cm,$pro);?>
                </div>
            <?php }
        } ?>
    </div>
    <script>
        $(document).ready(function () {
            $.validate({
                form: '#form-comment-parent',
                lang: 'vi',
                scrollToTopOnError: !1,
                borderColorOnError: "#ff0000",
                onSuccess: function (data) {
                    $.ajax({
                        type: "post",
                        url: '<?php echo base_url() . 'comment-primary1';?>',
                        data: $('#form-comment-parent').serialize(),
                        dataType: 'json',
                        success: function (data) {
                            if (data.mess == 1) {
                                $.notify(data.views, 'success');
                                $('.text-comment').hide();
                                $('.btn-reset').hide();
                            } else {
                                $.notify(data.views, 'danger');
                            }
                        }
                    });
                    return false;
                }
            });
            $('.btn-rep-pri').on('click',function () {
                var  com = $(this).attr('data-com');
                var  idpost = $(this).attr('data-post');
                var  idhtm = $(this).parents('.item-parent-pri').attr('id');
                $('.wap-comment-reply').remove();
                $.ajax({
                    type: "post",
                    url: '<?php echo base_url() . 'comment-reply-parent1';?>',
                    data: {id:com,idpost:idpost},
                    dataType: 'json',
                    success: function (data) {
                        if (data.mess == 1) {
                            $('#'+idhtm).append(data.views);
                        } else {

                        }
                    }
                });
                return false;
            });
            $('.btn-rep-sub').on('click',function () {
                var  com = $(this).attr('data-com');
                var  idpost = $(this).attr('data-post');
                var  idhtm = $(this).parents('.item-sub-pri').attr('id');
                $('.wap-comment-reply').remove();
                $.ajax({
                    type: "post",
                    url: '<?php echo base_url() . 'comment-reply-parent';?>',
                    data: {id:com,idpost:idpost},
                    dataType: 'json',
                    success: function (data) {
                        if (data.mess == 1) {
                            $('#'+idhtm).append(data.views);
                        } else {

                        }
                    }
                });
                return false;
            })
        })
        function display_text() {
            $('.text-comment').show('slow');
            $('.btn-reset').show();
        }
        function reset_text() {
            $('.text-comment').hide();
            $('.btn-reset').hide();
        }
    </script>
<?php } ?>