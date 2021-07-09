<header>
    <div class="container">
        <div class="header-top">
            <div class="row">
                <div class="col-10 col-sm-3">
                    <a class="logo"
                       href="<?php echo base_url(); ?>"><img src="upload/images/icon/tuvandinhduong.png " alt="Logo"
                                                             style="max-height: 48px;"></a>
                </div>
                <div class="col-7 col-sm-5 d-none d-sm-block">
                    <div class="searchBox">
                        <form action="<?php echo base_url() . 'search' ?>" class="search-wrapper cf" method="get">
                            <input name="key" type="text" placeholder="Tìm kiếm..." required="">
                            <button type="submit"><i class="fas fa-search"></i></button>
                        </form>
                    </div>
                </div>
                <div class="col-2 col-sm-4 "> 
                    <div class="header-acount">
                        <div class="wishlist_header d-none d-md-block">
                            <div class="img_hotline"><i class="fas fa-phone-alt"></i></div>
                            <span class="text_hotline">Gọi đặt hàng:</span> <a class="phone-order"
                                                                               href="#"><?php echo "0931159798"; ?></a>
                        </div>
                        <div class="top-cart-contain f-right">
                            <div class="mini-cart text-xs-center">
                                <div class="heading-cart">
                                    <a class="bg_cart" href="<?php echo base_url(); ?>gio-hang" title="Giỏ hàng">
                                        <span class="absolute count_item count_item_pr"><?php echo $this->cart->total_items(); ?></span>

                                        <i class="fa fa-shopping-bag"></i>
                                        <span class="block-small-cart">
														<span class="text-giohang hidden-xs">Giỏ hàng</span>
														<span class="block-count-pr">(<span
                                                                    class="count_item count_item_pr"><?php echo $this->cart->total_items(); ?></span>) sản phẩm </span>
													</span>
                                    </a>
                                </div>
