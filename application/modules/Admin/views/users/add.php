<?php if (validation_errors()) { ?>
<div class="validate-form">
    <?php echo validation_errors();?>
</div>
<?php }?>
<?php if($check==1){echo '<div class="validate-form">Tài khoản này đã tồn tại</div>';}?>
<form method="post" action="<?php echo base_url();?>manager/add?table=users">
    <div class="menu-filter filter-add add-user">
        <ul class="" role="tablist">
            <li role="presentation" class="active"><a href="#user-info" aria-controls="user-info"
                                                      role="tab" data-toggle="tab">Thông tin cơ bản</a>
            </li>
            <li role="presentation"><a href="#user-permission" aria-controls="user-permission"
                                       role="tab" data-toggle="tab">Phân quyền</a></li>
            <li role="presentation"><a href="#user-contact" aria-controls="user-contact" role="tab"
                                       data-toggle="tab">Thông tin liên hệ</a></li>
        </ul>
    </div>
    <!-- end tab list-->
    <div class="content-add-item">
        <p class="add-title-top">Tạo mới thành viên</p>
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="user-info">
                <div class="row row-input">
                    <div class="col-xs-2 user-bold">Tên truy cập<span class="user-error">*</span></div>
                    <div class="col-xs-10">
                        <input type="text" name="username" class="control-input input-user" value="<?php echo $this->input->post('username');?>"/>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2 user-bold">Mật khẩu<span class="user-error">*</span></div>
                    <div class="col-xs-10">
                        <input type="password" name="password" class="control-input input-user" value="<?php echo $this->input->post('password');?>"/>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2 user-bold">Nhập lại mật khẩu<span class="user-error">*</span>
                    </div>
                    <div class="col-xs-10">
                        <input type="password" name="passconf" class="control-input input-user" value="<?php echo $this->input->post('passconf');?>"/>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Họ và tên</div>
                    <div class="col-xs-10">
                        <input type="text" name="fullname" class="control-input input-user" value="<?php echo $this->input->post('fullname');?>"/>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2 user-bold">Tên công ty</div>
                    <div class="col-xs-10">
                        <input type="text" name="company" class="control-input input-user" value="<?php echo $this->input->post('company');?>"/>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Phân loại</div>
                    <div class="col-xs-10">
                        <div class="">
                            <div class="select-box" style="display: inline-block; min-width: 100px">
                                <label>
                                    <select name="idgroup">
                                        <option value="1">Administrator</option>
                                        <option value="2">Admin</option>
                                        <option value="3">Mod</option>
                                    </select>
                                </label>
                            </div>
                            <span style="display: inline-block; font-style: italic"> (Chỉ có Admin và Mod mới có quyền truy cập vào Trang quản trị - manager)</span>
                        </div>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Kích hoạt</div>
                    <div class="col-xs-10">
                        <div class="col-option">
                            <div class="item-on-off user-on-off">
                                <input type="checkbox" name="show" value="1" <?php if($this->input->post('show')==1){echo 'checked';}?>><label><span></span></label>
                            </div>
                        </div>
                        <!-- end col-->
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Mã số thuế doanh nghiệp</div>
                    <div class="col-xs-10">
                        <input type="text" name="code_company" class="control-input input-user" value="<?php echo $this->input->post('code_company');?>"/>
                    </div>
                </div>
                <!-- end row-->
            </div>
            <!-- end tab info-->
            <div role="tabpanel" class="tab-pane" id="user-permission">
                <?php
                    $table=$tb_permission;
                    $i=0;
                    foreach($table as $key=>$value){
                        $i++;
                ?>
                        <div class="row row-input">
                            <div class="col-xs-2 user-bold"><?php echo $i.'.'.$value[0]?></div>
                            <div class="col-xs-5">
                                <div class="group-permission">
                                    <?php if(!empty($value[2])){
                                        $j=1;
                                        foreach($value[2] as $key_child=>$value_child){
                                    ?>
                                            <div class="row-permission">
                                                <div class="option-inner">
                                                    <?php echo $i.'.'.$j.'.'.$value_child.' '.$value[1];?>
                                                    <div class="item-on-off">
                                                        <input type="hidden" name="permission[<?php echo $key;?>][]" value="" />
                                                        <input type="checkbox" checked name="permission[<?php echo $key;?>][]" value="<?php echo $key_child;?>"><label><span></span></label>
                                                    </div>
                                                </div>
                                            </div>
                                    <?php $j++; }}?>
                                </div>
                            </div>
                        </div>
                <?php }?>

            </div>
            <!-- end tab permission-->
            <div role="tabpanel" class="tab-pane" id="user-contact">
                <div class="row row-input">
                    <div class="col-xs-2 user-bold">Điện thoại di động</div>
                    <div class="col-xs-10">
                        <input type="text" name="phone" class="control-input input-user" value="<?php echo $this->input->post('phone');?>"/>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2 user-bold">Email</div>
                    <div class="col-xs-10">
                        <input type="text" name="email" class="control-input input-user" value="<?php echo $this->input->post('email');?>"/>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2 user-bold">Địa chỉ</div>
                    <div class="col-xs-10">
                        <textarea name="address" rows="5" class="control-input textarea-user" ><?php echo $this->input->post('address');?></textarea>
                    </div>
                </div>
                <!-- end row-->
            </div>
            <!-- end tab contact-->
            <div class="row text-left">
                <div class="col-xs-2"></div>
                <div class="col-xs-10">
                    <button class="btn btn-primary btn-add" type="submit">Tạo mới</button>
                    <a href="" class="btn btn-default btn-delete">Hủy</a>
                </div>

            </div>
        </div>
        <!-- end tab content-->

    </div>
</form>
