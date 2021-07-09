<?php if (!empty($cate_blog) && !empty($blog)) { ?>
    <section class="awe-section-9">

        <div class="section_bloggg">
            <div class="aside-title heading">
                <h2 class="title-head">
                    <span>
                        <a href="<?php echo base_url().$cate_blog->alias; ?>">Tin mới nhất</a>
                    </span>
                </h2>
            </div>
            <div class="container">
                <div class="content-blog-index">
                    <div class="wrap-blog-slider has-arrow owl-carousel owl-theme">
                        <?php foreach ($blog as $art) { ?>
                            <div class="item">
                                <div class="blog_items">
                                    <div class="myblog"
                                         onclick="window.location.href='<?php echo base_url().$art->alias; ?>';">
                                        <div class="image-blog-left">

                                            <a href="<?php echo base_url().$art->alias; ?>">
                                                <picture>
                                                    <source media="(max-width: 375px)"
                                                            srcset="<?php echo $art->image;?> ">
                                                    <source media="(min-width: 376px) and (max-width: 767px)"
                                                            srcset="<?php echo $art->image;?> ">
                                                    <source media="(min-width: 768px) and (max-width: 1023px)"
                                                            srcset="<?php echo $art->image;?> ">
                                                    <source media="(min-width: 1024px) and (max-width: 1199px)"
                                                            srcset="<?php echo $art->image;?> ">
                                                    <source media="(min-width: 1200px)"
                                                            srcset="<?php echo $art->image;?> ">
                                                    <img src="<?php echo $art->image;?> "
                                                         title="<?php echo $art->title;?> "
                                                         alt="<?php echo $art->title;?> ">
                                                </picture>
                                                <div class="hover_collection"></div>
                                            </a>

                                        </div>
                                        <div class="content-right-blog">
                                            <div class="content_day_blog">
                                                <span class="fix_left_blog">
                                                    <!--<i class="fa fa-calendar-o"></i>-->
                                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar-alt" role="img"
                                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                                         class="svg-inline--fa fa-calendar-alt fa-w-14 fa-3x"><path fill="currentColor"
                                                                                                                    d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                                                                                                                    class=""></path></svg>
                                                    <span><?php echo rebuild_date('l',strtotime($art->date_create)); ?>,</span>
                                                <span class="news_home_content_short_time">
                                                   <?php echo date('d/m/Y',strtotime($art->date_create)); ?>
                                                </span>
                                                </span>
                                            </div>
                                            <div class="title_blog_home">
                                                <h3>
                                                    <a href="<?php echo base_url().$art->alias; ?>"
                                                       title="<?php echo show_meta($art);?>"><?php echo $art->title; ?></a>
                                                </h3>
                                            </div>
                                            <p class=" text2line blog-item-summary"> <?php echo character_limiter(strip_tags($art->introtext)); ?></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php } ?>
                    </div>
                    <script>
                        $(document).ready(function () {
                            $(".wrap-blog-slider").owlCarousel({
                                loop: true,
                                nav: false,
                                navText: '',
                                dots: false,
                                equalize: true,
                                margin: 40,
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