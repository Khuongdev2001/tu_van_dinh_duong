<?php
if(isset($_GET['page'])){
    $page = '&page='.$_GET['page'];
}else{
    $page ='';
}
$time1=$this->input->get('date-start');
$time2=$this->input->get('date-end');
?>
<div class="menu-filter">
    <ul>
        <li>
            <a href="<?php echo base_url(); ?>manager/list?table=<?php echo $table; ?>" <?php if (!isset($_GET['show'])) {
                echo 'class="active"';
            } ?> >Tất cả</a>
        </li>
        <li>
            <a href="<?php echo base_url(); ?>manager/list?table=<?php echo $table; ?>&show=1" <?php if (!empty($_GET['show'])) {
                if ($_GET['show'] == 1) {
                    echo 'class="active"';
                }
            } ?> >Đã xuất bản</a>
        </li>
        <li>
            <a href="<?php echo base_url(); ?>manager/list?table=<?php echo $table; ?>&show=0" <?php if (isset($_GET['show'])) {
                if ($_GET['show'] == 0) {
                    echo 'class="active"';
                }
            } ?> >Chưa xuất bản</a></li>
    </ul>
    <div class="admin-search">
        <input class="search-keyword" type="text" name="keyword" placeholder="Tìm theo từ khóa"
               value="<?php echo $keyword; ?>"/>
        <input class="search-submit" value="" type="button"/>
    </div>
</div>
<div class="menu-option">
    <ul>
        <?php if (Check_per_action($table, $iduser, 1)) { ?>
            <li class="option-item"><a class="option-add" href="<?php echo base_url(); ?>manager/add?table=<?php echo $table; ?>"><i class="glyphicon glyphicon-plus"></i><span>Tạo bài viết mới</span></a>
            </li>
        <?php } ?>
        <li class="option-item item-list-status action-all-buttom">
            <a class="option-status"><span>Thay đổi trạng thái</span></a>
            <ul class="ul-list">
                <?php if (Check_per_action($table, $iduser, 3)) {; ?>
                    <li><span data-action="publish" class="tick-show action_all_item">Hoạt động</span></li>
                    <li><span data-action="unpublish" class="tick-remove action_all_item">Tạm dừng</span></li>
                <?php }
                if (Check_per_action($table, $iduser, 4)) {
                    ?>
                    <li><span data-action="delete" class="tick-delete action_all_item">Xoá</span></li>
                <?php } ?>
            </ul>
        </li>
        <li class="option-item">
            <div class="form-group box-date-filter">
                <div class="input-group date">
                    <input type="text" data-key="time_1"  placeholder="Từ ngày" value="<?php if($time1) echo $time1;?>" id="datetimepicker" class="filter_class_2 form-control input-sm " name="time_1">
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </div>
        </li>
        <li class="option-item">
            <div class="input-group box-date-filter">
                <input type="text" data-key="time_1" placeholder="Đến ngày" value="<?php if($time2) echo $time2;?>" id="datetimepicker1" class="filter_class_2 form-control input-sm " name="time_2">
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                </span>
            </div>
        </li>
    </ul>
