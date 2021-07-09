<?php $cutomer = $this->Admin_model->get_data('customer',array('show'=>1));
    $cus ='';
    if(!empty($cutomer)){
        foreach($cutomer as $cu){
            $cus[$cu->id] = $cu ;
        }
    }
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
            } ?> >Đã duyệt</a>
        </li>
        <li>
            <a href="<?php echo base_url(); ?>manager/list?table=<?php echo $table; ?>&show=0" <?php if (isset($_GET['show'])) {
                if ($_GET['show'] == 0) {
                    echo 'class="active"';
                }
            } ?> >Chưa duyệt</a></li>
    </ul>
</div>
<div class="menu-option">
    <ul>
        <?php if (Check_per_action($table, $iduser, 1)) { ?>
            <li class="option-item"><a class="option-add" href="<?php echo base_url(); ?>manager/add?table=<?php echo $table; ?>"><i class="glyphicon glyphicon-plus"></i><span>Thêm mới</span></a>
            </li>
        <?php } ?>
        <li class="option-item item-list-status action-all-buttom">
            <a class="option-status"><span>Thay đổi trạng thái</span></a>
            <ul class="ul-list">
                <?php if(Check_per_action($table,$iduser,3)){;?>
                    <li><span data-action="publish" class="tick-show action_all_item">Xuất bản</span></li>
                    <li><span data-action="republish" class="tick-reshow action_all_item">Tái xuất bản</span></li>
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
            <ul class="ul-list cookie-name" cookie_name="content_list_comment" catid="allsearch_text"
                product_group="" mode="all" id="change_column_of_list">
                <li><span class="tick-active">Chọn</span></li>
                <li><span class="tick-active">ID</span></li>
                <li><span class="tick-active">Chức năng</span></li>
                <li><span class="tick-active">Tên</span></li>
                <li><span class="tick-active">Điện thoại</span></li>
                <li><span class="tick-active">Nội dung</span></li>
                <li><span class="tick-active">Tình trạng</span></li>
                <li><span class="tick-active">Thời gian</span></li>
            </ul>
        </li>
        <li class="option-item">
            <div class="admin-search">
                <input class="search-keyword" type="text" name="keyword" placeholder="Lọc theo tên"
                       value="<?php echo $keyword; ?>"/>
                <input class="search-submit" value="" type="button"/>
            </div>
        </li>
        <li class="option-item">
            <div class="select-box">
                <label>
                    <select class="action_selecte"  name="language">
                        <option <?php if(isset($_GET['language'])){if($_GET['language']=='vi'){echo 'selected';}}?> value="vi" >Việt Nam</option>
                    </select>
                </label>
            </div>
        </li>
        <li class="option-item">
            <div class="select-box">
                <label>
                    <select class="action_order" data-table="<?php echo $table; ?>">
                        <option value="desc"
                                title="id" <?php if ($this->session->userdata($table . '_order') != '' && in_array('desc', $this->session->userdata($table . '_order')) == true && in_array('id', $this->session->userdata($table . '_order')) == true) {
                            echo 'selected';
                        } ?>>
                            ID giảm dần
                        </option>
                        <option value="asc"
                                title="id" <?php if ($this->session->userdata($table . '_order') != '' && in_array('asc', $this->session->userdata($table . '_order')) == true && in_array('id', $this->session->userdata($table . '_order')) == true) {
                            echo 'selected';
                        } ?>>ID tăng dần
                        </option>
                    </select>
                </label>
            </div>
        </li>
    </ul>
</div>
<?php if (!empty($object_item)) { ?>
    <div class="list-item">
        <table class="table table-contact table-list">
            <thead>
            <tr>
                <th class="item-checkbox"><input type="checkbox" name="checkbox-all"
                                                 class="check-all"><label><span></span></label></th>
                <th class="text-center">ID</th>
                <th></th>
                <th>Tên</th>
                <th>Điện thoại</th>
                <th>Nội dung</th>
                <th>Tình trạng</th>
                <th style="text-align: center">Thời gian</th>
            </tr>
            </thead>
            <tbody>
            <?php foreach ($object_item as $obj) { ?>
                <tr>
                    <td class="item-checkbox">
                        <input type="checkbox" class="case" name="checkbox-id[]" value="<?php echo $obj->id; ?>"><label><span></span></label>
                    </td>
                    <td class="text-center"><?php echo $obj->id; ?></td>
                    <td style="width: 20px">
                        <div class="box-action-list">
                            <span data-id="<?php echo $obj->id;?>" class="item-status <?php if ($obj->show == 1) {
                                echo 'item-status';
                            } else {
                                echo 'item-status-deactive';
                            } ?>"></span>
                            <div id="box_act_<?php echo $obj->id;?>" class="box-list-action">
                                <?php if (Check_per_action($table, $iduser, 3)) { ; ?>
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
                    <td>
                        <?php echo $obj->name;?>
                    </td>
                    <td>
                        <a href="tel:<?php echo $obj->phone; ?>"><?php echo $obj->phone; ?></a>
                    </td>
                    <td style="width: 40%">
                        <?php echo $obj->comment;?>
                    </td>
                    <td class="">
                        <?php if($obj->show==1){?>
                            <a class="folder-open" href="<?php echo base_url(); ?>manager/edit?table=<?php echo $this->input->get('table'); ?>&id=<?php echo $obj->id; ?>" data-toggle="tooltip" data-placement="right" title="Bình luận đã duyệt">
                                <i class="glyphicon glyphicon-folder-open"></i>
                            </a>
                        <?php }else{?>
                            <a class="folder-close" href="<?php echo base_url(); ?>manager/edit?table=<?php echo $this->input->get('table'); ?>&id=<?php echo $obj->id; ?>" data-toggle="tooltip" data-placement="right" title="Bình luận chưa duyệt">
                                <i class="glyphicon glyphicon-envelope"></i>
                            </a>
                        <?php }?>
                    </td>
                    <td class="text-center"><?php echo date('d/m/Y H:i',strtotime($obj->date_create));?></td>
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
<?php } ?>
