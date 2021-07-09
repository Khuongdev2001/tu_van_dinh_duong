<?php
$title = 'title' . $rear;
$excerpt = 'excerpt' . $rear;
$fulltext = 'fulltext' . $rear;
?>
<div class="col-md-3">
    <?php if (!empty($pro_right)) { ?>
        <div class="pro-right">
            <h4 class="name-pro-right"><?php echo $pro_right->$title; ?></h4>
            <div class="pro-right-des">
                <?php echo $pro_right->$excerpt; ?>
            </div>
            <p class="date-pro"><?php if ($rear == '_en') {
                    echo 'Date';
                } else {
                    echo 'Ngày đăng';
                } ?> : <span><?php echo date('d/m/Y', strtotime($pro_right->date_create)); ?></span></p>


            <div class="fb-like" data-href="<?php echo base_url() . link_pro()[$pro_right->id]; ?>"
                 data-layout="button_count"
                 data-action="like" data-size="small" data-show-faces="false" data-share="true"></div>

        </div>
    <?php } ?>
    <div class="support-box">
        <img class="support-online-img" src="<?php echo base_url(); ?>skin/frontend/images/hotline-design.png"
             alt="suppport online">
    </div>
    <div class="menu_left" style="border: 1px solid #898989;">
        <?php if (!empty($cate_home)) { ?>
            <ul class="nav">
                <li class="active"><span class="module-left-title side_list ipm"><b style="color: #FFF;">
                            <?php if ($rear == '_en') {
                                echo 'Products category';
                            } else {
                                echo 'Danh Mục Sản
                        Phẩm';
                            } ?>
                        </b></span>
                </li>
                <?php foreach ($cate_home as $cat) { ?>
                    <li class="sidebar_li"><a href="<?php echo base_url() . link_cate()[$cat->id]; ?>"
                                              title="<?php echo show_meta($cat); ?>"><?php echo $cat->$title; ?></a>
                    </li>
                <?php } ?>
            </ul>
        <?php } ?>
    </div>
    <div class="menu_right border-module">
        <ul class="nav">
            <li class="active">
                <a class="bg-title side_list ipm">
                    <?php if ($rear == '_en') {
                        echo 'Selling products';
                    } else {
                        echo 'Sản phẩm bán chạy';
                    } ?>
                </a>
            </li>
        </ul>
        <div class="run-marquee">
            <ul class="nav">
                <?php if (!empty($pro_stick)) {
                    foreach ($pro_stick as $pro) { ?>
                        <li class="sidebar_li">
                            <a href="<?php echo base_url() . link_pro()[$pro->id]; ?>"
                               title="<?php echo show_meta($pro); ?>">
                                <img class="pro-image" src="<?php echo $pro->image; ?>"
                                     <?php echo show_meta($pro); ?>s/>
                            </a>
                            <?php if ($pro->price > 0) { ?>
                                <p class="price"><?php if ($rear == '_en') {
                                        echo 'Price:';
                                    } else {
                                        echo 'Giá:';
                                    } ?><?php echo number_format($pro->price, 0, '', '.'); ?>₫</p>
                            <?php } else { ?>
                                <p class="price"><?php if ($rear == '_en') {
                                        echo 'Price:';
                                    } else {
                                        echo 'Giá:';
                                    } ?><?php if ($rear == '_en') {
                                        echo 'Contact us';
                                    } else {
                                        'Liên hệ';
                                    } ?></p>
                            <?php } ?>
                            <p class="name_sp"><a href="<?php echo base_url() . link_pro()[$pro->id]; ?>"
                                                  title="<?php echo show_meta($pro); ?>"><?php echo $pro->$title; ?></a>
                            </p>
                        </li>
                    <?php }
                } ?>
            </ul>
        </div>
    </div>
    <?php if (!empty($cate_pro_right)) {
        foreach ($cate_pro_right as $cat) { ?>
            <div class="menu_right border-module">
                <ul class="nav">
                    <li class="active">
                        <a href="<?php echo base_url() . link_cate()[$cat->id]; ?>" class="bg-title side_list ipm"
                           title="<?php echo show_meta($cat); ?>">
                            <?php echo $cat->$title; ?>
                        </a>
                    </li>
                </ul>
                <?php if (!empty($art_child_right[$cat->id])) {?>
                <div class="run-marquee">
                        <ul class="nav">

                            <?php foreach ($art_child_right[$cat->id] as $pro) { ?>
                                <li class="sidebar_li">
                                    <a href="<?php echo base_url() . link_pro()[$pro->id]; ?>"
                                       title="<?php echo show_meta($pro); ?>">
                                        <img class="pro-image" src="<?php echo $pro->image; ?>"
                                             <?php echo show_meta($pro); ?>s/>
                                        <p class="name_sp"><?php echo $pro->$title; ?></p>
                                    </a>
                                    <?php if ($pro->price > 0) { ?>
                                        <p class="price"><?php echo number_format($pro->price, 0, '', '.'); ?>₫</p>
                                    <?php } else { ?>
                                        <p class="price"><?php if ($rear == '_en') {
                                                echo 'Free';
                                            } else {
                                                'Mẫu free';
                                            } ?></p>
                                    <?php } ?>
                                </li>
                            <?php }
                            ?>
                        </ul>
                    </div>
                <?php } ?>
            </div>
        <?php }
    } ?>
</div>