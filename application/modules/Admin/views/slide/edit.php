<?php if (validation_errors()) { ?>
    <div class="validate-form">
        <?php echo validation_errors(); ?>
    </div>
<?php } ?>
<form method="post" action="<?php echo base_url(); ?>manager/edit?table=slide&id=<?php echo $item_post->id ;?>">
    <div class="menu-filter filter-add add-user">
        <ul class="" role="tablist">
            <li role="presentation" class="active"><a href="#user-info" aria-controls="user-info"
                                                      role="tab" data-toggle="tab">Thông tin cơ bản</a>
            </li>
        </ul>
    </div>
    <!-- end tab list-->
    <div class="content-add-item">
        <p class="add-title-top">Cập nhập slide</p>
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
        <!-- end row-->
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="user-info">
                <div class="row row-input">
                    <div class="col-xs-2">Tên slide<span class="user-error">*</span></div>
                    <div class="col-xs-8">
                        <input type="text" name="title" class="control-input input-title"
                               value="<?php echo $item_post->title ; ?>" required/>
                    </div>
                </div>
                <div class="row row-input">
                    <div class="col-xs-2">Ảnh desktop </div>
                    <div class="col-xs-10">
                        <div class="row">
                            <div class="col-xs-4">
                                <input type="text" name="image" id="xFilePath" class="control-input" style="width: 100%"
                                       value="<?php echo $item_post->image ; ?>"/>
                            </div>
                            <div class="col-xs-1 box-tooltip-img">
                                <span class="image-tooltip">
                                    <img id="views-image" class="zoom-image"
                                         src="<?php echo $item_post->image ; ?>">
                                </span>
                            </div>
                            <div class="col-xs-2">
                                <button type="button" class="btn-browse" onclick="openPopup('xFilePath','views-image')">
                                    Browse...
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-input">
                    <div class="col-xs-2">Ảnh mobile </div>
                    <div class="col-xs-10">
                        <div class="row">
                            <div class="col-xs-4">
                                <input type="text" name="image_thum" id="xFilePathimage_thum" class="control-input" style="width: 100%"
                                       value="<?php echo $item_post->image_thum ; ?>"/>
                            </div>
                            <div class="col-xs-1 box-tooltip-img">
                                <span class="image-tooltip">
                                    <img id="views-imageimage_thum" class="zoom-image"
                                         src="<?php echo $item_post->image_thum ; ?>">
                                </span>
                            </div>
                            <div class="col-xs-2">
                                <button type="button" class="btn-browse" onclick="openPopup('xFilePathimage_thum','views-imageimage_thum')">
                                    Browse...
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row row-input">
                    <div class="col-xs-2">Hyper link</div>
                    <div class="col-xs-10">
                        <div class="row">
                            <div class="col-xs-4">
                                <input type="text" name="hyperlink" class="control-input" style="width: 100%"
                                       value="<?php echo $item_post->hyperlink ; ?>"/>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Thể loại</span>
                    </div>
                    <div class="col-xs-2">
                        <div class="row">
                            <div class="post-select" style="margin-bottom: 0">
                                <div class="select-box col-xs-12">
                                    <label>
                                        <select name="action">
                                            <option <?php if($item_post->action=='0'){echo 'selected';}?> value="0">Slide</option>
                                            <option <?php if($item_post->action=='1'){echo 'selected';}?> value="1">Slide dưới</option>
                                            <option <?php if($item_post->action=='2'){echo 'selected';}?> value="2">Slide phải</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Thứ tự hiển thị</div>
                    <div class="col-xs-10">
                        <div class="row">
                            <div class="col-xs-2">
                                <input type="number" name="order" class="control-input input-user"
                                       value="<?php echo $item_post->order ; ?>"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-input">
                    <div class="col-xs-2">Mô tả</div>
                    <div class="col-xs-10">

                                <textarea name="excerpt" id="" style="height: auto"  class="control-input" rows="10"><?php echo $item_post->excerpt; ?></textarea>


                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Kích hoạt</div>
                    <div class="col-xs-10">
                        <div class="col-option">
                            <div class="item-on-off user-on-off">
                                <input type="hidden" name="show" value="0"/>
                                <input type="checkbox" name="show"
                                       value="1" <?php if ($item_post->show == 1) {
                                    echo 'checked';
                                } ?> ><label><span></span></label>
                            </div>
                        </div>
                        <!-- end col-->
                    </div>
                </div>
                <!-- end row-->
            </div>
            <!-- end tab info-->
            <div class="row text-left">
                <div class="col-xs-2"></div>
                <div class="col-xs-10">
                    <button class="btn btn-primary btn-add" type="submit">Cập nhập</button>
                    <a href="<?php if(isset($_SERVER['HTTP_REFERER'])){echo $_SERVER['HTTP_REFERER']; } ?>" class="btn btn-default btn-delete">Hủy</a>
                </div>

            </div>
        </div>
        <!-- end tab content-->

    </div>
</form>