<!--                                --><?php //if ($this->cart->contents()) { ?>
<!--                                    <div class="top-cart-content">-->
<!--                                        <ul id="cart-sidebar" class="mini-products-list count_li">-->
<!--                                            <ul class="list-item-cart">-->
<!--                                                --><?php //$i = 0;
//                                                foreach ($this->cart->contents() as $item) {
//                                                    $i++;
//                                                    $proCart = $this->Common_model->get_one('product', array('id' => $item['id'])); ?>
<!--                                                    <li class="item productid---><?php //echo $proCart->id; ?><!--">-->
<!--                                                        <div class="border_list"><a class="product-image"-->
<!--                                                                                    href="--><?php //echo base_url() . $proCart->alias; ?><!--"-->
<!--                                                                                    title="--><?php //echo show_meta($proCart) ?><!--"><img-->
<!--                                                                        alt="--><?php //echo show_meta($proCart) ?><!--"-->
<!--                                                                        src="--><?php //echo $proCart->image; ?><!--"-->
<!--                                                                        width="100"></a>-->
<!--                                                            <div class="detail-item">-->
<!--                                                                <div class="product-details"><p class="product-name"><a-->
<!--                                                                                class="text2line"-->
<!--                                                                                href="--><?php //echo base_url() . $proCart->alias; ?><!--"-->
<!--                                                                                title="--><?php //echo show_meta($proCart) ?><!--">--><?php //echo $proCart->title; ?><!--</a>-->
<!--                                                                    </p>-->
<!--                                                                </div>-->
<!--                                                                <div class="product-details-bottom"><span class="price">317.000₫</span><a-->
<!--                                                                            href="javascript:;" data-id="17758159"-->
<!--                                                                            title="Xóa"-->
<!--                                                                            class="remove-item-cart fa fa-times">&nbsp;</a>-->
<!--                                                                    <div class="quantity-select qty_drop_cart"><input-->
<!--                                                                                class="variantID" type="hidden"-->
<!--                                                                                name="variantId" value="17758159">-->
<!--                                                                        <button onclick="var result = document.getElementById('qty17758159'); var qty17758159 = result.value; if( !isNaN( qty17758159 ) &amp;&amp; qty17758159 > 1 ) result.value--;return false;"-->
<!--                                                                                class="btn_reduced reduced items-count btn-minus"-->
<!--                                                                                type="button">–-->
<!--                                                                        </button>-->
<!--                                                                        <input onchange="if(this.value == 0)this.value=1;"-->
<!--                                                                               type="text" maxlength="12" min="1"-->
<!--                                                                               class="input-text number-sidebar qty17758159"-->
<!--                                                                               id="qty17758159" name="Lines" size="4"-->
<!--                                                                               value="12">-->
<!--                                                                        <button onclick="var result = document.getElementById('qty17758159'); var qty17758159 = result.value; if( !isNaN( qty17758159 )) result.value++;return false;"-->
<!--                                                                                class="btn_increase increase items-count btn-plus"-->
<!--                                                                                type="button">+-->
<!--                                                                        </button>-->
<!--                                                                    </div>-->
<!--                                                                </div>-->
<!--                                                            </div>-->
<!--                                                        </div>-->
<!--                                                    </li>-->
<!--                                                --><?php //} ?>
<!--                                            </ul>-->
<!--                                            <div class="pd">-->
<!--                                                <div class="top-subtotal">Tổng tiền thanh toán: <span-->
<!--                                                            class="price">--><?php //echo VndDot($this->cart->total()); ?><!--₫</span>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                            <div class="pd right_ct"><a href="--><?php //echo base_url() ?><!--gio-hang"-->
<!--                                                                        class="btn btn-primary"><span>Giỏ hàng</span></a><a-->
<!--                                                        href="--><?php //echo base_url() ?><!--checkout"-->
<!--                                                        class="btn btn-white"><span>Thanh toán</span></a></div>-->
<!--                                        </ul>-->
<!--                                    </div>-->
<!--                                --><?php //} ?>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 d-block d-sm-none">
                    <div class="searchBox">
                        <form action="<?php echo base_url() . 'search' ?>" class="search-wrapper cf" method="get">
                            <input name="key" type="text" placeholder="Nhập từ khóa tìm kiếm..." required="">
                            <button type="submit"><i class="fas fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a id="mobile-navigation-menu-toggle" href="javascript:void(0)" class="btn btn-dark btn-lg toggle">
        <!-- <div class="menu"></div>
        <div class="menu"></div>
        <div class="menu"></div> -->
    </a>
    <div id="menu-primary" class="menu">
        <div class="container">
            <div class="row row-5">
                <div class="col-md-3 padding-5">
                    <div id="section-verticalmenu" class="block-verticalmenu">
                        <h4 id="section-pagemenu" class="block-title float-vertical-button"><i class="fa fa-list"></i>
                            Danh mục sản phẩm</h4>
                        <?php if (current_url() != base_url()) {
                            if (!empty($cateParentPro)) { ?>
                                <div class="block-content">
                                    <div class="verticalmenu">
                                        <ul class="nav-verticalmenu">
                                            <?php foreach ($cateParentPro as $objChild) { ?>
                                                <li class="vermenu-option-2">
                                                    <a class="link-lv1"
                                                       href="<?php echo base_url() . $objChild->alias; ?>">
                                                        <i class="<?php echo $objChild->img_icon; ?>"></i>
                                                        <span> <?php echo $objChild->title; ?> </span>
                                                        <?php if (!empty($cateChildPro[$objChild->id])) { ?>
                                                            <b class="fa fa-angle-right button-verticalmenu" data-toggle="dropdown"></b>
                                                        <?php } ?>
                                                    </a>
                                                    <?php if (!empty($cateChildPro[$objChild->id])) { ?>
                                                        <div class="dropdown-menu level1 sub-ver sub-vermegamenu-1 width-menu">
                                                            <div class="dropdown-menu-inner">
                                                                <div class="row">
                                                                    <div class="mega-col col-sm-12">
                                                                        <?php $arrayCatePro = array_chunk($cateChildPro[$objChild->id],4);
                                                                        foreach ($arrayCatePro as $objCatePro){
                                                                            ?>
                                                                            <div class="menu-items">
                                                                                <div class="row">
                                                                                    <?php foreach ($objCatePro as $itemCateChild){ ?>
                                                                                        <div class="col-sm-3 padding-small menu-clearfix">
                                                                                            <div class="mega-col-inner ">
                                                                                                <div class="menu-title <?php if(!empty($cateCheck[$objChild->id])){echo 'bolder-style';}?>"><a href="<?php echo base_url().$itemCateChild->alias; ?>"><?php echo $itemCateChild->title; ?></a></div>
                                                                                                <?php if(!empty($cateChildPro2[$itemCateChild->id])){ ?>
                                                                                                    <div class="widget-inner">
                                                                                                        <ul class="nav-links">
                                                                                                            <?php foreach ($cateChildPro2[$itemCateChild->id] as $itemChild2){ ?>
                                                                                                                <li><a href="<?php echo base_url() . $itemChild2->alias; ?>"
                                                                                                                       title="<?php echo show_meta($itemChild2); ?>"><?php echo $itemChild2->title; ?></a></li>
                                                                                                            <?php } ?>
                                                                                                        </ul>
                                                                                                    </div>
                                                                                                <?php } ?>
                                                                                            </div>

                                                                                        </div>
                                                                                    <?php } ?>
                                                                                </div>
                                                                            </div>
                                                                        <?php } ?>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    <?php } ?>

                                                </li>
                                            <?php } ?>
                                        </ul>
                                    </div>
                                </div>
                            <?php }
                        } ?>
                    </div>
                    <script>
                        $('#section-pagemenu').click(function () {
                            $('#section-verticalmenu .block-content').toggle();
                        });
                        $("body").mouseup(function(){
                            $('#section-verticalmenu .block-content').hide();
                        });
                    </script>
                </div>
                <div class="col-md-9 padding-5">
                    <div class="nav">
                        <ul>
                            <li class="item-home-mobile">
                                <a class="note-pa <?php if (current_url() == base_url()) {
                                    echo 'active';
                                } ?>" href="<?php echo base_url(); ?>">Trang chủ</a>
                            </li>
                            <?php if (!empty($categories)) {
                                foreach ($categories as $cat) { ?>
                                    <li class="<?php if (!empty($cate_child[$cat->id])) {
                                        if ($cat->taxonomy == 'cate_product') {
                                            echo 'service-menu sub-m';
                                        } else {
                                            echo 'sub-m';
                                        }
                                    } ?>">
                                        <a class="note-pa <?php if (!empty($cate) && in_array($cat->id, explode(',', $cate->array_cate))) {
                                            echo 'active';
                                        } ?>" href="<?php if (!empty($cat->hyperlink)) {
                                            echo $cat->hyperlink;
                                        } else {
                                            echo base_url() . $cat->alias ;
                                        }
                                        ?>"
                                           title="<?php echo show_meta($cat); ?>">
                                            <?php echo $cat->title; ?>
                                        </a>
                                    </li>
                                <?php }
                            } ?>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="sidebar-brand d-block d-lg-none ">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-6"></div>
                        <div class="col-6 text-right">
                            <img src="<?php echo base_url(); ?>skin/frontend/img/closenav.png">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <?php if (current_url() == base_url()) { ?>
        <div class="menu-home d-none d-lg-block">
            <div class="container">
                <div class="row row-5">
                    <div class="col-lg-3 padding-5">
                        <?php if (!empty($cateParentPro)) { ?>
                            <div class="block-content">
                                <div class="verticalmenu">
                                    <ul class="nav-verticalmenu">
                                        <?php foreach ($cateParentPro as $objChild) { ?>
                                            <li class="vermenu-option-2">
                                                <a class="link-lv1" href="<?php echo base_url() . $objChild->alias; ?>">
                                                    <i class="<?php echo $objChild->img_icon; ?>"></i>
                                                    <span> <?php echo $objChild->title; ?> </span>
                                                    <?php if (!empty($cateChildPro[$objChild->id])) { ?>
                                                    <b class="fa fa-angle-right button-verticalmenu" data-toggle="dropdown"></b>
                                                    <?php } ?>
                                                </a>
                                                <?php if (!empty($cateChildPro[$objChild->id])) { ?>
                                                    <div class="dropdown-menu level1 sub-ver sub-vermegamenu-1 width-menu">
                                                        <div class="dropdown-menu-inner">
                                                            <div class="row">
                                                                <div class="mega-col col-sm-12">
                                                                    <?php $arrayCatePro = array_chunk($cateChildPro[$objChild->id],4);
                                                                    foreach ($arrayCatePro as $objCatePro){
                                                                        ?>
                                                                        <div class="menu-items">
                                                                            <div class="row">
                                                                                <?php foreach ($objCatePro as $itemCateChild){ ?>
                                                                                    <div class="col-sm-3 padding-small menu-clearfix">
                                                                                        <div class="mega-col-inner ">
                                                                                            <div class="menu-title <?php if(!empty($cateCheck[$objChild->id])){echo 'bolder-style';}?>"><a href="<?php echo base_url().$itemCateChild->alias; ?>"><?php echo $itemCateChild->title; ?></a></div>
                                                                                            <?php if(!empty($cateChildPro2[$itemCateChild->id])){ ?>
                                                                                                <div class="widget-inner">
                                                                                                    <ul class="nav-links">
                                                                                                        <?php foreach ($cateChildPro2[$itemCateChild->id] as $itemChild2){ ?>
                                                                                                            <li><a href="<?php echo base_url() . $itemChild2->alias; ?>"
                                                                                                                   title="<?php echo show_meta($itemChild2); ?>"><?php echo $itemChild2->title; ?></a></li>
                                                                                                        <?php } ?>
                                                                                                    </ul>
                                                                                                </div>
                                                                                            <?php } ?>
                                                                                        </div>

                                                                                    </div>
                                                                                <?php } ?>
                                                                            </div>
                                                                        </div>
                                                                    <?php } ?>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                <?php } ?>
                                            </li>
                                        <?php } ?>
                                    </ul>
                                </div>
                            </div>
                        <?php } ?>
                    </div>
                    <div class="col-lg-9 padding-5">
                        <div class="row row-5">
                            <div class="col-lg-8 padding-5">
                                <?php if (!empty($slideTop)) { ?>
                                    <div class="slide">
                                        <div id="owl-one-slide" class="owl-carousel owl-theme">
                                            <?php foreach ($slideTop as $sl) { ?>
                                                <div class="item">
                                                    <div class="section-common-banner section-common-banner-smart">
                                                        <a href="<?php echo $sl->hyperlink; ?>">
                                                            <img src="<?php echo $sl->image; ?>"
                                                                 alt="<?php echo $sl->title; ?>"
                                                                 class="img-responsive d-none d-sm-block">
                                                            <img src="<?php echo $sl->image_thum; ?>"
                                                                 alt="<?php echo $sl->title; ?>"
                                                                 class="img-responsive d-block d-sm-none">
                                                        </a>
                                                    </div>
                                                </div>
                                            <?php } ?>
                                        </div>
                                        <script>
                                            $(document).ready(function () {
                                                $("#owl-one-slide").owlCarousel({
                                                    dots: false,
                                                    nav: false,
                                                    navText: ['', ''],
                                                    autoplay: true,
                                                    autoplayTimeout: 5000,
                                                    loop: true,
                                                    items: true
                                                });
                                            });
                                        </script>
                                    </div>
                                <?php } ?>
                                <?php if (!empty($slideBot)) { ?>
                                    <div class="row row-5" style="margin-top: 10px">
                                        <?php foreach ($slideBot as $objSlideBot) { ?>
                                            <div class="col-6 padding-5">
                                                <a href="<?php echo $objSlideBot->hyperlink; ?>">
                                                    <img src="<?php echo $objSlideBot->image; ?>"
                                                         alt="<?php echo $objSlideBot->title; ?>"
                                                         class="img-responsive d-none d-sm-block">
                                                    <img src="<?php echo $objSlideBot->image_thum; ?>"
                                                         alt="<?php echo $objSlideBot->title; ?>"
                                                         class="img-responsive d-block d-sm-none">
                                                </a>
                                            </div>
                                        <?php } ?>
                                    </div>
                                <?php } ?>
                            </div>

                            <div class="col-4 padding-5">
                                <?php if (!empty($slideRig)) { ?>
                                    <div class="div-ads-right">
                                        <?php foreach ($slideRig as $objSlideRig) { ?>
                                            <a href="<?php echo $objSlideRig->hyperlink; ?>">
                                                <img src="<?php echo $objSlideRig->image; ?>"
                                                     alt="<?php echo $objSlideRig->title; ?>"
                                                     class="img-responsive d-none d-sm-block">
                                                <img src="<?php echo $objSlideRig->image_thum; ?>"
                                                     alt="<?php echo $objSlideRig->title; ?>"
                                                     class="img-responsive d-block d-sm-none">
                                            </a>
                                        <?php } ?>
                                    </div>

                                <?php } ?>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    <?php } ?>
    <div class="dropdown">

        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <div>
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
            </div>

        </div>
    </div>
    <div class="menu-product-mobile d-block d-lg-none">
        <h4 id="section-mobile-banner" class="block-title float-vertical-button"><i class="fa fa-list"></i>
            Danh mục sản phẩm</h4>
        <?php if (!empty($cateParentPro)) { ?>
            <div class="block-content" style="display: none">
                <div class="verticalmenu">
                    <ul class="nav-verticalmenu">
                        <?php foreach ($cateParentPro as $objChild) { ?>

                            <li class="vermenu-option-2  <?php if (!empty($cateChildPro[$objChild->id])) { ?> dropdown     <?php } ?>">
                                <a class="link-lv1" href="<?php echo base_url() . $objChild->alias; ?>">
                                    <i class="<?php echo $objChild->img_icon; ?>"></i>
                                    <span> <?php echo $objChild->title; ?> </span>



                                </a>
                                <?php if (!empty($cateChildPro[$objChild->id])) { ?>
                                <b class="fa fa-angle-right button-verticalmenu dropdown-toggle" data-display="static"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></b>
                                <?php } ?>
                                <?php if (!empty($cateChildPro[$objChild->id])) { ?>
                                    <div class="dropdown-menu level1 sub-ver sub-vermegamenu-1 width-menu" >
                                        <div class="dropdown-menu-inner">
                                            <div class="row">
                                                <div class="mega-col col-sm-12">
                                                    <?php $arrayCatePro = array_chunk($cateChildPro[$objChild->id],4);
                                                    foreach ($arrayCatePro as $objCatePro){
                                                        ?>
                                                        <div class="menu-items dropdown-item">
                                                            <div class="row">
                                                                <?php foreach ($objCatePro as $itemCateChild){ ?>
                                                                    <div class="col-sm-3 padding-small menu-clearfix">
                                                                        <div class="mega-col-inner ">
                                                                            <div class="menu-title <?php if(!empty($cateCheck[$objChild->id])){echo 'bolder-style';}?>"><a href="<?php echo base_url().$itemCateChild->alias; ?>"><?php echo $itemCateChild->title; ?></a></div>
                                                                            <?php if(!empty($cateChildPro2[$itemCateChild->id])){ ?>
                                                                                <div class="widget-inner">
                                                                                    <ul class="nav-links">
                                                                                        <?php foreach ($cateChildPro2[$itemCateChild->id] as $itemChild2){ ?>
                                                                                            <li><a href="<?php echo base_url() . $itemChild2->alias; ?>"
                                                                                                   title="<?php echo show_meta($itemChild2); ?>"><?php echo $itemChild2->title; ?></a></li>
                                                                                        <?php } ?>
                                                                                    </ul>
                                                                                </div>
                                                                            <?php } ?>
                                                                        </div>

                                                                    </div>
                                                                <?php } ?>
                                                            </div>
                                                        </div>
                                                    <?php } ?>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <?php } ?>
                            </li>
                        <?php } ?>
                    </ul>
                </div>
            </div>
        <?php } ?>
        <script>
            $('#section-mobile-banner').click(function () {
                $('.menu-product-mobile .block-content').toggle();
            });
            // $("body").mouseup(function(){
            //     $('.menu-product-mobile .block-content').hide();
            // });
        </script>
    </div>
</header>

<script>
    $(document).ready(function () {
        // $(window).bind('scroll', function () {
        //     if ($(window).scrollTop() > 0) {
        //         $('header').addClass('divfixed');
        //     } else {
        //         $('header').removeClass('divfixed');
        //     }
        // });
        $('#mobile-navigation-menu-toggle').on('click', function () {
            $('#menu-primary').animate({left: '0'});
        })
        $('.service-menu a.note-pa').on('click', function (ev) {
            if (window.matchMedia("(max-width: 1024px)").matches) {
                ev.preventDefault();
                $('.service-sub').toggle();
            }
        })
        $('.sidebar-brand img').on('click', function () {
            $('#menu-primary').animate({left: '-100%'});
        })

        $('.togger-menu-sub').on('click', function () {
            $('#sub-menu').toggle();
        })

    })
</script>
