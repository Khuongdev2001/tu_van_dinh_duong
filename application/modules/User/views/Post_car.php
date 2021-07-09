<?php $customer = 'customer' . $_SESSION['rear']; ?>
<link href="<?php echo base_url(); ?>skin/frontend/js/upload/css/fileinput.css" media="all" rel="stylesheet"
      type="text/css"/>
<script src="<?php echo base_url(); ?>skin/frontend/js/upload/js/fileinput.js" type="text/javascript"></script>
<script src="<?php echo base_url(); ?>skin/frontend/js/upload/js/locales/fr.js" type="text/javascript"></script>
<script src="<?php echo base_url(); ?>skin/frontend/js/upload/js/locales/es.js" type="text/javascript"></script>

<div class="main-content">
    <div class="container">
        <div class="row row-5">
            <div class="col-sm-4 col-md-3">
                <p class="acc-title"><?php echo rear('account_title_filter'); ?></p>
                <div class="acc-module">
                    <ul>
                        <li>
                            <a href="<?php echo base_url() . rear('info_account'); ?>"><?php echo rear('info_account_sir'); ?></a>
                        </li>
                        <li>
                            <a href="<?php echo base_url() . rear('account_alias_info'); ?>"><?php echo rear('account_title_info'); ?></a>
                        </li>
                        <li>
                            <a href="<?php echo base_url() . rear('account_alias_post'); ?>"><?php echo rear('account_post'); ?></a>
                        </li>
                        <li>
                            <a href="<?php echo base_url() . rear('account_alias_customer'); ?>"><?php echo rear('account_list_customer'); ?></a>
                        </li>
                        <li>
                            <a href="<?php echo base_url() . rear('account_change_pass_alias'); ?>"><?php echo rear('account_change_pass'); ?></a>
                        </li>
                    </ul>
                </div>
                <div class="acc-module-map">
                    <p class="acc-title"><?php echo rear('account_map_office'); ?></p>
                    <?php echo $cus->google_map; ?>
                </div>
            </div>
            <div class="col-sm-8  col-md-9 ">
                <p class="heading-note-office">
                    <span class="btn btn-danger">
                        <?php echo rear('heading_note_post'); ?>
                    </span>
                </p>
                <div class="form-register-office">
                    <?php if(!empty($_COOKIE['post_car'])){echo rear('cookie_post_car');}?>
                    <form id="form-post-car"  action="<?php echo current_url();?>" method="post" enctype="multipart/form-data">
                        <div class="note-post-car">

                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label"><?php echo rear('name_car_vn') ?></label>
                            <div class="col-sm-8">
                                <input class="form-control" data-validation="required" name="title" type="text"
                                       placeholder="<?php echo rear('name_car_vn_plate') ?>">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label"><?php echo rear('name_car_en') ?></label>
                            <div class="col-sm-8">
                                <input class="form-control" data-validation="required" name="title_en" type="text"
                                       placeholder="<?php echo rear('name_car_en_plate') ?>">
                            </div>
                        </div>

                        <div class="form-group ">
                            <input name="file[]" id="file-5" class="file" type="file" multiple data-preview-file-type="any"
                                   data-upload-url="#">
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label"><?php echo rear('range_car'); ?></label>
                            <div class="col-sm-8">
                                <select name="category" class="custom-select"
                                        data-validation="required">
                                    <option value=""><?php echo rear('range_of_car'); ?></option>
                                    <?php if (!empty($cate_car)) {
                                        foreach ($cate_car as $ct) {
                                            ?>
                                            <option
                                                value="<?php echo $ct->id; ?>"><?php echo $ct->$GLOBALS['title']; ?></option>
                                        <?php }
                                    } ?>

                                </select>

                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label"><?php echo rear('car_plate'); ?></label>
                            <div class="col-sm-8">
                                <input class="form-control" data-validation="required" name="plate" type="text"
                                       placeholder="<?php echo rear('car_plate'); ?>">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label"><?php echo rear('car_company'); ?></label>
                            <div class="col-sm-8">
                                <input class="form-control" data-validation="required" name="compa" type="text"
                                       placeholder="<?php echo rear('car_company'); ?>">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label"><?php echo rear('car_gear'); ?></label>
                            <div class="col-sm-8">
                                <input class="form-control" data-validation="required" name="gear" type="text"
                                       placeholder="<?php echo rear('car_gear'); ?>">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label"><?php echo rear('car_lugg'); ?></label>
                            <div class="col-sm-8">
                                <input class="form-control" data-validation="required" name="lugg" type="text"
                                       placeholder="<?php echo rear('car_lugg'); ?>">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label"><?php echo rear('car_fuel'); ?></label>
                            <div class="col-sm-8">
                                <input class="form-control" data-validation="required" name="fuel"
                                       type="text" placeholder="<?php echo rear('car_fuel'); ?>">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label"><?php echo rear('car_cons'); ?></label>
                            <div class="col-sm-8">
                                <input class="form-control" data-validation="required" name="consum"
                                       type="text" placeholder="<?php echo rear('car_cons'); ?>">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label"><?php echo rear('car_limit_km'); ?></label>
                            <div class="col-sm-8">
                                <input class="form-control" data-validation="required" name="lim"
                                       type="text" placeholder="<?php echo rear('car_limit_km'); ?>">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label"><?php echo rear('select_route'); ?></label>
                            <div class="col-sm-8">
                                <select id="fil-item-car" name="type" class="custom-select"
                                        data-validation="required">
                                    <option value="1"><?php echo rear('car'); ?></option>
                                    <option value="2"><?php echo rear('car_city'); ?></option>
                                    <option value="3"><?php echo rear('noway'); ?></option>
                                    <option value="4"><?php echo rear('airport'); ?></option>
                                    <option value="5"><?php echo rear('taxi'); ?></option>
                                </select>

                            </div>
                            <script>
                                $(document).ready(function () {
                                    $('#fil-item-car').on('change', function () {
                                        var index = $(this).val()-1;
                                        $(".item-post-module").hide();
                                        $(".item-post-module").eq(index).show();
                                    });
                                })
                            </script>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label"><?php echo rear('office_city'); ?></label>
                            <div class="col-sm-8">
                                <select id="selected-city" name="city" class="custom-select"
                                        data-validation="required">
                                    <option value=""><?php echo rear('office_city_option'); ?></option>
                                    <?php if (!empty($city)) {
                                        foreach ($city as $ct) {
                                            ?>
                                            <option
                                                value="<?php echo $ct->id; ?>"><?php echo $ct->$GLOBALS['title']; ?></option>
                                        <?php }
                                    } ?>

                                </select>
                                <script>
                                    $(document).ready(function () {
                                        $('#selected-city').on('change', function () {
                                            var idval = $(this).val();
                                            $.ajax({
                                                type: "post",
                                                url: '<?php echo base_url();?>post-district',
                                                data: {idval: idval},
                                                success: function (data) {
                                                    $('#selected-district').html(data);
                                                }
                                            });
                                            return false;
                                        });
                                    })
                                </script>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label"><?php echo rear('office_district'); ?></label>
                            <div class="col-sm-8">
                                <select id="selected-district" name="dist" class="custom-select"
                                        data-validation="required">
                                    <option value=""><?php echo rear('office_district_option'); ?></option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label"><?php echo rear('car_add_in'); ?></label>
                            <div class="col-sm-8">
                                <input class="form-control" data-validation="required" name="add"
                                       type="text" placeholder="<?php echo rear('car_add_in'); ?>">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label"><?php echo rear('car_price_in'); ?></label>
                            <div class="col-sm-8">
                                <input class="form-control" data-validation="required" name="price"
                                       type="text" placeholder="<?php echo rear('car_price_in'); ?>">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label"><?php echo rear('car_price_old'); ?></label>
                            <div class="col-sm-8">
                                <input class="form-control" name="price_old"
                                       type="text" placeholder="<?php echo rear('car_price_old'); ?>">
                            </div>
                        </div>
                        <div  class="form-group row">
                            <div class="col-sm-12">
                                <div class="box-group-post-car item-post-module">

                                </div>
                                <div class="box-group-post-car item-post-module" style="display: none">

                                </div>
                                <div class="box-group-post-car item-post-module" style="display: none">

                                </div>
                                <div class="box-group-post-car item-post-module" style="display: none">

                                </div>
                                <div class="box-group-post-car item-post-module" style="display: none">

                                </div>
                            </div>
                        </div>
                        <link href="<?php echo base_url(); ?>skin/frontend/css/editor.css" media="all" rel="stylesheet"
                              type="text/css"/>
                        <script src="<?php echo base_url(); ?>skin/frontend/js/editor.js" type="text/javascript"></script>
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label"><?php echo rear('car_fulltext_vn'); ?></label>
                            <div class="col-sm-8">
                                <textarea name="fulltext" id="txtEditor"></textarea>
                                <script>
                                    $(document).ready(function() {
                                        $("#txtEditor").Editor();
                                        $("button:submit").click(function(){
                                            $('#txtEditor').text($('#txtEditor').Editor("getText"));
                                        });
                                    });
                                </script>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-4 col-form-label"><?php echo rear('car_fulltext_en'); ?></label>
                            <div class="col-sm-8">

                                <textarea name="fulltext_en" id="txtEditor1"></textarea>
                                <script>
                                    $(document).ready(function() {
                                        $("#txtEditor1").Editor();
                                        $("button:submit").click(function(){
                                            $('#txtEditor1').text($('#txtEditor1').Editor("getText"));
                                        });
                                    });
                                </script>
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
                                form: "#form-post-car",
                                lang: "vi",
                                modules: 'security',
                                scrollToTopOnError: !1,
                                borderColorOnError: "#ff0000"
                            })
                        })
                    </script>
                </div>
            </div>
        </div>
    </div>
</div>