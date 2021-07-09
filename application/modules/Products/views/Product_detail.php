<?php if (!empty($product)) { ?>
    <script type="text/javascript" language="javascript"
            src="<?php echo base_url('skin/frontend'); ?>/js/behavior.js"></script>
    <script type="text/javascript" language="javascript"
            src="<?php echo base_url('skin/frontend'); ?>/js/rating.js"></script>
    <link rel="stylesheet" type="text/CSS"
          href="<?php echo base_url('skin/frontend'); ?>/css/rating.css?<?php echo time(); ?>"/>
    <section class="bread-crumb  ">
        <div class="container">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="<?php echo base_url(); ?>">Trang chủ</a></li>
                <?php if (!empty($breadPro)) {
                    foreach ($breadPro as $objCat) {
                        ?>
                        <li class="breadcrumb-item">
                            <a href="<?php echo base_url() . $objCat->alias; ?>"
                               title="<?php echo show_meta($objCat); ?>">
                                <?php echo $objCat->title; ?>
                            </a>
                        </li>
                    <?php }
                } ?>
            </ol>
        </div>
    </section>
    <section class="product-page">
        <div class="container">
            <div class="details-product">
                <div class="row">
                    <div class="col-lg-9 col-md-8 col-12">
                        <div class="row">
                            <div class="product-detail-left product-images col-12 col-sm-6 col-md-5 col-lg-5">

                                <link href="<?php echo base_url(); ?>skin/frontend/css/lightslider.css?v=<?php echo time(); ?>"
                                      rel="stylesheet"/>
                                <script src="<?php echo base_url(); ?>skin/frontend/js/lightslider.js?v=<?php echo time(); ?>"></script>

                                <?php if (!empty($product->img)) {
                                    $gallery = json_decode($product->img);
                                    ?>
                                    <ul id="image-gallery" class="gallery list-unstyled cS-hidden">
                                        <?php foreach ($gallery as $objImg) { ?>
                                            <li data-thumb="<?php echo $objImg; ?>">
                                                <img src="<?php echo $objImg; ?>"/>
                                            </li>
                                        <?php } ?>
                                    </ul>
                                    <script>
                                        $(document).ready(function () {
                                            $('#image-gallery').lightSlider({
                                                gallery: true,
                                                item: 1,
                                                thumbItem: 4,
                                                slideMargin: 1,
                                                speed: 500,
                                                auto: false,
                                                loop: true,
                                                onSliderLoad: function () {
                                                    $('#image-gallery').removeClass('cS-hidden');
                                                }
                                            });
                                        });
                                    </script>
                                    <style>
                                        ul#image-gallery {
                                            list-style: none outside none;
                                            padding-left: 0;
                                            margin: 0;
                                        }

                                        #image-gallery img {
                                            width: 100%;
                                        }

                                        .demo .item {
                                            margin-bottom: 60px;
                                        }

                                        .content-slider li {
                                            background-color: #ed3020;
                                            text-align: center;
                                            color: #FFF;
                                        }

                                        .content-slider h3 {
                                            margin: 0;
                                            padding: 70px 0;
                                        }

                                        .demo {
                                            width: 800px;
                                        }
                                    </style>
                                <?php }else { ?>
                                    <div class="col_large_default large-image">
                                        <img class="img-responsive"
                                             alt="<?php echo $product->title; ?>"
                                             src="<?php echo $product->image; ?>"/>
                                    </div>
                                <?php } ?>
                            </div>
                            <div class="col-12 col-sm-6 col-md-7 col-lg-7 details-pro">
                                <h1 class="title-product"><?php echo $product->title; ?></h1>
                                <div class="bizweb-product-reviews-badge" data-id="<?php echo $product->id; ?>">
                                    <div class="bizweb-product-reviews-star" data-score="5"
                                         data-number="5" title="Tuyệt vời"
                                         style="color: rgb(255, 190, 0);"><?php $star = $product->star; $none_star= 5 - $product->star; ?>
                                        <?php for ($i=1;$i<=$star;$i++){ ?>
                                            <i data-alt="<?php echo $i; ?>" class="star-on-png fa fa-star"></i>
                                        <?php } ?>
                                        <?php for ($j= $none_star; $j > $star && $j<=5 ; $j++){ ?>
                                            <i data-alt="<?php echo $j; ?>" class="star-on-png far fa-star"></i>
                                        <?php } ?>
                                        <span>(<?php echo $product->views_star ; ?>)</span>
                                    </div>
                                </div>
                                <div class="product_description">
                                    <?php if (!empty($product->code)) { ?>
                                        <div class="row row-option">
                                            <div class="col-5"><span class="des-text">Mã sản phẩm</span></div>
                                            <div class="col-7"><span
                                                        class="des-val"><?php echo $product->code; ?></span></div>
                                        </div>
                                    <?php } ?>

                                    <div class="row row-option">
                                        <div class="col-5"><span class="des-text">Thương hiệu</span></div>
                                        <div class="col-7"><a
                                                    href="<?php echo base_url() . $cate->alias; ?>"
                                                    class="des-trade"><?php echo $cate->title; ?></a></div>
                                    </div>


                                    <div class="row row-option">
                                        <div class="col-5"><span class="des-text">Giá sản phẩm</span></div>
                                        <div class="col-7"><span class="des-pro"><?php if ($product->price > 0) {
                                                    echo VndDot($product->price) . '₫';
                                                } else {
                                                    echo 'Liên hệ';
                                                } ?></span></div>
                                    </div>
                                    <?php if ($product->price_old > 0) { ?>
                                        <div class="row row-option">
                                            <div class="col-5"><span class="des-text">Giá thị trường</span></div>
                                            <div class="col-7"><span
                                                        class="des-pro-old"><?php echo VndDot($product->price_old); ?>₫</span>
                                            </div>
                                        </div>
                                        <div class="row row-option">
                                            <div class="col-5"><span class="des-text">Tiết kiệm</span></div>
                                            <div class="col-7">
                                                <span class="des-ti-le">
                                                    <?php echo round((($product->price_old - $product->price) / $product->price_old) * 100); ?>%
                                                </span>
                                                <span>(<?php echo VndDot($product->price_old - $product->price); ?>₫)</span>
                                            </div>
                                        </div>
                                    <?php } ?>
                                    <?php if (!empty($product->madein)) { ?>
                                        <div class="row row-option">
                                            <div class="col-5"><span class="des-text">Xuất xứ</span></div>
                                            <div class="col-7"><span
                                                        class=""><?php echo $product->madein; ?></span></div>
                                        </div>
                                    <?php } ?>
                                    <?php if (!empty($product->spec)) { ?>
                                        <div class="row row-option">
                                            <div class="col-5"><span class="des-text">Quy cách</span></div>
                                            <div class="col-7"><span
                                                        class=""><?php echo $product->spec; ?></span></div>
                                        </div>
                                    <?php } ?>
                                    <div class="row row-option">
                                        <div class="col-5"><span class="des-text">Tình trạng</span></div>
                                        <div class="col-7"><span
                                                    class=""><?php if ($product->status == 1) {
                                                    echo 'Còn hàng';
                                                } else {
                                                    echo 'Hết hàng';
                                                } ?></span></div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-product col-sm-12">
                                        <form enctype="multipart/form-data"
                                              id="product-actions-<?php echo $product->id; ?>"
                                              class="form-inline margin-bottom-0">
                                            <!--                                        <script>$(window).load(function () {-->
                                            <!--                                                $('.selector-wrapper:eq(0)').hide();-->
                                            <!--                                            });</script>-->
                                            <div class="form-group form_button_details">
                                                <div class="form_hai ">
                                                    <div class="custom input_number_product custom-btn-number form-control">
                                                        <button class="btn_num num_1 button button_qty"
                                                                onClick="var result = document.getElementById('qtym'); var qtypro = result.value; if( !isNaN( qtypro ) &amp;&amp; qtypro &gt; 1 ) result.value--;return false;"
                                                                type="button">-
                                                        </button>
                                                        <input type="text" id="qtym" name="quantity" value="1"
                                                               onkeyup="valid(this,'numbers')"
                                                               onkeypress='validate(event)'
                                                               class="form-control prd_quantity">
                                                        <button class="btn_num num_2 button button_qty"
                                                                onClick="var result = document.getElementById('qtym'); var qtypro = result.value; if( !isNaN( qtypro )) result.value++;return false;"
                                                                type="button">+
                                                        </button>
                                                    </div>
                                                    <div class="button_actions">
                                                        <input class="hidden" type="hidden" name="proId"
                                                               value="<?php echo $product->id; ?>"/>

                                                        <button type="submit"
                                                                data-url="<?php echo base_url('cart/add-pro'); ?>"
                                                                data-id="product-actions-<?php echo $product->id; ?>"
                                                                class="btn btn-lg  btn-cart button_cart_buy_enable add_to_cart btn_buy"
                                                                title="Mua hàng">

                                                            <span class="btn-content">Mua hàng</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <!--                                <div class="social-sharing ">-->
                                <!--                                    <div class="addthis_inline_share_toolbox share_add">-->
                                <!--                                        <script type="text/javascript"-->
                                <!--                                                src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-58589c2252fc2da4"></script>-->
                                <!--                                    </div>-->
                                <!--                                </div>-->

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="product-detail-content">
                                    <div class="info-tab">
                                        <span>Mô tả sản phẩm</span>
                                    </div>
                                    <div class="detail-content-full">

                                        <?php echo $product->content_text; ?>


                                    </div>
                                    <?php if ($product->price_old > 0) {
                                        $col = 'col-sm-3';
                                    } else {
                                        $col = 'col-sm-6';
                                    } ?>

                                    <div class="detail-action">
                                        <div class="row">
                                            <div class="<?php echo $col; ?> col-price">

                                                <p class="txt-bottom">Giá tiền cần thanh toán</p>
                                                <p class="price-bottom"><?php if($product->price>0) { echo VndDot($product->price); ?>₫ <?php } else{echo 'Liên hệ';} ?></p>

                                            </div>
                                            <?php if ($product->price_old > 0) { ?>
                                                <div class="<?php echo $col; ?> col-price">

                                                    <p class="txt-bottom">Giá thị trường</p>
                                                    <p class="price-old-bottom"><?php echo VndDot($product->price_old); ?>
                                                        ₫</p>

                                                </div>
                                                <div class="<?php echo $col; ?> col-price">

                                                    <p class="txt-bottom">Tiết kiệm</p>
                                                    <p class="price-tk-bottom"><?php echo VndDot($product->price_old - $product->price); ?>
                                                        ₫</p>

                                                </div>
                                            <?php } ?>
                                            <div class="<?php echo $col; ?>">
                                                <form id="product-actions-<?php echo $product->id; ?>"
                                                      class="variants form-nut-grid"
                                                      data-id="product-actions-<?php echo $product->id; ?>"
                                                      enctype="multipart/form-data">
                                                    <div>
                                                        <input type="hidden" name="proId"
                                                               value="<?php echo $product->id; ?>">
                                                        <button data-url="<?php echo base_url('cart/add-pro'); ?>"
                                                                data-id="product-actions-<?php echo $product->id; ?>"
                                                                class="btn btn-primary btn-cart-detail button_wh_40 btn-cart left-to add_to_cart"
                                                                title="Đặt mua" type="button">
                                                            <i class="fas fa-shopping-cart"></i> Mua hàng
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <div id="reviews" class="stc-item">
                                                <h3>Đánh giá sản phẩm</h3>
                                                <div class="reviews_bar-box">
                                                    <div class="review-average">
                                                        <h3>Đánh giá trung bình</h3>
                                                        <?php echo Modules::run('Products/Module_product/rating_bar', $product->id); ?>
