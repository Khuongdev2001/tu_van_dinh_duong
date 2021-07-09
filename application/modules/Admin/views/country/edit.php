<?php if (validation_errors()) { ?>
    <div class="validate-form">
        <?php echo validation_errors(); ?>
    </div>
<?php } ?>
<form method="post" action="<?php echo base_url(); ?>manager/edit?table=country&id=<?php echo $item_post->id ;?>">
    <div class="menu-filter filter-add add-user">
        <ul class="" role="tablist">
            <li role="presentation" class="active"><a href="#user-info" aria-controls="user-info"
                                                      role="tab" data-toggle="tab">Thông tin cơ bản</a>
            </li>
        </ul>
    </div>
    <!-- end tab list-->
    <div class="content-add-item">
        <p class="add-title-top">Cập nhập</p>
        <div class="row row-input">
            <div class="col-xs-2">Ngôn ngữ</div>
            <div class="col-xs-10">
                <div class="add-language">
                    <div class="select-box" style="display: inline-block; min-width: 100px">
                        <label>
                            <?php if($this->session->userdata('language')){?>
                                <select name="language" id="check-language">
                                    <option value="vi" <?php if ($this->session->userdata('language') == 'vi') {
                                        echo 'selected="selected"';
                                    } ?>>Việt Nam
                                    </option>
                                </select>
                            <?php }else{?>
                                <select name="language" id="check-language">
                                    <option value="vi" <?php if($item_post->language=='vi'){echo 'selected="selected"';}?>>Việt Nam</option>
                                </select>
                            <?php }?>
                        </label>
                    </div>
                </div>
                <!-- end -->
            </div>
        </div>
        <!-- end row-->
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="user-info">
                <div class="row row-input">
                    <div class="col-xs-2">Tiêu đề<span class="user-error">*</span></div>
                    <div class="col-xs-10">
                        <input type="text" name="title" class="control-input input-user"
                               value="<?php echo $item_post->title ; ?>"/>
                    </div>
                </div>
                <!-- end row-->
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
                    <div class="col-xs-2">Vị trí</div>
                    <div class="col-xs-10">
                        <input type="text" name="location" class="control-input input-user"
                               value="<?php echo $item_post->location; ?>"/>
                    </div>
                </div>
                <!--  end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Độ phóng đại</div>
                    <div class="col-xs-10">
                        <input type="number" name="zoom" class="control-input input-user"
                               value="<?php echo $item_post->zoom; ?>"/>
                    </div>
                </div>
                <!--  end row-->
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
                    <a href="<?php echo $_SERVER['HTTP_REFERER']; ?>" class="btn btn-default btn-delete">Hủy</a>
                </div>

            </div>
        </div>
        <!-- end tab content-->

    </div>
</form>
