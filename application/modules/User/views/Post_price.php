<div class="list-form-price">
    <p class="note-price-post"></p>
    <form id="form-price">
        <input type="hidden" value="<?php echo $pro->id;?>" name="idsp">
        <div class="row row-5">
            <div class="col-sm-6 padding-5">
                <div class="form-group row">
                    <div class="col-sm-12">
                        <input type="text" name="price[]" class="form-control" placeholder="<?php echo rear('price_run');?>" data-validation="required">
                    </div>
                </div>
            </div>
            <div class="col-sm-6 padding-5">
                <div class="form-group row">
                    <div class="col-sm-12">
                        <input type="text" name="price_old[]" class="form-control" placeholder="<?php echo rear('price_old');?>" data-validation="required">
                    </div>
                </div>
            </div>
        </div>
        <div class="row row-5">
            <div class="col-sm-6 padding-5">
                <div class="form-group row">
                    <div class="col-sm-12">
                        <input type="text" name="price[]" class="form-control" placeholder="<?php echo rear('price_run');?>" data-validation="required">
                    </div>
                </div>
            </div>
            <div class="col-sm-6 padding-5">
                <div class="form-group row">
                    <div class="col-sm-12">
                        <input type="text" name="price_old[]" class="form-control" placeholder="<?php echo rear('price_old');?>" data-validation="required">
                    </div>
                </div>
            </div>
        </div>
        <div class="row row-5">
            <div class="col-sm-6 padding-5">
                <div class="form-group row">
                    <div class="col-sm-12">
                        <input type="text" name="price[]" class="form-control" placeholder="<?php echo rear('price_run');?>" data-validation="required">
                    </div>
                </div>
            </div>
            <div class="col-sm-6 padding-5">
                <div class="form-group row">
                    <div class="col-sm-12">
                        <input type="text" name="price_old[]" class="form-control" placeholder="<?php echo rear('price_old');?>" data-validation="required">
                    </div>
                </div>
            </div>
        </div>
        <div class="row row-5">
            <div class="col-sm-6 padding-5">
                <div class="form-group row">
                    <div class="col-sm-12">
                        <input type="text" name="price[]" class="form-control" placeholder="<?php echo rear('price_run');?>" data-validation="required">
                    </div>
                </div>
            </div>
            <div class="col-sm-6 padding-5">
                <div class="form-group row">
                    <div class="col-sm-12">
                        <input type="text" name="price_old[]" class="form-control" placeholder="<?php echo rear('price_old');?>" data-validation="required">
                    </div>
                </div>
            </div>
        </div>
        <div class="row row-5">
            <div class="col-sm-6 padding-5">
                <div class="form-group row">
                    <div class="col-sm-12">
                        <input type="text" name="price[]" class="form-control" placeholder="<?php echo rear('price_run');?>" data-validation="required">
                    </div>
                </div>
            </div>
            <div class="col-sm-6 padding-5">
                <div class="form-group row">
                    <div class="col-sm-12">
                        <input type="text" name="price_old[]" class="form-control" placeholder="<?php echo rear('price_old');?>" data-validation="required">
                    </div>
                </div>
            </div>
        </div>
        <div class="row row-5">
            <div class="col-sm-6 padding-5">
                <div class="form-group row">
                    <div class="col-sm-12">
                        <input type="text" name="price[]" class="form-control" placeholder="<?php echo rear('price_run');?>" data-validation="required">
                    </div>
                </div>
            </div>
            <div class="col-sm-6 padding-5">
                <div class="form-group row">
                    <div class="col-sm-12">
                        <input type="text" name="price_old[]" class="form-control" placeholder="<?php echo rear('price_old');?>" data-validation="required">
                    </div>
                </div>
            </div>
        </div>
        <div class="row row-5">
            <div class="col-sm-6 padding-5">
                <div class="form-group row">
                    <div class="col-sm-12">
                        <input type="text" name="price[]" class="form-control" placeholder="<?php echo rear('price_run');?>" data-validation="required">
                    </div>
                </div>
            </div>
            <div class="col-sm-6 padding-5">
                <div class="form-group row">
                    <div class="col-sm-12">
                        <input type="text" name="price_old[]" class="form-control" placeholder="<?php echo rear('price_old');?>" data-validation="required">
                    </div>
                </div>
            </div>
        </div>
        <p class="btn-group-login text-center">
            <button class="btn btn-danger btn-office-reg"
                    type="submit"><?php echo rear('submit_price'); ?></button>
        </p>
    </form>
</div>
<script>
    $(document).ready(function () {
        $.validate({
            form: "#form-price",
            lang: "vi",
            modules: 'security',
            scrollToTopOnError: !1,
            borderColorOnError: "#ff0000",
            onSuccess: function (data) {
                $.ajax({
                    type: "post",
                    url: '<?php echo base_url();?>post-price',
                    data: $('#form-price').serialize(),
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
