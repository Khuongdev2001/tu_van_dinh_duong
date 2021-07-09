

<?php if (!empty($cate) && !empty($article)) { ?>
    <section class="bread-crumb  breadcrumb-article">
        <div class="container">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="<?php echo base_url(); ?>">Trang chủ</a></li>
                <?php if (!empty($breadPro)) {
                    foreach ($breadPro as $objCat) { ?>
                        <li class="breadcrumb-item <?php if ($cate->id == $objCat->id) {
                            echo 'active';
                        } ?>">
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
    <section class="style-blog">
        <div class="container">
            <div class="row">
                <div class="col-sm-9 left-content">
                    <h1 class="article-title">
                        <a href="<?php echo base_url() . $cate->alias; ?>"
                           title="<?php echo show_meta($cate); ?>">
                            <?php echo $cate->title; ?>
                        </a>
                    </h1>
                    <div class="list-blogs blog-main">
                        <?php echo $cate->content_text; ?>
                    </div>
                </div>
                <div class="article-sidebar col-lg-3">
                    <?php if (!empty($cateSon)) { ?>
                        <aside class="aside-item sidebar-category collection-category">
                            <div class="aside-title">
                                <h2 class="title-head margin-top-0"><span>Danh mục tin tức</span></h2>
                            </div>
                            <div class="aside-content">
                                <nav class="nav-category navbar-toggleable-md">
                                    <ul class="nav navbar-pills">
                                        <?php foreach ($cateSon as $item) { ?>
                                            <li class="nav-item lv1">
                                                <a class="nav-link" href="<?php echo base_url($item->alias); ?>"><?php echo $item->title; ?></a>
                                            </li>
                                        <?php } ?>
                                    </ul>
                                </nav>
                            </div>
                        </aside>
                    <?php } ?>
                    <?php if (!empty($news_art)) { ?>
                        <div class="blog-aside aside-item">
                            <div>
                                <div class="aside-title-blog">
                                    <h2 class="title-head-blog"><span><a href="<?php echo base_url(); ?>">Bài viết liên quan</a></span>
                                    </h2>
                                </div>
                                <div class="aside-content-blog">
                                    <div class="blog-list blog-image-list">
                                        <?php foreach ($news_art as $art) { ?>
                                            <div class="loop-blog">
                                                <div class="thumb-left">
                                                    <a href="<?php echo base_url() . $art->alias; ?>">
                                                        <picture>
                                                            <source media="(max-width: 375px)"
                                                                    srcset="<?php echo $art->image; ?> ">
                                                            <source media="(min-width: 376px) and (max-width: 767px)"
                                                                    srcset="<?php echo $art->image; ?> ">
                                                            <source media="(min-width: 768px) and (max-width: 1023px)"
                                                                    srcset="<?php echo $art->image; ?> ">
                                                            <source media="(min-width: 1024px) and (max-width: 1199px)"
                                                                    srcset="<?php echo $art->image; ?> ">
                                                            <source media="(min-width: 1200px)"
                                                                    srcset="<?php echo $art->image; ?> ">
                                                            <img src="<?php echo $art->image; ?> "
                                                                 title="<?php echo $art->title; ?> "
                                                                 alt="<?php echo $art->title; ?> ">
                                                        </picture>
                                                        <div class="hover_collection"></div>
                                                    </a>
                                                </div>
                                                <div class="name-right">
                                                    <h3 class="text2line">
                                                        <a href="<?php echo base_url() . $art->alias; ?>"
                                                           title="<?php echo show_meta($art); ?>"><?php echo $art->title; ?></a>

                                                    </h3>
                                                    <div class="date">
                                                        <svg aria-hidden="true" focusable="false" data-prefix="far"
                                                             data-icon="calendar-alt" role="img"
                                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                                             class="svg-inline--fa fa-calendar-alt fa-w-14 fa-3x">
                                                            <path fill="currentColor"
                                                                  d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                                                                  class=""></path>
                                                        </svg>
                                                        <div class="news_home_content_short_time">
                                                            <?php echo rebuild_date('l', strtotime($art->date_create)); ?>
                                                            ,<?php echo date('d/m/Y', strtotime($art->date_create)); ?>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        <?php } ?>


                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php } ?>
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
                                                                 style="color: rgb(255, 190, 0);">
                                                                <?php $star = $objPr->star; $none_star= 5 - $objPr->star; ?>
                                                                <?php for ($i=1;$i<=$star;$i++){ ?>
                                                                    <i data-alt="<?php echo $i; ?>" class="star-on-png fa fa-star"></i>
                                                                <?php } ?>
                                                                <?php for ($j= $none_star; $j > $star && $j<=5 ; $j++){ ?>
                                                                    <i data-alt="<?php echo $j; ?>" class="star-on-png far fa-star"></i>
                                                                <?php } ?>
                                                                <span>(<?php echo $objPr->views_star ; ?>)</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="price-box">

                                                        <?php if ($objPr->price > 0) { ?>
                                                            <span class="price">
                                                                <span class="price product-price"><?php echo VndDot($objPr->price); ?>₫</span>
                                                                </span>
                                                        <?php } ?>
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
    </section>
<?php } ?>
