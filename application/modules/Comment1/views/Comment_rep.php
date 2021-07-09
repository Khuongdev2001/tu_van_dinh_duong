<div class="wap-comment-reply">
    <form id="form-comment-reply" class="form-comment-parent">
        <input type="hidden" name="type" class="form-control" value="1">
        <input type="hidden" name="idpost" class="form-control" value="<?php echo $idpost; ?>">
        <input type="hidden" name="parentid" class="form-control" value="<?php echo $idcom; ?>">
        <div class="form-group">
            <textarea name="comment" class="form-control" rows="3"
                      placeholder="@<?php echo $com_rep->name ;?>" data-validation="required">@<?php echo $com_rep->name ;?>:</textarea>
        </div>
        <div class="form-group text-comment" >
            <div class="row">
                <div class="col-sm-6">
                    <input type="text" name="name" class="form-control" placeholder="Tên bạn"
                           data-validation="required">
                </div>
            </div>
        </div>
        <div class="form-group text-comment" >
            <div class="row">
                <div class="col-sm-6">
                    <input type="text" name="phone" class="form-control" placeholder="Số điện thoại của bạn"
                           data-validation="required,length,number"
                           data-validation-allowing="float"
                           data-validation-length="10-20">
                </div>
            </div>
        </div>
        <div class="form-group text-comment" >
            <div class="row">
                <div class="col-sm-6">
                    <input type="email" name="email" class="form-control" placeholder="Email của bạn"
                           data-validation="required,email">
                </div>
            </div>
        </div>
        <div class="form-group  action-btn-comment" style="text-align: right">
            <button class="btn btn-primary" type="submit">Trả lời</button>
            <button class="btn btn-primary btn-reset" type="button"
                    onclick="reset_text1()">Hủy
            </button>
        </div>
    </form>
</div>
<script>
    $(document).ready(function () {
        $.validate({
            form: '#form-comment-reply',
            lang: 'vi',
            scrollToTopOnError: !1,
            borderColorOnError: "#ff0000",
            onSuccess: function (data) {
                $.ajax({
                    type: "post",
                    url: '<?php echo base_url() . 'comment-primary1';?>',
                    data: $('#form-comment-reply').serialize(),
                    dataType: 'json',
                    success: function (data) {
                        if (data.mess == 1) {
                            $.notify(data.views, 'success');
                            $('.wap-comment-reply').remove();
                        } else {
                            $.notify(data.views, 'danger');
                        }
                    }
                });
                return false;
            }
        });
    })
    function reset_text1() {
        $('.wap-comment-reply').remove();
    }
</script>