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
<form method="post" action="<?php echo base_url(); ?>manager/edit?table=nano&id=<?php echo $item_post->id; ?>">
    <input type="hidden" value="<?php if (!empty($url_referer)) echo $url_referer; ?>" name="url_referer"/>
    <div class="menu-filter filter-add">
        <ul>
            <li><a href="" class="active">Chỉnh sửa bản ghi</a></li>
        </ul>
        <div class="btn-top-add">
            <button class="btn btn-add btn-update" data-id="<?php echo $item_post->id; ?>" type="button">Tái xuất bản
            </button>
            <button class="btn btn-primary btn-add" type="submit">Cập nhập</button>
            <a href="<?php if (isset($_SERVER['HTTP_REFERER'])) {
                echo $_SERVER['HTTP_REFERER'];
            } ?>" class="btn btn-default btn-delete">Hủy</a>
        </div>
    </div>
    <div class="content-add-item">
        <div class="row">
            <div class="col-xs-12 col-information">

                <div class="row row-input">
                    <div class="col-xs-2">Tiêu đề(<span class="count-title">0</span>)</div>
                    <div class="col-xs-8">
                        <input type="text" name="title" class="control-input input-title"
                               value="<?php echo $item_post->title; ?>"/>
                    </div>
                    <div class="col-xs-2"><a target="_blank" href="<?php echo links($item_post->id, 'art'); ?>"> <span
                                class="glyphicon glyphicon-eye-open"></span> Xem thử bài viết</a></div>
                </div>
                <?php if (!empty($language)) { ?>
                    <?php foreach ($language as $lang) { ?>
                        <?php $tit = 'title' . $lang->value; ?>
                        <div class="row row-input">
                            <div class="col-xs-2">Tiêu đề <?php echo $lang->title; ?> (<span
                                    class="count-title">0</span>)
                            </div>
                            <div class="col-xs-8">
                                <input type="text" name="title<?php echo $lang->value; ?>"
                                       class="control-input input-title"
                                       value="<?php echo $item_post->$tit; ?>"/>
                            </div>
                        </div>
                    <?php } ?>
                <?php } ?>
                <!-- end row-->

                <div class="row row-input">
                    <div class="col-xs-2">Ảnh đại diện</div>
                    <div class="col-xs-10">
                        <div class="row">
                            <div class="col-xs-8">
                                <input type="text" name="image" id="xFilePath" class="control-input" style="width: 100%"
                                       value="<?php echo $item_post->image; ?>"/>
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
                <div class="toggle-group">
                    <p class="toggle-title toggle-title-up">Nội dung</p>

                    <div class="toggle-content">
                        <div class="toggle-gallery">
                            <?php if (!empty($item_post->img)) {
                                $gallery = json_decode($item_post->img);
                                $intro = json_decode($item_post->intro);
                                $introen = json_decode($item_post->intro_en);
                                $desen = json_decode($item_post->fulltext);
                                $desvn = json_decode($item_post->fulltext_en);
                                if (!empty($gallery)) {
                                    $max = 1;
                                    $i = 0;
                                    foreach ($gallery as $gla) {
                                        ?>
                                        <div class="row row-gallery row-max<?php echo $max; ?>"
                                             data-id="<?php echo $max; ?>">
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
                                            <div class="row" style="margin: 10px 0">
                                                <div class="col-xs-6">
                                                    <input name="intro[]" type="text" placeholder="Tiêu đề"
                                                           class="control-input input-title"
                                                           value="<?php if (!empty($intro[$i])) {
                                                               echo $intro[$i];
                                                           } ?>"/>
                                                </div>
                                                <div class="col-xs-6">
                                                    <input name="intro_en[]" type="text" placeholder="Tiêu đề en"
                                                           class="control-input input-title"
                                                           value="<?php if (!empty($introen[$i])) {
                                                               echo $introen[$i];
                                                           } ?>"/>
                                                </div>
                                            </div>
                                            <div class="row" style="margin: 10px 0">
                                                <div class="col-xs-6">
                                                    <textarea name="fulltext[]" placeholder="Mô tả"
                                                              class="control-input check-editor"
                                                              id="fulltextvn<?php echo $max; ?>"><?php if (!empty($desen[$i])) {
                                                            echo $desen[$i];
                                                        } ?></textarea>
                                                </div>
                                                <div class="col-xs-6">
                                                    <textarea name="fulltext_en[]" placeholder="Mô tả en"
                                                              class="control-input check-editor"
                                                              id="fulltexten<?php echo $max; ?>"><?php if (!empty($desvn[$i])) {
                                                            echo $desvn[$i];
                                                        } ?></textarea>
                                                </div>
                                            </div>
                                            <script>
                                                $(document).ready(function () {
                                                    cke('.row-max<?php echo $max; ?>');
                                                })
                                            </script>
                                        </div>

                                        <?php $max++;
                                        $i++;
                                    }
                                }
                            } ?>

                        </div>
                        <p>
                            <button class="add-gallery" type="button">Thêm nội dung</button>
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
                                var html = '<div class="row row-gallery row-max' + max + '" data-id="' + max + '">' +
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
                                    '<div class="row" style="margin: 10px 0">' +
                                    '<div class="col-xs-6">' +
                                    '<input name="intro[]" type="text" placeholder="Tiêu đề" class="control-input input-title"/>'+
                                    '</div>'+
                                    '<div class="col-xs-6">' +
                                    '<input name="intro_en[]" type="text" placeholder="Tiêu đề en" class="control-input input-title"/>'+
                                    '</div>'+
                                    '</div>' +
                                    '<div class="row" style="margin: 10px 0">' +
                                    '<div class="col-xs-6">' +
                                    '<textarea name="fulltext[]" placeholder="Mô tả" class="control-input check-editor"'+
                                    'id="fulltextvn' + max + '"></textarea>'+
                                    '</div>'+
                                    '<div class="col-xs-6">' +
                                    '<textarea name="fulltext_en[]" placeholder="Mô tả en" class="control-input check-editor"'+
                                    'id="fulltexten' + max + '"></textarea>'+
                                    '</div>'+
                                    '</div>' +
                                    '</div>';
                                $('.toggle-gallery').append(html);
                                cke('.row-max' + max);
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
                <div class="row row-input">
                    <div class="col-xs-12">Box 1</div>
                    <div class="col-xs-12">
                        <textarea name="box1" class="control-input input-title" style="height: 50px"><?php echo $item_post->box1; ?></textarea>
                    </div>
                </div>
                <?php if(!empty($language)){?>
                    <?php foreach($language as $lang){
                        $ti = 'box1'.$lang->value;
                        ?>
                        <div class="row row-input">
                            <div class="col-xs-12">Box 1 <?php echo $lang->title;?></div>
                            <div class="col-xs-12">
                                <textarea name="box1<?php echo $lang->value;?>" class="control-input input-title" style="height: 50px"><?php echo $item_post->$ti; ?></textarea>
                            </div>
                        </div>
                    <?php }?>
                <?php }?>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-12">Box 2</div>
                    <div class="col-xs-12">
                        <textarea name="box2" class="control-input input-title" style="height: 50px"><?php echo $item_post->box2; ?></textarea>
                    </div>
                </div>
                <?php if(!empty($language)){?>
                    <?php foreach($language as $lang){
                        $ti = 'box2'.$lang->value;
                        ?>
                        <div class="row row-input">
                            <div class="col-xs-12">Box 2 <?php echo $lang->title;?></div>
                            <div class="col-xs-12">
                                <textarea name="box2<?php echo $lang->value;?>" class="control-input input-title" style="height: 50px"><?php echo $item_post->$ti; ?></textarea>
                            </div>
                        </div>
                    <?php }?>
                <?php }?>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-12">Box 3</div>
                    <div class="col-xs-12">
                        <textarea name="box3" class="control-input input-title" style="height: 50px"><?php echo $item_post->box3; ?></textarea>
                    </div>
                </div>
                <?php if(!empty($language)){?>
                    <?php foreach($language as $lang){
                        $ti = 'box3'.$lang->value;
                        ?>
                        <div class="row row-input">
                            <div class="col-xs-12">Box 3 <?php echo $lang->title;?></div>
                            <div class="col-xs-12">
                                <textarea name="box3<?php echo $lang->value;?>" class="control-input input-title" style="height: 50px"><?php echo $item_post->$ti; ?></textarea>
                            </div>
                        </div>
                    <?php }?>
                <?php }?>
                <!-- end row-->
                <div class="row row-input row-margin">
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
                <button class="btn btn-add btn-update" data-id="<?php echo $item_post->id; ?>" type="button">Tái xuất
                    bản
                </button>
                <button class="btn btn-primary btn-add" type="submit">Cập nhập</button>
                <a href="<?php if (isset($_SERVER['HTTP_REFERER'])) {
                    echo $_SERVER['HTTP_REFERER'];
                } ?>" class="btn btn-default btn-delete">Hủy</a>
            </div>
            <!-- end col option-->
        </div>
    </div>
</form>
