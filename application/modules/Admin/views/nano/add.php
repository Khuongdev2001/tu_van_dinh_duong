<?php if (validation_errors()) { ?>
    <script>
        $(document).ready(function(){
            notice_js("Vui lòng nhập đủ các thông tin",'danger');
        })
    </script>
<?php } ?>
<form method="post" action="<?php echo base_url(); ?>manager/add?table=nano">
    <div class="menu-filter filter-add">
        <ul>
            <li><a href="javascript:void(0);" class="active">Thêm bản ghi mới</a></li>
        </ul>
        <div class="btn-top-add">
            <button class="btn btn-primary btn-add" type="submit">Tạo mới</button>
            <a href="<?php if(isset($_SERVER['HTTP_REFERER'])){echo $_SERVER['HTTP_REFERER']; }?> " class="btn btn-default btn-delete">Hủy</a>
        </div>
    </div>
    <div class="content-add-item">
        <div class="row">
            <div class="col-xs-12 col-information">
                <div class="row row-input">
                    <div class="col-xs-2">Tiêu đề (<span class="count-title">0</span>)</div>
                    <div class="col-xs-8">
                        <input type="text" name="title" class="control-input input-title"
                               value="<?php echo $this->input->post('title'); ?>"/>
                    </div>
                </div>
                <?php if(!empty($language)){?>
                    <?php foreach($language as $lang){?>
                        <div class="row row-input">
                            <div class="col-xs-2">Tiêu đề <?php echo $lang->title;?> (<span class="count-title">0</span>)</div>
                            <div class="col-xs-8">
                                <input type="text" name="title<?php echo $lang->value;?>" class="control-input input-title"
                                       value="<?php echo $this->input->post('title'.$lang->value.''); ?>"/>
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
                                       value="<?php echo $this->input->post('image'); ?>"/>
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
                <div class="toggle-group">
                    <p class="toggle-title toggle-title-up">Nội dung</p>

                    <div class="toggle-content">
                        <div class="toggle-gallery">

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
                        <textarea name="box1" class="control-input input-title" style="height: 50px"><?php echo $this->input->post('box1'); ?></textarea>
                    </div>
                </div>
                <?php if(!empty($language)){?>
                    <?php foreach($language as $lang){
                        $ti = 'box1'.$lang->value;
                        ?>
                        <div class="row row-input">
                            <div class="col-xs-12">Box 1 <?php echo $lang->title;?></div>
                            <div class="col-xs-12">
                                <textarea name="box1<?php echo $lang->value;?>" class="control-input input-title" style="height: 50px"><?php echo $this->input->post($ti); ?></textarea>
                            </div>
                        </div>
                    <?php }?>
                <?php }?>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-12">Box 2</div>
                    <div class="col-xs-12">
                        <textarea name="box2" class="control-input input-title" style="height: 50px"><?php echo $this->input->post('box2'); ?></textarea>
                    </div>
                </div>
                <?php if(!empty($language)){?>
                    <?php foreach($language as $lang){
                        $ti = 'box2'.$lang->value;
                        ?>
                        <div class="row row-input">
                            <div class="col-xs-12">Box 2 <?php echo $lang->title;?></div>
                            <div class="col-xs-12">
                                <textarea name="box2<?php echo $lang->value;?>" class="control-input input-title" style="height: 50px"><?php echo $this->input->post($ti); ?></textarea>
                            </div>
                        </div>
                    <?php }?>
                <?php }?>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-12">Box 3</div>
                    <div class="col-xs-12">
                        <textarea name="box3" class="control-input input-title" style="height: 50px"><?php echo $this->input->post('box3'); ?></textarea>
                    </div>
                </div>
                <?php if(!empty($language)){?>
                    <?php foreach($language as $lang){
                        $ti = 'box3'.$lang->value;
                        ?>
                        <div class="row row-input">
                            <div class="col-xs-12">Box 3 <?php echo $lang->title;?></div>
                            <div class="col-xs-12">
                                <textarea name="box3<?php echo $lang->value;?>" class="control-input input-title" style="height: 50px"><?php echo $this->input->post($ti); ?></textarea>
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
                                <input type="checkbox" name="show" value="1" checked><label><span></span></label>
                            </div>
                        </div>
                    </div>
                    <!-- end col-->
                </div>
                <!-- end row-->
            </div>
            <!-- end col information-->
            <div class="col-xs-12 col-options col-action-bottom text-right">
                <button class="btn btn-primary btn-add" type="submit">Tạo mới</button>
                <a href="<?php if(isset($_SERVER['HTTP_REFERER'])){echo $_SERVER['HTTP_REFERER']; }?> " class="btn btn-default btn-delete">Hủy</a>
            </div>
            <!-- end col option-->
        </div>
    </div>
</form>
