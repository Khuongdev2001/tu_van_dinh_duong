<?php
$title = 'title' . $rear;
$excerpt = 'excerpt' . $rear;
$fulltext = 'fulltext' . $rear;
?>
<!--<div class="banner-category">-->
<!--    <img src="--><?php //echo $sett->banner; ?><!--"/>-->
<!--</div>-->
<div class="thanhke ">
    <div class="container">
        <h1 class="categories-name text-center"><b>Video</b></h1>
    </div>
</div>
<div class="content">
    <div class="container container-white">
        <div class="module-product">
            <p class="bruc-menu" style="margin-left: 15px;">
                <a href="<?php echo base_url(); ?>"><?php if ($rear == '_en') {
                        echo 'Home';
                    } else {
                        echo 'Trang Chủ';
                    } ?></a>
                <?php
                echo '<a href="' . base_url() . 'video" title="video"> >> Video </a>';
                ?>
            </p>
            <div class="row">
                <div class="col-md-9">
                    <?php if (!empty($video_stick)) { ?>
                        <div class="youtube-frame">
                            <iframe width="100%" height="415" src="<?php echo $video_stick->hyperlink; ?>"
                                    frameborder="0" allowfullscreen></iframe>
                        </div>
                    <?php } ?>
                    <?php if (!empty($video)) { ?>
                        <div class="row">
                            <?php foreach ($video as $pro) { ?>
                                <div class="col-sm-4 design-inner video-inner">
                                <?php if (!empty($video_stick) && $video_stick->id == $pro->id) {?><span class="playing"><?php
                                        if ($rear == '_en') {
                                            echo 'Playing...';
                                        } else {
                                            echo 'Đang chạy...';
                                        }
                                     ?></span><?php } ?>
                                    <p>
                                        <a href="<?php echo base_url() . 'video?id=' . $pro->id; ?>"
                                           title="<?php echo show_meta($pro); ?>">
                                            <img src="<?php echo $pro->image; ?>"
                                                 alt="<?php echo $pro->title; ?>">
                                        </a>
                                    </p>
                                    <h3 class="design-name">
                                        <a href="<?php echo base_url() . 'video?id=' . $pro->id; ?>"
                                           title="<?php echo $pro->title; ?>">
                                            <?php echo $pro->$title; ?>
                                        </a>
                                    </h3>
                                </div>
                            <?php } ?>
                        </div>
                    <?php } ?>
                </div>
                <?php echo Modules::run('Right/Module_right/right_video',$video_stick); ?>
            </div>
            <div class="row">
                <?php echo Modules::run('Ads/Module_ads/index'); ?>
            </div>
        </div>
    </div>
</div>
