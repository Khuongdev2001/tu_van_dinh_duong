<?php if (validation_errors()) { ?>
    <script>
        $(document).ready(function(){
            notice_js("Vui lòng nhập đủ các thông tin",'danger');
        })
    </script>
<?php } ?>
<form method="post" action="<?php echo base_url(); ?>manager/add?table=order">
    <div class="menu-filter filter-add">
        <ul>
            <li><a href="javascript:void(0);" class="active">Thêm bản ghi mới</a></li>
        </ul>
        <div class="btn-top-add">
            <button class="btn btn-primary btn-add" type="submit">Tạo mới</button>
            <a href="<?php if(isset($_SERVER['HTTP_REFERER'])){echo $_SERVER['HTTP_REFERER']; }?> " class="btn btn-default btn-delete">Hủy</a>
        </div>
    </div>
    <div class="content-add-item">
        <div class="row">
            <div class="col-xs-12 col-information">
                <div class="row row-input">
                    <div class="col-xs-2">Mã hóa đơn(<span class="count-title">0</span>)</div>
                    <div class="col-xs-8">
                        <input type="text" name="title" class="control-input input-title"
                               value="<?php echo $this->input->post('title');?>"/>
                    </div>
                </div>
                <div class="row row-input">
                    <div class="col-xs-2">Họ tên</div>
                    <div class="col-xs-8">
                        <input type="text" name="name" class="control-input input-title"
                               value="<?php echo $this->input->post('name'); ?>"/>
                    </div>
                </div>
                <div class="row row-input">
                    <div class="col-xs-2">Điện thoại</div>
                    <div class="col-xs-8">
                        <input type="text" name="phone" class="control-input input-title"
                               value="<?php echo $this->input->post('phone'); ?>"/>
                    </div>
                </div>
                <div class="row row-input">
                    <div class="col-xs-2">Email</div>
                    <div class="col-xs-8">
                        <input type="text" name="email" class="control-input input-title"
                               value="<?php echo $this->input->post('email'); ?>"/>
                    </div>
                </div>
                <div class="row row-input">
                    <div class="col-xs-2">Địa chỉ</div>
                    <div class="col-xs-8">
                        <input type="text" name="address" class="control-input input-title"
                               value="<?php echo $this->input->post('address'); ?>"/>
                    </div>
                </div>
                <div class="row row-input">
                    <div class="col-xs-2">Company Nam</div>
                    <div class="col-xs-8">
                        <input type="text" name="company" class="control-input input-title"
                               value="<?php echo $this->input->post('company'); ?>"/>
                    </div>
                </div>
                <div class="toggle-group">
                    <p class="toggle-title toggle-title-up">Nội dung</p>
                    <div class="toggle-content">
                        <div class="row row-input row-ck">
                            <div class="col-xs-12">
                                <textarea name="content" class="control-input check-editor" id="full-2"
                                          style="height: auto"
                                          rows="5"><?php echo $this->input->post('content'); ?></textarea>
                            </div>
                        </div>
                        <!-- end row-->
                    </div>
                </div>
                <div class="row row-input">
                    <div class="col-xs-2">Tình trạng thanh toán </div>
                    <div class="col-xs-10">
                        <div>
                            <div class="select-box" style="display: inline-block; min-width: 100px">
                                <label>
                                    <select name="type_money">
                                        <option
                                                value="0" <?php if ($this->input->post('type_money') == 0) {
                                            echo 'selected="selected"';
                                        } ?>>Chờ xử lý</option>
                                        <option
                                                value="1" <?php if ($this->input->post('type_money') == 1) {
                                            echo 'selected="selected"';
                                        } ?>>Chờ thanh toán </option>
                                        <option
                                                value="3" <?php if ($this->input->post('type_money') == 2) {
                                            echo 'selected="selected"';
                                        } ?>>Đã hoàn thành </option>
                                    </select>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input row-margin">
                    <div class="col-option">
                        <div class="option-inner">
                            Xem
                            <div class="item-on-off">
                                <input type="hidden" name="show" value="0" checked/>
                                <input type="checkbox" name="show" value="1" ><label><span></span></label>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end row-->
            </div>
            <!-- end col information-->
            <div class="col-xs-12 col-options col-action-bottom text-right">
                <button class="btn btn-primary btn-add" type="submit">Tạo mới</button>
                <a href="<?php if(isset($_SERVER['HTTP_REFERER'])){echo $_SERVER['HTTP_REFERER']; }?> " class="btn btn-default btn-delete">Hủy</a>
            </div>
            <!-- end col option-->
        </div>
    </div>
</form>