<!--                                                        --><?php //echo Modules::run('Products/Module_product/rating_bar_bottom', $product->id); ?>
                                                    </div>
                                                    <div class="reviews_bar">
                                                        <?php if (!empty($product->list_star)) {
                                                            $list = explode(',', $product->list_star);
                                                            $count = 0;
                                                            foreach ($list as $lit){
                                                                $count = $count + $lit;
                                                            }
                                                            $i = 5;
                                                            foreach ($list as $items) {
                                                                $objList = explode('-', $items); ?>
                                                                <div class="ywar_review_row">
                                                            <span class="ywar_stars_value"><?php echo $i; ?><span
                                                                        class="fa fa-star-o"></span></span>
                                                                    <span class="ywar_num_reviews"><?php echo $items; ?></span>
                                                                    <span class="ywar_rating_bar">
															<span class="ywar_scala_rating"></span>
															<span class="ywar_perc_rating"
                                                                  style="width: <?php echo round(($items / $count) * 100); ?>%;"></span>
                                                                </div>
                                                                <?php
                                                           $i --; }
                                                        } ?>
                                                    </div>
                                                    <div class="review-open">
                                                        <p>Chia sẻ nhật xét về sản phẩm</p>
                                                        <a href="#" class="pri-btn">Viết nhận xét</a>
                                                    </div>
                                                    <script>
                                                        $(document).ready(function () {
                                                            $('.review-open a').on('click', function (e) {
                                                                e.preventDefault();
                                                                $(this).toggleClass('rf-open');
                                                                if ($(this).hasClass('rf-open')) {
                                                                    $(this).text('Đóng');
                                                                } else {
                                                                    $(this).text('Viết nhận xét');
                                                                }
                                                                $(this).parents('#reviews').find('.reviews-form').slideToggle();
                                                            });
                                                        })
                                                    </script>
                                                </div>
                                                <div class="reviews-form">
                                                    <form id="fom-reviews">
                                                        <h2>Gửi nhận xét của bạn</h2>
