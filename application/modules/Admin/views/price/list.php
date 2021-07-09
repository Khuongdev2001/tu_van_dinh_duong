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
            } ?> >Đang hoạt động</a>
        </li>
        <li>
            <a href="<?php echo base_url(); ?>manager/list?table=<?php echo $table; ?>&show=0" <?php if (isset($_GET['show'])) {
                if ($_GET['show'] == 0) {
                    echo 'class="active"';
                }
            } ?> >Đã khóa</a></li>
    </ul>
</div>
<div class="menu-option">
    <ul>
        <?php if(Check_per_action($table,$iduser,1)){?>
            <li class="option-item"><a class="option-add"
                                       href="<?php echo base_url(); ?>manager/add?table=<?php echo $table; ?>"><span>Tạo bài viết mới</span></a>
            </li>
        <?php }?>
        <li class="option-item item-list-status action-all-buttom">
            <a class="option-status"><span>Thay đổi trạng thái</span></a>
            <ul class="ul-list">
                <?php if(Check_per_action($table,$iduser,3)){;?>
                    <li><span data-action="unpublish" class="tick-remove action_all_item">Gỡ</span></li>
                <?php }
                if(Check_per_action($table,$iduser,4)){
                    ?>
                    <li><span data-action="delete" class="tick-delete action_all_item">Xoá</span></li>
                <?php }?>
            </ul>
        </li>
        <li class="option-item item-list-status"><a
                class="option-show-col"><span>Hiển thị cột </span></a>
            <ul class="ul-list cookie-name" cookie_name="content_list_price" catid="allsearch_text"
                product_group="" mode="all" id="change_column_of_list">
                <li><span class="tick-active">Chọn</span></li>
                <li><span class="tick-active">Chức năng</span></li>
                <li><span class="tick-active">Tiêu đề</span></li>

            </ul>
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
                <th style="line-height:35px;">Tiêu đề</th>
            </tr>
            </thead>
            <tbody>
            <?php foreach ($object_item as $obj) { ?>
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
                                              class="publish-item publish-off item-action-list">Xuất bản</span>
                                    <?php } ?>
                                <?php } ?>
                                <span title="Tái xuất bản" data-id="<?php echo $obj->id; ?>"
                                      class="publish-item  refesh item-action-list">Tái xuất bản</span>
                                <?php if (Check_per_action($table, $iduser, 4)) {
                                    ; ?>
                                    <span data-id="<?php echo $obj->id; ?>" class="delete-item item-action-list"><i class="glyphicon glyphicon-remove-sign"></i>Xóa</span>
                                <?php } ?>
                            </div>
                        </div>
                    </td>

                    <td class="box-title-edit">
                        <a id="title_<?php echo $obj->id;?>" href="<?php if (Check_per_action($table, $iduser, 2)) {
                            ; ?><?php echo base_url(); ?>manager/edit?table=<?php echo $this->input->get('table'); ?>&id=<?php echo $obj->id.$page; ?><?php } else {
                            echo 'javascript:void(0);';
                        } ?>" title="<?php echo $obj->title;?>" class="list-name box-name"><?php echo character_limiter($obj->title,80); ?>
                        </a>
                        <div id="cell_append_<?php echo $obj->id;?>"></div>
                        <span title="Sửa nhanh tiêu đề" data-id="<?php echo $obj->id;?>" id="quick_edit_<?php echo $obj->id;?>"  class="quick-edit edit-ajax glyphicon glyphicon-edit"></span>
                        <div class="input_title" id="input_<?php echo $obj->id;?>">
                            <input type="text" id="input_edit_<?php echo $obj->id;?>" value="<?php echo $obj->title; ?>" class="title_quick_edit"/>
                            <span data-id="<?php echo $obj->id;?>" class="button_submit button_ajax_quick_edit">OK</span>
                            <span data-id="<?php echo $obj->id;?>" class="button_cancel button_ajax_quick_edit">Hủy</span>
                        </div>
                    </td>
                </tr>
                <!-- end row item-->
                <?php } ?>
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
<?php } else{?>
    <div class="list-item">
        <table class="table table-contact table-list table-hover">
            <thead>
            <tr>
                <th  style="line-height:35px;" class="item-checkbox"><input type="checkbox" name="checkbox-all"
                                                                            class="check-all"><label><span></span></label></th>
                <th style="width:90px;line-height:35px;">Chức năng</th>
                <th style="width:90px;line-height:35px;">Sắp xếp</th>
                <th style="line-height:35px;">Tiêu đề</th>
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
