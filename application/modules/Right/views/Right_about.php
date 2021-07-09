<?php
$title = 'title' . $rear;
$excerpt = 'excerpt' . $rear;
$fulltext = 'fulltext' . $rear;
?>
<div class="col-md-3">
    <div class="support-box">
        <img class="support-online-img" src="<?php echo base_url(); ?>skin/frontend/images/support-online.jpg"
             alt="suppport online">
    </div>
    <div class="menu_left" style="border: 1px solid #898989;">
        <?php if (!empty($cate_home)) { ?>
            <ul class="nav">
                <li class="active"><span class="module-left-title side_list ipm"><b style="color: #FFF;">
                            <?php if($rear=='_en'){echo 'Products category';}else{echo 'Danh Mục Sản
                        Phẩm';}?>
                        </b></span>
                </li>
                <?php foreach ($cate_home as $cat) { ?>
                    <li class="sidebar_li"><a href="<?php echo base_url().link_cate()[$cat->id];?>" title="<?php echo show_meta($cat);?>"><?php echo $cat->$title;?></a></li>
                <?php } ?>
            </ul>
        <?php } ?>
    </div>
</div>