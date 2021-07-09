<?php if(isset($_GET['page'])){
    $page = '&page='.$_GET['page'];
}else{
    $page ='';
}
 if (validation_errors()) { ?>
     <script>
         $(document).ready(function(){
             notice_js("Vui lòng nhập đủ các thông tin",'danger');
         })
     </script>
<?php } ?>
<form method="post" action="<?php echo base_url(); ?>manager/edit?table=internal&id=<?php echo $item_post->id; ?>">
    <input type="hidden" value="<?php if(!empty($url_referer)) echo $url_referer;?>" name="url_referer"/>
    <div class="menu-filter filter-add">
        <ul>
            <li><a href="" class="active">Chỉnh sửa bản ghi</a></li>
        </ul>
        <div class="btn-top-add">
            <button class="btn btn-add btn-update" data-id="<?php echo $item_post->id;?>" type="button">Tái xuất bản</button>
            <button class="btn btn-primary btn-add" type="submit">Cập nhập</button>
            <a href="<?php if(isset($_SERVER['HTTP_REFERER'])){echo $_SERVER['HTTP_REFERER']; }?>" class="btn btn-default btn-delete">Hủy</a>
        </div>
    </div>
    <div class="content-add-item">
        <div class="row">
            <div class="col-xs-12 col-information">
                <div class="row row-input">
                    <div class="col-xs-2">Tiêu đề(<span class="count-title">0</span>)</div>
                    <div class="col-xs-8">
                        <input id="title-name" data-id="alias-title" type="text" name="title" class="control-input input-title"
                               value="<?php echo $item_post->title; ?>"/>
                    </div>
                    <div class="col-xs-2"><a target="_blank" href="<?php echo links($item_post->id,'art');?>"> <span class="glyphicon glyphicon-eye-open"></span> Xem thử bài viết</a></div>
                </div>
                <?php if(!empty($language)){?>
                    <?php foreach($language as $lang){?>
                        <?php $tit='title'.$lang->value;?>
                        <div class="row row-input">
                            <div class="col-xs-2">Tiêu đề <?php echo $lang->title;?> (<span class="count-title">0</span>)</div>
                            <div class="col-xs-8">
                                <input data-id="alias_title<?php echo $lang->value;?>" id="title_name<?php echo $lang->value;?>" type="text" name="title<?php echo $lang->value;?>" class="control-input input-title"
                                       value="<?php echo $item_post->$tit; ?>"/>
                            </div>
                        </div>
                    <?php }?>
                <?php }?>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Link trên website</div>
                    <div class="col-xs-10">
                        <span class="sp_link_base">
                            <span class="text_base"><?php echo base_url();?></span>
                            <span class="text_alias">
                                <input id="alias-title" type="text" name="alias" class="control-input input-title"
                                       value="<?php echo $item_post->alias; ?>"/>
                            </span>
                        </span>
                    </div>
                </div>
                <?php if(!empty($language)){?>
                    <?php foreach($language as $lang){?>
                        <?php $ali='alias'.$lang->value;?>
                        <div class="row row-input">
                            <div class="col-xs-2">Link trên website <?php echo $lang->title;?></div>
                            <div class="col-xs-10">
                        <span class="sp_link_base">
                            <span class="text_base"><?php echo base_url();?></span>
                            <span class="text_alias">
                                <input id="alias_title<?php echo $lang->value;?>" type="text" name="alias<?php echo $lang->value;?>" class="control-input input-title"
                                       value="<?php echo $item_post->$ali; ?>"/>
                            </span>
                        </span>
                            </div>
                        </div>
                    <?php }?>
                <?php }?>
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
                <!-- end row-->
                <div class="toggle-group">
                    <p class="toggle-title toggle-title-up">Thư viện ảnh</p>

                    <div class="toggle-content">
                        <div class="toggle-gallery">
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
                                <textarea name="introtext" class="control-input check-editor" id="full-excerpt22"
                                          style="height: auto"
                                          rows="5"><?php if(!empty($item_post->introtext)){echo $item_post->introtext; }else{
                                    }?></textarea>
                            </div>
                        </div>
                        <!-- end row-->
                    </div>
                </div>
                <!-- end -->
                <?php if (!empty($language)) { $intro='introtext'.$lang->value; ?>
                    <?php foreach ($language as $lang) { ?>
                        <div class="toggle-group">
                            <p class="toggle-title toggle-title-up">Mô tả <?php echo $lang->title; ?></p>
                            <div class="toggle-content">
                                <div class="row row-input row-ck">
                                    <div class="col-xs-12">
                                <textarea name="introtext<?php echo $lang->value; ?>" class="control-input check-editor"
                                          id="introtext<?php echo $lang->value; ?>"
                                          style="height: auto"
                                          rows="5"><?php echo $item_post->$intro; ?></textarea>
                                    </div>
                                </div>
                                <!-- end row-->
                            </div>
                        </div>
                    <?php } ?>
                <?php } ?>
                <!-- end -->
                <div class="toggle-group">
                    <p class="toggle-title toggle-title-up">Nội dung</p>

                    <div class="toggle-content">
                        <div class="row row-input">
                            <div class="col-xs-12">
                                <textarea name="fulltext" class="control-input check-editor" id="full-2"
                                          style="height: auto"
                                          rows="5"><?php echo $item_post->fulltext; ?></textarea>
                            </div>
                        </div>
                        <!-- end row-->
                    </div>
                </div>
                <?php if(!empty($language)){?>
                    <?php foreach($language as $lang){?>
                        <?php $full='fulltext'.$lang->value;?>
                        <div class="toggle-group">
                            <p class="toggle-title toggle-title-up">Nội dung <?php echo $lang->title;?></p>

                            <div class="toggle-content">
                                <div class="row row-input">
                                    <div class="col-xs-12">
                                <textarea name="fulltext<?php echo $lang->value;?>" class="control-input check-editor" id="full-2<?php echo $lang->value;?>"
                                          style="height: auto"
                                          rows="5"><?php echo $item_post->$full; ?></textarea>
                                    </div>
                                </div>
                                <!-- end row-->
                            </div>
                        </div>
                    <?php }?>
                <?php }?>
                <!-- end -->
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
                        <?php if(!empty($language)){?>
                            <?php foreach($language as $lang){
                                $ti = 'meta_title'.$lang->value;
                                ?>
                                <div class="row row-input">
                                    <div class="col-xs-12">Meta Title <?php echo $lang->title;?></div>
                                    <div class="col-xs-12">
                                        <input type="text" name="meta_title<?php echo $lang->value;?>" class="control-input input-title"
                                               value="<?php echo $item_post->$ti; ?>"/>
                                    </div>
                                </div>
                            <?php }?>
                        <?php }?>
                        <!-- end row-->
                        <div class="row row-input">
                            <div class="col-xs-12">Meta Description</div>
                            <div class="col-xs-12">
                                <input type="text" name="meta_des" class="control-input input-title"
                                       value="<?php echo $item_post->meta_des; ?>"/>
                            </div>
                        </div>
                        <?php if(!empty($language)){?>
                            <?php foreach($language as $lang){
                                $ti = 'meta_des'.$lang->value;
                                ?>
                                <div class="row row-input">
                                    <div class="col-xs-12">Meta Description <?php echo $lang->title;?></div>
                                    <div class="col-xs-12">
                                        <input type="text" name="meta_des<?php echo $lang->value;?>" class="control-input input-title"
                                               value="<?php echo $item_post->$ti; ?>"/>
                                    </div>
                                </div>
                            <?php }?>
                        <?php }?>
                        <!-- end row-->
                        <div class="row row-input">
                            <div class="col-xs-12">Meta Keywords</div>
                            <div class="col-xs-12">
                                <input type="text" name="meta_key" class="control-input input-title"
                                       value="<?php echo $item_post->meta_key; ?>"/>
                            </div>
                        </div>
                        <?php if(!empty($language)){?>
                            <?php foreach($language as $lang){
                                $ti = 'meta_key'.$lang->value;
                                ?>
                                <div class="row row-input">
                                    <div class="col-xs-12">Meta Keywords <?php echo $lang->title;?></div>
                                    <div class="col-xs-12">
                                        <input type="text" name="meta_key<?php echo $lang->value;?>" class="control-input input-title"
                                               value="<?php echo $item_post->$ti; ?>"/>
                                    </div>
                                </div>
                            <?php }?>
                        <?php }?>
                        <!-- end row-->
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
                <button class="btn btn-add btn-update" data-id="<?php echo $item_post->id;?>"  type="button">Tái xuất bản</button>
                <button class="btn btn-primary btn-add" type="submit">Cập nhập</button>
                <a href="<?php if(isset($_SERVER['HTTP_REFERER'])){echo $_SERVER['HTTP_REFERER']; }?>" class="btn btn-default btn-delete">Hủy</a>
            </div>
            <!-- end col option-->
        </div>
    </div>
</form>
