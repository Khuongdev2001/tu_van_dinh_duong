<?php
$time1=$this->input->get('date-start');
$time2=$this->input->get('date-end');
?>
<div class="menu-filter">
    <ul>
        <li>
            <a href="<?php echo base_url(); ?>manager/list?table=<?php echo $table; ?>" <?php if (!isset($_GET['status'])) {
                echo 'class="active"';
            } ?> >Tất cả</a>
        </li>
        <li>
            <a href="<?php echo base_url(); ?>manager/list?table=<?php echo $table; ?>&status=0" <?php if (!empty($_GET['status'])) {
                if ($_GET['status'] == 0) {
                    echo 'class="active"';
                }
            } ?> >Chờ xử lý</a>
        </li>
        <li>
            <a href="<?php echo base_url(); ?>manager/list?table=<?php echo $table; ?>&status=1" <?php if (!empty($_GET['status'])) {
                if ($_GET['status'] == 1) {
                    echo 'class="active"';
                }
            } ?> >Chờ thanh toán</a>
        </li>
        <li>
            <a href="<?php echo base_url(); ?>manager/list?table=<?php echo $table; ?>&status=2" <?php if (isset($_GET['status'])) {
                if ($_GET['status'] == 2) {
                    echo 'class="active"';
                }
            } ?> >Đang giao hàng</a></li>
        <li>
            <a href="<?php echo base_url(); ?>manager/list?table=<?php echo $table; ?>&status=3" <?php if (isset($_GET['status'])) {
                if ($_GET['status'] == 3) {
                    echo 'class="active"';
                }
            } ?> >Đã hoàn thành</a></li>
    </ul>
