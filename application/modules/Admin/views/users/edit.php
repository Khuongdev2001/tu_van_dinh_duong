<?php if (!empty($item_post)) { ?>
    <?php if (validation_errors()) { ?>
        <div class="validate-form">
            <?php echo validation_errors(); ?>
        </div>
    <?php } ?>
    <?php if ($check == 1) {
        echo '<div class="validate-form">Mật khẩu cũ không chính xác</div>';
    } ?>
    <form method="post" action="<?php echo base_url(); ?>manager/edit?table=users&id=<?php echo $item_post->id; ?>">
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
            <p class="add-title-top">Cập nhập thành viên</p>
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane active" id="user-info">
                    <div class="row row-input">
                        <div class="col-xs-2 user-bold">Tên truy cập<span class="user-error">*</span></div>
                        <div class="col-xs-10">
                            <input type="text" name="username" class="control-input input-user"
                                   value="<?php echo $item_post->username; ?>" readonly/>
                        </div>
                    </div>
                    <!-- end row-->
                    <div class="row row-input">
                        <div class="col-xs-2 user-bold" style="color: #c66c6c">Đổi mật khẩu</div>
                        <div class="col-xs-10">
                            <div class="col-option">
                                <div class="item-on-off user-on-off">
                                    <input type="checkbox" name="reset_pass"
                                           value="1" <?php if ($this->input->post('reset_pass') == 1) {
                                        echo 'checked';
                                    } ?>><label><span></span></label>
                                </div>
                            </div>
                            <!-- end col-->
                        </div>
                    </div>
                    <!-- end row-->
                    <div class="row row-input">
                        <div class="col-xs-2 user-bold">Mật khẩu cũ<span class="user-error">*</span></div>
                        <div class="col-xs-10">
                            <input type="password" name="old_password" class="control-input input-user"
                                   value="<?php echo $this->input->post('old_password'); ?>"/>
                        </div>
                    </div>
                    <!-- end row-->
                    <div class="row row-input">
                        <div class="col-xs-2 user-bold">Mật khẩu mới<span class="user-error">*</span></div>
                        <div class="col-xs-2">
                            <input type="password" name="news_password" class="control-input input-user"
                                   value="<?php echo $this->input->post('news_password'); ?>" style="width: 100%"/>
                        </div>
                        <div class="col-xs-2 user-bold">Nhập lại mật khẩu mới<span class="user-error">*</span></div>
                        <div class="col-xs-2">
                            <input type="password" name="news_passconf" class="control-input input-user"
                                   value="<?php echo $this->input->post('news_passconf'); ?>" style="width: 100%"/>
                        </div>
                    </div>
                    <!-- end row-->
                    <div class="row row-input">
                        <div class="col-xs-2">Họ và tên</div>
                        <div class="col-xs-10">
                            <input type="text" name="fullname" class="control-input input-user"
                                   value="<?php echo $item_post->fullname; ?>"/>
                        </div>
                    </div>
                    <!-- end row-->
                    <div class="row row-input">
                        <div class="col-xs-2 user-bold">Tên công ty</div>
                        <div class="col-xs-10">
                            <input type="text" name="company" class="control-input input-user"
                                   value="<?php echo $item_post->company; ?>"/>
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
                                            <option value="1" <?php if ($item_post->idgroup == 1) {
                                                echo 'selected="selected"';
                                            } ?>>Administrator
                                            </option>
                                            <option value="2" <?php if ($item_post->idgroup == 2) {
                                                echo 'selected="selected"';
                                            } ?>>Admin
                                            </option>
                                            <option value="3" <?php if ($item_post->idgroup == 3) {
                                                echo 'selected="selected"';
                                            } ?>>Mod
                                            </option>
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
                                    <input type="checkbox" name="show" value="1" <?php if ($item_post->show == 1) {
                                        echo 'checked';
                                    } ?>><label><span></span></label>
                                </div>
                            </div>
                            <!-- end col-->
                        </div>
                    </div>
                    <!-- end row-->
                    <div class="row row-input">
                        <div class="col-xs-2">Mã số thuế doanh nghiệp</div>
                        <div class="col-xs-10">
                            <input type="text" name="code_company" class="control-input input-user"
                                   value="<?php echo $item_post->code_company; ?>"/>
                        </div>
                    </div>
                    <!-- end row-->
                </div>
                <!-- end tab info-->
                <div role="tabpanel" class="tab-pane" id="user-permission">
                    <?php
                    $permission = json_decode($item_post->permission);
                    $table = $tb_permission;
                    $i = 0;
                    foreach ($table as $key => $value) {
                        $i++;
                        ?>
                        <?php if (array_key_exists($key, $permission)) { ?>
                            <div class="row row-input">
                                <div class="col-xs-2 user-bold"><?php echo $i . '.' . $value[0] ?></div>
                                <div class="col-xs-5">
                                    <div class="group-permission">
                                        <?php if (!empty($value[2])) {
                                            $j=1;
                                            foreach ($value[2] as $key_child => $value_child) {
                                                ?>
                                                <div class="row-permission">
                                                    <div class="option-inner">
                                                        <?php echo $i . '.' . $j . '.' . $value_child . ' ' . $value[1]; ?>
                                                        <div class="item-on-off">
                                                            <input type="hidden"
                                                                   name="permission[<?php echo $key; ?>][]" value=""/>
                                                            <input
                                                                type="checkbox" <?php if (in_array($key_child, $permission->$key)) {
                                                                echo 'checked';
                                                            } ?> name="permission[<?php echo $key; ?>][]"
                                                                value="<?php echo $key_child; ?>"><label><span></span></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            <?php $j++; }
                                        } ?>
                                    </div>
                                </div>
                            </div>
                        <?php } ?>
                    <?php } ?>
                </div>
                <!-- end tab permission-->
                <div role="tabpanel" class="tab-pane" id="user-contact">
                    <div class="row row-input">
                        <div class="col-xs-2 user-bold">Điện thoại di động</div>
                        <div class="col-xs-10">
                            <input type="text" name="phone" class="control-input input-user"
                                   value="<?php echo $item_post->phone; ?>"/>
                        </div>
                    </div>
                    <!-- end row-->
                    <div class="row row-input">
                        <div class="col-xs-2 user-bold">Email</div>
                        <div class="col-xs-10">
                            <input type="text" name="email" class="control-input input-user"
                                   value="<?php echo $item_post->email; ?>"/>
                        </div>
                    </div>
                    <!-- end row-->
                    <div class="row row-input">
                        <div class="col-xs-2 user-bold">Địa chỉ</div>
                        <div class="col-xs-10">
                            <textarea name="address" rows="5"
                                      class="control-input textarea-user"><?php echo $item_post->address; ?></textarea>
                        </div>
                    </div>
                    <!-- end row-->
                </div>
                <!-- end tab contact-->
                <div class="row text-left">
                    <div class="col-xs-2"></div>
                    <div class="col-xs-10">
                        <button class="btn btn-primary btn-add" type="submit">Cập nhập</button>
                        <a href="" class="btn btn-default btn-delete">Hủy</a>
                    </div>

                </div>
            </div>
            <!-- end tab content-->

        </div>
    </form>
<?php } ?>
