<?php if (validation_errors()) { ?>
    <div class="validate-form">
        <?php echo validation_errors(); ?>
    </div>
<?php } ?>
<form method="post" action="<?php echo base_url(); ?>manager/add?table=price">
    <div class="menu-filter filter-add add-user">
        <ul class="" role="tablist">
            <li role="presentation" class="active"><a href="#user-info" aria-controls="user-info"
                                                      role="tab" data-toggle="tab">Thông tin cơ bản</a>
            </li>
        </ul>
    </div>
    <!-- end tab list-->
    <div class="content-add-item">
        <p class="add-title-top">Thêm</p>
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="user-info">
                <div class="row row-input">
                    <div class="col-xs-2">Tiêu đề </div>
                    <div class="col-xs-8">
                        <input type="text" name="title" class="control-input input-title"
                               value="<?php echo $this->input->post('title'); ?>"/>
                    </div>
                </div>
                <?php if(!empty($language)){?>
                    <?php foreach($language as $lang){?>
                        <div class="row row-input">
                            <div class="col-xs-2">Tiêu đề <?php echo $lang->title;?> </div>
                            <div class="col-xs-8">
                                <input type="text" name="title<?php echo $lang->value;?>" class="control-input input-title"
                                       value="<?php echo $this->input->post('title'.$lang->value.''); ?>"/>
                            </div>
                        </div>
                    <?php }?>
                <?php }?>
                <div class="row row-input">
                    <div class="col-xs-2">Link file</div>
                    <div class="col-xs-10">
                        <div class="row">
                            <div class="col-xs-8">
                                <input type="text" name="link_file" id="xFilePath" class="control-input" style="width: 100%"
                                       value="<?php echo $this->input->post('link_file'); ?>"/>
                            </div>
                            <div class="col-xs-1 box-tooltip-img">
                                <span class="image-tooltip">
                                    <img id="views-image" class="zoom-image"
                                         src="<?php echo $this->input->post('link_file'); ?>">
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
                    <div class="col-xs-2">File size</div>
                    <div class="col-xs-8">
                        <input type="text" name="size_file" class="control-input input-title"
                               value="<?php echo $this->input->post('size_file'); ?>"/>
                    </div>
                </div>
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