</div>
<div class="menu-option">
    <ul>
        <li class="option-item item-list-status action-all-buttom">
            <a class="option-status"><span>Thay đổi trạng thái</span></a>
            <ul class="ul-list">
                <?php
                if (Check_per_action($table, $iduser, 4)) {
                    ?>
                    <li><span data-action="delete" class="tick-delete action_all_item">Xoá</span></li>
                <?php } ?>
            </ul>
        </li>
        <li class="option-item">
            <div class="admin-search">
                <input class="search-keyword" type="text" name="keyword" placeholder="Tìm theo tên khách hàng"
                       value="<?php echo $keyword; ?>"/>
                <input class="search-submit" value="" type="button"/>
            </div>
        </li>
        <li class="option-item">
            <div class="select-box">
                <label>
                    <select style="min-width:150px" class="action_order" data-table="<?php echo $table; ?>">
                        <option value="">Sắp sếp</option>
                        <option value="desc"
                                title="id" <?php if ($this->session->userdata($table . '_order') != '' && in_array('desc', $this->session->userdata($table . '_order')) == true && in_array('id', $this->session->userdata($table . '_order')) == true) {
                            echo 'selected';
                        } ?>>
                            Mới nhất
                        </option>
                        <option value="asc"
                                title="id" <?php if ($this->session->userdata($table . '_order') != '' && in_array('asc', $this->session->userdata($table . '_order')) == true && in_array('id', $this->session->userdata($table . '_order')) == true) {
                            echo 'selected';
                        } ?>>Cũ nhất
                        </option>
                    </select>
                </label>
            </div>
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
        <table class="table table-contact table-list">
            <thead>
            <tr>
                <th class="item-checkbox"><input type="checkbox" name="checkbox-all"
                                                 class="check-all"><label><span></span></label></th>
                <th class="text-center">STT</th>
                <th></th>
                <th>Tên khách hàng</th>
                <th class="text-center">Điện thoại</th>
                <th class="text-center">Email</th>
                <th class="text-center">Ngày đặt</th>
                <th class="text-center">Hình thức thanh toán</th>
                <th class="text-center">Tình trạng</th>
            </tr>
            </thead>
            <tbody>
            <?php $i=1; foreach ($object_item as $obj) { ?>
                <tr>
                    <td class="item-checkbox">
                        <input type="checkbox" class="case" name="checkbox-id[]" value="<?php echo $obj->id; ?>"><label><span></span></label>
                    </td>
                    <td class="text-center"><?php echo $i; ?></td>
                    <td style="min-width: 80px">
                        <?php if (Check_per_action($table, $iduser, 2)) {
                            ; ?>
                            <a href="<?php echo base_url(); ?>manager/edit?table=<?php echo $this->input->get('table'); ?>&id=<?php echo $obj->id; ?>"
                            ><span title="Xem chi tiết"  class="quick-edit edit-ajax2 glyphicon glyphicon-edit"></span></a>
                        <?php } ?>
                    </td>
                    <td>
                        <a href="<?php if (Check_per_action($table, $iduser, 2)) {
                            ; ?><?php echo base_url(); ?>manager/edit?table=<?php echo $this->input->get('table'); ?>&id=<?php echo $obj->id; ?><?php } else {
                            echo 'javascript:void(0);';
                        } ?>"
                           class="list-name"><?php echo $obj->name; ?></a>
                    </td>
                    <td class="text-center"><?php echo $obj->phone; ?></td>
                    <td class="text-center"><?php echo $obj->email; ?></td>
                    <td class="text-center"><?php echo date('d-m-Y', strtotime($obj->date_create)); ?></td>
                    <td class="text-center">
                        <?php if (Check_per_action($table, $iduser, 2)) {
                            ; ?>
                            <?php if ($obj->type_money == 1) { ?>
                                <a class="folder-open"
                                   href="<?php echo base_url(); ?>manager/edit?table=<?php echo $this->input->get('table'); ?>&id=<?php echo $obj->id; ?>"
                                   data-toggle="tooltip" data-placement="right" title="Đã thanh toán">
                                    Chuyển khoản
                                </a>
                            <?php } else { ?>
                                <a class="folder-close"
                                   href="<?php echo base_url(); ?>manager/edit?table=<?php echo $this->input->get('table'); ?>&id=<?php echo $obj->id; ?>"
                                   data-toggle="tooltip" data-placement="right" title="Chưa thanh toán">
                                    Thanh toán khi nhận hàng
                                </a>
                            <?php } ?>
                        <?php } ?>
                    </td>
                    <td class="text-center">
                        <?php if (Check_per_action($table, $iduser, 2)) {
                            ; ?>
                            <?php if ($obj->status == 0) { ?>
                                <a class="folder-open"
                                   href="<?php echo base_url(); ?>manager/edit?table=<?php echo $this->input->get('table'); ?>&id=<?php echo $obj->id; ?>"
                                   data-toggle="tooltip" data-placement="right" title="Chờ xử lý">
                                    <i style="color:orange" class="glyphicon glyphicon-hourglass"></i>
                                </a>
                            <?php } elseif($obj->status == 1) { ?>
                                <a class="folder-close"
                                   href="<?php echo base_url(); ?>manager/edit?table=<?php echo $this->input->get('table'); ?>&id=<?php echo $obj->id; ?>"
                                   data-toggle="tooltip" data-placement="right" title="Chờ thanh toán">
                                    <i class="glyphicon glyphicon-credit-card"></i>
                                </a>
                            <?php }elseif($obj->status == 2){ ?>
                                <a class="folder-close"
                                   href="<?php echo base_url(); ?>manager/edit?table=<?php echo $this->input->get('table'); ?>&id=<?php echo $obj->id; ?>"
                                   data-toggle="tooltip" data-placement="right" title="Đang giao hàng">
                                    <i class="glyphicon glyphicon-send"></i>
                                </a>
                            <?php }elseif($obj->status == 3){ ?>
                                <a class="folder-close"
                                   href="<?php echo base_url(); ?>manager/edit?table=<?php echo $this->input->get('table'); ?>&id=<?php echo $obj->id; ?>"
                                   data-toggle="tooltip" data-placement="right" title="Đã hoàn thành">
                                    <i style="color:green" class="glyphicon glyphicon-ok"></i>
                                </a>
                            <?php }?>
                        <?php } ?>
                    </td>
                </tr>
                <!-- end row item-->
                <?php $i++; } ?>
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