<?php if (!empty($cate)) {
    $actual_link = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    ?>
    <div class="body-content">
        <div class="main-breadcrumb" style="margin-left: 0">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a
                                href="<?php echo base_url(); ?>">Trang chủ</a></li>
                    <?php if (!empty($arr_cate)) {
                        foreach ($arr_cate as $cat) {
                            ?>
                            <li class="breadcrumb-item">
                                <a href="<?php if(!empty($cat->hyperlink)){echo $cat->hyperlink;}else{ echo base_url() . $cat->alias.'.html';}
                                ?>"
                                   title="<?php echo show_meta($cat); ?>">
                                    <i class="fa fa-angle-double-right"></i> <?php echo $cat->title; ?>
                                </a>
                            </li>
                        <?php }
                    } ?>
                </ol>
            </div>
        </div>
        <div class="banner-cate">
            <div class="container">
                <div class="banner-cate-in">
                    <div class="row">
                        <div class="col-sm-4">
                            <img src="<?php echo $cate->image; ?>" alt="">
                        </div>
                        <div class="col-sm-8">
                            <div class="cate-intro">
                                <p class="cate-title-other"><span><?php echo $cate->color; ?></span></p>
                                <?php echo $cate->introtext; ?>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <style>
            .banner-cate {
                background: url("<?php echo base_url().$cate->banner; ?>") no-repeat center center ;
            }
        </style>
        <div class="container">
            <div class="content-text">
                <?php if (!empty($art)) { ?>
                    <div class="list-views-video">
                        <div class="row">
                            <div class="col-sm-8">
                                <div class="big-video">
                                    <?php if (!empty($art)) { ?>
                                        <script src="<?php echo base_url(); ?>skin/frontend/js/highlight.min.js"></script>
                                        <script src="https://www.youtube.com/iframe_api"></script>
                                        <div id="video-placeholder"></div>
                                        <script>
                                            var player,
                                                time_update_interval = 0;

                                            function onYouTubeIframeAPIReady() {
                                                player = new YT.Player('video-placeholder', {
                                                    width: '100%',
                                                    height: 400,
                                                    videoId: '<?php echo $art->hyperlink;?>',
                                                    playerVars: {
                                                        color: 'white'
                                                    },
                                                    events: {
                                                        onReady: initialize
                                                    }
                                                });
                                            }

                                            function initialize() {
                                                // Update the controls on load
                                                updateTimerDisplay();
                                                // Clear any old interval.
                                                clearInterval(time_update_interval);
                                                // Start interval to update elapsed time display and
                                                // the elapsed part of the progress bar every second.
                                                time_update_interval = setInterval(function () {
                                                    updateTimerDisplay();
                                                }, 1000);
                                                $('#volume-input').val(Math.round(player.getVolume()));
                                            }

                                            // This function is called by initialize()
                                            function updateTimerDisplay() {
                                                // Update current time text display.
                                                $('#current-time').text(formatTime(player.getCurrentTime()));
                                                $('#duration').text(formatTime(player.getDuration()));
                                            }
                                        </script>
                                        <h2 class="video-main-title"><?php echo $art->title; ?></h2>
                                        <div class="row">
                                            <div class="col-6">
                                                <p class="ht-views"><span><?php echo $art->views; ?> lượt xem</span></p>
                                            </div>
                                            <div class="col-6 text-right">
                                                <div class="fb-like" data-href="<?php echo base_url() . $art->alias.'.html'; ?>" data-width="" data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
                                            </div>
                                        </div>

                                    <?php } ?>

                                </div>
                            </div>
                            <?php if (!empty($article)) { ?>
                                <div class="col-sm-4">
                                    <div class="row row-5">
                                        <?php $i = 1;
                                        foreach ($article as $art) {
                                            if ($i > 1 && $i < 4) { ?>
                                                <div class="col-sm-12 padding-5">
                                                    <div class="news-inner inner-video video-inner-list">
                                                        <a href="<?php echo base_url($art->alias.'.html'); ?>"
                                                           title="<?php echo show_meta($art); ?>">
                                                            <img src="<?php echo $art->image; ?>"
                                                                 alt="<?php echo show_meta($art); ?>">
                                                        </a>
                                                        <div class="box-title-video">
                                                            <!--                                                                <p class="date-video">-->
                                                            <?php //echo date('d/m/Y', strtotime($art->date_create)); ?><!--</p>-->
                                                            <h3>

                                                                <a href="<?php echo base_url($art->alias.'.html'); ?>"
                                                                   title="<?php echo show_meta($art); ?>">
                                                                    <?php echo $art->title; ?>
                                                                </a>
                                                            </h3>
                                                        </div>
                                                        <a href="<?php echo base_url($art->alias.'.html'); ?>"
                                                           title="<?php echo show_meta($art); ?>" class="auto-play"></a>
                                                    </div>
                                                </div>
                                            <?php }
                                            $i++;
                                        } ?>

                                    </div>
                                </div>
                            <?php } ?>
                        </div>
                    </div>
                <div class="row">
                    <div class="col-12">
                            <div class="fb-comments" data-href="<?php echo current_url(); ?>" data-numposts="5"></div>
                    </div>
                </div>

                    <?php if (!empty($article)) { ?>
                        <?php
                            $arr_trunk = array_chunk($article, 3);
                            ?>
                            <div class="list-views-video">
                                <?php foreach ($arr_trunk as $arts) { ?>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="news-inner inner-video video-list">
                                                <a href="<?php echo base_url() . $arts[0]->alias.'.html'; ?>">
                                                    <img src="<?php echo $arts[0]->image; ?>"
                                                         alt="<?php echo show_meta($arts[0]) ?>">
                                                </a>
                                                <a class="auto-play"
                                                   href="<?php echo base_url() . $arts[0]->alias.'.html'; ?>"></a>
                                                <h3 class="big-video-title"><a
                                                            href="<?php echo base_url() . $arts[0]->alias.'.html'; ?>"><?php echo $arts[0]->title; ?></a>
                                                </h3>
                                                <div class="row">
                                                    <div class="col-6">
                                                        <p class="ht-views"><span><?php echo $arts[0]->views; ?> lượt xem</span></p>
                                                    </div>
                                                    <div class="col-6 text-right">
                                                        <div class="fb-like" data-href="<?php echo base_url() . $arts[0]->alias.'.html'; ?>" data-width="" data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <?php unset($arts[0]); ?>
                                        </div>
                                        <?php if (!empty($arts)) { ?>
                                            <div class="col-sm-6">
                                                <?php foreach ($arts as $art) { ?>
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <div class="news-inner inner-video video-inner-list">
                                                                <img class="thumbnail" src="<?php echo $art->image; ?>"
                                                                     alt="<?php echo show_meta($art); ?>">
                                                                <a class="auto-play"
                                                                   href="<?php echo base_url() . $art->alias.'.html'; ?>"></a>

                                                            </div>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <h3 class="video-title"><a
                                                                        href="<?php echo base_url() . $art->alias.'.html'; ?>"><?php echo $art->title; ?></a>
                                                            </h3>
                                                            <p class="ht-views"><span><?php echo $art->views; ?> lượt xem</span></p>
                                                            <div class="fb-like" data-href="<?php echo base_url() . $art->alias.'.html'; ?>"
                                                                 data-width="" data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
                                                        </div>
                                                    </div>
                                                <?php } ?>
                                            </div>
                                        <?php } ?>
                                    </div>
                                <?php } ?>
                            </div>
                            <div class="id-pagination">
                                <div class="row row-5">
                                    <div class="col-sm-12 padding-5">
                                        <div id="paging">
                                            <div class="auto pagination"><?php echo $this->pagination->create_links(); ?></div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                    <?php }
                } ?>
            </div>
        </div>
    </div>
<?php } ?>