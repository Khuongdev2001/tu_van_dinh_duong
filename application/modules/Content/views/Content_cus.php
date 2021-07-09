<?php if(!empty($customer)&& !empty($cate_com)){ ?>
    <section class="sec-testi">
        <div class="container">
            <div class="title-block text-center">
                <img style="display: inline-block;" src="<?php echo base_url();?>skin/frontend/images/quot-big.png" alt="">
                <h3 class="text-uppercase">Cảm nhận khách hàng</h3></div>
            <div class="content">
                <div class="wrap-slide-testi owl-carousel has-arrow">
                    <?php foreach ($customer as $obj){ ?>
                        <div class="testi-item">
                            <div class="wrap-img"><img class="img-responsive"
                                                       src="<?php echo $obj->image; ?>"
                                                       alt=""></div>
                            <p><?php echo character_limiter($obj->title,90); ?></p>
                            <p class="name-customer"><strong><?php echo $obj->hoten; ?></strong> - <small><?php echo $obj->ceo; ?></small></p>
                            <!--                    <hr class="hidden">-->
                            <!--                    <div class="row hidden">-->
                            <!--                        <div class="col-xs-6 view-video"><a-->
                            <!--                                    href="https://www.youtube.com/watch?v=wDiu3wmnVvc&amp;feature=youtu.be"><span>Xem video</span></a>-->
                            <!--                        </div>-->
                            <!--                        <div class="col-xs-6 text-right"><a-->
                            <!--                                    href="https://www.eriinternational.vn/testimonial/test"><span>Đọc chi tiết</span></a>-->
                            <!--                        </div>-->
                            <!--                    </div>-->
                        </div>
                    <?php } ?>

                </div>
                <p class="text-center"><br><a
                            href="<?php echo base_url($cate_com->alias.'.html'); ?>"
                            class="cta-arrow cta-dark">Xem tất cả</a></p></div>
        </div>
    </section>
    <script>
        $(document).ready(function () {
            $(".wrap-slide-testi").owlCarousel({
                loop: true,
                nav: true,
                dots: false,
                equalize: true,
                margin: 20,
                autoplay: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    640: {
                        items: 2
                    },
                    992: {
                        items: 3
                    },
                    1024: {
                        items: 3
                    }
                }
            });
        })
    </script>
<?php } ?>