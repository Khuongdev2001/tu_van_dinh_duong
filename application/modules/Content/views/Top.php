<?php if (!empty($article)) {
    if ($type == 1) {
        $all_chunk = array_chunk($article, 2);
        foreach ($all_chunk as $chunk) {
            ?>
            <div class="row">
                <?php foreach ($chunk as $art) { ?>
                    <div class="col-lg-6 td_block">
                        <div class="td_img">
                            <a href="<?php echo base_url() . $cate_block[$art->category]->alias; ?>"
                               class="link_cate"><?php echo $cate_block[$art->category]->title; ?></a>
                            <a href="<?php echo base_url() . $art->alias; ?>"
                               title="<?php echo show_meta($art); ?>"><img
                                    src="<?php echo $art->image; ?>"
                                    alt=""></a>
                        </div>
                        <h3>
                            <a href="<?php echo base_url() . $art->alias; ?>"
                               title="<?php echo show_meta($art); ?>">
                                <?php echo character_limiter($art->title, 150); ?>
                            </a>
                        </h3>
                    </div>
                <?php } ?>
            </div>
        <?php }
    }else if($type==2){ ?>
        <?php foreach ($article as $art) { ?>
            <div class="row td_block2">
                <div class="col-md-4 td_img2">
                    <a href="<?php echo base_url() . $art->alias; ?>"
                       title="<?php echo show_meta($art); ?>"><img
                            src="<?php echo $art->image; ?>"
                            alt="<?php echo show_meta($art); ?>"></a>
                </div>
                <div class="col-md-8">
                    <h3>
                        <a href="<?php echo base_url() . $art->alias; ?>"
                           title="<?php echo show_meta($art); ?>">
                            <?php echo $art->title; ?>
                        </a>
                    </h3>
                    <div class="items-excerpt">
                        <?php echo strip_tags($art->excerpt);?>
                    </div>
                </div>
            </div>
        <?php } ?>
    <?php }else if($type==3){ ?>
        <?php foreach ($article as $art) { ?>
            <div class="item_post">
                <div class="td_img3">
                    <a href="<?php echo base_url() . $art->alias; ?>"
                       title="<?php echo show_meta($art); ?>">
                        <img src="<?php echo $art->image; ?>"
                             alt="<?php echo show_meta($art); ?>">
                    </a>
                </div>
                <p class="td_name_3"><a href="<?php echo base_url() . $art->alias; ?>"
                                        title="<?php echo show_meta($art); ?>"><?php echo $art->title; ?></a>
                </p>
            </div>
        <?php } ?>
    <?php }
} ?>