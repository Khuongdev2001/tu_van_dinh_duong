<?php if (!empty($cate)) { ?>
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
                background: url("<?php echo base_url().$cate->banner; ?>") no-repeat center center;
            }
        </style>
        <div class="container">
            <div class="content-text">
                <?php if (!empty($article)) {
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

                <?php } ?>

            </div>
            <?php if (!empty($service)) {
                $i = 1; ?>
                <div class="home-pro">

                    <div class="row-top">
                        <div class="row format-margin">
                            <?php foreach ($service as $sv) { ?>
                                <div class="col-sm-3 format-padding">
                                    <p class="sv-num"><?php echo $i; ?></p>
                                    <div class="sv-bg-num">
                                        <div class="sv-bg-num1">

                                        </div>
                                    </div>
                                    <div class="sv-text"
                                         style="background: url('<?php echo base_url() . $sv->icon; ?>') no-repeat">
                                        <?php echo $sv->title; ?>
                                    </div>
                                </div>
                                <?php $i++;
                            } ?>
                        </div>
                    </div>
                    <div class="panel-course">
                        <div class="box-regis-course">
                            <span class="box-tam-giac"></span>
                            <div class="row ">
                                <div class="col-sm-15 ">
                                    <div class="box-off-course">
                                        <img src="<?php echo base_url(); ?>skin/frontend/images/note.png"
                                             alt="Đăng ký khóa học">
                                    </div>
                                </div>
                                <div class="col-sm-85">
                                    <div class="panel-text-course">
                                        Khi bạn để lại thông tin liên lạc, Violetpham English sẽ liên lạc lại cho bạn
                                        ngay sau đó và tư vấn hoàn toàn miễn phí, để có thể giúp bạn đánh giá 1 cách
                                        chuẩn xác nhất về trình độ Tiếng Anh hiện tại của bạn.
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-8">
                                            <p class="p-text-course"><span>ĐĂNG KÝ NHẬN</span> <strong>TƯ VẤN VÀ KIỂM
                                                    TRA TRÌNH ĐỘ MIỄN PHÍ</strong></p>
                                        </div>
                                        <div class="col-sm-4">
                                            <button class="btn-dk" data-toggle="modal" data-target="#my-contact"><i class="fa fa-angle-double-right"></i> ĐĂNG KÝ <i
                                                        class="fa fa-angle-double-left"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <?php } ?>
        </div>
    </div>
<?php } ?>