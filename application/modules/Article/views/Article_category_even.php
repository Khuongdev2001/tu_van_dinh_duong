<?php if (!empty($cate) && !empty($article)) {
    echo Modules::run('Slide/Module_slide/index');
    ?>

    <section class="sec-event event-list">
        <div class="container">
            <div class="title-block"><h3 class="text-uppercase">Sự Kiện Nổi Bật</h3></div>
            <div class="content">
                <div class="row">
                    <div class="col-sm-12 col-lg-8">
                        <?php if (!empty($event_time)) { ?>
                            <div class="wrap-event">
                                <?php foreach ($event_time as $obj) { ?>
                                    <div class="event-item">
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <div class="wrap-event-date">
                                                    <span class="event-day"><?php echo date('d', strtotime($obj->day_start)); ?></span>
                                                    <span class="event-date">
                                                        <span><?php echo rebuild_date('F', strtotime($obj->day_start)); ?></span>
                                                        <span><?php echo rebuild_date('l', strtotime($obj->day_start)); ?></span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="wrap-img-event"><img class="article-photo"
                                                                                 src="<?php echo $obj->image; ?>">
                                                </div>
                                                <div class="wrap-content">
                                                    <p><?php echo $obj->title; ?></p>
                                                    <p></p>
                                                    <p><?php echo $obj->excerpt; ?></p>
                                                </div>
                                            </div>
                                            <div class="col-sm-3"><a  data-toggle="modal" data-target="#v3-modal"
                                                        href="<?php echo $obj->hyperlink; ?>"
                                                        class="cta-arrow cta-border">Xem chi tiết</a></div>
                                        </div>
                                    </div>
                                <?php } ?>
                            </div>
                        <?php } ?>
                    </div>
                    <div class="col-sm-12 col-lg-4 wrap-event-post d-none d-lg-block">
                        <link href="<?php echo base_url(); ?>skin/frontend/css/bootstrap-datepicker.min.css?v=<?php echo time(); ?>"
                              rel="stylesheet"/>
                        <script src="<?php echo base_url(); ?>skin/frontend/js/bootstrap-datepicker.min.js?v=<?php echo time(); ?>"></script>
                        <div style="overflow:hidden; padding: 10px;background-color: #fff;">
                            <div id="datetimepicker12"></div>
                        </div>

                        <script>
                            $(document).ready(function () {
                                $('#datetimepicker12').datepicker({
                                    language: "vi",
                                    todayHighlight: true
                                });
                            })
                        </script>
                        <style>
                            .datepicker-inline {
                                width: 100%;
                            }

                            .datepicker-inline table {
                                width: 100%;
                            }

                            .datepicker td, .datepicker th {
                                height: 30px;
                                width: 30px;
                            }

                            .datepicker table tr td.today.active{
                                background-color: #b49648;
                                color: #fff;
                                text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
                            }
                        </style>
                    </div>
                </div>
            </div>
            <div class="title-block"><h3 class="text-uppercase">Tin tức</h3>
                <p><br></p>
                <div class="content">
                    <div class="row">
                        <?php foreach ($article as $art) { ?>
                            <div class="col-sm-4" data-mh="article-item">
                                <div class="article-item"><a
                                            href="<?php echo base_url($art->alias.'.html'); ?>">
                                        <div class="wrap-img wrap-image" data-mh="post-event-photo" ><img
                                                    class="article-photo"
                                                    src="<?php echo $art->image; ?>">
                                        </div>
                                        <div class="article-content">
                                            <div class="post-time">
                                                <span> <?php echo date('d-m-Y', strtotime($art->date_create)); ?> </span>
                                            </div>
                                            <div class="post-title" data-mh="post-event-title" style="height: 69px;">
                                                <h3>
                                                    <?php echo $art->title; ?></h3></div>
                                        </div>
                                    </a><a href="<?php echo base_url($art->alias.'.html'); ?>"
                                           class="cta-arrow cta-dark">Đọc thêm</a></div>
                            </div>
                        <?php } ?>
                    </div>
                </div>
                <div class="pager-container">
                    <?php echo $this->pagination->create_links(); ?>
                </div>
            </div>
        </div>
    </section>
<?php } ?>
<?php echo Modules::run('Content/Content/get_modal'); ?>
