<div class="col-sm-3 padding-5">
    <?php if (!empty($GLOBALS['supp']->support)) {
        $support = json_decode($GLOBALS['supp']->support);
        ?>
        <div class="product-left">
            <p class="left-title">Tư vấn</p>
            <ul class="support-left">
                <li>
                    <?php foreach ($support as $sp) { ?>
                        <div class="item-support">
                            <div class="row row-5">
                                <div class="col-2 padding-5">
                                    <p class="it-img"><img src="<?php echo $sp->image; ?>"
                                                           alt="<?php echo $sp->name; ?>"></p>
                                </div>
                                <div class="col-10 padding-5">
                                    <p class="it-title"><?php echo $sp->title; ?></p>
                                    <p class="it-phone"><?php echo $sp->phone; ?></p>
                                </div>
                            </div>
                        </div>

                    <?php } ?>
                </li>

            </ul>
        </div>
        <?php
    } ?>
    <?php if (!empty($ads_left)) { ?>
        <div class="ads-left">
            <ul>
                <?php foreach ($ads_left as $ad) { ?>
                    <li>
                        <a href="<?php echo $ad->hyperlink; ?>"><img src="<?php echo $ad->image; ?>"
                                                                     alt="<?php echo $ad->title; ?>"></a>
                    </li>
                <?php } ?>
            </ul>
        </div>
    <?php } ?>
    <?php if (!empty($cate_left)) {
        foreach ($cate_left as $cat) { ?>
            <?php if (!empty($art_left[$cat->id])) { ?>
                <div class="article-left">
                    <p class="left-title"><?php echo $cat->title; ?></p>
                    <ul>
                        <?php foreach ($art_left[$cat->id] as $art) { ?>
                            <li>
                                <div class="row row-5">
                                    <div class="col-5 col-sm-5 padding-5">
                                        <a href="<?php echo base_url($art->alias) ?>"
                                           title="<?php echo show_meta($art); ?>">
                                            <img src="<?php echo $art->image; ?>" alt="<?php echo show_meta($art); ?>">
                                        </a>

                                    </div>
                                    <div class="col-7 col-sm-7 padding-5">
                                        <h3>
                                            <a href="<?php echo base_url($art->alias) ?>"
                                               title="<?php echo show_meta($art); ?>">
                                                <?php echo $art->title; ?>
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </li>
                        <?php } ?>
                    </ul>
                </div>
            <?php } ?>
        <?php }
    } ?>

    <?php  if (!empty($cate_video) && !empty($cate_video->video_url)) {

            ?>
            <div class="video-left">
                <p class="left-title">Video</p>
                <div id="video-owl" class="owl-carousel owl-theme">

                    <div class="item-video" data-merge="<?php echo $cate_video->id; ?>">
                        <a class="owl-video" href="<?php echo $cate_video->video_url; ?>"></a>
                    </div>

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
        <?php
    } ?>
<!--    --><?php //if (!empty($product_hot)) { ?>
<!--        <div class="product-left">-->
<!--            <p class="left-title">--><?php //echo rear('product_hot'); ?><!--</p>-->
<!--            <ul>-->
<!--                --><?php //foreach ($product_hot as $pro) { ?>
<!--                    <li>-->
<!--                        <div class="row row-5">-->
<!--                            <div class=" col-sm-4 padding-5">-->
<!--                                <div class="pro-images">-->
<!--                                    <a href="--><?php //echo base_url($pro->alias); ?><!--"-->
<!--                                       title="--><?php //echo show_meta($pro); ?><!--">-->
<!--                                        <img src="--><?php //echo $pro->image; ?><!--" alt="--><?php //echo show_meta($pro); ?><!--">-->
<!--                                    </a>-->
<!--                                    --><?php //if ($pro->price_old > 0 && $pro->price > 0) { ?>
<!--                                        <span class="price-sale">---><?php //echo round((($pro->price_old - $pro->price) / $pro->price_old) * 100); ?>
<!--                                            %</span>-->
<!--                                    --><?php //} ?>
<!--                                </div>-->
<!---->
<!--                            </div>-->
<!--                            <div class="col-sm-8 padding-5">-->
<!--                                <h3>-->
<!--                                    <a href="--><?php //echo base_url($pro->alias); ?><!--"-->
<!--                                       title="--><?php //echo show_meta($pro); ?><!--">-->
<!--                                        --><?php //echo character_limiter($pro->title, 42); ?>
<!--                                    </a>-->
<!--                                </h3>-->
<!--                                <div class="row format-margin">-->
<!--                                    <div class="col-sm-6 format-padding">-->
<!--                                        <p class="price-new">-->
<!--                                            --><?php //if ($pro->price > 0) {
//                                                echo VndDot($pro->price) . ' VNĐ';
//                                            } else {
//                                                echo rear('contact');
//                                            } ?>
<!--                                        </p>-->
<!--                                    </div>-->
<!--                                    --><?php //if ($pro->price_old > 0) { ?>
<!--                                        <div class="col-sm-6 format-padding">-->
<!--                                            <p class="price-old">-->
<!--                                                --><?php //echo VndDot($pro->price_old); ?><!-- VNĐ-->
<!--                                            </p>-->
<!--                                        </div>-->
<!--                                    --><?php //} ?>
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </li>-->
<!--                --><?php //} ?>
<!--            </ul>-->
<!--        </div>-->
<!--    --><?php //} ?>
</div>
