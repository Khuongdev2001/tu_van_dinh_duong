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
                                       href="<?php echo base_url(); ?>manager/add?table=<?php echo $table; ?>"><span>Tạo tỉnh thành mới</span></a>
            </li>
        <?php }?>
        <li class="option-item item-list-status action-all-buttom">
            <a class="option-status"><span>Thay đổi trạng thái</span></a>
            <ul class="ul-list">
                <?php if (Check_per_action($table, $iduser, 3)) {
                    ; ?>
                    <li><span data-action="publish" class="tick-show action_all_item">Xuất bản</span></li>
                    <!--                    <li><span data-action="republish" class="tick-reshow action_all_item">Tái xuất bản</span></li>-->
                    <li><span data-action="unpublish" class="tick-remove action_all_item">Tạm dừng</span></li>
                <?php }
                if (Check_per_action($table, $iduser, 4)) {
                    ?>
                    <li><span data-action="delete" class="tick-delete action_all_item">Xoá</span></li>
                <?php } ?>
            </ul>
        </li>
        <li class="option-item item-list-status"><a
                class="option-show-col"><span>Hiển thị cột </span></a>
            <ul class="ul-list cookie-name" cookie_name="content_list_city" catid="allsearch_text"
                product_group="" mode="all" id="change_column_of_list">
                <li><span class="tick-active">Chọn</span></li>
                <li><span class="tick-active">ID</span></li>
                <li><span class="tick-active">Chức năng</span></li>
                <li><span class="tick-active">Tên tỉnh thành</span></li>
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
    </ul>
</div>
<?php if (!empty($object_item)) { ?>
    <div class="list-item">
        <table class="table table-contact table-list">
            <thead>
            <tr>
                <th class="item-checkbox"><input type="checkbox" name="checkbox-all"
                                                 class="check-all"><label><span></span></label></th>
                <th>Chức  năng</th>
                <th>Tên tỉnh thành</th>
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

                    <td>
                        <a href="<?php if(Check_per_action($table,$iduser,2)){;?><?php echo base_url(); ?>manager/edit?table=<?php echo $this->input->get('table'); ?>&id=<?php echo $obj->id; ?><?php }else{echo 'javascript:void(0);'; }?>"
                           class="list-name"><?php echo $obj->title; ?></a>
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
                            for ($i = 10; $i < 200; $i) {
                                ?>
                                <option <?php if (isset($_GET['perpage'])) {
                                    if ($_GET['perpage'] == $i) {
                                        echo 'selected';
                                    }
                                } ?> value="<?php echo $i; ?>"><?php echo $i; ?></option>
                                <?php
                                if ($i < 50) {
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
