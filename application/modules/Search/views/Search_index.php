<?php if (!empty($product)) { ?>
    <section class="bread-crumb  breadcrumb-article">
        <div class="container">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="<?php echo base_url(); ?>">Trang chủ</a></li>
                <li class="breadcrumb-item active">
                    <a href="<?php echo base_url() . 'search'; ?>"
                       title="Kết quả tìm kiếm">
                        Kết quả tìm kiếm
                    </a>
                </li>
            </ol>
        </div>
    </section>
    <?php if (!empty($product)) { ?>
        <section class="section-product">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 d-none d-lg-block tab-sidebar">
                        <?php
                        if(!empty($cateSon)){ ?>
                            <div class="aside-item sidebar-category">
                                <div class="aside-title">
                                    <h2 class="title-head margin-top-0"><span>Danh mục sản phẩm</span></h2>
                                </div>
                                <div class="aside-content">
                                    <nav class="nav-category navbar-toggleable-md">
                                        <ul class="nav navbar-pills">
                                            <?php foreach ($cateSon as $objChild) { ?>
                                                <li class="nav-item lv1">
                                                    <a class="nav-link" href="<?php echo base_url() . $objChild->alias; ?>"><?php echo $objChild->title; ?></a>
                                                    <?php if (!empty($cateChildPro[$objChild->id])) { ?>
                                                        <i class="fa fa-angle-down"></i>
                                                        <ul class="dropdown-menu dropdown-menulv2">
                                                            <?php foreach ($cateChildPro[$objChild->id] as $objCatProChild) { ?>
                                                                <li class="dropdown-submenu nav-item lv2">
                                                                    <a class="nav-link" href="<?php echo base_url().$objCatProChild->alias; ?>"
                                                                       title="<?php echo show_meta($objCatProChild); ?>">
                                                                        <span class=""><?php echo $objCatProChild->title; ?></span>
                                                                    </a>
                                                                </li>
                                                            <?php } ?>
                                                        </ul>
                                                    <?php } ?>
                                                </li>
                                            <?php } ?>
                                        </ul>
                                    </nav>
                                </div>

                            </div>
                        <?php }else if(!empty($cateParentPro)) { ?>
                            <div class="aside-item sidebar-category">
                                <div class="aside-title">
                                    <h2 class="title-head margin-top-0"><span>Danh mục sản phẩm</span></h2>
                                </div>
                                <div class="aside-content">
                                    <nav class="nav-category navbar-toggleable-md">
                                        <ul class="nav navbar-pills">
                                            <?php foreach ($cateParentPro as $objChild) { ?>
                                                <li class="nav-item lv1">
                                                    <a class="nav-link" href="<?php echo base_url() . $objChild->alias; ?>"><?php echo $objChild->title; ?></a>
                                                    <?php if (!empty($cateChildPro[$objChild->id])) { ?>
                                                        <i class="fa fa-angle-down"></i>
                                                        <ul class="dropdown-menu dropdown-menulv2">
                                                            <?php foreach ($cateChildPro[$objChild->id] as $objCatProChild) { ?>
                                                                <li class="dropdown-submenu nav-item lv2">
                                                                    <a class="nav-link" href="<?php echo base_url().$objCatProChild->alias; ?>"
                                                                       title="<?php echo show_meta($objCatProChild); ?>">
                                                                        <span class=""><?php echo $objCatProChild->title; ?></span>
                                                                    </a>
                                                                </li>
                                                            <?php } ?>
                                                        </ul>
                                                    <?php } ?>
                                                </li>
                                            <?php } ?>
                                        </ul>
                                    </nav>
                                </div>

                            </div>
                        <?php } ?>
                    </div>
                    <div class="col-lg-9 tab-content collection ">
                        <div class="text-sm-left">
                            <div class="tt">
                                <h1 class="title-head margin-top-0">Tìm kiếm</h1>
                            </div>
                        </div>
                        <div class="row row-10">
                            <?php foreach ($product as $objPro) { ?>
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
                                                     style="color: rgb(255, 190, 0);"><?php $star = $objPro->star; $none_star= 5 - $objPro->star; ?>
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
                            <div class="pager-container">
                                <?php echo $this->pagination->create_links(); ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <?php
    } ?>


    <?php echo Modules::run('Content/Content/get_modal'); ?>
<?php } ?>