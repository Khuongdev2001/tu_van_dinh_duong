<?php if (validation_errors()) { ?>
    <div class="validate-form">
        <?php echo validation_errors(); ?>
    </div>
<?php } ?>
<form method="post" action="<?php echo base_url(); ?>manager/edit?table=ads&id=<?php echo $item_post->id ;?>">
    <div class="menu-filter filter-add add-user">
        <ul class="" role="tablist">
            <li role="presentation" class="active"><a href="#user-info" aria-controls="user-info"
                                                      role="tab" data-toggle="tab">Thông tin cơ bản</a>
            </li>
        </ul>
    </div>
    <!-- end tab list-->
    <div class="content-add-item">
        <p class="add-title-top">Cập nhập quảng cáo</p>
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
                    <div class="col-xs-2">Tiêu đề<span class="user-error">*</span></div>
                    <div class="col-xs-8">
                        <input type="text" name="title" class="control-input input-title"
                               value="<?php echo $item_post->title ; ?>" required/>
                    </div>
                </div>
                <div class="row row-input">
                    <div class="col-xs-2"><span>Thể loại</span></div>
                    <div class="col-xs-2">
                        <div class="row">
                            <div class="post-select" style="margin-bottom: 0">
                                <div class="select-box col-xs-12">
                                    <label>
                                        <select name="type">
                                            <option <?php if($item_post->type=='2'){echo 'selected';}?> value="2">Thư viện ảnh</option>
                                            <option <?php if($item_post->type=='0'){echo 'selected';}?> value="0">Hình ảnh</option>
                                            <option <?php if($item_post->type=='1'){echo 'selected';}?> value="1">Video</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Đường dẫn ảnh </div>
                    <div class="col-xs-10">
                        <div class="row">
                            <div class="col-xs-4">
                                <input type="text" name="image" id="xFilePath" class="control-input" style="width: 100%"
                                       value="<?php echo $item_post->image ; ?>" required/>
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
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Đường dẫn ảnh </div>
                    <div class="col-xs-10">
                        <div class="row">
                            <div class="col-xs-4">
                                <input type="text" name="image_hover" id="xFilePathimage_hover" class="control-input" style="width: 100%"
                                       value="<?php echo $item_post->image_hover ; ?>" required/>
                            </div>
                            <div class="col-xs-1 box-tooltip-img">
                                <span class="image-tooltip">
                                    <img id="views-imageimage_hover" class="zoom-image"
                                         src="<?php echo $item_post->image_hover ; ?>">
                                </span>
                            </div>
                            <div class="col-xs-2">
                                <button type="button" class="btn-browse" onclick="openPopup('xFilePathimage_hover','views-imageimage_hover')">
                                    Browse...
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Embed video</div>
                    <div class="col-xs-10">
                        <input type="text" name="video_url" class="control-input input-user"
                               value="<?php echo $item_post->video_url ; ?>"/>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Link liên kết</div>
                    <div class="col-xs-10">
                        <input type="text" name="hyperlink" class="control-input input-user"
                               value="<?php echo $item_post->hyperlink ; ?>"/>
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
                <!-- end row-->

                <div class="row row-input">
                    <div class="col-xs-2">Mở trang</span>
                    </div>
                    <div class="col-xs-2">
                        <div class="row">
                            <div class="post-select" style="margin-bottom: 0">
                                <div class="select-box col-xs-12">
                                    <label>
                                        <select name="type_target">
                                            <option <?php if($item_post->type_target=='_blank'){echo 'selected';}?> value="_blank">Mở trang mới</option>
                                            <option <?php if($item_post->type_target=='_self'){echo 'selected';}?> value="_self">Mở trang hiện tại</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Vị trí</span>
                    </div>
                    <div class="col-xs-2">
                        <div class="row">
                            <div class="post-select" style="margin-bottom: 0">
                                <div class="select-box col-xs-12">
                                    <label>
                                        <select name="position">
                                            <option value="0" <?php if($item_post->position==0){echo 'selected';}?>>Thuong hiệu</option>
                                            <option value="1" <?php if($item_post->position==1){echo 'selected';}?>>Flashsale </option>
                                            <option value="2" <?php if($item_post->position==2){echo 'selected';}?>>Danh mục bài viết</option>
                                            <option value="3" <?php if($item_post->position==3){echo 'selected';}?>>Danh mục sản phẩm</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-input">
                    <div class="col-xs-2">Mô tả</div>
                    <div class="col-xs-10">
                        <textarea name="introtext" class="control-input check-editor" id="full-excerpt22"
                                  style="height: auto"
                                  rows="5">   <?php echo $item_post->introtext; ?></textarea>
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
