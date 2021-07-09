<?php if (!empty($proStick)) { ?>
    <section class="awe-section-8">
        <div class="section_mblike">
            <div class="container">
                <div class="bg-mblike label-mblike">
                    <div class="heading">
                        <h2 class="title-head">
                            <a href="<?php echo base_url('khuyen-mai'); ?>ban-chay-nhat-tuan">Có thể bạn thích</a>
                        </h2>
                    </div>
                    <div class="border_wrap">
                        <div class="owl_product_comback ">
                            <div class="product_comeback_wrap">
                                <div class="owl_product_item_content maybe-like owl-carousel owl-theme">
                                    <?php foreach ($proStick as $objPro) { ?>
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
                                                <div class="bizweb-product-reviews-badge" data-id="11423018">
                                                    <div class="bizweb-product-reviews-star" data-score="5"
                                                         data-number="5" title="Tuyệt vời"
                                                         style="color: rgb(255, 190, 0);"><?php $star = $objPro->star; $none_star= 5 - $objPro->star; ?>
                                                        <?php for ($i=1;$i<=$star;$i++){ ?>
                                                            <i data-alt="<?php echo $i; ?>" class="star-on-png fa fa-star"></i>&nbsp;
                                                        <?php } ?>
                                                        <?php for ($j= $none_star; $j > $star && $j<=5 ; $j++){ ?>
                                                            <i data-alt="<?php echo $j; ?>" class="star-on-png far fa-star"></i>&nbsp;
                                                        <?php } ?>
                                                        <span>(<?php echo $objPro->views_star ; ?>)</span>
                                                    </div>


                                                </div>
                                                <div class="price-box clearfix">
                                                    <?php if ($objPro->price > 0) { ?>
                                                        <span class="price product-price"><?php echo VndDot($objPro->price); ?>₫</span>
                                                    <?php } ?>
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
                </div>
            </div>
        </div>
    </section>
    <script>
        $(document).ready(function () {
            $(".maybe-like").owlCarousel({
                loop: true,
                nav: true,
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
                        items: 4
                    },
                    1024: {
                        items: 6
                    }
                }
            });
        });
    </script>
<?php } ?>