<!--                                                        <p class="stars">Đánh giá:-->
<!--                                                            -->
<!--                                                        </p>-->
                                                        <input type="hidden" name="idpost"
                                                               value="<?php echo $product->id; ?>">
                                                        <div class="field-input">
                                                            <input type="text" name="title"
                                                                   placeholder="Nhập tiêu đề nhận xét (không bắt buộc)">
                                                        </div>
                                                        <div class="field-input">
                                                            <textarea name="comment"
                                                                      placeholder="Nhận xét của bạn về sản phẩm này"></textarea>
                                                        </div>
                                                        <div class="field-submit">
                                                            <input type="submit" name="rev_submit" class="pri-btn"
                                                                   value="Gửi nhận xét">
                                                        </div>
                                                    </form>
                                                    <script>
                                                        $(document).ready(function () {
                                                            $.validate({
                                                                form: '#fom-reviews',
                                                                lang: 'vi',
                                                                scrollToTopOnError: false,
                                                                onSuccess: function (data) {
                                                                    $.ajax({
                                                                        type: "post",
                                                                        url: '<?php echo base_url("post-comment");?>',
                                                                        data: $('#fom-reviews').serialize(),
                                                                        dataType: 'json',
                                                                        success: function (data) {
                                                                            $('#fom-reviews').html(data.views);
                                                                        }
                                                                    });
                                                                    return false;
                                                                }
                                                            });
                                                        })
                                                    </script>
                                                </div>
                                                <?php if (!empty($comment)) { ?>
                                                    <div id="comments">
                                                        <ul class="commentlist">
                                                            <?php foreach ($comment as $objCom) { ?>
                                                                <li>
                                                                    <div class="comment-ava">
                                                                        <span><?php echo $objCom->name; ?></span>
                                                                        <p class="fullname-comment"><?php echo $objCom->fullname; ?></p>
                                                                    </div>

                                                                    <div class="comment-container">
                                                                        <h3 class="author-name"><?php echo $objCom->title; ?></h3>
                                                                        <div class="star-rating">
																<span class="rating-show">
																	<span style="width: <?php echo round(($objCom->star / 5) * 100); ?>%;"></span>
																</span>
                                                                            <span class="rating-text"><?php echo $objCom->option_type; ?></span>
                                                                        </div>
                                                                        <div class="star-verified">Đã mua sản phẩm này
                                                                        </div>
                                                                        <div class="comment-desc"><?php echo $objCom->comment; ?></div>
                                                                    </div>
                                                                </li>
                                                            <?php } ?>
                                                        </ul>
                                                        <div class="pager-container">
                                                            <?php echo $this->pagination->create_links(); ?>
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
                    <div class="col-lg-3 col-md-4 col-12">
                        <div class="right_module">
                            <div class="module_service_details">
                                <div class="wrap_module_service">
                                    <div class="item_service">
                                        <div class="wrap_item_">
                                            <div class="content_service">
                                                <p>Giao hàng Toàn Quốc</p>
                                                <span>Thanh toán tại nhà</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item_service">
                                        <div class="wrap_item_">
                                            <div class="content_service">
                                                <p>Sản phẩm chính hãng</p>
                                                <span>Hóa đơn chứng từ đầy đủ</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item_service">
                                        <div class="wrap_item_">
                                            <div class="content_service">
                                                <p>Đổi trả cực kì dễ dàng</p>
                                                <span>Đổi trả trong 7 ngày đầu tiên</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item_service">
                                        <div class="wrap_item_">
                                            <!-- <div class="content_service">
                                                <p>Giá niêm yết chuẩn trên Web, nói không với giá ảo</p>
                                                <span>Giảm 10-40% so với thị trường</span>
                                            </div> -->
                                        </div>
                                    </div>
                                    <div class="item_service">
                                        <div class="wrap_item_">
                                            <!-- <div class="content_service">
                                                <p>Hotline mua hàng:</p>
                                                <span class="phone_red"> <a class="hai01"
                                                                            href="tel:<?php echo str_replace('.', '', $sett->phone); ?>"><?php echo $sett->phone; ?></a></span>
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <?php if (!empty($proStick)) { ?>
                                <div class="module_best_sale_product margin-bottom-30">
                                    <div class="title_module_ heading">
                                        <h2 class="title-head"><a href="<?php echo base_url(); ?>"
                                                                  title="Có thể bạn thích">Có thể bạn thích</a>
                                        </h2>
                                    </div>
                                    <div class="sale_off_today">
                                        <div class="not-dqowl wrp_list_product">
                                            <?php foreach ($proStick as $objPr) { ?>
                                                <div class="item_small">
                                                    <div class="product-mini-item clearfix   on-sale">
                                                        <a href="<?php echo base_url($objPr->alias); ?>"
                                                           title="<?php echo show_meta($objPr); ?>"
                                                           class="product-img">
                                                            <img src="<?php echo $objPr->image; ?>"
                                                                 alt="<?php echo $objPr->title; ?>">
                                                        </a>
                                                        <div class="product-info">
                                                            <h3>
                                                                <a href="<?php echo base_url($objPr->alias); ?>"
                                                                   title="<?php echo show_meta($objPr); ?>"
                                                                   class="product-name text1line"><?php echo $objPr->title; ?></a>
                                                            </h3>
                                                            <div class="reviews-product-grid">
                                                                <div class="bizweb-product-reviews-badge"
                                                                     data-id="<?php echo $objPr->id; ?>">
                                                                    <div class="bizweb-product-reviews-star"
                                                                         data-score="5"
                                                                         data-number="5" title="Tuyệt vời"
                                                                         style="color: rgb(255, 190, 0);"><?php $star = $objPr->star;
                                                                        $none_star = 5 - $objPr->star; ?>
                                                                        <?php for ($i = 1; $i <= $star; $i++) { ?>
                                                                            <i data-alt="<?php echo $i; ?>"
                                                                               class="star-on-png fa fa-star"></i>
                                                                        <?php } ?>
                                                                        <?php for ($j = $none_star; $j > $star && $j <= 5; $j++) { ?>
                                                                            <i data-alt="<?php echo $j; ?>"
                                                                               class="star-on-png far fa-star"></i>
                                                                        <?php } ?>
                                                                        <span>(<?php echo $objPr->views_star; ?>)</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="price-box">

                                                                <?php if ($objPr->price > 0) { ?>
                                                                    <span class="price">
                                                                <span class="price product-price"><?php echo VndDot($objPr->price); ?>₫</span>
                                                                </span>
                                                                <?php }  else{ ?>
                                                                <span class="price">
                                                                <span class="price product-price">Liên hệ</span>
                                                                </span>
                                                                <?php  } ?>
                                                                <!-- Giá Khuyến mại -->
                                                                <?php if ($objPr->price_old > 0) { ?>
                                                                    <span class="old-price"><del
                                                                                class="sale-price"><?php echo VndDot($objPr->price_old); ?>₫</del> </span>
                                                                <?php } ?>

                                                                <!-- Giá gốc -->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            <?php } ?>
                                        </div>
                                    </div>
                                </div>
                            <?php } ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <?php if (!empty($morePro)) { ?>
        <section class="awe-section-8">
            <div class="section_mblike">
                <div class="container">
                    <div class="bg-mblike label-mblike">
                        <div class="heading">
                            <h2 class="title-head">
                                <a href="<?php echo base_url(); ?>ban-chay-nhat-tuan">Sản phẩm cùng loại</a>
                            </h2>
                        </div>
                        <div class="border_wrap">
                            <div class="owl_product_comback ">
                                <div class="product_comeback_wrap">
                                    <div class="owl_product_item_content maybe-like owl-carousel owl-theme">
                                        <?php foreach ($morePro as $objPro) { ?>
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
                                                                 style="color: rgb(255, 190, 0);"><?php $star = $objPro->star;
                                                                $none_star = 5 - $objPro->star; ?>
                                                                <?php for ($i = 1; $i <= $star; $i++) { ?>
                                                                    <i data-alt="<?php echo $i; ?>"
                                                                       class="star-on-png fa fa-star"></i>
                                                                <?php } ?>
                                                                <?php for ($j = $none_star; $j > $star && $j <= 5; $j++) { ?>
                                                                    <i data-alt="<?php echo $j; ?>"
                                                                       class="star-on-png far fa-star"></i>
                                                                <?php } ?>
                                                                <span>(<?php echo $objPro->views_star; ?>)</span>
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
    <?php echo Modules::run('Content/Content/get_modal'); ?>
<?php } ?>