<?php if (validation_errors()) { ?>
    <div class="validate-form">
        <?php echo validation_errors(); ?>
    </div>
<?php } ?>
<form method="post" action="<?php echo base_url(); ?>manager/add?table=office">
    <div class="menu-filter filter-add add-user">
        <ul class="" role="tablist">
            <li role="presentation" class="active"><a href="#user-info" aria-controls="user-info"
                                                      role="tab" data-toggle="tab">Thông tin cơ bản</a>
            </li>
        </ul>
    </div>
    <!-- end tab list-->
    <div class="content-add-item">
        <p class="add-title-top">Tạo mới văn phòng</p>
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="user-info">
                <div class="row row-input">
                    <div class="col-xs-2">Tên văn phòng<span class="user-error">*</span></div>
                    <div class="col-xs-10">
                        <input type="text" name="title" class="control-input input-user"
                               value="<?php echo $this->input->post('title'); ?>"/>
                    </div>
                </div>
                <!-- end row-->
                <?php if (!empty($language)) { ?>
                    <?php foreach ($language as $lang) { ?>
                        <div class="row row-input">
                            <div class="col-xs-2">Tên văn phòng <?php echo $lang->title; ?> (<span
                                        class="count-title">0</span>)
                            </div>
                            <div class="col-xs-8">
                                <input id="title-name<?php echo $lang->value; ?>"
                                       data-id="alias_title<?php echo $lang->value; ?>" type="text"
                                       name="title<?php echo $lang->value; ?>" class="control-input input-title"
                                       value="<?php echo $this->input->post('title' . $lang->value . ''); ?>"/>
                            </div>
                        </div>
                    <?php } ?>
                <?php } ?>
                <?php $country= $this->Admin_model->get_data('country', array('show' => 1, 'language' => 'vi'));
                if (!empty($country)) {
                    ?>
                    <div class="row row-input row-action">
                        <div class="col-xs-4">
                            <div class="row">
                                <div class="col-xs-6">Quốc gia</div>
                                <div class="col-xs-6">
                                    <div class="select-box" style="display: inline-block; min-width: 150px">
                                        <label>
                                            <select name="country" id="country">
                                                <?php foreach ($country as $ct) { ?>
                                                    <option value="<?php echo $ct->id; ?>" <?php if ($this->input->post('country') == $ct->id) {
                                                        echo 'selected="selected"';
                                                    } ?>><?php echo $ct->title; ?></option>
                                                <?php } ?>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <div class="row">
                                <div class="col-xs-6">Tỉnh thành phố</div>
                                <div class="col-xs-6">
                                    <div class="select-box" style="display: inline-block; min-width: 150px">
                                        <label>
                                            <select name="id_city" id="city">
                                                <?php
                                                $city = $this->Admin_model->get_data('city',array('show'=>1,'country'=>$country[0]->id));
                                                foreach ($city as $ct) { ?>
                                                    <option value="<?php echo $ct->id; ?>" <?php if ($this->input->post('id_city') == $ct->id) {
                                                        echo 'selected="selected"';
                                                    } ?>><?php echo $ct->title; ?></option>
                                                <?php } ?>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <div class="row">
                                <div class="col-xs-3">Quận huyện</div>
                                <div class="col-xs-6">
                                    <div class="select-box" style="display: inline-block; min-width: 150px">
                                        <label>
                                            <select name="district" id="district">
                                                <?php
                                                $district = $this->Admin_model->get_data('district',array('show'=>1,'id_city'=>$city[0]->id));
                                                foreach ($district as $dt){?>
                                                    <option value="<?php echo $dt->id ;?>" <?php if ($this->input->post('district')==$dt->id){echo 'selected="selected"';}?>><?php echo $dt->title ;?></option>
                                                <?php } ?>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end row-->
                    <script>
                        $(document).ready(function () {
                            $('#country').on('change',function () {
                                var id = $(this).val();
                                var url ='<?php echo base_url();?>post-country';
                                $.ajax({
                                    type: "POST",
                                    url: url,
                                    data: {id: id},
                                    success: function (data, status) {
                                        $('#city').html(data);
                                    }
                                })
                            });
                            $('#city').on('change',function () {
                                var id = $(this).val();
                                var url ='<?php echo base_url();?>post-city';
                                $.ajax({
                                    type: "POST",
                                    url: url,
                                    data: {id: id},
                                    success: function (data, status) {
                                        $('#district').html(data);
                                    }
                                })
                            })
                        })
                    </script>
                <?php } ?>
                <div class="row row-input">
                    <div class="col-xs-2">Ảnh đại diện</div>
                    <div class="col-xs-10">
                        <div class="row">
                            <div class="col-xs-4">
                                <input type="text" name="image" id="xFilePath" class="control-input" style="width: 100%"
                                       value="<?php echo $this->input->post('image'); ?>"/>
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
                    <div class="col-xs-2">Địa chỉ</div>
                    <div class="col-xs-10">
                        <input type="text" name="address" class="control-input input-user"
                               value="<?php echo $this->input->post('address'); ?>"/>
                    </div>
                </div>
                <!--  end row-->
                <?php if(!empty($language)){?>
                    <?php foreach($language as $lang){?>
                        <?php $tit='title'.$lang->value;?>
                        <div class="row row-input">
                            <div class="col-xs-2">Địa chỉ <?php echo $lang->title ;?> </div>
                            <div class="col-xs-10">
                                <input type="text" name="<?php echo $tit;?>" class="control-input input-user"
                                       value="<?php echo $this->input->post($tit); ?>"/>
                            </div>
                        </div>
                    <?php }?>
                <?php }?>
                <div class="row row-input">
                    <div class="col-xs-2">Điện thoại</div>
                    <div class="col-xs-10">
                        <input type="text" name="phone" class="control-input input-user"
                               value="<?php echo $this->input->post('phone'); ?>"/>
                    </div>
                </div>
                <!--  end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Email</div>
                    <div class="col-xs-10">
                        <input type="text" name="email" class="control-input input-user"
                               value="<?php echo $this->input->post('email'); ?>"/>
                    </div>
                </div>
                <!--  end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Vị trí</div>
                    <div class="col-xs-10">
                        <input type="text" name="location" class="control-input input-user"
                               value="<?php echo $this->input->post('location'); ?>"/>
                    </div>
                </div>
                <!--  end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Độ phóng đại</div>
                    <div class="col-xs-10">
                        <input type="number" name="zoom" class="control-input input-user"
                               value="<?php echo $this->input->post('zoom'); ?>"/>
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
                    <a href="<?php echo $_SERVER['HTTP_REFERER']; ?>" class="btn btn-default btn-delete">Hủy</a>
                </div>

            </div>
        </div>
        <!-- end tab content-->

    </div>
</form>
