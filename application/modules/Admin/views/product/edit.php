<?php if (isset($_GET['page'])) {
    $page = '&page=' . $_GET['page'];
} else {
    $page = '';
}
?>
<?php if (validation_errors()) { ?>
    <script>
        $(document).ready(function () {
            notice_js("Vui lòng nhập đủ tiêu đề và thêm danh mục", 'danger');
        })
    </script>
<?php } ?>
<?php if(!empty($item_post)) { ?>
<form method="post"
      action="<?php echo base_url(); ?>manager/edit?table=product&id=<?php echo $item_post->id . $page; ?>">
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
                        foreach ($post_array as $pa) { ?>
                            <input id="input_id_element_added_<?php echo $i; ?>" type="hidden"
                                   value="<?php echo $pa->id; ?>" name="id_cate[]"/>
                            <span id="element_added_<?php echo $i; ?>"
                                  class="element_added element_id_<?php echo $pa->id; ?>"><?php echo $pa->title;; ?></span>
                            <?php $i++;
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
                                    locdau1(idname);
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
                    <div class="col-xs-8">
                        <div class="row">
                            <div class="col-xs-8">
                                <input type="text" name="image" id="xFilePath" class="control-input" style="width: 100%"
                                       value="<?php echo $item_post->image; ?>" required />
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
<!--                <div class="row row-input">-->
<!--                    <div class="col-xs-2">Ảnh banner</div>-->
<!--                    <div class="col-xs-8">-->
<!--                        <div class="row">-->
<!--                            <div class="col-xs-8">-->
<!--                                <input type="text" name="banner" id="xFilePathbanner" class="control-input" style="width: 100%"-->
<!--                                       value="--><?php //echo $item_post->banner; ?><!--" required />-->
<!--                            </div>-->
<!--                            <div class="col-xs-1 box-tooltip-img">-->
<!--                                <span class="image-tooltip">-->
<!--                                    <img id="views-imagebanner" class="zoom-image"-->
<!--                                         src="--><?php //echo $item_post->banner; ?><!--">-->
<!--                                </span>-->
<!--                            </div>-->
<!--                            <div class="col-xs-3">-->
<!--                                <button type="button" class="btn-browse" onclick="openPopup('xFilePathbanner','views-imagebanner')">-->
<!--                                    Browse...-->
<!--                                </button>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
                <!-- end row-->
<!--                <div class="row row-input">-->
<!--                    <div class="col-xs-2">Ảnh banner mobile</div>-->
<!--                    <div class="col-xs-8">-->
<!--                        <div class="row">-->
<!--                            <div class="col-xs-8">-->
<!--                                <input type="text" name="banner_m" id="xFilePathbannerm" class="control-input" style="width: 100%"-->
<!--                                       value="--><?php //echo $item_post->banner_m; ?><!--" required />-->
<!--                            </div>-->
<!--                            <div class="col-xs-1 box-tooltip-img">-->
<!--                                <span class="image-tooltip">-->
<!--                                    <img id="views-imagebannerm" class="zoom-image"-->
<!--                                         src="--><?php //echo $item_post->banner_m; ?><!--">-->
<!--                                </span>-->
<!--                            </div>-->
<!--                            <div class="col-xs-3">-->
<!--                                <button type="button" class="btn-browse" onclick="openPopup('xFilePathbannerm','views-imagebannerm')">-->
<!--                                    Browse...-->
<!--                                </button>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Ảnh mxh</div>
                    <div class="col-xs-8">
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
                    <div class="col-xs-2"><span>Thứ tự</span>
                    </div>
                    <div class="col-xs-2">
                        <input name="order" type="number" value="<?php echo $item_post->order; ?>" class="control-input" min="0"/>
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
                    <div class="col-xs-2">Mã sản phẩm</div>
                    <div class="col-xs-4">
                        <input type="text" name="code" class="control-input"
                               value="<?php echo $item_post->code; ?>" />
                    </div>
                </div>
                <!-- end row-->
<!--                --><?php //$trade = $this->Common_model->get_data('internal');
//                if(!empty($trade)){ ?>
<!--                    <div class="row row-input">-->
<!--                        <div class="col-xs-2">Thương hiệu</div>-->
<!--                        <div class="col-xs-4">-->
<!--                            <select name="trade" id="">-->
<!--                                <option value="0" --><?php //if($item_post->trade==0){echo 'selected'; } ?><!-- >-- Chọn thương hiệu --</option>-->
<!--                                --><?php //foreach ($trade as $obj){ ?>
<!--                                    <option --><?php //if($item_post->trade==$obj->id){echo 'selected'; } ?><!-- value="--><?php //echo $obj->id; ?><!--">--><?php //echo $obj->title; ?><!--</option>-->
<!--                                --><?php //} ?>
<!--                            </select>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                --><?php //} ?>
                <div class="row row-input">
                    <div class="col-xs-2">Xuất xứ</div>
                    <div class="col-xs-4">
                        <input type="text" name="madein" class="control-input"
                               value="<?php echo $item_post->madein; ?>" />
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Quy cách</div>
                    <div class="col-xs-4">
                        <input type="text" name="spec" class="control-input"
                               value="<?php echo $item_post->spec; ?>" />
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Gía</div>
                    <div class="col-xs-4">
                        <input type="text" name="price" class="control-input"
                               value="<?php echo $item_post->price; ?>" />
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Gía cũ</div>
                    <div class="col-xs-4">
                        <input type="text" name="price_old" class="control-input"
                               value="<?php echo $item_post->price_old; ?>" />
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Ship</div>
                    <div class="col-xs-4">
                        <input type="number" name="ship" class="control-input"
                               value="<?php echo $item_post->ship; ?>" />
                    </div>
                </div>
                <div class="row row-input">
                    <div class="col-xs-2">Đánh giá sao</div>
                    <div class="col-xs-4">
                        <input type="text" name="star" class="control-input"
                               value="<?php echo $item_post->star; ?>" />
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Tổng đánh giá sao</div>
                    <div class="col-xs-4">
                        <input type="text" name="views_star" class="control-input"
                               value="<?php echo $item_post->views_star; ?>" />
                    </div>
                </div>
                <div class="row row-input">
                    <div class="col-xs-2">Mua hàng</div>
                    <div class="col-xs-4">
                        <input type="text" name="total_buy" class="control-input"
                               value="<?php echo $item_post->total_buy; ?>" />
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Tổng số sản phẩm</div>
                    <div class="col-xs-4">
                        <input type="text" name="total_pro" class="control-input"
                               value="<?php echo $item_post->total_pro; ?>" />
                    </div>
                </div>
                <div class="row row-input">
                    <div class="col-xs-2">Tổng sao</div>
                    <div class="col-xs-4">
                        <input type="text" name="list_star" class="control-input"
                               value="<?php echo  $item_post->list_star; ?>" placeholder="5-100,2-100,3-100,4-100,0-100" />
                    </div>
                </div>
                <div class="toggle-group">
                    <p class="toggle-title toggle-title-up">Thư viện ảnh</p>
                    <div class="toggle-content">
                        <div class="toggle-gallery">
                            <button type="button" class="btn-browse" onclick="openPopup1('xFilePath','views-image')">
                                Browse...
                            </button>
                            <?php if (!empty($item_post->img)) {
                                $gallery = json_decode($item_post->img);
                                if (!empty($gallery)) {
                                    $max = 1;
                                    foreach ($gallery as $gla) {
                                        ?>
                                        <div class="row row-gallery" data-id="<?php echo $max; ?>">
                                            <div class="col-xs-8">
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
                                        </div>
                                        <?php $max++;
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
                                <textarea name="introtext" class="control-input" id=""
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
                    <p class="toggle-title toggle-title-up">Thông tin chi tiết</p>
                    <div class="toggle-content">
                        <div id="box0" class="row-content row row-input row-ck" >
                            <div class="col-xs-12">
                                <textarea  name="content_text" class="control-input check-editor" id="full-2"
                                           style="height: auto"
                                           rows="30"><?php if (!empty($item_post->content_text)) {
                                        echo $item_post->content_text;
                                    } else {

                                    } ?></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="toggle-group">
                    <p class="toggle-title toggle-title-up">Seo</p>
                    <div class="toggle-content">
                        <div class="row row-input">
                            <div class="col-xs-12">Meta Title</div>
                            <div class="col-xs-12">
                                <input type="text" name="meta_title" class="control-input input-title"
                                       value="<?php echo $item_post->meta_title; ?>"/>
                            </div>
                        </div>
                        <!-- end row-->
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
                            Hiện ngoài trang chủ
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
                            Flashsale
                            <div class="item-on-off">
                                <input type="hidden" name="flashsale" value="0"/>
                                <input type="checkbox" name="flashsale"
                                       value="1" <?php if ($item_post->flashsale == '1') {
                                    echo 'checked';
                                } ?>><label><span></span></label>
                            </div>
                        </div>
                    </div>
                    <div class="col-option">
                        <div class="option-inner">
                            Giá sốc
                            <div class="item-on-off">
                                <input type="hidden" name="dealsale" value="0"/>
                                <input type="checkbox" name="dealsale"
                                       value="1" <?php if ($item_post->dealsale == '1') {
                                    echo 'checked';
                                } ?>><label><span></span></label>
                            </div>
                        </div>
                    </div>
                    <div class="col-option">
                        <div class="option-inner">
                            Có thể bạn thích
                            <div class="item-on-off">
                                <input type="hidden" name="stick" value="0"/>
                                <input type="checkbox" name="stick"
                                       value="1" <?php if ($item_post->stick == '1') {
                                    echo 'checked';
                                } ?>><label><span></span></label>
                            </div>
                        </div>
                    </div>
                    <div class="col-option">
                        <div class="option-inner">
                            Còn hàng
                            <div class="item-on-off">
                                <input type="hidden" name="status" value="0"/>
                                <input type="checkbox" name="status"
                                       value="1" <?php if ($item_post->status == '1') {
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
                <!-- end col information-->
                <div class="col-xs-12 col-options col-action-bottom text-right">

                    <button class="btn btn-primary btn-add" type="submit">Cập nhập</button>
                    <button class="btn btn-add btn-update" data-id="<?php echo $item_post->id; ?>" type="button">Nhân bản
                    </button>
                    <a href="<?php echo $_SERVER['HTTP_REFERER']; ?>" class="btn btn-default btn-delete">Hủy</a>
                </div>
                <!-- end col option-->
            </div>
        </div>
</form>
<script type="text/javascript">
    $(document).ready(function () {
        $('.add-tab').click(function () {
            var idtab = parseInt($(this).attr('data-id')) + 1;
            $(this).attr('data-id', idtab);
            var htmltext = '<div class="row row_delte' + idtab + ' row-gallery" data-id="' + idtab + '">' +
                '<p><button type="button" onclick="deleteel1(' + idtab + ')" data-in="' + idtab + '"  class="delete btn btn-danger"><span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span> &nbsp;&nbsp;Xóa</button></p>' +
                '<input placeholder="Tiêu đề" type="text" style="margin:10px 0px;height:30px;padding-left:10px;" class="control-input input-title iput_add_title" name="link_file[title][]" />' +
                '<div class="col-xs-9">' +
                '<input type="text" name="link_file[file][]" id="xFileGallery' + idtab + '" class="control-input" style="width: 100%"' +
                'value=""/>' +
                '</div>' +
                '<div class="col-xs-3">' +
                '<button type="button" class="btn-browse" onclick="openPopup2(\'xFileGallery' + idtab + '\')">' +
                'Browse...' +
                '</button>' +
                '<span class="remove-gallery glyphicon glyphicon-remove" ></span>' +
                '</div>' +
                '</div>';
            $('.box-add-content').append(htmltext);
            reloadck(idtab);
        });
    });

    function deleteel1(iddelete) {
        var confirmdel = confirm('Bạn muốn xóa tab');
        if (confirmdel == true) {
            $('.row_delte' + iddelete).remove();
            var active = parseInt(iddelete) - 1;
            $('.elemet_tabs').removeClass('active');
        }
    }

    function addtab() {
        $('.elemet_tabs').on('click', function () {
            var id = $(this).attr('id');
            $('.elemet_tabs').removeClass('active');
            $(this).addClass('active');
            $('.body_tab').removeClass('active_on');
            $('#body_tabss_' + id).addClass('active_on');

        })
    }
</script>
<style>
    .add-tab {
        display: block;
        color: #fff;
        font-weight: bold;
    }

    .iput_add_title {
        margin-left: 15px !important;
        width: 50% !important;
    }

    .delete {
        display: block;
        cursor: pointer;
        margin-left: 15px;
    }
</style>
<?php } ?>