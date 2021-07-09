<?php if(!empty($productTrade)){ ?>
<!-- Hiển Thị Logo Các Nhãn Hàng -->
<!-- <section class="section-product product-trade">
    <div class="container">
        <div class="list-tax mgt20 wow animated" style="visibility: visible;">
            <?php foreach ($productTrade as $objTrade){ ?>
            <div class="lt-item">
                <a href="<?php echo $objTrade->hyperlink; ?>">
                    <img src="<?php echo $objTrade->image; ?>" data-src="<?php echo $objTrade->image; ?>" data-hover="<?php echo $objTrade->image_hover; ?>">
                    <span><?php echo $objTrade->title; ?></span>
                </a>
            </div>
            <?php } ?>
        </div>
    </div>
    <script>
        $(document).ready(function () {
            $('.lt-item').hover(function () {
                var hover = $(this).find('img').attr('data-hover');
                var hover1 = $(this).find('img').attr('data-src');
                $(this).find('img').attr('src',hover);
            },function () {
                var hover = $(this).find('img').attr('data-hover');
                var hover1 = $(this).find('img').attr('data-src');
                $(this).find('img').attr('src',hover1);
            })
        })
    </script>
</section> -->
<?php } ?>
<?php if (!empty($proFlashSale)) { ?>
    <section class="section-product product-flash-sale">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 tab-sidebar">
                    <div id="clockFlashsale">
                        <div class="flash-sale">
                            <img src="<?php echo base_url('skin/frontend/images/flast-sale.png'); ?>" alt="">
                            <h2><span>Lên đến</span>30%</h2>
                        </div>
                        <p class="time-note">Thời gian khuyến mại còn</p>
                        <div class="row">
                            <div class="col-12">
                                <ul id="clockdiv" class="deal-clock lof-clock-11-detail ">

                                </ul>
                            </div>
                        </div>

                    </div>
                    <script type="text/javascript">
                        jQuery(document).ready(function ($) {
                            $(".lof-clock-11-detail").lofCountDown({
                                TargetDate: "<?php echo $sett->countdown; ?>",
                                DisplayFormat: '<li class="cd-day"><p class="count-box">%%D%%</p><p class="count-day">Ngày</p></li><li><p class="count-box">%%H%%</p><p class="count-day">Giờ</p></li><li><p class="count-box">%%M%%</p><p class="count-day">Phút</p></li><li><p class="count-box">%%S%%</p><p class="count-day">Giây</p></li>',
                            });
                        });
                    </script>
                </div>
                <div class="col-lg-9 tab-content">
                    <div class="owl_product_item_content maybe-like owl-carousel owl-theme">
                        <?php foreach ($proFlashSale as $objPro) { ?>
                            <div class="item">
                                <div class="product-box">
                                    <div class="product-thumbnail">
                                        <a href="<?php echo base_url($objPro->alias); ?>"
                                           title="<?php echo show_meta($objPro); ?>">
                                            <img src="<?php echo $objPro->image; ?>"
                                                 alt="<?php echo $objPro->title; ?>">
                                        </a>

                                        <div class="product-action-grid">
                                            <form id="product-actions-<?php echo $objPro->id; ?>"
                                                  class="variants form-nut-grid"
                                                  data-id="product-actions-<?php echo $objPro->id; ?>"
                                                  enctype="multipart/form-data">
                                                <div>
                                                    <input type="hidden" name="proId"
                                                           value="<?php echo $objPro->id; ?>">
                                                    <button data-url="<?php echo base_url('cart/add-pro'); ?>"
                                                            data-id="product-actions-<?php echo $objPro->id; ?>"
                                                            class="button_wh_40 btn-cart left-to add_to_cart"
                                                            title="Đặt mua" type="button">
                                                        Mua hàng
                                                    </button>
                                                    <a title="Xem nhanh"
                                                       href="<?php echo base_url($objPro->alias); ?>"
                                                       data-handle="<?php echo $objPro->alias; ?>"
                                                       class="button_wh_40 btn_view right-to quick-view">
                                                        <i class="fa fa-eye"></i>
                                                        <span class="style-tooltip">Xem nhanh</span>
                                                    </a>

                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="product-info">
                                        <h3 class="product-name">
                                            <a href="<?php echo base_url($objPro->alias); ?>"
                                               title="<?php echo show_meta($objPro); ?>">
                                                <?php echo $objPro->title; ?>
                                            </a>
                                        </h3>
                                        <div class="bizweb-product-reviews-badge">
                                            <div class="bizweb-product-reviews-star"  title="Tuyệt vời"
                                                 style="color: rgb(255, 190, 0);">
                                                        <?php $star = $objPro->star; $none_star= 5 - $objPro->star; ?>
                                                <?php for ($i=1;$i<=$star;$i++){ ?>
                                                        <i data-alt="<?php echo $i; ?>" class="star-on-png fa fa-star"></i>
                                                <?php } ?>
                                                <?php for ($j= $none_star; $j > $star && $j<=5 ; $j++){ ?>
                                                    <i data-alt="<?php echo $j; ?>" class="star-on-png far fa-star"></i>
                                                <?php } ?>
                                                <span>(<?php echo $objPro->views_star ; ?>)</span>
                                            </div>


                                        </div>
                                        <div class="price-box clearfix">
                                            <?php if ($objPro->price > 0) { ?>
                                                <span class="price product-price"><?php echo VndDot($objPro->price); ?>₫</span>
                                            <?php } else{ ?>
                                                <span class="price product-price">Liên hệ</span>
                                            <?php }?>
                                            <?php if ($objPro->price_old > 0) { ?>
                                                <span class="price product-price-old">  <?php echo VndDot($objPro->price_old); ?>₫</span>
                                            <?php } ?>
                                        </div>
                                        <div class="product-process">
                                            <span class="process-percent" style="width: <?php echo round(($objPro->total_buy/$objPro->total_pro) * 100); ?>;"></span>
                                            <span class="process-number">Đã bán <?php echo $objPro->total_buy; ?></span>
                                        </div>
                                    </div>
                                    <?php if ($objPro->price_old > 0 && $objPro->price > 0) { ?>
                                        <span class="sale-off">-<?php
                                            echo round((($objPro->price_old - $objPro->price) / $objPro->price_old) * 100); ?>% </span>
                                    <?php } ?>
                                    <?php if ($objPro->flashsale == 1) { ?>
                                        <span class="sale-flash shock">
                                                    <img class="img-responsive"
                                                         src="<?php echo base_url(); ?>skin/frontend/images/icon-flash.png?<?php echo time(); ?>"
                                                         alt="icon-shock">
                                                </span>
                                    <?php } ?>
                                    <?php if ($objPro->dealsale == 1) { ?>
                                        <span class="sale-flash shock">
                                                    <img class="img-responsive"
                                                         src="<?php echo base_url(); ?>skin/frontend/images/icon-giasoc.png?<?php echo time(); ?>"
                                                         alt="icon-shock">
                                                </span>
                                    <?php } ?>

                                </div>
                            </div>
                        <?php } ?>
                    </div>
                    <script>
                        $(document).ready(function () {
                            $(".maybe-like").owlCarousel({
                                loop: true,
                                nav: false,
                                navText: '',
                                dots: false,
                                equalize: true,
                                margin: 20,
                                autoplay: true,
                                responsive: {
                                    0: {
                                        items: 1,
                                    },
                                    640: {
                                        items: 3
                                    },
                                    992: {
                                        items: 3
                                    },
                                    1024: {
                                        items: 4
                                    }
                                }
                            });
                        });
                    </script>
                </div>
            </div>
        </div>
    </section>
<?php } ?>
<?php if(!empty($flashAds)){ ?>
    <section class="section-ads-flash">
        <div class="container">
            <div class="flash-ads">
                <div class="row row-10">
                    <?php foreach ($flashAds as $objFlash){ ?>
                        <div class="col-sm-6 padding-10">
                            <a href="<?php echo $objFlash->hyperlink; ?>">
                                <img src="<?php echo $objFlash->image; ?>">
                            </a>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </section>
<?php } ?>
<?php if (!empty($cateProHome)) {
    foreach ($cateProHome as $objCatPro) {
        if (!empty($productCate[$objCatPro->id])) {
            ?>
            <section class="section-product">
                <div class="container">
                    <div class="heading-product" style="border-top:2px solid #<?php echo $objCatPro->color; ?> ;">
                        <div class="row">
                            <div class="col-sm-6">
                                <h2 class="heading-title" style="background: #<?php echo $objCatPro->color; ?>">
                                    <a href="<?php echo base_url($objCatPro->alias); ?>"
                                       title="<?php echo show_meta($objCatPro); ?>">
                                        <?php if (!empty($objCatPro->img_icon)) { ?>
                                            <i class="<?php echo $objCatPro->img_icon; ?>"></i>
                                        <?php } ?>
                                        <span><?php echo $objCatPro->title; ?></span>
                                    </a>
                                </h2>
                            </div>
                            <div class="col-sm-6">
                                <div class="heading-all heading-all<?php echo $objCatPro->id; ?>">
                                    <a href="<?php echo base_url($objCatPro->alias); ?>"
                                       title="<?php echo show_meta($objCatPro); ?>">Xem tất cả</a>
                                </div>
                                <style>
                                    .heading-all<?php echo $objCatPro->id; ?> a{
                                        color: #<?php echo $objCatPro->color; ?>;
                                    }
                                    .heading-all<?php echo $objCatPro->id; ?> a:before {
                                        width: 5px;
                                        content: "";
                                        position: absolute;
                                        top: 0;
                                        right:55px;
                                        border-left: 5px solid transparent;
                                        border-right: 5px solid transparent;
                                        border-top: 6px solid #<?php echo $objCatPro->color; ?>;
                                    }
                                </style>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 d-none d-lg-block tab-sidebar">
                            <?php if (!empty($cateProChild[$objCatPro->id])) { ?>
                                <div class="row row-5 row-cate-child">
                                    <?php foreach ($cateProChild[$objCatPro->id] as $objChildCatPro) {
                                        if($objChildCatPro->show_left==1){ ?>
                                        <div class="col-lg-6 padding-5">
                                            <div class="item-category-small">
                                                <a href="<?php echo base_url($objChildCatPro->alias); ?>"
                                                   title="<?php echo show_meta($objChildCatPro); ?>">
                                                    <img class="img-responsive"
                                                         src="<?php echo $objChildCatPro->image; ?>"
                                                         alt="<?php echo $objChildCatPro->title; ?>">
                                                    <span class="text2line"><?php echo $objChildCatPro->title; ?></span>
                                                </a>
                                            </div>
                                        </div>
                                    <?php } }?>
                                </div>
                            <?php } ?>
                            <?php if (!empty($objCatPro->banner)) { ?>
                                <div class="img-product">
                                    <a href="<?php echo base_url($objCatPro->alias); ?>"
                                       title="<?php echo show_meta($objCatPro); ?>">
                                        <img class="img-responsive" src="<?php echo $objCatPro->banner; ?>"
                                             alt="<?php echo $objCatPro->title; ?>">
                                    </a>
                                </div>
                            <?php } ?>
                            <?php if (!empty($objCatPro->img)) {
                                $objImages = json_decode($objCatPro->img); ?>
                                <?php foreach ($objImages as $objImg)?>
                                <div class="img-product img-cat-pr">
                                        <img class="img-responsive" src="<?php echo $objImg; ?>"
                                             alt="">

                                </div>
                            <?php } ?>
                        </div>
                        <div class="col-lg-9 tab-content">
                            <div class="row row-10">
                                <?php foreach ($productCate[$objCatPro->id] as $objPro) { ?>
                                    <div class="col-6 col-sm-4 col-md-4 col-lg-3 padding-10">
                                        <div class="product-box">
                                            <div class="product-thumbnail">
                                                <a href="<?php echo base_url($objPro->alias); ?>"
                                                   title="<?php echo show_meta($objPro); ?>">
                                                    <img src="<?php echo $objPro->image; ?>"
                                                         alt="<?php echo $objPro->title; ?>">
                                                </a>

                                                <div class="product-action-grid">
                                                    <form id="product-actions-<?php echo $objPro->id; ?>"
                                                          class="variants form-nut-grid"
                                                          data-id="product-actions-<?php echo $objPro->id; ?>"
                                                          enctype="multipart/form-data">
                                                        <div>
                                                            <input type="hidden" name="proId"
                                                                   value="<?php echo $objPro->id; ?>">
                                                            <button data-url="<?php echo base_url('cart/add-pro'); ?>"
                                                                    data-id="product-actions-<?php echo $objPro->id; ?>"
                                                                    class="button_wh_40 btn-cart left-to add_to_cart"
                                                                    title="Đặt mua" type="button">
                                                                Mua hàng
                                                            </button>
                                                            <a title="Xem nhanh"
                                                               href="<?php echo base_url($objPro->alias); ?>"
                                                               data-handle="<?php echo $objPro->alias; ?>"
                                                               class="button_wh_40 btn_view right-to quick-view">
                                                                <i class="fa fa-eye"></i>
                                                                <span class="style-tooltip">Xem nhanh</span>
                                                            </a>

                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div class="product-info">
                                                <h3 class="product-name">
                                                    <a href="<?php echo base_url($objPro->alias); ?>"
                                                       title="<?php echo show_meta($objPro); ?>">
                                                        <?php echo $objPro->title; ?>
                                                    </a>
                                                </h3>
                                                <div class="bizweb-product-reviews-badge" data-id="11423018">
                                                    <div class="bizweb-product-reviews-star" data-score="5"
                                                         data-number="5" title="Tuyệt vời"
                                                         style="color: rgb(255, 190, 0);">
                                                        <?php $star = $objPro->star; $none_star= 5 - $objPro->star; ?>
                                                        <?php for ($i=1;$i<=$star;$i++){ ?>
                                                            <i data-alt="<?php echo $i; ?>" class="star-on-png fa fa-star"></i>
                                                        <?php } ?>
                                                        <?php for ($j= $none_star; $j > $star && $j<=5 ; $j++){ ?>
                                                            <i data-alt="<?php echo $j; ?>" class="star-on-png far fa-star"></i>
                                                        <?php } ?>
                                                        <span>(<?php echo $objPro->views_star ; ?>)</span>
                                                    </div>


                                                </div>
                                                <div class="price-box clearfix">
                                                    <?php if ($objPro->price > 0) { ?>
                                                        <span class="price product-price"><?php echo VndDot($objPro->price); ?>₫</span>
                                                    <?php } else{ ?>
                                                        <span class="price product-price">Liên hệ</span>
                                                    <?php }?>
                                                    <?php if ($objPro->price_old > 0) { ?>
                                                        <span class="price product-price-old">  <?php echo VndDot($objPro->price_old); ?>₫</span>
                                                    <?php } ?>
                                                </div>
                                            </div>
                                            <?php if ($objPro->price_old > 0 && $objPro->price > 0) { ?>
                                                <span class="sale-off">-<?php
                                                    echo round((($objPro->price_old - $objPro->price) / $objPro->price_old) * 100); ?>% </span>
                                            <?php } ?>
                                            <?php if ($objPro->flashsale == 1) { ?>
                                                <span class="sale-flash shock">
                                                    <img class="img-responsive"
                                                         src="<?php echo base_url(); ?>skin/frontend/images/icon-flash.png?<?php echo time(); ?>"
                                                         alt="icon-shock">
                                                </span>
                                            <?php } ?>
                                            <?php if ($objPro->dealsale == 1) { ?>
                                                <span class="sale-flash shock">
                                                    <img class="img-responsive"
                                                         src="<?php echo base_url(); ?>skin/frontend/images/icon-giasoc.png?<?php echo time(); ?>"
                                                         alt="icon-shock">
                                                </span>
                                            <?php } ?>
                                        </div>
                                    </div>
                                <?php } ?>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <?php }
    }
} ?>
<?php echo Modules::run('Content/Content/get_proStick'); ?>
<?php echo Modules::run('Content/Content/get_article'); ?>
<?php echo Modules::run('Content/Content/get_modal'); ?>
