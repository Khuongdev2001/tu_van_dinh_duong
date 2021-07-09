<?php if (!empty($cate)) { ?>
    <div class="body-content body-about">
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
            <link href="<?php echo base_url();?>skin/frontend/css/magnific-popup.css" rel="stylesheet"/>
            <script src="<?php echo base_url();?>skin/frontend/js/jquery.magnific-popup.min.js" ></script>
            <div class="content-text" id="pictures">
                <?php if (!empty($article)) {
                    $i = 1; ?>
                    <?php foreach ($article as $art) {
                        $i++; ?>
                        <?php if (!empty($art->img)) {
                            $gallery = json_decode($art->img); ?>
                            <?php if ($i % 2 == 0) { ?>
                                <div class="row-picture">
                                    <div class="row row-5">
                                        <div class="col-sm-55 padding-5">
                                            <div class="box-images">
                                                <img href="<?php echo $gallery[0];?>" src="<?php echo $gallery[0]; ?>" alt="">

                                            </div>
                                            <?php unset($gallery[0]); ?>
                                        </div>
                                        <?php if (!empty($gallery)) { ?>
                                            <div class="col-sm-45 padding-5">
                                                <div class="list-gallery">
                                                    <div class="row row-5">
                                                        <?php foreach ($gallery as $item) { ?>
                                                            <div class="col-sm-6 padding-5">
                                                                <div class="box-images">
                                                                    <img href="<?php echo $item;?>" src="<?php echo $item; ?>" alt="">

                                                                </div>

                                                            </div>
                                                        <?php } ?>
                                                    </div>
                                                </div>
                                            </div>
                                        <?php } ?>
                                    </div>
                                </div>
                            <?php } else { ?>
                                <div class="row-picture">
                                    <div class="row row-5">
                                        <?php if (!empty($gallery)) {
                                            $gall = $gallery[0];
                                            unset($gallery[0]); ?>
                                            <?php if (!empty($gallery)) { ?>
                                                <div class="col-sm-45 padding-5">
                                                    <div class="list-gallery">
                                                        <div class="row row-5">
                                                            <?php foreach ($gallery as $item) { ?>
                                                                <div class="col-sm-6 padding-5">
                                                                    <div class="box-images">
                                                                        <img href="<?php echo $item;?>" src="<?php echo $item; ?>" alt="">

                                                                    </div>
                                                                </div>
                                                                <?php
                                                            } ?>
                                                        </div>
                                                    </div>
                                                </div>
                                            <?php } ?>
                                            <?php if (!empty($gall)) { ?>
                                                <div class="col-sm-55 padding-5">
                                                    <div class="box-images">
                                                        <img href="<?php echo $gall;?>" src="<?php echo $gall; ?>" alt="">

                                                    </div>
                                                </div>
                                            <?php } ?>
                                        <?php } ?>


                                    </div>
                                </div>
                            <?php } ?>

                        <?php } ?>
                    <?php } ?>
                    <div class="id-pagination">
                        <div class="row">
                            <div class="col-sm-12">
                                <div id="paging">
                                    <div class="auto pagination"><?php echo $this->pagination->create_links(); ?></div>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php } ?>
            </div>
            <script type="text/javascript">
                $(document).ready(function() {
                    $('#pictures').magnificPopup({
                        delegate: 'img',
                        type: 'image',
                        tLoading: 'Loading image #%curr%...',
                        mainClass: 'mfp-with-zoom',
                        gallery: {
                            enabled: true,
                            navigateByImgClick: true,
                            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                        },
                        image: {
                            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                            titleSrc: function (item) {
                                return item.el.attr('title') + '<small></small>';
                            }
                        }
                    });

                });
            </script>
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