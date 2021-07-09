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
<form method="post" action="<?php echo base_url(); ?>manager/edit?table=comment&id=<?php echo $item_post->id; ?>">
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
                    <div class="col-xs-2">Tiêu đề</div>
                    <div class="col-xs-8">
                        <input type="text" name="title" class="control-input input-title"
                               value="<?php echo $item_post->title; ?>"/>
                    </div>
                </div>

                <div class="row row-input">
                    <div class="col-xs-2"><span>Tên người dùng</span>
                    </div>
                    <div class="col-xs-5">
                        <input name="name" required type="text" value="<?php echo $item_post->name; ?>" class="control-input input-title"/>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2"><span>Họ tên</span>
                    </div>
                    <div class="col-xs-5">
                        <input name="fullname" required type="text" value="<?php echo $item_post->fullname; ?>" class="control-input input-title"/>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2"><span>Đánh giá sao</span>
                    </div>
                    <div class="col-xs-5">
                        <input name="star" type="number" required max="5" value="<?php echo $item_post->star; ?>" class="control-input input-title"/>
                    </div>
                </div>
                <!-- end row-->

                <div class="toggle-group">
                    <p class="toggle-title toggle-title-up">Nội dung</p>
                    <div class="toggle-content">
                        <div class="row row-input row-ck">
                            <div class="col-xs-12">
                                <textarea name="comment" class="control-input"
                                          style="height: auto"
                                          rows="5"><?php echo $item_post->comment; ?></textarea>
                            </div>
                        </div>
                        <!-- end row-->
                    </div>
                </div>
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
                <button class="btn btn-add btn-update" data-id="<?php echo $item_post->id;?>"  type="button">Tái xuất bản</button>
                <button class="btn btn-primary btn-add" type="submit">Cập nhập</button>
                <a href="<?php if(isset($_SERVER['HTTP_REFERER'])){echo $_SERVER['HTTP_REFERER']; }?>" class="btn btn-default btn-delete">Hủy</a>
            </div>
            <!-- end col option-->
        </div>
    </div>
</form>
