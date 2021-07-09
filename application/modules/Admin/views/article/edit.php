<?php if (isset($_GET['page'])) {
    $page = '&page=' . $_GET['page'];
} else {
    $page = '';
}
if (validation_errors()) { ?>
    <script>
        $(document).ready(function () {
            notice_js("Vui lòng nhập đủ các thông tin", 'danger');
        })
    </script>
<?php } ?>
<?php if(!empty($item_post)) { ?>
<form method="post" action="<?php echo base_url(); ?>manager/edit?table=article&id=<?php echo $item_post->id; ?>">
    <input type="hidden" value="<?php if (!empty($url_referer)) echo $url_referer; ?>" name="url_referer"/>
    <div class="menu-filter filter-add">
        <ul>
            <li><a href="" class="active">Chỉnh sửa bản ghi</a></li>
        </ul>
        <div class="btn-top-add">
            <button class="btn btn-primary btn-add" type="submit">Cập nhập</button>
            <button class="btn btn-add btn-update" data-id="<?php echo $item_post->id; ?>" type="button">Nhân bản
            </button>
            <a href="<?php if (isset($_SERVER['HTTP_REFERER'])) {
                echo $_SERVER['HTTP_REFERER'];
            } ?>" class="btn btn-default btn-delete">Hủy</a>
        </div>
    </div>
    <div class="content-add-item">
        <?php if (isset($_GET['success']) && $_GET['success'] == 1) { ?>
            <div class="row">
                <div class="col-xs-12">
                    <p class="alert alert-success">
                        Cập nhập thành công ! </br>
                        <a href="<?php echo base_url('manager/list?table=' . $_GET['table']); ?>">Quay về danh sách </a>
                    </p>
                </div>
            </div>
        <?php } ?>
        <div class="row">
            <div class="col-xs-12 col-information">
                <div class="group-category panel-category">
                    <?php if (!empty($cate)) {
                        echo $cate;
                    } ?>
                </div>
                <div class="added_category">
                    <?php if (!empty($post_array)) { ?>
                        <?php $i = 0;
                        foreach ($post_array as $pa) {
                            if (!empty($pa)) {
                                ?>
                                <input id="input_id_element_added_<?php echo $i; ?>" type="hidden"
                                       value="<?php echo $pa->id; ?>" name="id_cate[]"/>
                                <span id="element_added_<?php echo $i; ?>"
                                      class="element_added element_id_<?php echo $pa->id; ?>"><?php echo $pa->title;; ?></span>
                            <?php }
                            $i++;
                        } ?>
                    <?php } ?>
                </div>
                <div class="btn-add-category">
                    <a class="option-add custom-btn-add" href="javascript:void(0);"><i
                                class="fa fa-plus-circle"></i><span>Thêm danh mục</span></a>
                </div>
                <!-- end group-->
                <div class="row row-input">
                    <div class="col-xs-2">Tiêu đề(<span class="count-title">0</span>)</div>
                    <div class="col-xs-6">
                        <input id="title-name" type="text" name="title" class="control-input create-alias"
                               value="<?php echo $item_post->title; ?>"/>
                    </div>
                    <div class="col-xs-2">
                        <script>
                            function  create_alias() {
                                var count = $('.create-alias').val().length;
                                var idname = $('.create-alias').attr('id');
                                if (idname == 'title-name') {
                                    locdau1Z(idname);
                                }
                                $('.create-alias').parents('.row-input').find('.count-title').text(count);
                            }
                        </script>
                        <a style="cursor: pointer;" class="btn btn-primary" onclick="create_alias()">Tạo link</a>
                    </div>
                </div>
                <!-- end row-->


                    <div class="row row-input">
                        <div class="col-xs-2">Link trên site (<span class="count-title">0</span>)</div>
                        <div class="col-xs-8">
                            <div class="row">
                                <div class="col-xs-2">
                                    <?php echo base_url();?>
                                </div>
                                <div class="col-xs-8">
                                    <input id="alias-title" type="text" name="alias"
                                           class="control-input input-title"
                                           value="<?php echo $item_post->alias; ?>"/>
                                </div>
                                <div class="col-xs-2">
                                    <a target="_blank" href="<?php echo base_url( $item_post->alias )?>">Xem bài viết</a>
                                </div>
                            </div>

                        </div>

                    </div>
                    <!-- end row-->



                <div class="row row-input">
                    <div class="col-xs-2">Ảnh đại diện</div>
                    <div class="col-xs-10">
                        <div class="row">
                            <div class="col-xs-8">
                                <input type="text" name="image" id="xFilePath" class="control-input" style="width: 100%"
                                       value="<?php echo $item_post->image; ?>" required/>
                            </div>
                            <div class="col-xs-1 box-tooltip-img">
                                <span class="image-tooltip">
                                    <img id="views-image" class="zoom-image"
                                         src="<?php echo $item_post->image; ?>">
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
                                <input type="text" name="banner" id="xFilePathbanner" class="control-input"
                                       style="width: 100%"
                                       value="<?php echo $item_post->banner; ?>"/>
                            </div>
                            <div class="col-xs-1 box-tooltip-img">
                                <span class="image-tooltip">
                                    <img id="views-imagebanner" class="zoom-image"
                                         src="<?php echo $item_post->banner; ?>">
                                </span>
                            </div>
                            <div class="col-xs-3">
                                <button type="button" class="btn-browse"
                                        onclick="openPopup('xFilePathbanner','views-imagebanner')">
                                    Browse...
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Ảnh mxh</div>
                    <div class="col-xs-10">
                        <div class="row">
                            <div class="col-xs-8">
                                <input type="text" name="img_f" id="xFilePathimg_f" class="control-input"
                                       style="width: 100%"
                                       value="<?php echo $item_post->img_f; ?>"/>
                            </div>
                            <div class="col-xs-1 box-tooltip-img">
                                <span class="image-tooltip">
                                    <img id="views-imageimg_f" class="zoom-image"
                                         src="<?php echo $item_post->img_f; ?>">
                                </span>
                            </div>
                            <div class="col-xs-3">
                                <button type="button" class="btn-browse"
                                        onclick="openPopup('xFilePathimg_f','views-imageimg_f')">
                                    Browse...
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Tags</div>
                    <div class="col-xs-8">
                        <input type="text" name="tags" class="control-input" style="width: 200px"
                               value="<?php echo $item_post->tags; ?>" data-role="tagsinput"/>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Thứ tự hiển thị</div>
                    <div class="col-xs-8">
                        <div class="row">
                            <div class="col-xs-2">
                                <input type="number" name="order" class="control-input input-user"
                                       value="<?php echo $item_post->order; ?>"/>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2"><span>Link liên kết</span>
                    </div>
                    <div class="col-xs-5">
                        <input name="hyperlink" type="text" value="<?php echo $item_post->hyperlink; ?>"
                               class="control-input input-title"/>
                    </div>
                </div>
                <!-- end row-->
                <div class="toggle-group">
                    <p class="toggle-title toggle-title-up">Thư viện ảnh</p>
                    <div class="toggle-content">
                        <div class="toggle-gallery">
                            <?php if (!empty($item_post->img)) {
                                $gallery = json_decode($item_post->img);
                                $link = json_decode($item_post->link);
                                $rel = json_decode($item_post->rel);
                                if (!empty($gallery)) {
                                    $max = 1;
                                    $i= 0;
                                    foreach ($gallery as $gla) {
                                        ?>
                                        <div class="row row-gallery" data-id="<?php echo $max; ?>">
                                            <div class="col-xs-4">
                                                <input type="text" name="img[]" id="xFileGallery<?php echo $max; ?>"
                                                       class="control-input" style="width: 100%"
                                                       value="<?php echo $gla; ?>"/>
                                            </div>
                                            <div class="col-xs-1 box-tooltip-img">
                                                <span class="image-tooltip">
                                                    <img id="views-gallery<?php echo $max; ?>" class="zoom-image"
                                                         src="<?php echo $gla; ?>">
                                                </span>
                                            </div>
                                            <div class="col-xs-3">
                                                <button type="button" class="btn-browse"
                                                        onclick="openPopup('xFileGallery<?php echo $max; ?>','views-gallery<?php echo $max; ?>')">
                                                    Browse...
                                                </button>
                                                <span class="remove-gallery glyphicon glyphicon-remove"></span>
                                            </div>
                                            <div class="col-xs-2">
                                                <input type="text" name="link[]" class="control-input" placeholder="Link liên kết" style="width: 100%" value="<?php if(!empty($link[$i])){echo $link[$i];}?>"/>
                                            </div>
                                            <div class="col-xs-2">
                                                <select name="rel[]">
                                                    <option value="dofollow" <?php if(empty($rel[$i]) && $rel[$i] = 'dofollow'){ echo 'selected'; }?>>dofollow</option>
                                                    <option value="nofollow" <?php if(empty($rel[$i]) && $rel[$i] = 'nofollow'){ echo 'selected'; }?>>nofollow</option>
                                                </select>
                                            </div>
                                        </div>
                                        <?php $max++; $i++;

                                    }
                                }
                            } ?>
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
                                    '<div class="col-xs-4">' +
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
                                    '<div class="col-xs-2">' +
                                    '<input type="text" name="link[]" class="control-input" placeholder="Link liên kết" style="width: 100%"' +
                                    'value=""/>' +
                                    '</div>' +
                                    '<div class="col-xs-2">' +
                                    '<select name="rel[]">' +
                                    '<option value="dofollow">dofollow</option>' +
                                    '<option value="nofollow">nofollow</option>' +
                                    '</select>' +
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
                    <div class="toggle-content" style="display: block">
                        <div class="row row-input row-ck">
                            <div class="col-xs-12">
                                <textarea name="introtext" class="control-input check-editor" id="full-excerpt22"
                                          style="height: auto"
                                          rows="30"><?php if (!empty($item_post->introtext)) {
                                        echo $item_post->introtext;
                                    } else {
                                    } ?></textarea>
                            </div>
                        </div>
                        <!-- end row-->
                    </div>
                </div>
                <!-- end -->

                <div class="toggle-group">
                    <p class="toggle-title toggle-title-up">Nội dung</p>

                    <div class="toggle-content" style="display: block">
                        <div class="row row-input">
                            <div class="col-xs-12">
                                <textarea name="content_text" class="control-input check-editor" id="full-2"
                                          style="height: auto"
                                          rows="30"><?php echo $item_post->content_text; ?></textarea>
                            </div>
                        </div>
                        <!-- end row-->
                    </div>
                </div>

                <div class="toggle-group">
                    <p class="toggle-title toggle-title-up">Seo</p>
                    <div class="toggle-content" style="display: block">
                        <div class="row row-input">
                            <div class="col-xs-12">Meta Title</div>
                            <div class="col-xs-12">
                                <input type="text" name="meta_title" class="control-input input-title"
                                       value="<?php echo $item_post->meta_title; ?>"/>
                            </div>
                        </div>

                        <div class="row row-input">
                            <div class="col-xs-12">Meta Description</div>
                            <div class="col-xs-12">
                                <input type="text" name="meta_des" class="control-input input-title"
                                       value="<?php echo $item_post->meta_des; ?>"/>
                            </div>
                        </div>

                        <div class="row row-input">
                            <div class="col-xs-12">Meta Keywords</div>
                            <div class="col-xs-12">
                                <input type="text" name="meta_key" class="control-input input-title"
                                       value="<?php echo $item_post->meta_key; ?>"/>
                            </div>
                        </div>

                    </div>
                </div>
                <!-- end -->
                <div class="row row-input row-margin">
                    <div class="col-option">
                        <div class="option-inner">
                            Hiện trang chủ
                            <div class="item-on-off">
                                <input type="hidden" name="show_home" value="0"/>
                                <input type="checkbox" name="show_home"
                                       value="1" <?php if ($item_post->show_home == '1') {
                                    echo 'checked';
                                } ?>><label><span></span></label>
                            </div>
                        </div>
                    </div>
                    <!-- end col-->
                    <div class="col-option">
                        <div class="option-inner">
                            Nổi bật
                            <div class="item-on-off">
                                <input type="hidden" name="stick" value="0"/>
                                <input type="checkbox" name="stick"
                                       value="1" <?php if ($item_post->stick == '1') {
                                    echo 'checked';
                                } ?>><label><span></span></label>
                            </div>
                        </div>
                    </div>
                    <!-- end col-->
                    <div class="col-option">
                        <div class="option-inner">
                            Xuất bản ngay
                            <div class="item-on-off">
                                <input type="hidden" name="show" value="0"/>
                                <input type="checkbox" name="show" value="1" <?php if ($item_post->show == '1') {
                                    echo 'checked';
                                } ?>><label><span></span></label>
                            </div>
                        </div>
                    </div>
                    <!-- end col-->
                </div>
                <!-- end row-->
            </div>
            <!-- end col information-->
            <div class="col-xs-12 col-options col-action-bottom text-right">
                <button class="btn btn-primary btn-add" type="submit">Cập nhập</button>
                <button class="btn btn-add btn-update" data-id="<?php echo $item_post->id; ?>" type="button">Nhân bản
                </button>
                <a href="<?php if (isset($_SERVER['HTTP_REFERER'])) {
                    echo $_SERVER['HTTP_REFERER'];
                } ?>" class="btn btn-default btn-delete">Hủy</a>
            </div>
            <!-- end col option-->
        </div>
    </div>
</form>
<?php } ?>
