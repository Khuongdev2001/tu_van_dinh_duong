<?php if (validation_errors()) { ?>
    <script>
        $(document).ready(function () {
            notice_js("Vui lòng nhập đủ các thông tin", 'danger');
        })
    </script>
<?php } ?>
<form method="post" action="<?php echo base_url(); ?>manager/add?table=categories">
    <div class="menu-filter filter-add">
        <ul>
            <li><a href="javascript:void(0);" class="active">Tạo chuyên mục mới</a></li>
        </ul>
        <div class="btn-top-add">
            <button class="btn btn-primary btn-add" type="submit">Tạo mới</button>
            <a href="<?php if (isset($_SERVER['HTTP_REFERER'])) {
                echo $_SERVER['HTTP_REFERER'];
            } ?> " class="btn btn-default btn-delete">Hủy</a>
        </div>
    </div>
    <div class="content-add-item">
        <div class="row">
            <div class="col-xs-12 col-information">

                <!-- end row-->
                <div class="group-category panel-category">
                    <div class="item-group-category">
                        <label>Loại</label>
                        <select name="taxonomy" id="type-cate" class="select-group " multiple="multiple" data-level="0"
                                data-name="parentid[]">
                            <option value="cate_article" <?php if ($this->input->post('taxonomy') == 'cate_article') {
                                echo 'selected="selected"';
                            } ?> selected>Bài viết
                            </option>
                            <option value="cate_product" <?php if ($this->input->post('taxonomy') == 'cate_product') {
                                echo 'selected="selected"';
                            } ?>>Sản phẩm
                            </option>
                        </select>
                    </div>
                    <?php if (!empty($cate)) {
                        $i = 1; ?>
                        <div class="item-group-category">
                            <label>Cấp 1</label>
                            <select name="parentid[]" class="select-group cate-group" multiple="multiple"
                                    data-level="1">
                                <?php foreach ($cate as $obj) { ?>
                                    <option value="<?php echo $obj->id; ?>"><?php echo $obj->title; ?></option>
                                    <?php $i++;
                                } ?>
                            </select>
                        </div>
                    <?php } ?>
                </div>
                <!-- end group-->
                <div class="group-category edit-group-category">
                    <div class="row row-input">
                        <div class="col-xs-12">
                            <div class="row-checkbox">
                                <div class="col-xs-4 item-checkbox check-group ">
                                    <label class="title-checkbox" for="menu-primary">Menu chính</label>
                                    <input type="hidden" name="main_menu" value="0"/>
                                    <input type="checkbox" name="main_menu" value="1"
                                           id="menu-primary" <?php if ($this->input->post('main_menu') == '1') {
                                        echo 'checked';
                                    } ?>><label
                                        class="check-lable"><span></span></label>
                                </div>
                                <div class="col-xs-4 box-order">
                                    <label class="title-checkbox">Thứ tự</label>
                                    <input type="number" name="order_main" class="control-input" value="1"/>
                                </div>
                            </div>
                            <div class="row-checkbox">
                                <div class="col-xs-3 item-checkbox check-group ">
                                    <label class="title-checkbox" for="home-primary">Trang chủ</label>
                                    <input type="hidden" name="show_home" value="0"/>
                                    <input type="checkbox" name="show_home" value="1"
                                           id="home-primary" <?php if ($this->input->post('show_home') == '1') {
                                        echo 'checked';
                                    } ?>><label
                                        class="check-lable"><span></span></label>
                                </div>
                                <div class="col-xs-4 box-order">
                                    <label class="title-checkbox">Thứ tự</label>
                                    <input type="number" name="order_home" class="control-input" value="1"/>
                                </div>
                                <div class="col-xs-5">
                                    <label class="title-checkbox">Vị trí</label>
                                    <div class="select-box" style="display: inline-block; min-width: 100px">
                                        <label>
                                            <select name="type_home">
                                                <option value="1" <?php if ($this->input->post('type_home') == 1) {
                                                    echo 'selected="selected"';
                                                } ?>>Chọn
                                                </option>
                                                <option value="3" <?php if ($this->input->post('type_home') == 3) {
                                                    echo 'selected="selected"';
                                                } ?>>Box blog
                                                </option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <!-- end row-->
                            <div class="row-checkbox">
                                <div class="col-xs-4 item-checkbox check-group ">
                                    <label class="title-checkbox" for="menu-primary">Menu con trang chủ</label>
                                    <input type="hidden" name="show_left" value="0"/>
                                    <input type="checkbox" name="show_left" value="1"
                                           id="menu-primary" <?php if ($this->input->post('show_left') == '1') {
                                        echo 'checked';
                                    } ?>><label
                                            class="check-lable"><span></span></label>
                                </div>
                                <div class="col-xs-4 box-order">
                                    <label class="title-checkbox">Thứ tự</label>
                                    <input type="number" name="order_left" class="control-input" value="1"/>
                                </div>
                            </div>
                            <div class="row-checkbox edit-width">
                                <div class="col-xs-3">
                                    <div class="row">
                                        <div class="col-xs-5">Thứ tự sắp xếp</div>
                                        <div class="col-xs-2">
                                            <div class="select-box" style="display: inline-block; min-width: 80px">
                                                <input type="number" name="order" class="control-input"
                                                       value="<?php echo $this->input->post('order'); ?>"
                                                       style="text-align: right"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-2">
                                    Chọn page
                                </div>
                                <div class="col-xs-2">
                                    <div class="select-box" style="display: inline-block; min-width: 150px">
                                        <label>
                                            <select name="type_categories">
                                                <option
                                                    value="0" <?php if ($this->input->post('type_categories') == 0) {
                                                    echo 'selected="selected"';
                                                } ?>>Page giới thiệu
                                                </option>
                                                <option
                                                        value="4" <?php if ($this->input->post('type_categories') == 4) {
                                                    echo 'selected="selected"';
                                                } ?>>Page blog
                                                </option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-xs-5">
                                    <div class="row">
                                        <div class="col-xs-6">Số bài viết / sản phẩm hiển thị 1 trang</div>
                                        <div class="col-xs-4">
                                            <div class="select-box" style="display: inline-block; min-width: 80px">
                                                <input type="number" name="number_post" class="control-input"
                                                       value="<?php if ($this->input->post('number_post')) {
                                                           echo $this->input->post('number_post');
                                                       } else {
                                                           echo '24';
                                                       } ?>" style="text-align: right"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end group-->
                <!-- end row-->

                <div class="row row-input">
                    <div class="col-xs-2">Tiêu đề (<span class="count-title">0</span>)</div>
                    <div class="col-xs-8">
                        <input id="title-name" data-id="alias-title" type="text" name="title"
                               class="control-input input-title"
                               value="<?php echo $this->input->post('title'); ?>" required />
                    </div>
                </div>
