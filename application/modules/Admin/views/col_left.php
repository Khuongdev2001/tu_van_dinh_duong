<div class="col-xs-2 admin-left no-pad-right" <?php if(current_url()!= base_url().'manager/dashboard'){echo 'style="margin-left:-15%"';}?>>
    <div class="admin-module">
        <div class="module-title module-counter">
            Thống kê truy cập
            <span class="hidden-left <?php if(current_url()!= base_url().'manager/dashboard'){echo 'active-hidden';}?>"></span>
        </div>
        <ul class="arrow-counter">
            <li><label>Truy cập hôm nay :</label> <?php if(!empty($counter_day)){if( $counter_day != 0){echo $counter_day;}else{echo '0';}}?></li>
            <li><label>Truy cập hôm qua :</label> <?php if(!empty($counter_yesterday)){if( $counter_yesterday != 0){echo $counter_yesterday;}else{echo '0';}}?></li>
            <li><label>Tổng lượt truy cập :</label> <?php if(!empty($counter_all)){ if( $counter_all != 0){echo $counter_all;}else{echo '0';}}?></li>
            <li><label>Đang online :</label> <span><?php if(!empty($counter_now)){ if( $counter_now != 0){echo $counter_now;}else{echo '0';}}?></span></li>
        </ul>
    </div>
    <?php if(!empty($count_menu)){?>
        <?php $tb_permission=$this->Admin_model->gettable_permission();?>
    <!-- end counter-->
    <div class="admin-module">
        <div class="module-title module-option">
            Chức năng hay sử dụng
        </div>
        <ul>
            <?php $i=1;foreach($count_menu as $count){?>
                <li>
                    <a href="<?php if($count->title=='home'){echo base_url().'manager/dashboard';}else{
                        echo base_url().'manager/list?table='.$count->title;
                    }?>">
                        <span class="option-number"><?php echo $i;?></span> <?php if($count->title=='home'){echo 'Home';}else{echo $tb_permission[$count->title][0];}?>
                    </a>
                </li>
            <?php $i++; }?>
        </ul>
    </div>
    <?php }?>
    <!-- and option -->
    <div class="admin-module">
        <div class="module-title module-guide">
            Hướng dẫn sử dụng hệ thống
        </div>
        <ul class="arrow-guide">
            <li><a href=""><span class="guide-number">1.</span> Hướng dẫn cách tạo bài </a></li>
            <li><a href=""><span class="guide-number">2.</span> Các quản lý sản phẩm</a></li>
            <li><a href=""><span class="guide-number">3.</span> Hướng dẫn quản lý danh mục</a></li>
        </ul>
    </div>
    <!-- end guide-->
    <?php if(!empty($history)){?>
    <div class="admin-module">
        <div class="module-title module-history">
            Lịch sử hoạt động 7 ngày
        </div>
        <ul class="list_history">
            <?php foreach($history as $ht){?>
                <li><a data-placement="right" data-toggle="tooltip" title="<?php echo $this->Admin_model->get_object('users',array('id'=>$ht->iduser),'username');?> - <?php echo date('h:i:s d/m/Y',strtotime($ht->date_create));?>" href=""><span class="his-number"></span><?php echo $ht->title;?></a></li>
            <?php }?>
        </ul>
    </div>
    <script>
        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();
        });
    </script>
    <?php }?>
</div>
