<?php if (validation_errors()) { ?>
    <div class="validate-form">
        <?php echo validation_errors(); ?>
    </div>
<?php } ?>
<form method="post" action="<?php echo base_url(); ?>manager/add?table=fixed">
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
                <?php
                $city=$this->Admin_model->get_data('city',array('show'=>1));
                ?>
                <div class="row row-input">
                    <div class="col-xs-12">
                        <div class="row">
                            <div class="col-xs-2">Thành phố</div>
                            <div class="col-xs-10">
                                <div class="select-box" style="display: inline-block; min-width: 150px">
                                    <label>
                                        <select data-class="district" class="city select-city-admin" name="city">
                                            <option value="0">Chọn thành phố</option>
                                            <?php if(!empty($city)){?>
                                                <?php foreach($city as $ct){?>
                                                    <option value="<?php echo $ct->id;?>" <?php if ($this->input->post('city')==$ct->id){echo 'selected="selected"';}?>><?php echo $ct->title;?></option>
                                                <?php }?>
                                            <?php }else{?>
                                                <option value="0">Vui lòng thêm thành phố trước khi thêm quận huyện</option>
                                            <?php }?>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-input">
                    <div class="col-xs-12">
                        <div class="row">
                            <div class="col-xs-2">Quận Huyện ( Điểm bắt đầu)</div>
                            <div class="col-xs-10">
                                <div class="select-box" style="display: inline-block; min-width: 150px">
                                    <label>
                                        <select class="district" name="district_1">
                                            <option>Vui lòng chọn Thành Phố trước</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-input">
                    <div class="col-xs-12">
                        <div class="row">
                            <div class="col-xs-2">Quận Huyện ( Điểm đến)</div>
                            <div class="col-xs-10">
                                <div class="select-box" style="display: inline-block; min-width: 150px">
                                    <label>
                                        <select class="district" name="district_2">
                                            <option>Vui lòng chọn Thành Phố trước</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>
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
