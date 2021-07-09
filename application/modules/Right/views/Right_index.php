<div class="col-sm-4">
    <?php if (!empty($video)) { ?>
        <div class="home-video">
            <div id="owl-video" class="owl-carousel owl-theme">
                <?php foreach ($video as $sl) { ?>
                    <div class="item-video" data-merge="<?php echo $sl->id; ?>">
                        <a class="owl-video" href="<?php echo $sl->hyperlink; ?>"></a>
                        <div class="caption-p"><?php echo character_limiter($sl->title, 40); ?></div>
                    </div>
                <?php } ?>
            </div>
            <script>
                $(document).ready(function () {

                    $("#owl-video").owlCarousel({
                        items: 1,
                        merge: true,
                        loop: true,
                        margin: 10,
                        video: true,
                        lazyLoad: true,
                        center: true,
                        videoHeight: 300,
                        videoWidth: '100%',
                        responsive: {
                            480: {
                                items: 1
                            },
                            600: {
                                items: 1
                            }
                        },
                        nav: true,
                        dots: false,
                        navText: ['<i class="fa fa-chevron-circle-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-circle-right" aria-hidden="true"></i>']
                    });
                });
            </script>
        </div>
    <?php } ?>

    <?php if (!empty($views_top)) { ?>
        <div class="box-news-feet">
            <p class="cat-name">
                <a>News top</a>
            </p>
            <div class="box-news-content">
                <ul>
                    <?php foreach ($views_top as $art) { ?>
                        <li>
                            <div class="row row-5">
                                <div class="col-4 padding-5">
                                    <a href="<?php echo base_url() . $art->alias; ?>">
                                        <img src="<?php echo $art->image; ?>" alt="">
                                    </a>
                                </div>
                                <div class="col-8 padding-5">
                                    <a href="<?php echo base_url() . $art->alias; ?>">
                                        <?php echo $art->title; ?>
                                    </a>
                                </div>
                            </div>
                        </li>
                    <?php } ?>
                </ul>
            </div>
        </div>
    <?php } ?>
    <div class="box-news-feet">
        <p class="cat-name">
            <a>Follow us </a>
        </p>
        <div class="box-news-content">
            <div class="fb-page" data-href="<?php echo $GLOBALS['sett']->facebook; ?>" data-tabs="timeline"
                 data-height="400" data-small-header="false" data-adapt-container-width="true"
                 data-hide-cover="false" data-show-facepile="true">
                <blockquote cite="<?php echo $GLOBALS['sett']->facebook; ?>" class="fb-xfbml-parse-ignore"><a
                            href="<?php echo $GLOBALS['sett']->facebook; ?>"><?php echo $GLOBALS['sett']->title; ?></a>
                </blockquote>
            </div>
        </div>
    </div>
</div>