<?php if (validation_errors()) { ?>
    <div class="validate-form">
        <?php echo validation_errors(); ?>
    </div>
<?php } ?>
<form method="post" action="<?php echo base_url(); ?>manager/add?table=slide">
    <div class="menu-filter filter-add add-user">
        <ul class="" role="tablist">
            <li role="presentation" class="active"><a href="#user-info" aria-controls="user-info"
                                                      role="tab" data-toggle="tab">Thông tin cơ bản</a>
            </li>
        </ul>
    </div>
    <!-- end tab list-->
    <div class="content-add-item">
        <p class="add-title-top">Tạo mới slide</p>
        <!-- end row-->
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="user-info">
                <div class="row row-input">
                    <div class="col-xs-2">Tiêu đề<span class="user-error">*</span></div>
                    <div class="col-xs-8">
                        <input type="text" name="title" class="control-input input-title"
                               value="<?php echo $this->input->post('title'); ?>" required/>
                    </div>
                </div>

                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Ảnh desktop </div>
                    <div class="col-xs-10">
                        <div class="row">
                            <div class="col-xs-4">
                                <input type="text" name="image" id="xFilePath" class="control-input" style="width: 100%"
                                       value="<?php echo $this->input->post('image'); ?>" required/>
                            </div>
                            <div class="col-xs-1 box-tooltip-img">
                                <span class="image-tooltip">
                                    <img id="views-image" class="zoom-image"
                                         src="<?php echo $this->input->post('image'); ?>">
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
                    <div class="col-xs-2">Ảnh mobile </div>
                    <div class="col-xs-10">
                        <div class="row">
                            <div class="col-xs-4">
                                <input type="text" name="image_thum" id="xFilePathimage_thum" class="control-input" style="width: 100%"
                                       value="<?php echo $this->input->post('image_thum'); ?>" required/>
                            </div>
                            <div class="col-xs-1 box-tooltip-img">
                                <span class="image-tooltip">
                                    <img id="views-imageimage_thum" class="zoom-image"
                                         src="<?php echo $this->input->post('image_thum'); ?>">
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
                <!-- end row-->

                <div class="row row-input">
                    <div class="col-xs-2">Url liên kết</div>
                    <div class="col-xs-10">
                        <div class="row">
                            <div class="col-xs-4">
                                <input type="text" name="hyperlink" class="control-input" style="width: 100%"
                                       value="<?php echo $this->input->post('hyperlink'); ?>"/>
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
                                            <option value="0">Slide</option>
                                            <option value="1">Slide dưới</option>
                                            <option value="2">Slide phải</option>
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
                                       value="<?php echo $this->input->post('order'); ?>"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-input">
                    <div class="col-xs-2">Mô tả</div>
                    <div class="col-xs-10">

                                <textarea name="excerpt" id=""  class="control-input" style="height: auto" rows="10"><?php echo $this->input->post('excerpt'); ?></textarea>


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
                                       value="1" checked><label><span></span></label>
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
                    <button class="btn btn-primary btn-add" type="submit">Tạo mới</button>
                    <a href="<?php if(isset($_SERVER['HTTP_REFERER'])){echo $_SERVER['HTTP_REFERER']; } ?>" class="btn btn-default btn-delete">Hủy</a>
                </div>

            </div>
        </div>
        <!-- end tab content-->

    </div>
</form>
