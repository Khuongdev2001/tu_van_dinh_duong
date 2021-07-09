<?php
$title = 'title' . $rear;
$excerpt = 'excerpt' . $rear;
$intro = 'introtext' . $rear;
$fulltext = 'fulltext' . $rear;
?>
<?php if (!empty($cate)) { ?>
    <div class="banner-category">
        <img src="<?php echo $cate->banner; ?>"/>
    </div>
    <div class="thanhke ">
        <div class="container">
            <h1 class="categories-name text-center"><b><?php echo $cate->$title; ?></b></h1>
        </div>
    </div>
    <div class="content">
        <div class="container container-white">
            <div class="module-product">
                <p class="bruc-menu" style="margin-left: 15px;">
                    <a href="<?php echo base_url(); ?>"><?php if ($rear == '_en') {
                            echo 'Home';
                        } else {
                            echo 'Trang Chủ';
                        } ?></a>
                    <?php if (!empty($arr_cate)) {
                        foreach ($arr_cate as $cat) {
                            echo '<a href="' . base_url() . link_cate()[$cat->id] . '" title="' . show_meta($cat) . '"> >> ' . $cat->$title . ' </a>';
                        }
                    } ?>
                </p>
                <div class="row">
                    <div class="col-md-9">
                        <?php if (!empty($cate->$excerpt) ){ ?>
                            <div class="des-category">
                                <?php echo $cate->$excerpt; ?>
                            </div>
                        <?php } ?>
                        <?php $proo =''; if (!empty($product_free)) {
                            $proo = $product_free[0];
                            ?>
                            <div class="slide-designs">
                                <?php $gallery = json_decode($product_free[0]->img);
                                if (!empty($gallery)) {
                                    ?>
                                    <div class="html5gallery" data-titleoverlay="false" data-onchange="onSlideChange"
                                         data-onthumbclick="onThumbClick" data-skin="horizontal" data-responsive="true"
                                         data-resizemode="fill" data-html5player="true" data-height="300"
                                         data-thumbheight="150"
                                         data-thumbwidth="245"
                                         data-carouselhighlightbgcolorend="#ffffff" data-bgcolor="#ffffff">
                                        <?php foreach ($gallery as $vd) { ?>
                                            <a href="<?php echo $vd; ?>"><img
                                                    src="<?php echo $vd; ?>"
                                                    alt="<?php echo $product_free[0]->title; ?>"></a>
                                        <?php } ?>
                                    </div>
                                <?php } ?>
                            </div>
                        <?php }
                        unset($product_free[0]); ?>
                        <?php if (!empty($product_free)) { ?>
                            <div class="list-product list-design">
                                <div class="mucluc">
                                    <p><?php if ($rear == '_en') {
                                            echo 'Free Samples';
                                        } else {
                                            echo 'Mẫu miễn phí';
                                        } ?></p>
                                </div>
                                <div class="danhmuc">
                                    <div id="owl-free">
                                        <?php $i = 1;
                                        $count = count($product_free);
                                        foreach ($product_free as $pro) {
                                            if ($i == 1) {
                                                echo ' <div class="item">';
                                            }
                                            ?>
                                            <div class="col-sm-4 design-inner box-products list-products">
                                                <p>
                                                    <a href="<?php echo base_url() . link_pro()[$pro->id]; ?>"
                                                       title="<?php echo show_meta($pro); ?>">
                                                        <img src="<?php echo $pro->image; ?>"
                                                             alt="<?php echo show_meta($pro); ?>">
                                                    </a>
                                                </p>
                                                <h3 class="design-name">
                                                    <a href="<?php echo base_url() . link_pro()[$pro->id]; ?>"
                                                       title="<?php echo show_meta($pro); ?>">
                                                        <?php echo $pro->$title; ?>
                                                    </a>
                                                </h3>
                                                <div class="box-description">
                                                    <div class="buttom_product">
                                                        <h3 class="text1"><a
                                                                href="<?php echo base_url() . link_pro()[$pro->id]; ?>"
                                                                title="<?php echo show_meta($pro); ?>">
                                                                <?php echo $pro->$title; ?>
                                                            </a></h3>
                                                        <?php if ($pro->price_old > 0) { ?>
                                                            <p class="sale-price"><?php  echo number_format($pro->price_old, 0, '', '.');?></p>
                                                        <?php } ?>
                                                        <p class="text2"><span><?php if ($pro->price > 0) {
                                                                    echo number_format($pro->price, 0, '', '.');
                                                                } else {
                                                                    echo 'Miễn phí';
                                                                } ?></span></p>
                                                    </div>
                                                    <div class="content-description">
                                                        <?php echo $pro->$intro; ?>
                                                    </div>
                                                    <p class="buy-now">
                                                        <a href="<?php echo base_url() . link_pro()[$pro->id]; ?>"
                                                           title="<?php echo show_meta($pro); ?>">
                                                            <?php if ($rear == '_en') {
                                                                echo 'Detail';
                                                            } else {
                                                                echo 'Chi tiết';
                                                            } ?>
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                            <?php
                                            if ($i % 6 == 0 && $i < $count) {
                                                echo '</div><div class="item">';
                                            }
                                            if ($i == $count) {
                                                echo '</div>';
                                            }
                                            $i++;
                                        } ?>
                                    </div>
                                </div>
                            </div>
                            <script>
                                $(document).ready(function () {
                                    $("#owl-free").owlCarousel({
                                        autoPlay: 10000, //Set AutoPlay to 3 seconds
                                        singleItem: true,
                                        navigation: false,
                                        paginationNumbers: true
                                    });
                                });
                            </script>
                        <?php } ?>
                        <?php if (!empty($product_price)) { ?>
                            <div class="list-product list-design">
                                <div class="mucluc">
                                    <p><?php if ($rear == '_en') {
                                            echo 'Paid Model';
                                        } else {
                                            echo 'Mẫu trả phí';
                                        } ?></p>
                                </div>
                                <div class="danhmuc">
                                    <div id="owl-not-free">
                                        <?php $i = 1;
                                        $count = count($product_price);
                                        foreach ($product_price as $pro) {
                                            if ($i == 1) {
                                                echo ' <div class="item">';
                                            } ?>

                                            <div class="col-sm-4 design-inner box-products list-products">
                                                <p>
                                                    <a href="<?php echo base_url() . link_pro()[$pro->id]; ?>"
                                                       title="<?php echo show_meta($pro); ?>">
                                                        <img src="<?php echo $pro->image; ?>"
                                                             alt="<?php echo show_meta($pro); ?>">
                                                    </a>
                                                </p>
                                                <h3 class="design-name">
                                                    <a href="<?php echo base_url() . link_pro()[$pro->id]; ?>"
                                                       title="<?php echo show_meta($pro); ?>">
                                                        <?php echo $pro->$title; ?>
                                                    </a>
                                                </h3>
                                                <?php if ($pro->price_old > 0) { ?>
                                                    <p class="old-price"><?php echo number_format($pro->price_old, 0, '', '.') ?></p>
                                                    <?php if ($pro->price > 0) { ?>
                                                        <p class="pro-price">
                                                            <?php echo number_format($pro->price, 0, '', '.'); ?>đ
                                                        </p>
                                                    <?php } else { ?>
                                                        <p class="pro-price">
                                                            Liên hệ
                                                        </p>
                                                    <?php } ?>
                                                <?php } else {
                                                    if ($pro->price > 0) { ?>
                                                        <p class="pro-price">
                                                            <?php echo number_format($pro->price, 0, '', '.'); ?>đ
                                                        </p>
                                                    <?php } else { ?>
                                                        <p class="pro-price">
                                                            Liên hệ
                                                        </p>
                                                    <?php }
                                                } ?>
                                                <div class="box-description">
                                                    <div class="buttom_product">
                                                        <h3 class="text1"><a
                                                                href="<?php echo base_url() . link_pro()[$pro->id]; ?>"
                                                                title="<?php echo show_meta($pro); ?>">
                                                                <?php echo $pro->$title; ?>
                                                            </a></h3>
                                                        <?php if ($pro->price_old > 0) { ?>
                                                            <p class="sale-price"><?php  echo number_format($pro->price_old, 0, '', '.');?></p>
                                                        <?php } ?>
                                                        <p class="text2"><span><?php if ($pro->price > 0) {
                                                                    echo number_format($pro->price, 0, '', '.');
                                                                } else {
                                                                    echo 'Miễn phí';
                                                                } ?></span></p>
                                                    </div>
                                                    <div class="content-description">
                                                        <?php echo $pro->$intro; ?>
                                                    </div>
                                                    <p class="buy-now">
                                                        <a href="<?php echo base_url() . link_pro()[$pro->id]; ?>"
                                                           title="<?php echo show_meta($pro); ?>">
                                                            <?php if ($rear == '_en') {
                                                                echo 'Detail';
                                                            } else {
                                                                echo 'Chi tiết';
                                                            } ?>
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>

                                            <?php if ($i % 6 == 0 && $i < $count) {
                                                echo '</div><div class="item">';
                                            }
                                            if ($i == $count) {
                                                echo '</div>';
                                            }
                                            $i++;
                                        } ?>
                                    </div>
                                </div>
                            </div>
                            <script>
                                $(document).ready(function () {
                                    $("#owl-not-free").owlCarousel({
                                        autoPlay: 3000, //Set AutoPlay to 3 seconds
                                        singleItem: true,
                                        navigation: false,
                                        paginationNumbers: true,
                                    });
                                });
                            </script>
                        <?php } ?>
                    </div>
                    <?php echo Modules::run('Right/Module_right/design',$proo); ?>
                </div>
                <div class="row">
                    <?php echo Modules::run('Ads/Module_ads/index'); ?>
                </div>
            </div>
        </div>
    </div>
<?php } ?>