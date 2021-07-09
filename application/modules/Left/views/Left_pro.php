<div class="col-sm-3 padding-25 mobile-version">
    <?php if(!empty($cate_child)){ ?>
        <div class="category-menu">
            <p class="left-title"><?php echo rear('menu_pro'); ?></p>
            <ul>
                <?php foreach ($cate_child as $cat){ ?>
                    <li class="<?php if (!empty($cate) && in_array($cat->id, explode(',', $cate->array_cate))) {
                        echo 'active';
                    } ?>">
                        <a href="<?php echo base_url($cat->$GLOBALS['alias']);?>" title="<?php echo show_meta($cat);?>"><?php echo $cat->$GLOBALS['title'];?></a>
                    </li>
                <?php } ?>
            </ul>
        </div>
    <?php } ?>
    <?php if (!empty($cate_left)) {
        foreach ($cate_left as $cat) {?>
            <?php if (!empty($art_left[$cat->id])) {  ?>
                <div class="article-left">
                    <p class="left-title"><?php echo $cat->title ; ?></p>
                    <ul>
                        <?php foreach ($art_left[$cat->id] as $art) { ?>
                            <li>
                                <div class="row row-5">
                                    <div class="col-sm-5 padding-5">

                                        <a href="<?php echo base_url($art->alias) ?>"
                                           title="<?php echo show_meta($art); ?>">
                                            <img src="<?php echo $art->image; ?>" alt="<?php echo show_meta($art); ?>">
                                        </a>

                                    </div>
                                    <div class="col-sm-7 padding-5">
                                        <h3>
                                            <a href="<?php echo base_url($art->alias) ?>"
                                               title="<?php echo show_meta($art); ?>">
                                                <?php echo $art->$GLOBALS['title']; ?>
                                            </a>
                                        </h3>
                                        <p class="views"><?php echo rear('views'); ?><span><?php echo $art->views; ?></span></p>
                                    </div>
                                </div>
                            </li>
                        <?php } ?>
                    </ul>
                </div>
            <?php } ?>
        <?php }
    } ?>
    <?php if (!empty($cate_video)) {
        if (!empty($video_hot)) {
            ?>
            <div class="video-left hidden-sm-down">
                <p class="left-title"><?php echo $cate_video->$GLOBALS['title']; ?></p>
                <div id="video-owl" class="owl-carousel owl-theme">
                    <?php foreach ($video_hot as $video) { ?>
                        <div class="item-video" data-merge="<?php echo $video->id; ?>">
                            <a class="owl-video" href="<?php echo $video->hyperlink; ?>"></a>
                        </div>
                    <?php } ?>
                </div>
                <script>
                    $(document).ready(function () {
                        $('#video-owl').owlCarousel({
                            items: 1,
                            merge: true,
                            loop: true,
                            margin: 0,
                            video: true,
                            lazyLoad: true,
                            center: true,
                            videoHeight: 180,
                            videoWidth: '100%',
                            responsive: {
                                480: {
                                    items: 1
                                },
                                600: {
                                    items: 1
                                }
                            }
                        })
                    })
                </script>
            </div>
        <?php }
    } ?>
    <?php if(!empty($product_hot)){ ?>
        <div class="product-left hidden-sm-down">
            <p class="left-title"><?php echo rear('product_hot'); ?></p>
            <ul>
                <?php foreach ($product_hot as $pro){ ?>
                    <li>
                        <div class="row row-5">
                            <div class=" col-sm-4 padding-5">
                                <div class="pro-images">
                                    <a href="<?php echo base_url($pro->$GLOBALS['alias']); ?>"
                                       title="<?php echo show_meta($pro); ?>">
                                        <img src="<?php echo $pro->image; ?>" alt="<?php echo show_meta($pro); ?>">
                                    </a>
                                    <?php if ($pro->price_old > 0 && $pro->price > 0) { ?>
                                        <span class="price-sale">-<?php echo round((($pro->price_old - $pro->price) / $pro->price_old) * 100); ?>%</span>
                                    <?php } ?>
                                </div>
                            </div>
                            <div class="col-sm-8 padding-5">
                                <h3>
                                    <a href="<?php echo base_url($pro->$GLOBALS['alias']); ?>"
                                       title="<?php echo show_meta($pro); ?>">
                                        <?php echo character_limiter($pro->$GLOBALS['title'],42); ?>
                                    </a>
                                </h3>
                                <div class="row format-margin">
                                    <div class="col-sm-6 format-padding">
                                        <p class="price-new">
                                            <?php if($pro->price>0){echo VndDot($pro->price).' VNĐ'; }else{echo rear('contact');}  ?>
                                        </p>
                                    </div>
                                    <?php if ($pro->price_old > 0) { ?>
                                        <div class="col-sm-6 format-padding">
                                            <p class="price-old">
                                                <?php echo VndDot($pro->price_old); ?> VNĐ
                                            </p>
                                        </div>
                                    <?php } ?>
                                </div>
                            </div>
                        </div>
                    </li>
                <?php } ?>
            </ul>
        </div>
    <?php } ?>
</div>