
<?php if (!empty($cate) && !empty($article)) { ?>
    <section class="main-blog">
        <div class="container">
            <div class="row">
                <div class="col-sm-8 left-content">
                    <div class="relatedkeyword">
                        <h2>Có <?php echo $total;?> bài viết liên quan đến từ khóa <span><?php echo $tag->title ;?></span>:</h2>
                        <?php foreach ($article as $art) { ?>
                            <div class="row feature-article" style="">
                                <div class="col-xs-12">
                                    <a href="<?php echo base_url($art->alias.'.html'); ?>"
                                       title="<?php echo show_meta($art); ?>">
                                        <img
                                                src="<?php echo $art->image; ?>"
                                                alt="<?php echo show_meta($art); ?>"
                                                title="<?php echo show_meta($art); ?>"/>
                                    </a>
                                    <div class="cate-group">
                                        <a href="<?php echo base_url($cat_obj[$art->category]->alias.'.html');?>" class="cate-blog"><?php echo $cat_obj[$art->category]->title ; ?></a>
                                    </div>
                                    <a class="description"
                                       href="<?php echo base_url($art->alias.'.html'); ?>"
                                       title="Phẫu thuật nâng mũi liệu có an toàn hơn phương pháp nâng mũi bằng chỉ?">
                                        <h3><?php echo $art->title; ?></h3>
                                        <p class="txt23"><?php echo strip_tags($art->introtext); ?></p>
                                    </a>
                                    <a href="<?php echo base_url($art->alias.'.html'); ?>"
                                       title="<?php echo show_meta($art); ?>"
                                       class="read-more-post">Xem thêm</a>
                                </div>
                            </div>
                            <div class="pager-container">
                                <?php echo $this->pagination->create_links(); ?>
                            </div>
                        <?php } ?>
                    </div>

                </div>
                <div class="col-sm-4 right-content">
                    <?php if (!empty($news_art)) { ?>
                        <p class="txt24">Bài mới</p>
                        <div class="row recent-post">
                            <?php foreach ($news_art as $obj) { ?>
                                <div class="col-12">
                                    <div class="related-item">
                                        <a href="<?php echo base_url($obj->alias.'.html'); ?>"
                                           title="<?php echo show_meta($obj); ?>">
                                            <img src="<?php echo $obj->image; ?>"
                                                 sizes="100vw"
                                                 alt="<?php echo show_meta($obj); ?>"
                                                 title="<?php echo show_meta($obj); ?>"/>
                                        </a>
                                    </div>
                                    <div class="time-post"
                                         style="float: left; font-size: 14px; width: 100%; margin: 5px 0;">
                                        <span> <?php echo date('d-m-Y', strtotime($obj->date_create)); ?> </span></div>
                                    <a class="description"
                                       href="<?php echo base_url($obj->alias.'.html'); ?>"
                                       title="<?php echo show_meta($obj); ?>">
                                        <h3><?php echo $obj->title; ?></h3>
                                    </a>

                                </div>
                            <?php } ?>
                        </div>
                    <?php } ?>
                    <div class="row register-post">
                        <p class="txt25">Nhận bản tin</p>
                        <p>Đăng kí tại đây để nhận liên hệ từ chúng tôi và được tư vấn sắc đẹp miễn phí</p>
                        <form class="subscriber-form">
                            <input class="frm-input" id="bot-input" name="email" type="email"
                                   placeholder="Địa chỉ email"
                                   required>
                            <input type="hidden" name="curl" value="<?php echo current_url();?>">
                            <button type="submit" type="button" class="main-btn-clk button hvr-sweep-to-right">Đăng ký
                            </button>
                        </form>
                    </div>
                    <script>
                        $(document).ready(function () {
                            $('.subscriber-form').submit(function () {
                                $.ajax({
                                    type: "post",
                                    url: '<?php echo base_url();?>register-email',
                                    data: $('.subscriber-form').serialize(),
                                    dataType: 'json',
                                    success: function (data) {
                                        $('.subscriber-form').html(data.view);
                                    }
                                });
                                return false;
                            })
                        })
                    </script>
<!--                    --><?php //if(!empty($art->img)){
//                        $gallery = json_decode($art->img);
//                        ?>
<!--                        <div class="ad" id="sticker">-->
<!--                            --><?php //foreach ($gallery as $im){ ?>
<!--                                <a href=""-->
<!--                                   class="">-->
<!--                                    <img src="--><?php //echo $im; ?><!--" alt=""-->
<!--                                         class="img-responsive">-->
<!--                                </a>-->
<!--                            --><?php //} ?>
<!---->
<!--                        </div>-->
<!--                    --><?php //} ?>
                </div>

            </div>
        </div>
    </section>
    <?php echo Modules::run('Contact/Module_contact/show_form'); ?>
    <?php if (!empty($ads)) { ?>
        <section class="services-list-slider" style="position: relative; background: #fff;">
            <div class="wrap-slider-detail">
                <?php foreach ($ads as $ad){ ?>
                    <div class="item">
                        <h4><?php echo $ad->title; ?></h4>
                        <img src="<?php echo $ad->image; ?>" alt=""
                             class="img-responsive">
                        <p><?php echo strip_tags($ad->introtext); ?></p>
                    </div>
                <?php } ?>
            </div>
        </section>

    <?php } ?>
    <script type="text/javascript">
        jQuery(document).ready(function ($) {
            $(".related-item-block").slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: true,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            });

            $(".wrap-slider-detail").slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                margin: 10,
                autoplaySpeed: 2000,
                arrows: true,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                        dots: true
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            });

        });
    </script>
<?php } ?>

