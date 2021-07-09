<div class="list-form-price">
    <p class="note-price-post"></p>
    <form id="form-service">
        <input type="hidden" value="<?php echo $pro->id;?>" name="idsp">
        <div class="box-service">
            <div class="box-row-sv" data-id="1">
                <div class="row row-5">
                    <div class="col-sm-5 padding-5">
                        <div class="form-group row">
                            <div class="col-sm-12">
                                <input type="text" name="content[]" class="form-control" placeholder="Thuê xe tự lái,v.v." data-validation="required">
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-5 padding-5">
                        <div class="form-group row">
                            <div class="col-sm-12">
                                <input type="text" name="content_en[]" class="form-control" placeholder="Self-driving car rental, etc." data-validation="required">
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2 padding-5">
                        <span class="remove-sv">
                            <i class="fa fa-trash"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <p class="add-btn-service">
            <button type="button" class="add-service"><?php echo rear('add_action'); ?></button>
        </p>
        <p class="btn-group-login text-center">
            <button class="btn btn-danger btn-office-reg"
                    type="submit"><?php echo rear('submit_action'); ?></button>
        </p>
    </form>
</div>
<script>
    $(document).ready(function () {
        $('.add-service').on('click', function () {
            var max = 1;
            if ($('.box-row-sv').length > 0) {
                var num = $('.box-row-sv:last-child').attr('data-id');
                max = parseInt(num) + 1;
            }
            var html = '<div class="box-row-sv">'+
                '<div class="row row-5">'+
                '<div class="col-sm-5 padding-5">'+
                '<div class="form-group row">'+
                '<div class="col-sm-12">'+
                '<input type="text" name="content[]" class="form-control" placeholder="Thuê xe tự lái,v.v." data-validation="required">'+
                '</div>'+
                '</div>'+
                '</div>'+
                '<div class="col-sm-5 padding-5">'+
                '<div class="form-group row">'+
                '<div class="col-sm-12">'+
                '<input type="text" name="content_en[]" class="form-control" placeholder="Self-driving car rental, etc." data-validation="required">'+
                '</div>'+
                '</div>'+
                '</div>'+
                '<div class="col-sm-2 padding-5">'+
                '<span class="remove-sv">'+
                '<i class="fa fa-trash"></i>'+
                '</span>'+
                '</div>'+
                '</div>'+
                '</div>';
            $('.box-service').append(html);
        });
    });
    $(document).on('click', '.remove-sv', function () {
        $(this).parents('.box-row-sv').remove();
    })
</script>
<style>
    .row-gallery {
        margin-bottom: 10px;
    }
    .row-gallery .btn-browse {
        padding: 3px 10px;
    }
    .remove-gallery {
        background: #ff2222;
        color: #fff;
        padding: 5px 10px;
        margin-left: 10px;
        font-size: 14px;
        cursor: pointer;
    }
</style>
<script>

    $(document).ready(function () {
        $.validate({
            form: "#form-service",
            lang: "vi",
            modules: 'security',
            scrollToTopOnError: !1,
            borderColorOnError: "#ff0000",
            onSuccess: function (data) {
                $.ajax({
                    type: "post",
                    url: '<?php echo base_url();?>post-action',
                    data: $('#form-service').serialize(),
                    dataType: 'json',
                    success: function (data) {
                        if(data.mess==1){
                            $('.note-price-post').html(data.views);
                            $('.note-price-post').show();
                            $('.note-price-post').addClass('alert');
                            $('.note-price-post').addClass('alert-success');
                            setTimeout(function () {
                                $('.module-price .close').trigger('click');
                                location.reload();
                            },3000);
                        }else{
                            $('.note-price-post').html(data.views);
                            $('.note-price-post').show();
                            $('.note-price-post').addClass('alert');
                            $('.note-price-post').addClass('alert-warning');
                        }

                    }
                });
                return false;
            }
        })
    })
</script>
