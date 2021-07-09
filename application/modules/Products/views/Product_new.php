<?php if (!empty($cate)) { ?>
    <div class="banner-home">
        <img src="<?php echo $cate->banner; ?>" alt="<?php echo show_meta($cate); ?>">
        <div class="main-breadcrumb">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="<?php echo base_url(); ?>"><i class="fa fa-home"></i> <?php echo rear('home'); ?></a></li>
                    <?php if (!empty($arr_cate)) {
                        foreach ($arr_cate as $cat) {
                            ?>
                            <li class="breadcrumb-item">
                                <a href="<?php echo base_url() . $cat->$GLOBALS['alias']; ?>"
                                   title="<?php echo show_meta($cat); ?>">
                                    <?php echo $cat->$GLOBALS['title']; ?>
                                </a>
                            </li>
                        <?php }
                    } ?>
                </ol>
            </div>
        </div>
    </div>
    <div class="body-content">
        <div class="container">
            <h1 class="main-title"><?php echo $cate->$GLOBALS['title']; ?></h1>
            <?php if (!empty($cate_lv1)) {
                foreach ($cate_lv1 as $lv) { ?>
                    <div class="row-categories">
                        <div class="box-parent">
                            <div class="row">
                                <div class="col-sm-12 ">
                                    <ul>
                                        <li>
                                            <h2>
                                                <a href="<?php echo base_url() . $lv->$GLOBALS['alias']; ?>"
                                                   title="<?php echo show_meta($lv); ?>">
                                                    <?php echo $lv->$GLOBALS['title']; ?> (<?php if(!empty($total_lv[$lv->id])){echo $total_lv[$lv->id];}?>)
                                                </a>

                                            </h2>
                                        </li>
                                        <?php if (!empty($cate_lv2[$lv->id])) { ?>
                                            <?php foreach ($cate_lv2[$lv->id] as $lv2) { ?>
                                                <li>
                                                    <h3>
                                                        <a href="<?php echo base_url() . $lv2->$GLOBALS['alias']; ?>"
                                                           title="<?php echo show_meta($lv2); ?>">
                                                            <?php echo $lv2->$GLOBALS['title']; ?>
                                                        </a>
                                                    </h3>
                                                </li>
                                            <?php } ?>
                                        <?php } ?>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <?php if (!empty($pro_lv[$lv->id])) {
                            $arr = array_chunk($pro_lv[$lv->id],5);
                            foreach ($arr as $prolv){
                            ?>
                            <div class="box-product">
                                <div class="row format-margin">
                                    <?php foreach ($prolv as $pro) { ?>
                                        <div class="col-sm-15 format-padding">
                                            <div class="box-inner">
                                                <div class="box-img">
                                                    <a href="<?php echo base_url() . $pro->$GLOBALS['alias']; ?>"
                                                       title="<?php echo show_meta($pro); ?>">
                                                        <img src="<?php echo $pro->image; ?>"
                                                             alt="<?php echo show_meta($pro); ?>">
                                                    </a>
                                                </div>
                                                <h3>
                                                    <a href="<?php echo base_url() . $pro->$GLOBALS['alias']; ?>"
                                                       title="<?php echo show_meta($pro); ?>">
                                                        <?php echo $pro->$GLOBALS['title']; ?>
                                                    </a>
                                                </h3>
                                                <p class="box-price">
                                                    <?php echo rear('price'); ?>
                                                    <span><?php if ($pro->price > 0) {
                                                            echo VndDot($pro->price) . 'đ';
                                                        }else{echo rear('contact');} ?></span>
                                                </p>
                                            </div>
                                        </div>
                                    <?php } ?>
                                </div>
                            </div>
                        <?php } }?>
                    </div>
                <?php }
            } ?>
        </div>
    </div>
<?php } ?>