<!--                <div class="row row-input">-->
<!--                    <div class="col-xs-2"><span>Tên phụ</span></div>-->
<!--                    <div class="col-xs-8">-->
<!--                        <input name="title_ot" type="text" value="--><?php //echo $this->input->post('title_ot'); ?><!--" class="control-input input-title"/>-->
<!--                    </div>-->
<!--                </div>-->
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Link trên website</div>
                    <div class="col-xs-10">
                        <span class="sp_link_base">
                            <span class="text_base"><?php echo base_url(); ?></span>
                            <span class="text_alias">
                                <input id="alias-title" type="text" name="alias" class="control-input"
                                       value="<?php echo $this->input->post('alias'); ?>" required />
                            </span>
                        </span>
                    </div>
                </div>
                <div class="row row-input">
                    <div class="col-xs-2">Ảnh đại diện</div>
                    <div class="col-xs-10">
                        <div class="row">
                            <div class="col-xs-8">
                                <input type="text" name="image" id="xFilePath" class="control-input" style="width: 100%"
                                       value="<?php echo $this->input->post('image'); ?>" required />
                            </div>
                            <div class="col-xs-1 box-tooltip-img">
                                <span class="image-tooltip">
                                    <img id="views-image" class="zoom-image"
                                         src="<?php echo $this->input->post('image'); ?>">
                                </span>
                            </div>
                            <div class="col-xs-3">
                                <button type="button" class="btn-browse" onclick="openPopup('xFilePath','views-image')">
                                    Browse...
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Banner</div>
                    <div class="col-xs-10">
                        <div class="row">
                            <div class="col-xs-8">
                                <input type="text" name="banner" id="xFilePath1" class="control-input"
                                       style="width: 100%"
                                       value="<?php echo $this->input->post('banner'); ?>"/>
                            </div>
                            <div class="col-xs-1 box-tooltip-img">
                                <span class="image-tooltip">
                                    <img id="views-image1" class="zoom-image"
                                         src="<?php echo $this->input->post('banner'); ?>">
                                </span>
                            </div>
                            <div class="col-xs-3">
                                <button type="button" class="btn-browse"
                                        onclick="openPopup('xFilePath1','views-image1')">
                                    Browse...
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Ảnh small</div>
                    <div class="col-xs-10">
                        <div class="row">
                            <div class="col-xs-8">
                                <input type="text" name="icon" id="xFilePathicon" class="control-input"
                                       style="width: 100%"
                                       value="<?php echo $this->input->post('icon'); ?>"/>
                            </div>
                            <div class="col-xs-1 box-tooltip-img">
                                <span class="image-tooltip">
                                    <img id="views-imageicon" class="zoom-image"
                                         src="<?php echo $this->input->post('icon'); ?>">
                                </span>
                            </div>
                            <div class="col-xs-3">
                                <button type="button" class="btn-browse"
                                        onclick="openPopup('xFilePathicon','views-imageicon')">
                                    Browse...
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Icon</div>
                    <div class="col-xs-10">
                        <input type="text" name="img_icon" class="control-input input-user"
                               value="<?php echo $this->input->post('img_icon'); ?>"/>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Màu nền</div>
                    <div class="col-xs-8">
                        <input type="text" name="color" class="control-input jscolor input-user"
                               value="<?php if(isset($_POST['color'])) echo $this->input->post('color'); else echo 'EDAE6B '; ?>"/>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Link liên kết</div>
                    <div class="col-xs-10">
                        <input type="text" name="hyperlink" class="control-input input-user"
                               value="<?php echo $this->input->post('hyperlink'); ?>"/>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Video url</div>
                    <div class="col-xs-10">
                        <input type="text" name="video_url" class="control-input input-user"
                               value="<?php echo $this->input->post('video_url'); ?>"/>
                    </div>
                </div>
                <!-- end row-->
                <div class="toggle-group">
                    <p class="toggle-title toggle-title-up">Thư viện ảnh</p>

                    <div class="toggle-content">
                        <div class="toggle-gallery">
                            <button type="button" class="btn-browse" onclick="openPopup1('xFilePath','views-image')">
                                Browse...
                            </button>
                        </div>
                        <p>
                            <button class="add-gallery" type="button">Thêm hình ảnh</button>
                        </p>
                    </div>
                    <script>
                        $(document).ready(function () {
                            $('.add-gallery').on('click', function () {
                                var max = 1;
                                if ($('.row-gallery').length > 0) {
                                    var num = $('.row-gallery:last-child').attr('data-id');
                                    max = parseInt(num) + 1;
                                }
                                var html = '<div class="row row-gallery" data-id="' + max + '">' +
                                    '<div class="col-xs-8">' +
                                    '<input type="text" name="img[]" id="xFileGallery' + max + '" class="control-input" style="width: 100%"' +
                                    'value=""/>' +
                                    '</div>' +
                                    '<div class="col-xs-1 box-tooltip-img">' +
                                    '<span class="image-tooltip">' +
                                    '<img id="views-gallery' + max + '" class="zoom-image"' +
                                    'src="">' +
                                    '</span>' +
                                    '</div>' +
                                    '<div class="col-xs-3">' +
                                    '<button type="button" class="btn-browse" onclick="openPopup(\'xFileGallery' + max + '\',\'views-gallery' + max + '\')">' +
                                    'Browse...' +
                                    '</button>' +
                                    '<span class="remove-gallery glyphicon glyphicon-remove" ></span>' +
                                    '</div>' +
                                    '</div>';
                                $('.toggle-gallery').append(html);
                            });
                        });
                        $(document).on('click', '.remove-gallery', function () {
                            $(this).parents('.row-gallery').remove();
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
                </div>
                <!-- end -->
                <div class="toggle-group">
                    <p class="toggle-title toggle-title-up">Mô tả</p>
                    <div class="toggle-content">
                        <div class="row row-input row-ck">
                            <div class="col-xs-12">
                                <textarea name="introtext" class="control-input check-editor" id="full-excerpt22"
                                          style="height: auto"
                                          rows="30"><?php if ($this->input->post('introtext') != '') {
                                        echo $this->input->post('introtext');
                                    } else {

                                    } ?></textarea>
                            </div>
                        </div>
                        <!-- end row-->
                    </div>
                </div>
                <div class="toggle-group">
                    <p class="toggle-title toggle-title-up">Nội dung</p>
                    <div class="toggle-content">
                        <div class="row row-input row-ck">
                            <div class="col-xs-12">
                                <textarea name="content_text" class="control-input check-editor" id="full-2"
                                          style="height: auto"
                                          rows="30"><?php echo $this->input->post('content_text'); ?></textarea>
                            </div>
                        </div>
                        <!-- end row-->
                    </div>
                </div>
                <!-- end -->


                <div class="toggle-group">
                    <p class="toggle-title toggle-title-up">Seo</p>
                    <div class="toggle-content">
                        <!-- end row-->
                        <div class="row row-input">
                            <div class="col-xs-12">Meta Title</div>
                            <div class="col-xs-12">
                                <input type="text" name="meta_title" class="control-input input-title"
                                       value="<?php echo $this->input->post('meta_title'); ?>"/>
                            </div>
                        </div>
                        <?php if (!empty($language)) { ?>
                            <?php foreach ($language as $lang) { ?>
                                <div class="row row-input">
                                    <div class="col-xs-12">Meta Title <?php echo $lang->title; ?></div>
                                    <div class="col-xs-12">
                                        <input type="text" name="meta_title<?php echo $lang->value; ?>"
                                               class="control-input input-title"
                                               value="<?php echo $this->input->post('meta_title' . $lang->value . ''); ?>"/>
                                    </div>
                                </div>
                            <?php } ?>
                        <?php } ?>
                        <!-- end row-->

                        <div class="row row-input">
                            <div class="col-xs-12">Meta Description</div>
                            <div class="col-xs-12">
                                <input type="text" name="meta_des" class="control-input input-title"
                                       value="<?php echo $this->input->post('met_des'); ?>"/>
                            </div>
                        </div>
                        <?php if (!empty($language)) { ?>
                            <?php foreach ($language as $lang) { ?>
                                <div class="row row-input">
                                    <div class="col-xs-12">Meta Description <?php echo $lang->title; ?></div>
                                    <div class="col-xs-12">
                                        <input type="text" name="meta_des<?php echo $lang->value; ?>"
                                               class="control-input input-title"
                                               value="<?php echo $this->input->post('meta_des' . $lang->value . ''); ?>"/>
                                    </div>
                                </div>
                            <?php } ?>
                        <?php } ?>
                        <!-- end row-->

                        <div class="row row-input">
                            <div class="col-xs-12">Meta Keywords</div>
                            <div class="col-xs-12">
                                <input type="text" name="meta_key" class="control-input input-title"
                                       value="<?php echo $this->input->post('meta_key'); ?>"/>
                            </div>
                        </div>
                        <?php if (!empty($language)) { ?>
                            <?php foreach ($language as $lang) { ?>
                                <div class="row row-input">
                                    <div class="col-xs-12">Meta Keywords <?php echo $lang->title; ?></div>
                                    <div class="col-xs-12">
                                        <input type="text" name="meta_key<?php echo $lang->value; ?>"
                                               class="control-input input-title"
                                               value="<?php echo $this->input->post('meta_key' . $lang->value . ''); ?>"/>
                                    </div>
                                </div>
                            <?php } ?>
                        <?php } ?>
                        <!-- end row-->

                    </div>
                </div>
                <!-- end -->
                <div class="row row-input row-margin">
                    <!-- end col-->

                    <!-- end col-->
                    <div class="col-option">
                        <div class="option-inner">
                            Xuất bản ngay
                            <div class="item-on-off">
                                <input type="hidden" name="show" value="0"/>
                                <input type="checkbox" name="show" value="1" checked><label><span></span></label>
                            </div>
                        </div>
                    </div>
                    <!-- end col-->
                </div>
            </div>
            <!-- end col information-->
            <div class="col-xs-12 col-options col-action-bottom text-right">
                <button class="btn btn-primary btn-add" type="submit">Tạo mới</button>
                <a href="<?php if (isset($_SERVER['HTTP_REFERER'])) {
                    echo $_SERVER['HTTP_REFERER'];
                } ?> " class="btn btn-default btn-delete">Hủy</a>
            </div>
            <!-- end col option-->
        </div>
    </div>
</form>