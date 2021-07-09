<?php if (!empty($cate) && !empty($article)) { ?>
    <div class="breadcrumb">
        <div class="container">

                <ul>
                    <li><a href="<?php echo base_url(); ?>">Trang chủ</a></li>
                    <?php if (!empty($arr_cate)) {
                        foreach ($arr_cate as $cat) {
                            ?>
                            <li class="<?php if ($cat->id == $cate->id) {
                                echo 'active';
                            } ?>">
                                <a href="<?php echo base_url() . $cat->alias.'.html'; ?>"
                                   title="<?php echo show_meta($cat); ?>">
                                    <?php echo $cat->title; ?>
                                </a>
                            </li>
                        <?php }
                    } ?>
                </ul>

        </div>
    </div>
    <section class="sec-light-content text-light" style="padding: 10px 0;<?php if(!empty($cate->banner)) {?> background: url('<?php echo $cate->banner; ?>') top center/cover no-repeat<?php }?>" >
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <div class="content">
                        <?php echo $cate->introtext; ?>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="wrap-img">
                        <img class="img-responsive"
                             src="<?php echo $cate->image; ?>"
                             alt=""></div>
                </div>
            </div>
        </div>
    </section>
    <section class="sec-about">
        <div class="container">
            <div class="title-block text-center">
                <h3 class="text-uppercase"><?php echo $cate->title; ?></h3>
                <div class="divi"><span></span></div>
                <div><?php echo $cate->content_text; ?></div>
            </div>
        </div>
    </section>
    <section class="sec-blog-relative bog-cus">
        <div class="container">
            <div class="content">
                <div class="row">
                    <?php
                    $i = 0;
                    foreach ($article as $art) { ?>
                        <div class="article-item article-cus <?php if ($i < 2) {
                            echo 'col-sm-6';
                        } else {
                            echo 'col-sm-4 ';
                        } ?>">
                            <div class="wrap-img wrap-img-event" data-mh="post-photo" ><a
                                        href="<?php echo base_url($art->alias.'.html'); ?>"><img
                                            class="article-photo img-responsive"
                                            src="<?php echo $art->image; ?>"></a>
                            </div>
                            <div class="article-content">
                                <div class="post-time"><span><?php echo $art->hoten; ?></span></div>
                                <div class="post-title" data-mh="post-title" style="min-height: 72px;">
                                    <h3 class="post-font"><?php echo $art->title; ?></h3>
                                </div>
                                <p class="post-ceo" data-mh="post-content" style="height: 22px;"><?php echo $art->ceo; ?></p>
                                <a href="<?php echo base_url($art->alias.'.html'); ?>" class="cta-arrow">Đọc thêm</a>
                            </div>
                        </div>
                        <?php $i++;
                    } ?>
                </div>
            </div>
            <div class="pager-container">
                <?php echo $this->pagination->create_links(); ?>
            </div>
        </div>
    </section>
<?php } ?>