</div>
<?php if (!empty($object_item)) { ?>
    <div class="list-item">
        <table class="table table-contact table-list table-hover">
            <thead>
            <tr>
                <th  style="line-height:35px;" class="item-checkbox"><input type="checkbox" name="checkbox-all" class="check-all"><label><span></span></label></th>
                <th style="width:90px;line-height:35px;">Chức năng</th>
                <th style="line-height:35px;width: 200px">Tên đăng nhập</th>
                <th style="line-height:35px;width:200px">Họ tên</th>
                <th style="line-height:35px;" class="text-center">Loại</th>
                <th style="line-height:35px;"class="text-center">Số lượng bài</th>
                <th style="line-height:35px;"class="text-center">Đã duyệt</th>
            </tr>
            </thead>
            <tbody>
            <?php $order_id=0; foreach ($object_item as $obj) { ?>
                <tr>
                    <td class="item-checkbox">
                        <input type="checkbox" class="case" name="checkbox-id[]" value="<?php echo $obj->id; ?>"><label><span></span></label>
                    </td>
                    <td style="width: 20px">
                        <div class="box-action-list">
                            <span data-id="<?php echo $obj->id;?>" class="item-status <?php if ($obj->show == 1) {
                                echo 'item-status';
                            } else {
                                echo 'item-status-deactive';
                            } ?>"></span>
                            <div id="box_act_<?php echo $obj->id;?>" class="box-list-action">
                                <?php if (Check_per_action($table, $iduser, 3)) {
                                    ; ?>
                                    <?php if ($obj->show == 1) { ?>
                                        <span title="Gỡ bài" data-id="<?php echo $obj->id; ?>"
                                              class="publish-item publish-on item-action-list">Tạm dừng</span>
                                    <?php } else { ?>
                                        <span title="Xuất bản" data-id="<?php echo $obj->id; ?>"
                                              class="publish-item publish-off item-action-list">Hoạt động</span>
                                    <?php } ?>
                                <?php } ?>
                                <?php if (Check_per_action($table, $iduser, 4)) {
                                    ; ?>
                                    <span data-id="<?php echo $obj->id; ?>" class="delete-item item-action-list"><i class="glyphicon glyphicon-remove-sign"></i>Xóa</span>
                                <?php } ?>
                            </div>
                        </div>
                    </td>
                    <td>
                        <?php echo $obj->username;?>
                    </td>
                    <td class="box-title-edit">
                        <a id="title_<?php echo $obj->id;?>" href="<?php if (Check_per_action($table, $iduser, 2)) {
                            ; ?><?php echo base_url(); ?>manager/edit?table=<?php echo $this->input->get('table'); ?>&id=<?php echo $obj->id.$page; ?><?php } else {
                            echo 'javascript:void(0);';
                        } ?>" title="<?php echo $obj->fullname;?>" class="list-name box-name"><?php echo $obj->fullname;?>
                        </a>
                    </td>
                    <td style="line-height:30px;">
                        <?php
                        if ($obj->idgroup == 1) {
                            echo 'Administrator';
                        } else if ($obj->idgroup == 2) {
                            echo 'Admin';
                        } else {
                            echo 'Mod';
                        }
                        ?>
                    </td>
                    <td  style="line-height:30px;" class="text-center">
                        <?php echo $this->Admin_model->get_number2('article',array('iduser'=>$obj->id)); ?>
                    </td>
                    <td  style="line-height:30px;" class="text-center"><?php echo $this->Admin_model->get_number2('article',array('iduser'=>$obj->id,'show'=>1)); ?> </td>
                </tr>
                <!-- end row item-->
                <?php $order_id=$order_id+2; } ?>
            </tbody>
        </table>
        <div class="admin-pagination">
            <div class="navbar-left">
                <label>Trang</label><?php echo $this->pagination->create_links(); ?>
            </div>
            <!-- pagination-->
            <div class="navbar-right">
                <span style="display: inline-block">Hiển thị hàng </span>

                <div class="select-box" style="display: inline-block">
                    <label>
                        <select class="action_selecte" name="perpage">
                            <?php
                            for ($i = 50; $i < 200; $i) {
                                ?>
                                <option <?php if (isset($_GET['perpage'])) {
                                    if ($_GET['perpage'] == $i) {
                                        echo 'selected';
                                    }
                                } ?> value="<?php echo $i; ?>"><?php echo $i; ?></option>
                                <?php
                                if ($i < 100) {
                                    $i = $i + 10;
                                } else {
                                    $i = $i + 50;
                                }
                            } ?>
                        </select>
                    </label>
                </div>
                <span style="display: inline-block"><?php if (!empty($notice_page)) {
                        echo $notice_page;
                    } ?></span>
            </div>
        </div>
    </div>
<?php }else{?>
    <div class="list-item">
        <table class="table table-contact table-list table-hover">
            <thead>
            <tr>
                <th  style="line-height:35px;" class="item-checkbox"><input type="checkbox" name="checkbox-all"
                                                                            class="check-all"><label><span></span></label></th>
                <th style="width:90px;line-height:35px;">Chức năng</th>
                <th style="width:90px;line-height:35px;">Sắp xếp</th>
                <th style="line-height:35px;">Tiêu đề</th>
                <th style="line-height:35px;">Danh mục</th>
                <th style="line-height:35px;" class="text-center">Thời gian tạo</th>
                <th style="line-height:35px;"class="text-center">Lượt xem</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td colspan="6">
                    Không tìm thấy bài viết nào
                </td>
            </tr>
            </tbody>
        </table>
        <div class="admin-pagination">
            <div class="navbar-left">

            </div>
            <!-- pagination-->
            <div class="navbar-right">

            </div>
        </div>
    </div>
<?php }?>
<script>
    $(document).ready(function(){
        $('#datetimepicker').datepicker({
            language:'vi',
            clearBtn:true
        });
        $('#datetimepicker1').datepicker({
            language:'vi',
            clearBtn:true
        });

        $('#datetimepicker').datepicker().on('changeDate', function (ev) {
            var date=$(this).val();
            if(date==''){
                removeParameterFromUrl('date-start');
            }else{
                insertParam('date-start',date);
            }
        });
        $('#datetimepicker1').datepicker().on('changeDate', function (ev) {
            var date=$(this).val();
            if(date==''){
                removeParameterFromUrl('date-end');
            }else{
                insertParam('date-end',date);
            }
        });

    })
</script>